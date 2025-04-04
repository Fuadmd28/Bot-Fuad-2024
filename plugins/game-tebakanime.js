import fetch from 'node-fetch'
let timeout = 100000
let poin = 499
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'tebakchara-' + m.chat
    if (id in conn.game) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
        throw false
    }
    let res = await(await fetch('https://api.jikan.moe/v4/characters')).json()
    let json = res.data.getRandom()
    let caption = `
Siapakah Nama Character Diatas

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hcha untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.game[id] = [
        await conn.sendFile(m.chat, json.images.jpg.image_url, 'tebakchara.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.limit = true
handler.group = true
handler.command = /^tebakanime$/i

handler.onlyprem = false
handler.game = false

export default handler