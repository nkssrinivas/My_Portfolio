
import { GoogleGenAI } from "@google/genai";

// Ensure the API_KEY is available in the environment variables.
// The app's build/runtime environment must provide this.
const apiKey = process.env.API_KEY;

if (!apiKey) {
    console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const getFunFact = async (): Promise<string> => {
    if (!apiKey) {
        return "Gemini API key is missing. Please configure it to enable this feature.";
    }
    try {
        const prompt = "Tell me a surprising and fun fact about the history of frontend web development in one short sentence.";

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                // To keep it snappy for a fun fact
                thinkingConfig: { thinkingBudget: 0 }
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("Error fetching fun fact from Gemini API:", error);
        return "Could not fetch a fun fact at the moment. Please try again later.";
    }
};
