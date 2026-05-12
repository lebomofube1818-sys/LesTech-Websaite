import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export interface Persona {
  name: string;
  role: string;
  painPoints: string[];
  goals: string[];
  marketingStrategy: string;
}

export const generatePersonas = async (businessDescription: string): Promise<Persona[]> => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set");
  }

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate 3 ideal customer personas (ICP) for the following business: ${businessDescription}. 
    Provide them in a structured JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            role: { type: Type.STRING },
            painPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
            goals: { type: Type.ARRAY, items: { type: Type.STRING } },
            marketingStrategy: { type: Type.STRING },
          },
          required: ["name", "role", "painPoints", "goals", "marketingStrategy"],
        },
      },
    },
  });

  return JSON.parse(response.text || '[]');
};

export const generateCopy = async (section: string, businessData: string): Promise<string> => {
   const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a high-conversion copywriter for a digital marketing agency.
    Write compelling copy for the ${section} section of a website for: ${businessData}.
    Tone: Professional, energetic, ROI-focussed.`,
  });
  return response.text || '';
};
