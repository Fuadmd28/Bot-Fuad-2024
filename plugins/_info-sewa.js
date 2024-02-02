import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `
_Untuk Mau Memasukan Bot  Kedalam Group, Kamu Bisa Mensewa Nya Harga Mumer_

╭––『 *SEWA BOT*  』
┆➭ 7 Hari *Rp 3,000*
┆➭ 1 Bulan *Rp 10,000*
┆➭  Permanen *Rp 20,000*
╰–––––––––––––––༓
╭––『 *BUY LIMIT*  』
┆➭ 300 LIMIT *Rp 5,000*
┆➭ 600 LIMIT *Rp 10,000*
┆➭ 900 LIMIT *Rp 20,000*
┆➭ 1200 LIMIT *Rp 30,000*
╰–––––––––––––––༓
╭––『 *PREMIUM USER*  』
┆➭ Rp 5,000 4 Hari
┆➭ Rp 10,000 8 Hari
┆➭ Rp 20,000 12 Hari
┆➭ Rp 30,000 16 Hari
┆➭ Rp 40,000 20 Hari
┆➭ Rp 50,000 24 Hari
╰–––––––––––––––༓
_Payment_
_Qris All_ _Gopay_
_Dana_ _Shopepay_
_Pulsa_

_Testimoni_
https://wa.me/p/6331501620289183/6282147781510

_Minat Hub wa.me/6282147781510_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f9da49558d8aa6ea5031c.jpg' }, caption: rules }, m)
}
handler.help = ['sewa']
handler.tags = ['vynaamenu']
handler.command = /^(sewa|belibot)$/i;

export default handler;