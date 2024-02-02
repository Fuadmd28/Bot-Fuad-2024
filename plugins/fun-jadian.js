let toM = a => '@' + a.split('@')[0]

async function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b

    // Tambahkan delay 5 detik
    await new Promise(resolve => setTimeout(resolve, 5000));

    do b = ps.getRandom()
    while (b === a)

    m.reply(`${toM(a)} 💞 ${toM(b)}`, null, {
        mentions: [a, b]
    })
}

handler.help = ['jadian'].map(v => v + ' *<tag>*')
handler.tags = ['fun']
handler.command = ['jadian']
handler.group = true
handler.limit = 4
export default handler