import similarity from 'similarity'

const threshold = 0.72

export async function before(m) {
    let id = 'tebaklirik-' + m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*terik/i.test(m.quoted.text) || /.*terik/i.test(m.text))
        return !0
    this.game = this.game ? this.game : {}
    if (!(id in this.game))
        return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.game[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.game[id][3])
            delete this.game[id]
            return m.reply('*Yah Menyerah :( !*')
        }
        let json = JSON.parse(JSON.stringify(this.game[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.game[id][2]
            // Add a 5-second delay before sending the "Benar" response
            setTimeout(() => {
                m.reply(`*Benar!*\n+${this.game[id][2]} XP`)
            }, 5000)
            clearTimeout(this.game[id][3])
            delete this.game[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
            // Add a 5-second delay before sending the "Dikit Lagi" response
            setTimeout(() => {
                m.reply(`*Dikit Lagi!*`)
            }, 5000)
        } else {
            // Add a 5-second delay before sending the "Salah" response
            setTimeout(() => {
                m.reply(`*Salah!*`)
            }, 5000)
        }
    }
    return !0
}

export const exp = 0