//? ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim =document.querySelector(".resim"); //resim e ulaştım
let ring =document.querySelector(".ses"); //audio ya ulaştım 
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){ 
resim.src="./img/img.gif";//resim değiştirdim
ring.play(); //sesi çalıştırdım play yaptım
}
//? baglat butonuna basınca gif gelsin ses kesilsin

//baglat butonunu cagırdık
document.querySelector(".off").onclick=function(){
  resim.src = "./img/telbağla.gif";
  ring.pause();
} //tel sesini susturduk

//? konus butona basınca yeni gif gelsin 
//konus butonuna ulaştık
document.querySelector(".speak").onclick=function() {
resim.src="./img/telfırlat.gif"; //resimi yeni gif le değiştirdik

}
//?ekle butonuna basıldığında yeni bir li ekle upuzun yol
 // // yeni girilen satiri saklamak icin bir li olusturduk.
 //  // const yeniLi = document.createElement("li");
 //  // yeni li icin textnode olusturduk
 //  // const textNode = document.createTextNode(satir.value);
 //  //olusturdugumuz texnode'u yeni li'ye bagladik.
 //  // yeniLi.appendChild(textNode);
 //  // yeni eklenen satiri var olan listeye (ul) baglayalim.
 //  // liste.appendChild(yeniLi);

 //kısa yol
 const liste = document.querySelector(".liste"); // dillerin girili olduğu listeye ulaştık
 // ekle butonuna ulaştık
 document.querySelector(".ekle").onclick=function() {


  const giris=document.querySelector(".dil"); //dil girişi yapılan inputa ulaştık

  liste.innerHTML=liste.innerHTML+ `<li>${giris.value}</li>`; //listeye inputa girilen değerleri liste olarak ekledik
  giris.value=""; //inputa girilen değeri ekleyince inputtan silinmesi için
 }

 //?sil butonuna tıklandığında li elemanı silinsin
//sil butonuna ulaştık
   document.querySelector(".sil").onclick=function() {
liste.removeChild(liste.lastElementChild); //listenin çocuklarından listenin son çocuğunu sildik
  }

const parag=document.querySelector(".forH1");
parag.innerHTML=`<h1>${"Programlama Dilleri"}</h1>`;


// todo SETATTRİBUTE metodu****************

// document.querySelector(".checkbox").setAttribute("type", "checkbox");


//Klavyeden bir tuşa basıldığında büyüsün küçülsün
document.querySelector(".textbox").onkeyup=function (){
   const checkbox= document.querySelector(".checkbox");
   const textbox= document.querySelector(".textbox");
   if(checkbox.checked) {
textbox.value=textbox.value.toUpperCase();

   }else {
      textbox.value = textbox.value.toLowerCase();
   }

}
  
//mouse resmin üstüne geldiğinde aslan kükresin 
resim.onmouseover=function () {
resim.src="./img/aslan2.jpeg";
}

//2. ama addEventListener() yolu 

// resim.addEventListener("mouseout",function (){
//    resim.src = "./img/aslan2.jpeg";
// })

//mouse resmin üstünden çekildiğinde

resim.onmouseout= function () {
resim.src="./img/aslan1.jpeg";

}

//enter=13    delete=46
//onkeydown= klavyedeki tuşa basıp elinizi çektiğinizde

document.querySelector(".dil").onkeydown=function(klavye) {

if( klavye.keyCode==13    ) { // enter ı çağırdık

   document.querySelector(".ekle").onclick();

}if (klavye.keyCode==46) //delete yi çağırdık 
{
document.querySelector(".sil").onclick();
}
};




















