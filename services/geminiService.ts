import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ExtractedCriteria {
  role?: string;
  location?: string;
  keywords: string[];
  reasoning: string;
}

/**
 * Parses a natural language query into structured search criteria using Gemini.
 */
export const parseSearchQuery = async (query: string): Promise<ExtractedCriteria> => {
  if (!query) return { keywords: [], reasoning: "No query provided." };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User Query: "${query}"
      
      Extract the following information to help filter a database of creative talent (Models, Photographers, Stylists, etc.):
      1. Role (e.g., Model, Photographer). If not specified, infer from context or leave null.
      2. Location (City or Region).
      3. Keywords (Attributes like 'redhead', 'tall', 'fashion', 'streetwear', 'vintage').
      4. Reasoning (Short explanation of why you chose these filters).
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING, nullable: true },
            location: { type: Type.STRING, nullable: true },
            keywords: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            reasoning: { type: Type.STRING }
          },
          required: ["keywords", "reasoning"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as ExtractedCriteria;
  } catch (error) {
    console.error("Gemini Search Error:", error);
    // Fallback if AI fails
    return {
      keywords: query.split(" "),
      reasoning: "AI service unavailable, using raw keywords."
    };
  }
};

/**
 * Generates a creative casting call description based on a short input.
 */
export const generateCastingCall = async (brief: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a professional, exciting, and short casting call description (max 100 words) for the following requirement: "${brief}". Include emojis.`,
    });
    return response.text || "Could not generate description.";
  } catch (error) {
    return "Join our latest project! We are looking for unique talent to bring our vision to life.";
  }
};