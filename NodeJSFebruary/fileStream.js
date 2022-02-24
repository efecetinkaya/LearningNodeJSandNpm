// fileStream,girilen dosyaları okumakta ve yazmakta kullanılır.

var fs = require("fs");

fs.readFile("dosya.txt", "utf-8", function (hata, data) {
  //utf-8 çalıştığımız metin formatıdır.
  if (hata) {
    throw hata; //Hata varsa hatayı göster (throw hata fırlatmak için kullanılır.)
  }
  console.log(data.toString()); //ToString methodu kullanılmazsa verileri buffer olarak gösterir. Buffer verilerin bir nevi ham halde gösterilmesidir.
});

fs.writeFile("dosya2.txt", "Efe Çetinkaya", function (hata) {
  //writeFile'da girilen dosya mevcut değilse o isimde bir dosya oluşturulur.
  //readFile'da formatı yazdığımız yere writeFile'da yazılacak veri girilir.
  if (hata) {
    throw hata;
  }
  console.log("Yazıldı.");
});

fs.appendFile("dosya2.txt", "Onur Çetinkaya", function (hata) {
  //writeFile'da mevcut dosya değişirken appendFile'da mevcut dosyaya eklemelerde bulunulur.
  // 
  if (hata) {
    throw hata;
  }
  console.log("Eklendi.");
});

//unlink methodu ile de mevcut dosya silinebilir. 
//Fs asenkron yapıda çalışır.