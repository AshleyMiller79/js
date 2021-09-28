
//bilgisayar 1-20 arasında bir sayı tut

 let rastgeleSayi=   Math.floor(Math.random()*20+1);
let puanPc=10;
 let rekorPc=0;

 //her kontrol et butonuna tıklandığında çalıştırdım
 document.querySelector(".kontrol").onclick=function()
 {
   //tahminim doğruysa
   const tahmin=document.querySelector(".tahmin").value;
   if(tahmin==rastgeleSayi){
document.querySelector("body").style.backgroundColor="green";
document.querySelector(".question").textContent=rastgeleSayi;
document.querySelector(".mesaj").textContent="🎉Tebrikler Bildiniz";

//rekoru güncelle


   }

 };