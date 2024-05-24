import OpenAI from "openai";
import {OPENAI_API_KEY, OPENAI_INSTRUCTIONS_SYSTEM} from "./aiconfig.js";

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

export async function callOpenAI(userPrompt) {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: OPENAI_INSTRUCTIONS_SYSTEM,
            },
            {role: "user", content: userPrompt},
        ],
        model: "gpt-3.5-turbo",
        response_format: {type: "json_object"},
    });
    return completion.choices[0].message.content;
}