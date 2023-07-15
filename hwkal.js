// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal DapDap : Copyan Dari Base Hw mods


const fs = require('fs')
const chalk = require('chalk')


global.ig = '@Phmizzz' // ubah aja
global.email = 'phmifz@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'PhmiFz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6289687537657'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Phmizzz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ByPhmiFz' // ubah aja ini nama sticker
global.author = 'phmi' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})