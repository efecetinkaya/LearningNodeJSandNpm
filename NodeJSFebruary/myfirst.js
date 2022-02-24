var http = require('http'); //Kullanılacak modül seçilir.
var log = require("./log.js"); //Log adlı module'ün içindekileri kullanabilmek için require methodu kullanılır.



http.createServer(function (req, res) { //Bir request bir de response için değişkenler oluşturulur.
  res.writeHead(200, {'Content-Type': 'text/html'}); //Kullanıcıya verilen dönüttür. 200 işlemin başarılı olduğu anlamına gelir.
  //Dönüt html olarak verileceği için conten-type text/html yazılır. Json da kullanılabilirdi.
 
  if(req.url == "/admin"){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("<html><body><h1> Admin Sayfasi </h1></body></html>") //Text doğrudan yazılabildiği gibi html veya JSON şeklinde de yazılabilir
  }else if(req.url == "/"){ //Tek / anasayfa anlamına geliyor.
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("<html><body><h1> Anasayfa </h1></body></html>")
  }else if(req.url == "/customer"){
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.write(JSON.stringify({"name":"Efe", "surname":"Çetinkaya"}))
  }
  res.end('Hello World!'); //Response olarak ekranın sonuna Hello World yazdırılır.
}).listen(8080); //8080 numaralı port kullanılır.

log.information("Sunucu yayına geçti.")