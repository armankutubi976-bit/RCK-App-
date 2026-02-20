
import { GoogleGenAI } from "@google/genai";
import { ORG_NAME, ORG_LOCATION, ORG_ESTD, ORG_SLOGAN } from "../constants";

const SYSTEM_PROMPT = `You are the official AI assistant of ${ORG_NAME}. 
Located in: ${ORG_LOCATION}. 
Established in: ${ORG_ESTD}. 
Slogan: ${ORG_SLOGAN}.
Your goal is to help students from Kutubdia with academic advice, information about the association, and motivation. 
Always respond politely in Bengali. If you don't know specific details about internal association policies, tell them to contact the executive committee.
Keep answers concise and helpful.`;

/**
 * Fetches a response from Gemini based on user input and chat history.
 */
export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    // Create a new instance right before the call as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      }
    });
    // Access the .text property directly
    return response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "দুঃখিত, একটি ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।";
  }
};
