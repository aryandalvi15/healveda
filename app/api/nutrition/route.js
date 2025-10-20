import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      age,
      weight,
      height,
      gender,
      activityLevel,
      goal,
      dietaryPreferences,
    } = body;

    // ✅ Validate required fields
    if (!age || !weight || !height || !gender) {
      return NextResponse.json(
        { error: 'Missing required fields: age, weight, height, gender.' },
        { status: 400 }
      );
    }

    // 🧠 Create the AI prompt
    const prompt = `
You are a professional clinical nutritionist. Based on this user profile, provide a detailed nutrition analysis.

**User Profile**
- Name: ${name || 'Anonymous'}
- Age: ${age}
- Gender: ${gender}
- Weight: ${weight} kg
- Height: ${height} cm
- Activity Level: ${activityLevel}
- Goal: ${goal}
- Dietary Preferences: ${dietaryPreferences || 'None'}

**Please provide:**
1. Estimated daily caloric needs (in kcal)
2. Ideal macronutrient distribution (Protein/Carbs/Fats)
3. Balanced meal plan (Breakfast, Lunch, Dinner)
4. 3 sample meals matching preferences
5. Professional dietary advice (concise bullet points)
    `;

    // ⚙️ Validate API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error('❌ GEMINI_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'API configuration error. GEMINI_API_KEY is missing.' },
        { status: 500 }
      );
    }

    // Try different model names
    const modelNames = [
      'gemini-2.5-pro',
      'gemini-2.0-flash-exp',
      'gemini-1.5-pro',
      'gemini-pro',
    ];

    let apiResponse;
    let lastError;

    for (const model of modelNames) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
      console.log(`🔄 Trying model: ${model}`);

      try {
        apiResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
          }),
        });

        if (apiResponse.ok) {
          console.log(`✅ Model ${model} works!`);
          break;
        } else {
          const errorData = await apiResponse.json();
          lastError = errorData.error?.message;
          console.log(`❌ Model ${model} failed:`, lastError);
        }
      } catch (fetchError) {
        console.error(`❌ Network error on ${model}:`, fetchError.message);
        lastError = fetchError.message;
      }
    }

    if (!apiResponse) {
      console.error('❌ No API response received');
      return NextResponse.json(
        { error: 'No models available or network error' },
        { status: 500 }
      );
    }

    if (!apiResponse.ok) {
      console.error('❌ All models failed. Last error:', lastError);
      return NextResponse.json(
        { error: `All models failed: ${lastError}` },
        { status: 500 }
      );
    }

    // 🧾 Parse API response safely
    const rawText = await apiResponse.text();
    console.log('🔍 Response status:', apiResponse.status);
    console.log(
      '🔍 Response headers:',
      Object.fromEntries(apiResponse.headers)
    );
    console.log('🔍 First 500 chars of response:', rawText.substring(0, 500));

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (err) {
      console.error(
        '❌ Could not parse JSON. Response starts with:',
        rawText.substring(0, 100)
      );
      return NextResponse.json(
        {
          error: 'Invalid response from AI service. Check server logs.',
          details: rawText.substring(0, 200),
        },
        { status: 500 }
      );
    }

    // Check for API errors
    if (data?.error) {
      console.error('❌ Gemini API Error:', data.error);
      return NextResponse.json(
        { error: data.error.message || 'AI service error.' },
        { status: 500 }
      );
    }

    const analysis =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      '⚠️ No analysis generated. Please try again.';

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Server error while processing request.' },
      { status: 500 }
    );
  }
}
