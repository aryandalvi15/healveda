export async function handler(event, context) {
  try {
    const { age, weight, height, gender } = JSON.parse(event.body);

    if (!age || !weight || !height || !gender) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Here you would call your external API (Gemini/OpenAI)
    // For testing, we just return a mock response
    const result = `Mock analysis: Age ${age}, Weight ${weight}kg, Height ${height}cm, Gender ${gender}`;

    return {
      statusCode: 200,
      body: JSON.stringify({ analysis: result }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
