const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'qY5oIXYGwg' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6283867371683'] 
global.ownernomer = "6283867371683"
global.socialmedia = "IG: vlntncptr"
global.yutub = "-"
global.lokasi = "Indonesia, JawaTengah, Jepara"
global.sakuraurl = 'https://play.fawazstore.site'
global.packgename = "by" 
global.author = "Iky" 
global.title = 'IkyMD'
global.body = 'By Iky'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})