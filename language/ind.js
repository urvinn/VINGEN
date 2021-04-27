exports.wait = () => {
	return`*「 SYSTEM INFO 」\nProccessing Command.....*`
}

exports.succes = () => {
	return`*「 SUKSES ✔️ 」*`
}

exports.lvlon = () => {
	return`*「 LEVELING 」 ON*`
}

exports.lvloff = () => {
	return`*「 LEVELING 」 OFF*`
}

exports.lvlnul = () => {
	return`*LEVEL KAMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUP BELUM DI AKTIFKAN SAMA ADMIN*`
}

exports.noregis = () => {
	return`*「 DAFTAR VINZ x GEN BOT 」*\n\n#───────────────#\n*_Kamu belom menjadi teman VINZ x GEN BOT daftar untuk menjadi teman VINZ x GEN BOT,cara pendaftaran ${prefix}daftar nama|umur_* \n*_contoh= ${prefix}daftar VINZ|16_*\n#───────────────#`
}

exports.rediregis = () => {
	return`*「 INFO DATABASE 」*\n\n*kamu sudah terdaftar di catatan VINZ x GEN BOT😉*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi lagi beb😘*`
}

exports.linkga = () => {
	return`*maaf link yang kamu berikan tidak valid❌*`
}

exports.groupo = () => {
	return`*「KHUSUS GRUP❗」*`
}

exports.ownerb = () => {
	return`*「KHUSUS OWNER VINZ x GEN BOT❗」*`
}

exports.ownerg = () => {
	return`*「KHUSUS OWNER GRUP❗」*`
}

exports.baned = () => {
	return`*「❗」KAMU TERBAN OLEH OWNER*`
}
exports.admin = () => {
	return`*「KHUSUS ADMIN GRUP❗」*`
}

exports.badmin = () => {
	return`*「SYSTEM ERROR」BOT Not a Admin*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK DIHIDUPKAN OWNER/ADMIN*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner VINZ x GEN BOT, laporan bohongan akan langsung di kick*`
}

exports.wrongf = () => {
	return`*huruf salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Sukses❗*`
}

