global.owner = ['6282147781510','628989513496']  
global.mods = ['6282147781510'] 
global.prems = ['6283179715337','6285944610057','6285944610057','6285742334328']
global.nameowner = 'YTTA'
global.numberowner = '628214778151'
global.nomorown = '6282147781510'
global.sgc = 'nekopoi.care'
global.namebot = '© Lofi - Imut v5.0.3 (Public Bot)'
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://bit.ly/m/lofi'
global.fotomu = 'https://btch.pages.dev/file/8af7252d1bf8cddb6ccab.jpg'
global.menu = 'https://btch.pages.dev/file/ea9a7ed7ad210811c90ff.jpg' //image menu , but not work 
global.loading = '*_Proses Kak..._*'
global.wm = '© 𝙇𝙊𝙁𝙄 𝙄𝙈𝙐𝙏𝙏 💕'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = '𝙇𝙊𝙁𝙄 𝙄𝙈𝙐𝙏𝙏'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'sunfuad'
global.xzn = 'katz'
global.lol = 'bc131817e421982d74969fdb'
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'dR8Lnw8b'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  lol: 'https://api.lolhuman.xyz',
  alya: 'https://api.alyachan.dev',
  btc: 'https://api.botcahx.eu.org',
  xzn: 'https://skizo.tech'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'sunfuad',
  'https://api.alyachan.dev': 'OQtXCT',
  'https://skizo.tech': 'katz',
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
