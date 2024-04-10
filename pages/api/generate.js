import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (ensure it's set up in your Next.js environment configuration)
const apiKey = process.env.NEXT_PUBLIC_YOUR_API_KEY // Make sure to set up API_KEY environment variable
const genAI = new GoogleGenerativeAI(apiKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text); // Log the generated text to the console

    return res.status(200).json({ generatedText: text });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: 'Failed to generate content' });
  }
}
