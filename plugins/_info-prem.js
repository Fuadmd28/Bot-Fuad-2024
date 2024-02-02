import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `
╭––『 *PREMIUM USER*  』
┆➭ Rp 5,000 4 Hari
┆➭ Rp 10,000 8 Hari
┆➭ Rp 20,000 12 Hari
┆➭ Rp 30,000 16 Hari
┆➭ Rp 40,000 20 Hari
┆➭ Rp 50,000 24 Hari
╰–––––––––––––––༓
_Payment_
_QRIS - Dana_
_GOPAY - OVO - PULSA_

_Minat Hub wa.me/6282147781510_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/292355c93464e071fe4c5.jpg' }, caption: rules }, m)
}
handler.help = ['premium']
handler.tags = ['vynaamenu']
handler.command = /^(premium)$/i;

export default handler;