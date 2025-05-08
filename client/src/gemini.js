import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDF9-bQbwT5443Hy9mNv_ekbgPzvSU9B_I");

export async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text(); // Now this will work
}
