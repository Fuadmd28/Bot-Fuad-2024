let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('hai, @user!\nSelamat datang di grup @subject\n\n@desc')
  } else throw `Teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai, @user!\nSelamat datang di grup @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group', 'adminry']
handler.command = /^(setwelcome|setw)$/i
handler.group = true
handler.admin = true

export default handler 
