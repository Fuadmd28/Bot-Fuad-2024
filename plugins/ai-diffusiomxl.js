import {
    HuggingFaceBuffer
} from '../scraper/huggingface.js';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply("Masukkan pesan! gunakan dengan bahasa inggris")
    await m.reply(wait)
    try {
        const MODEL = 'stabilityai/stable-diffusion-xl-base-1.0';
        const openAIResponse = await HuggingFaceBuffer(MODEL, encodeURIComponent(text));

        if (openAIResponse) {
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
      image: openAIResponse,
      caption: `Nih effect *${MODEL}* nya\nRequest by: ${tag}`,
      mentions: [m.sender]
    }, {
      quoted: m
    });
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        await m.reply(eror);
    }
}
handler.help = ["diffusionxl"]
handler.tags = ["ai"]
handler.command = /^diffusionxl$/i
handler.register = true
handler.limit = 20
export default handler