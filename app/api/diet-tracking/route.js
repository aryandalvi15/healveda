import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, gender, weight, height, goal, activityLevel, meals } =
      body;

    if (!age || !weight || !height || !gender || !meals || meals.length === 0) {
      return NextResponse.json(
        { error: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    // Filter out empty meals
    const filledMeals = meals.filter((m) => m.trim() !== '');
    if (filledMeals.length === 0) {
      return NextResponse.json(
        { error: 'Please enter at least one meal.' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error('❌ GEMINI_API_KEY is missing');
      return NextResponse.json(
        { error: 'API configuration error.' },
        { status: 500 }
      );
    }

    const prompt = `
You are an expert AI dietitian. Analyze this user's daily diet and health habits.

**User Profile:**
- Name: ${name || 'Anonymous'}
- Age: ${age}
- Gender: ${gender}
- Weight: ${weight} kg
- Height: ${height} cm
- Goal: ${goal}
- Activity Level: ${activityLevel}

**Meals Consumed:**
${filledMeals.map((m, i) => `${i + 1}. ${m}`).join('\n')}

**Please provide:**
1. Estimated total daily calorie intake.
2. Macronutrient breakdown (protein, carbs, fats).
3. Missing nutrients or excesses.
4. Health and nutrition advice in 5 bullet points.
5. Revised balanced meal plan for tomorrow.
    `;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error('❌ Gemini API Error:', data);
      return NextResponse.json(
        { error: data.error?.message || 'AI service error' },
        { status: 500 }
      );
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      '⚠️ No analysis generated.';

    return NextResponse.json({ analysis: text });
  } catch (error) {
    console.error('Diet Tracking Error:', error);
    return NextResponse.json(
      { error: 'Server error occurred.' },
      { status: 500 }
    );
  }
}
