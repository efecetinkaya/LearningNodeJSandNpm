var log = { //Moduleler bir veya birden fazla JavaScript dosyasında kullanılabilen
    // fonksiyon, değişken ve nesneler barındırabilen yapılardır.
    information: function(info){
        console.log("İnformation : " + info)
    }, //Kullanıcıyı bilgilendiriyoruz.
    fault: function(fault){
        console.log("Fault : " + fault)
    } 
}

module.exports = log;
//Bu dosyanın bir module olması ve içeriğinin farklı dosyalarda da kullanılabilmesi için
//module.exports = dosyaAdi yazilir. Bu module'ü dosyaAdi ismiyle dışarı çıkar anlamına gelir.
//Sayfanın tamamı yerine yalnızca bir değişkeni, nesneyi, fonksiyonu çıkarmak da mümkündür.