import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text, args, command, usedPrefix }) => {
  if (!text) throw 'Mana Kak Linknya?'

  let url = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`

  let response = await axios.get(url)
  const html = response.data;
  const $ = cheerio.load(html);

  let asd = []
  let imgSrc = []
  let creator = 'Jikarinka'

  $('div.col-md-12 > img').each((index, element) => {
    imgSrc.push($(element).attr('src'));
  });

  asd.push({ creator, imgSrc })
  let fix = imgSrc.map((e, i) => {
    return { img: e, creator: creator[i] }
  })

  m.reply('Please wait...') // Add a delay message here

  for (let i of asd[0].imgSrc) {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Add a delay of 2 seconds
    conn.sendFile(m.chat, i, '', null, m)
  }
}

handler.help = ['tiktokimg']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg)$/i
handler.register = true
handler.limit = true

export default handler