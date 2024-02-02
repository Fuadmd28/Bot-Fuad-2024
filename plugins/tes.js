import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, usedPrefix, command }) => { 
    if (!args[0]) throw `ð© *Example:* ${usedPrefix + command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`;
    
    await conn.sendMessage(m.chat, { react: { text: "â³", key: m.key } });
    
    let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/instagram?apikey=YT:LORENZOBOTMD&url=${args[0]}`);
    let data = await res.json();
    let json = data.result;
    
    let cap = `INSTAGRAM\n\nTitle: ${json.title}\n\n${footer}`;
    
    conn.sendMessage(m.chat, { video: { url: json.url }, caption: cap }, { quoted: m });
};

handler.help = ['igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(igdl2|instagram|ig)$/i;
handler.limit = true;

export default handler;