import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `
_Untuk Mau Memasukan Bot  Kedalam Group, Kamu Bisa Mensewa Nya Harga Mumer_

╭––『 *SEWA BOT*  』
┆➭ 7 Hari *Rp 3,000*
┆➭ 1 Bulan *Rp 10,000*
┆➭  Permanen *Rp 20,000*
╰–––––––––––––––༓
*_Payment_*
• Qris Allpayment
• Dana
• Ovo
• Gopay
• Shopeepay
• Pulsa

*_Testimoni_*
https://wa.me/p/6331501620289183/6282147781510

*_Minat Hub_*
wa.me/6282147781510
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f9da49558d8aa6ea5031c.jpg' }, caption: rules }, m)
}
handler.help = ['sewa']
handler.tags = ['vynaamenu']
handler.command = /^(sewa|belibot)$/i;

export default handler;
