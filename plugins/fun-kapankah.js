let handler = async (m, { conn, command, text }) => {
  setTimeout(() => {
    conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${(10).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'].getRandom()} lagi ...
    `.trim(), m, m.mentionedJid ? {
      mentions: m.mentionedJid
    } : {});
  }, 5000); // Delay 5 detik
}

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['fun','kerang']
handler.limit = true
handler.command = /^kapan(kah)?$/i

export default handler