exports.pc = () => {
	return`*「 VINZ x GEN BOT REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang VINZ x GEN BOT kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer VINZ x GEN BOTadmin VINZ x GEN BOT*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA INFO 」*\n\n\nkamu sudah terdaftar di buku VINZ x GEN BOT dengan data \n\n┏─⊱nama\n┗⊱${namaUser}\n┏─⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏─⊱umur\n┗⊱${umurUser}\n┏─⊱waktu pendaftaran\n┗⊱${time}\n\n┏─❉ *NS* ❉─\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa save nomor admin VINZ x GEN BOT❗`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan didalam database VINZ x GEN BOT\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner bot VINZ x GEN BOT*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ya ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
					
╭───────────
│❏➣ *Nama* : ${pushname}
│──────────
│❏➣ *Nomer* : 
│❏➣ ${sender.split("@")[0]}
│──────────
│❏➣ *Uang mu* : Rp${uangku}
│❏➣ *XP* : ${getLevelingXp(sender)}/${reqXp}
│❏➣ *Level* : ${getLevelingLevel(sender)}
│❏➣ *User register* : ${_registered.length}
│──────────
│❏➣ *Server* : 
│❏➣ https://iamvinz.my.id
│──────────
│❏➣ *Total Fitur* : 430 Fitur
╰───────────
│❏ *INFORMATION* ❏
│
│> Tobz API Down !
│
╰───────────
│
◪「 *_Maker menu_* 」
│
├─ ❏ *${prefix}hemker*
├─ ❏ *${prefix}graffiti*
├─ ❏ *${prefix}heart*
├─ ❏ *${prefix}avatarwolf*
├─ ❏ *${prefix}stylelogo*
├─ ❏ *${prefix}foil_text*
├─ ❏ *${prefix}matrix*
├─ ❏ *${prefix}encode*
├─ ❏ *${prefix}decode*
├─ ❏ *${prefix}quotes*
├─ ❏ *${prefix}sticker* 
├─ ❏ *${prefix}pornhub* <teks&teks>
├─ ❏ *${prefix}avengers* <teks|teks>
├─ ❏ *${prefix}summer* <teks>
├─ ❏ *${prefix}sandwrite* <teks>
├─ ❏ *${prefix}metaldark* <teks>
├─ ❏ *${prefix}dropwater* <teks>
├─ ❏ *${prefix}greenneon* <teks>
├─ ❏ *${prefix}sumery* <teks>
├─ ❏ *${prefix}blood* <teks>
├─ ❏ *${prefix}firework* <teks>
├─ ❏ *${prefix}lava* <teks>
├─ ❏ *${prefix}qrcode* <teks>
├─ ❏ *${prefix}sketch*
├─ ❏ *${prefix}crossgun*
├─ ❏ *${prefix}wanted*
├─ ❏ *${prefix}ganteng*
├─ ❏ *${prefix}gtav*
├─ ❏ *${prefix}cecan*
├─ ❏ *${prefix}cogan*
├─ ❏ *${prefix}cantik*
├─ ❏ *${prefix}slow*
├─ ❏ *${prefix}gemuk*
├─ ❏ *${prefix}tupai*
├─ ❏ *${prefix}fast*
├─ ❏ *${prefix}ganteng*
├─ ❏ *${prefix}beban*
├─ ❏ *${prefix}burnpaper*
├─ ❏ *${prefix}8bit*
├─ ❏ *${prefix}glowneon*
├─ ❏ *${prefix}gsuggest*
├─ ❏ *${prefix}candlemug*
├─ ❏ *${prefix}lovemss*
├─ ❏ *${prefix}narutobanner*
├─ ❏ *${prefix}mugflower*
├─ ❏ *${prefix}paperglass*
├─ ❏ *${prefix}romance*
├─ ❏ *${prefix}glitch*
├─ ❏ *${prefix}shadow*
│
◪「 *_fun ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}bneon*
├─ ❏ *${prefix}matrix*
├─ ❏ *${prefix}3dtext*
├─ ❏ *${prefix}breakwall*
├─ ❏ *${prefix}>*
├─ ❏ *${prefix}mining*
├─ ❏ *${prefix}bisakah* <teks>
├─ ❏ *${prefix}kapankah* <teks>
├─ ❏ *${prefix}hartatahta* <teks>
├─ ❏ *${prefix}apakah* <teks>
├─ ❏ *${prefix}hartatahta* <teks>
├─ ❏ *${prefix}rate* <teks>
├─ ❏ *${prefix}slap*
├─ ❏ *${prefix}tampar*
├─ ❏ *${prefix}hobby*
├─ ❏ *${prefix}moddroid* <teks>
├─ ❏ *${prefix}happymod* <teks>
├─ ❏ *${prefix}nangis*
├─ ❏ *${prefix}cium*
├─ ❏ *${prefix}peluk*
├─ ❏ *${prefix}tebakin*
├─ ❏ *${prefix}family100*
├─ ❏ *${prefix}darkjokes*
├─ ❏ *${prefix}memeindo*
├─ ❏ *${prefix}jadwaltv*
├─ ❏ *${prefix}dadu*
├─ ❏ *${prefix}spamcall*
├─ ❏ *${prefix}fakta*
├─ ❏ *${prefix}spamsms*
├─ ❏ *${prefix}caklontong*
├─ ❏ *${prefix}randomgame*
├─ ❏ *${prefix}infonomor* <nomor>
├─ ❏ *${prefix}beritahoax*
├─ ❏ *${prefix}seberapagay*
├─ ❏ *${prefix}quotemaker*
├─ ❏ *${prefix}truth*
├─ ❏ *${prefix}dare*
├─ ❏ *${prefix}hilih*
├─ ❏ *${prefix}artinama*
├─ ❏ *${prefix}nulis*
├─ ❏ *${prefix}nulis2*
├─ ❏ *${prefix}nulis3*
├─ ❏ *${prefix}ɴɪɢʜᴛᴄᴏʀᴇ*
├─ ❏ *${prefix}ʙʟᴜʙ*
├─ ❏ *${prefix}ɢʜᴏꜱᴛ*
├─ ❏ *${prefix}ᴛᴏᴘᴛᴛ*
├─ ❏ *${prefix}ғᴀᴋᴇᴀᴅᴅʀᴇꜱꜱ*
├─ ❏ *${prefix}ɢᴏᴏɢʟᴇꜱᴇᴀʀᴄʜ*
├─ ❏ *${prefix}ʜʙᴅ*
├─ ❏ *${prefix}ꜱʜɪɴᴇ* 
├─ ❏ *${prefix}ᴛʜᴇɴɪɢʜᴛ* 
├─ ❏ *${prefix}ʀᴀɪɴʙᴏᴡ* 
├─ ❏ *${prefix}ʟᴏᴠᴇ* 
├─ ❏ *${prefix}ᴏɴᴇᴄᴜᴘ* 
├─ ❏ *${prefix}ꜱᴋʏ* 
├─ ❏ *${prefix}ɴᴀᴛᴜʀᴇ* 
├─ ❏ *${prefix}ʀᴏꜱᴇɢᴏʟᴅ 
├─ ❏ *${prefix}ɴᴀᴛᴜʀᴇ3ᴅ* 
├─ ❏ *${prefix}ᴏᴄᴇᴀɴ*
├─ ❏ *${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ* 
├─ ❏ *${prefix}ꜱᴜᴍᴍᴇʀ*
├─ ❏ *${prefix}ᴜɴᴅᴇʀɢʟᴀꜱꜱ* 
├─ ❏ *${prefix}ᴄᴇᴍᴇᴛᴇʀʏ*
├─ ❏ *${prefix}ʀᴏʏᴀʟʟᴏᴄᴋ* 
├─ ❏ *${prefix}ᴄᴏғғᴇᴄᴜᴘ*
├─ ❏ *${prefix}ᴄᴏғғᴇᴄᴜᴘ2* 
├─ ❏ *${prefix}ɴᴇᴏɴ*
├─ ❏ *${prefix}ɢʟᴏᴡ*
├─ ❏ *${prefix}ꜱᴜᴍᴍᴇ* 
├─ ❏ *${prefix}ғʟᴏᴡᴇʀ* 
├─ ❏ *${prefix}ɢʀᴀɴᴅɪᴇɴᴛ* 
├─ ❏ *${prefix}ᴇᴍʙʀᴏɪᴅᴇʀʏ*  
├─ ❏ *${prefix}ғᴜɴɴʏᴄᴜᴘ*  
├─ ❏ *${prefix}ᴏʀᴄʜɪᴅꜱ*  
├─ ❏ *${prefix}ꜱᴍᴏᴋᴇ2* 
├─ ❏ *${prefix}ʟᴏᴠᴇᴏɴᴇ* 
├─ ❏ *${prefix}ꜱᴍᴏᴋᴇ* 
├─ ❏ *${prefix}ᴏɴᴇꜱɪʟᴋ* 
├─ ❏ *${prefix}ɢʟᴏᴡɪɴɢ* 
├─ ❏ *${prefix}ʜᴇᴀʀᴛ*
├─ ❏ *${prefix}ᴡᴏʟғ* 
├─ ❏ *${prefix}ꜱɪᴍɪꜱɪᴍɪ*
├─ ❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ*
├─ ❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ2*
├─ ❏ *${prefix}ꜱʜᴏʀᴛʟɪɴᴋ3*
├─ ❏ *${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ*
├─ ❏ *${prefix}ᴄᴏᴠɪᴅɪɴᴅᴏ*
├─ ❏ *${prefix}ᴄᴏᴠɪᴅɢʟᴏʙᴀʟ*
├─ ❏ *${prefix}ɪɴғᴏɢᴇᴍᴘᴀ*
├─ ❏ *${prefix}ʀᴀɴᴅᴏᴍᴡᴘ*
├─ ❏ *${prefix}ɢᴀʙᴜᴛ*
├─ ❏ *${prefix}ϙᴜᴏᴛᴇᴍᴜꜱʟɪᴍ*
├─ ❏ *${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ*
├─ ❏ *${prefix}ᴘᴜʙɢʟᴏɢᴏ*
├─ ❏ *${prefix}ʙᴜᴛᴛᴇʀғʟʏ*
├─ ❏ *${prefix}ᴋᴏᴅᴇᴘᴏꜱ*
├─ ❏ *${prefix}ʟᴀᴄᴀᴋɪᴘ*
├─ ❏ *${prefix}ᴅᴋᴀꜱɪᴀ*
├─ ❏ *${prefix}ᴄᴇᴋʀᴇꜱɪᴊɴᴇ*
├─ ❏ *${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ*
├─ ❏ *${prefix}ɪɴғᴏғɪʟᴍ*
├─ ❏ *${prefix}ɪɴғᴏɪʟᴍ2*
├─ ❏ *${prefix}ʟᴋ21*
├─ ❏ *${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ*
├─ ❏ *${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ*
├─ ❏ *${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ*
├─ ❏ *${prefix}ᴋɪꜱᴀʜɴᴀʙɪ*
├─ ❏ *${prefix}ᴛᴀʜʟɪʟ*
├─ ❏ *${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ*
├─ ❏ *${prefix}ʜᴀᴅɪᴛꜱ*
├─ ❏ *${prefix}ʟɪᴘᴜᴛᴀɴ6*
├─ ❏ *${prefix}ᴄɴɴɴᴇᴡꜱ*
├─ ❏ *${prefix}ʀᴇᴘᴜʙʟɪᴋᴀ*
├─ ❏ *${prefix}ᴛᴇᴍᴘᴏɴᴇᴡꜱ*
├─ ❏ *${prefix}ᴋᴜᴍᴘᴀʀᴀɴɴᴇᴡꜱ*
├─ ❏ *${prefix}ʟᴀᴢʏᴍᴇᴅɪᴀ*
├─ ❏ *${prefix}ᴍᴀɴɢᴀ*
├─ ❏ *${prefix}ᴋᴜꜱᴏɴɪᴍᴇ*
├─ ❏ *${prefix}ᴄᴏᴜᴘʟᴇꜱʜɪᴘ*
├─ ❏ *${prefix}ᴛᴏᴘᴀɴɪᴍᴇ*
├─ ❏ *${prefix}ʏᴜʀɪ*
├─ ❏ *${prefix}ᴘᴜꜱꜱʏ*
├─ ❏ *${prefix}ɴᴇᴋᴏɴɪᴍᴇ*
├─ ❏ *${prefix}ʙᴀᴋᴀ*
├─ ❏ *${prefix}ʙʟᴏᴡᴊᴏʙ*
├─ ❏ *${prefix}ʟᴇᴡᴅ*
├─ ❏ *${prefix}ᴡᴀɪғᴜ*
├─ ❏ *${prefix}ᴇʀᴏʏᴜʀɪ*
├─ ❏ *${prefix}ʜᴜɢ*
├─ ❏ *${prefix}ᴀᴡᴏᴏ*
├─ ❏ *${prefix}ʟɪᴄᴋ*
├─ ❏ *${prefix}ᴋɪꜱꜱ*
├─ ❏ *${prefix}ꜱᴍᴜɢ*
├─ ❏ *${prefix}ᴄᴜᴅᴅʟᴇ*
├─ ❏ *${prefix}ʙᴜʟʟʏ*
├─ ❏ *${prefix}ꜱʜɪɴᴏʙᴜ*
├─ ❏ *${prefix}ᴍᴇɢᴜᴍɪɴ*
├─ ❏ *${prefix}ʙʟᴜꜱʜ*
├─ ❏ *${prefix}ʜɪɢʜғɪᴠᴇ*
├─ ❏ *${prefix}ʜᴀɴᴅʜᴏʟᴅ*
├─ ❏ *${prefix}ꜱᴍɪʟᴇ*
├─ ❏ *${prefix}ɢʟᴏᴍᴘ*
├─ ❏ *${prefix}ᴄʀɪɴɢᴇ*
│
◪「 *_mutual ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}mutual*
├─ ❏ *${prefix}next*
│
◪「 *_media ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}brainly* <teks>
├─ ❏ *${prefix}pinterest*
├─ ❏ *${prefix}map*
├─ ❏ *${prefix}wait*
├─ ❏ *${prefix}resepmasakan* <teks>
├─ ❏ *${prefix}igstalk* <username>
├─ ❏ *${prefix}bitly* <link>
├─ ❏ *${prefix}reminder*
│
◪「 *_youtube ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}lirik* <teks>
├─ ❏ *${prefix}ytmp4* <link>
├─ ❏ *${prefix}joox* <judul>
├─ ❏ *${prefix}play* <link>
│
◪「 *_nsfw ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}hentai*
├─ ❏ *${prefix}anjing*
├─ ❏ *${prefix}blowjob*
├─ ❏ *${prefix}randomanime*
├─ ❏ *${prefix}loli*
├─ ❏ *${prefix}randomhentai*
├─ ❏ *${prefix}nekonime*
├─ ❏ *${prefix}neko*
├─ ❏ *${prefix}husbu*
├─ ❏ *${prefix}wibu*
├─ ❏ *${prefix}waifu*
├─ ❏ *${prefix}bokep*
├─ ❏ *${prefix}nsfwtrap*
├─ ❏ *${prefix}nsfwblowjob*
├─ ❏ *${prefix}nsfwneko*
├─ ❏ *${prefix}kucing*
│
◪「 *_anime ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}boruto* 
├─ ❏ *${prefix}rize* 
├─ ❏ *${prefix}neko*
├─ ❏ *${prefix}kaneki*
├─ ❏ *${prefix}naruto* 
├─ ❏ *${prefix}minato* 
├─ ❏ *${prefix}miku* 
├─ ❏ *${prefix}kurumi*
├─ ❏ *${prefix}hinata* 
├─ ❏ *${prefix}sasuke* 
├─ ❏ *${prefix}sakura* 
├─ ❏ *${prefix}akura* 
├─ ❏ *${prefix}itori* 
├─ ❏ *${prefix}touka* 
├─ ❏ *${prefix}animesaran*
├─ ❏ *${prefix}animesaran2*
├─ ❏ *${prefix}rem*
├─ ❏ *${prefix}chika*
├─ ❏ *${prefix}kodenuklir*
├─ ❏ *${prefix}kpop* 
├─ ❏ *${prefix}blackpink*
├─ ❏ *${prefix}nekopoi* <teks>
├─ ❏ *${prefix}randomanime2*
├─ ❏ *${prefix}randomanime3*
├─ ❏ *${prefix}loli2*
├─ ❏ *${prefix}randomhusbu*
│
◪「 *_bank ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}limit* 
├─ ❏ *${prefix}buylimit* <jumblah>
├─ ❏ *${prefix}transfer* <tag |jumblah>
├─ ❏ *${prefix}bank*
│
◪「 *_ɪꜱʟᴀᴍ ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}randomquran*
├─ ❏ *${prefix}listsurah*
│
◪「 *_group ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}hidetag*
├─ ❏ *${prefix}antilinkgrup* [1/0]
├─ ❏ *${prefix}grouplist*
├─ ❏ *${prefix}level*
├─ ❏ *${prefix}infogc*
├─ ❏ *${prefix}kickbeban* <tag>
├─ ❏ *${prefix}linkgc*
├─ ❏ *${prefix}tagall*
├─ ❏ *${prefix}setpp*
├─ ❏ *${prefix}add* <tag>
├─ ❏ *${prefix}kick* <tag>
├─ ❏ *${prefix}setname* <teks>
├─ ❏ *${prefix}setdesc* <teks>
├─ ❏ *${prefix}demote* <tag>
├─ ❏ *${prefix}promote* <tag>
├─ ❏ *${prefix}listadmin*
├─ ❏ *${prefix}jadian*
├─ ❏ *${prefix}group* [buka/tutup]
├─ ❏ *${prefix}leveling* [enable/disable]
├─ ❏ *${prefix}nsfw* [1/0]
├─ ❏ *${prefix}simih* [1/0]
├─ ❏ *${prefix}welcome* [1/0]
│
◪「 *_owner ᴍᴇɴᴜ_* 」
│
├─ ❏ *${prefix}notifikasi* <teks>
├─ ❏ *${prefix}asupan*
├─ ❏ *${prefix}bcgc* <teks>
├─ ❏ *${prefix}kickall* <rawan ban>
├─ ❏ *${prefix}setreply* <teks>
├─ ❏ *${prefix}setprefix* <symbol>
├─ ❏ *${prefix}clearall*
├─ ❏ *${prefix}setlimit* <jumlah>
├─ ❏ *${prefix}ban* <tag>
├─ ❏ *${prefix}antilinkgrup* [1/0]
├─ ❏ *${prefix}block* <tag>
├─ ❏ *${prefix}unblock* <tag>
├─ ❏ *${prefix}leave*
├─ ❏ *${prefix}event* [1/0]
├─ ❏ *${prefix}clone* <tag>
├─ ❏ *${prefix}setppbot*
│
◪「 VINZ X GEN BOT 」
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 YOUR INFO 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Limit* : +20
┣⊱ *Role* :  ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ya  ${pushname} limit kamu  hari ini habis*\n*beli limit untuk mendapatkan limit*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT REQUEST  」*
sisa limit kamu : ${limitCounts}
Jika ingin beli limit \n Caranya #buylimit (Jumlah)
`
}

exports.satukos = () => {
	return`*Tambah huruf/nomor 1/enable atau 0/disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 V BANK 」⊰─┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗──────────`
}