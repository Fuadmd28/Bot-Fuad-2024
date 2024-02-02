import { googleImage } from '@bochilteam/scraper';

let handler = async (m, { conn }) => {
    setTimeout(async () => {
        let res = await googleImage('meme indonesia');
        let image = res.getRandom();
        await conn.sendFile(m.chat, image, null, 'Asupan Recehnya Kak', m, null);
    }, 5000); // 2000 milliseconds (2 seconds) delay, adjust as needed
};

handler.help = ['meme'];
handler.tags = ['internet'];
handler.command = /^(meme)$/i;
handler.limit = true;
handler.onlyprem = true;

export default handler;