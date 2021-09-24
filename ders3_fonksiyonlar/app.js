/*============================
           FONKSİYONLAR
==================*/

//! 1. YÖNTEM: FUNCTİON DECLARATİON
//DECLARATİON yöntemi ile fonksiyonun tanımlanması çağırılmasından önce veya sonra olabilir


//fonksiyonun tanımlanması
// function yazdirAd()
// {
//  console.log("Hakan");
// }
// //fonksiyonun çağırılması
// yazdirAd();//hakan
// //ornek: klavyeden girilen sayının tek mi çift mi olduğunu gösteren bir fonk yazınız

// const sayiniz=prompt("sayı giriniz");

//  console.log(tekCift(sayiniz));
// function tekCift(sayiniz) {
//  return sayiniz%2==0 ? `${sayiniz} çifttir`:`${sayiniz} tektir`
// }

//! 2. YÖNTEM : FUNCTİON EXPRESSION (bu yöntem daha yaygın)
//ornek1)
const tekCift1= function (sayi){
  return sayi%2==0 ? "CİFT" :"TEK";
}
console.log(tekCift1(5));  


//ornek2      verilen 3 sayıdan en büyük sayıyı bulma:

let buyukBul=function(a,b,c) {

 let enBuyuk;
if(a>b && a>c) {
   enBuyuk=a;
  }
  else if (b>c && b>a) {
   enBuyuk=b;
  }
else {
 enBuyuk=c;
} return enBuyuk;
}
 console.log(buyukBul(5, 8, 3));
 //! 3. YÖNTEM : FUNCTİON ARROW (ok) 

 //const ciftMi=(sayi) => (sayi%2==0 ? "cift" : "tek");
  
 const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);
  console.log(ciftMi(7));

  //ornek  

  const taban =prompt("taban gir");
  const us = prompt("us giriniz");

  const ustAl= (taban,us) => taban**us;

   console.log(ustAl(taban, us));



























