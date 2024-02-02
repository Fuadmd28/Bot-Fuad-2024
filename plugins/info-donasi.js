import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* 0812-8601-5188
│ • *ɢᴏᴘᴀʏ* "_"
│ • *ᴏᴠᴏ* "_"
╰─────

_terimakasih atas donasinya_
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © Donasi`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/f9cdc9d83a788a0140f3d.jpg`,
      sourceUrl: `"_"`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(donasi)$/i;

export default handler;