import { GoogleGenAI } from "@google/genai";

const PROMPT = `
Comportate como un médico general
Eres experto en consulta de medicina general
No debes responder nunca sobre otras temáticas

Responde dependiendo los síntomas que se te consulte

Devuelve la respuesta dentro de JSON válido:
No debes responde por fuera del JSON
{
 "sintomas" : "",
 "causas_posibles" : "",
 "diagnostico" : "",
 "recomendaciones" : ""
}

Síntomas: -->
`

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const ai = new GoogleGenAI({
    apiKey: API_KEY
})

export const getConsultation = async (sintomas) => {
    
    const interaction = await ai.interactions.create({
        model: import.meta.env.VITE_GEMINI_MODEL,
        input: `${PROMPT} ${sintomas}`,
    })
    return JSON.parse(interaction.output_text)
}