import fetch from 'node-fetch';

const handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example*: ${command} https://www.instagram.com/p/ABC123/`;
  conn.sendMessage(m.chat, { react: { text: 'ð', key: m.key }});
  let kemii = await fetch(`https://skizo.tech/api/igdl?url=${text}&apikey=${global.xzn}`);
  let res = await kemii.json();
  let start = new Date();
  await conn.sendMessage(m.chat, { react: { text: "âï¸", key: m.key } });
  conn.sendFile(m.chat, res.media, 'instagram.mp4', '```Success...\nDont forget to donate```', m);
};

handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;
handler.limit = true 
export default handler;