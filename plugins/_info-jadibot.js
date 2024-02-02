import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `╭––『 *OPEN JADI BOT* 』
┆➭ 13 Hari : Rp 5,000
┆➭ 1 Bulan : Rp 15,000 ~40,000~
╰–––––––––––––––༓
*_-- Di Tambah Jadi Owner ( Pemilik ) Bot Nya 🥳_*

*_-- Fitur Ada 600 Ke atas lumayan lah, ada game werewolf juga menu store buat anak JB Pun Ada Ya😎_*

*_Payment_*
Qris - Dana 
Ovo - Gopay
Shopepay - Pulsa

*Garansi 7 Hari*

*_Contoh Tampilan Bot Nya V1_*
https://wa.me/p/6928827843882866/6282147781510

*V2*
https://wa.me/p/7052463714831297/6282147781510

*_TESTIMONI_*
https://wa.me/p/6331501620289183/6282147781510

*_Minat Hubungi_*
wa.me/6282147781510
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ee934f4ae4fd6e161fa2e.jpg' }, caption: rules }, m)
}
handler.help = ['jadibot']
handler.tags = ['vynaamenu']
handler.command = /^(jadibot)$/i;

export default handler;