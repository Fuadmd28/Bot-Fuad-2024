import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `╭––『 *SEWA BOT*  』
┆➭ 7 Hari : *Rp 3,000*
┆➭ 1 Bulan : *Rp 10,000*
┆➭  Permanen : *Rp 20,000*
╰–––––––––––––––༓
_Jika Berminat Hubungi_
wa.me/6282147781510
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler