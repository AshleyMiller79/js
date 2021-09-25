//ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim =document.querySelector(".resim"); //resim e ulaştım
let ring =document.querySelector(".ses"); //audio ya ulaştım 
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){ 
resim.src="./img/img.gif";//resim değiştirdim
ring.play(); //sesi çalıştırdım play yaptım
}
//baglat butonuna basınca gif gelsin ses kesilsin

//baglat butonunu cagırdık
document.querySelector(".off").onclick=function(){
  resim.src = "./img/telbağla.gif";
  ring.pause();
} //tel sesini susturduk

// konus butona basınca yeni gif gelsin 
//konus butonuna ulaştık
document.querySelector(".speak").onclick=function() {
resim.src="./img/telfırlat.gif"; //resimi yeni gif le değiştirdik

}
//ekle butonuna basıldığında yeni bir li ekle upuzun yol
 // // yeni girilen satiri saklamak icin bir li olusturduk.
 //  // const yeniLi = document.createElement("li");
 //  // yeni li icin textnode olusturduk
 //  // const textNode = document.createTextNode(satir.value);
 //  //olusturdugumuz texnode'u yeni li'ye bagladik.
 //  // yeniLi.appendChild(textNode);
 //  // yeni eklenen satiri var olan listeye (ul) baglayalim.
 //  // liste.appendChild(yeniLi);

 const liste = document.querySelector(".liste"); // dillerin girili olduğu listeye ulaştık
 // ekle butonuna ulaştık
 document.querySelector(".ekle").onclick=function() {


  const giris=document.querySelector(".dil"); //dil girişi yapılan inputa ulaştık

  liste.innerHTML=liste.innerHTML+ `<li>${giris.value}</li>`; //listeye inputa girilen değerleri liste olarak ekledik
  giris.value=""; //inputa girilen değeri ekleyince inputtan silinmesi için
 }

 //sil butonuna tıklandığında li elemanı silinsin
//sil butonuna ulaştık
   document.querySelector(".sil").onclick=function() {
liste.removeChild(liste.lastChild); //listenin çocuklarından listenin son çocuğunu sildik

//!  SAYFAMIZ BİTMEDİ KÜÇÜK BÜYÜK KISMINI DAHA YAPMADIK 

   }
  





