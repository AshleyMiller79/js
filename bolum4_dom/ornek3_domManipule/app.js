// Ac butonuna her tiklandiginda lamba_on resmini goster.
let play = document.querySelector(".ses");
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/img.gif";

  play.play();
};
// Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/telbağla.gif";
  play.pause();
};
document.querySelector(".speak").onclick = function () {
  document.querySelector(".resim").src = "./img/telefon.gif";
  play.pause();
};
// resmin uzerine mouse her geldiginde lamba_on resmini goster.
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});
// resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});

// Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    //true yazmasakta olur
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const sonDiv = document.querySelector(".forH1"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// sonDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.
//! h1.className = "yeniH1" burada class adı atayıp css de class adıyla stil verebiliriz
sonDiv.innerHTML = sonDiv.innerHTML + `<h1>${"Programlama Dilleri"}</h1>`; //yukarıdaki 4 satır yerine kısa yol.bu kısa yolla, büyük küçük harfe bağlı h1 create edildiği için, buradan sonra checked işlemez, bunu yoruma al gösterdikten sonra,yada boş bir div açtım class=forH1 olan, h1 i  oraya ekle,yukarıda yazıyor

// Ekle butonuna  her tıklandiginda
document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil");

  liste.innerHTML = liste.innerHTML + `<li> ${satir.value}</li>`; //altta kapalı olan 4 satırlık işlemi bu satır yapıyor

  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(satir.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);
  //input içinde kalan veriyi sil
  satir.value = "";
};

// Sil butonuna  her tıklandiginda
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  // liste.removeChild(liste.firstElementChild);  // ilk elemani sil
  liste.removeChild(liste.lastElementChild); // son elemani sil
};
//?  burasını vermeyebilirsin**********
// Klavyeden bir tusa basildiginda calis
document.querySelector(".dil").onkeydown = function (event) {
  // Eger basilan tus Enter tusu ise
  if (event.keyCode === 13) {
    // Ekle butonunun tiklama fonksiyonunu cagir.
    document.querySelector(".ekle").click();
  }
  // del tuşuna basılırsa
  if (event.keyCode === 46) {
    // Sil butonunun tiklama fonksiyonunu cagir.
    document.querySelector(".sil").click();
  }
};
