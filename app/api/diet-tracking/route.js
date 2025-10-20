import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, gender, weight, height, meals, goal, activityLevel } =
      body;

    // ✅ Validate input
    if (!age || !weight || !height || !meals || meals.length === 0) {
      return NextResponse.json(
        {
          error:
            'Please provide complete details: age, weight, height, and meals.',
        },
        { status: 400 }
      );
    }

    // 🧠 AI Prompt
    const prompt = `
You are a certified clinical dietitian and AI health coach. 
Analyze this user's daily diet and provide feedback.

**User Profile**
- Name: ${name || 'Anonymous'}
- Age: ${age}
- Gender: ${gender}
- Weight: ${weight} kg
- Height: ${height} cm
- Goal: ${goal || 'General wellness'}
- Activity Level: ${activityLevel || 'Moderate'}

**Meals Consumed:**
${meals.map((m, i) => `Meal ${i + 1}: ${m}`).join('\n')}

**Please provide:**
1. Estimated total daily calories consumed
2. Macronutrient breakdown (Protein, Carbs, Fat)
3. Nutritional deficiencies or excesses
4. Suggestions to improve diet balance
5. A revised meal plan for tomorrow
    `;

    // ⚙️ Gemini API call
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    const analysis =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      '⚠️ No analysis generated. Please try again.';

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Gemini Diet API Error:', error);
    return NextResponse.json(
      { error: 'Server error while analyzing diet.' },
      { status: 500 }
    );
  }
}
