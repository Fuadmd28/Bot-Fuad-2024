import similarity from 'similarity';

const threshold = 0.72;

export async function before(m) {
    const id = 'tebakchara-' + m.chat;

    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hcha/i.test(m.quoted.text) || /.*hcha/i.test(m.text)) {
        return true;
    }

    this.game = this.game || {};

    if (!(id in this.game)) {
        return m.reply('Soal itu telah berakhir');
    }

    if (m.quoted.id === this.game[id][0].id) {
        const isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text);

        if (isSurrender) {
            clearTimeout(this.game[id][3]);
            delete this.game[id];
            return m.reply('*Yah Menyerah :( !*');
        }

        const json = JSON.parse(JSON.stringify(this.game[id][1]));

        if (m.text.toLowerCase() === json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.game[id][2];
            m.reply(`*Benar!*\n+${this.game[id][2]} XP`);
            clearTimeout(this.game[id][3]);
            delete this.game[id];
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
            m.reply(`*Dikit Lagi!*`);
        } else {
            m.reply(`*Salah!*`);
        }
    }

    return true;
}

export const exp = 0;