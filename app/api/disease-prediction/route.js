import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, gender, symptoms, duration, existingConditions } = body;

    if (!symptoms || !age || !gender) {
      return NextResponse.json(
        { error: 'Please provide symptoms, age, and gender.' },
        { status: 400 }
      );
    }

    const prompt = `
You are a licensed clinical diagnostician. Based on the following information, provide a potential disease prediction, risk assessment, and advice.

**Patient Details**
- Name: ${name || 'Anonymous'}
- Age: ${age}
- Gender: ${gender}
- Duration of Symptoms: ${duration || 'Not specified'}
- Existing Conditions: ${existingConditions || 'None'}
- Reported Symptoms: ${symptoms}

**Please provide:**
1. Likely disease(s) or condition(s)
2. Probable causes and risk factors
3. Suggested diagnostic tests
4. Basic self-care and first-aid guidance
5. When immediate medical attention is required
    `;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      '⚠️ No prediction generated. Please try again.';

    return NextResponse.json({ prediction: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
