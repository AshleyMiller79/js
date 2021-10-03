// function larda sadece maaslar kullanılacaksa parametreye gerek yok, içinde maaşlar ı kullanırız, ama sürekli giden gelen oluyorsa (birkaç yerde kullanılacaka veye tuşa basıldığında çalışacak durumu varsa) parametre konulmalı (harf koysak bile olur)
const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const sonDiv = document.querySelector(".liste-div");
sonDiv.innerHTML = sonDiv.innerHTML + `<ul></ul>`;
const liste = document.querySelector("ul");

// Program baslangicinda maaslar dizisini liste olarak yazdir.
for (let i in maaslar) {
  liste.innerHTML = liste.innerHTML + `<li> ${maaslar[i]}</li>`;
}

//input elemanina girilen yeni satiri al. tekrar kullanılacağı için dışarıda çağırdık
const satir = document.querySelector(".input-liste");

// Ekle butonuna tıklandiginda diziye ve listeye yeni veriyi ekle.
document.querySelector(".ekle").onclick = function () {
  if (!satir.value) {
    //boş li eklenmesin diye
    alert("Lutfen veri girisi yapiniz.");
  } else {
    //input'tan gelen veriyi diziye kaydet. ilerde diziyi ekranda göstericez, ondan sonra alttaki cümleyi ekle
    maaslar.push(Number(satir.value));
    //input'tan gelen veriyi listeye yazdir
    liste.innerHTML = liste.innerHTML + `<li> ${satir.value}</li>`;
    //işlemler bittikten sonra input'da kalan veriyi sil.
    satir.value = "";
    aciklamaGuncelle(maaslar); //eklediğimiz maaşı diziye de ekledik, ekranda da gözüksün
  }
};

//Sil butonuna tiklandiginda listedeki ve dizideki son elamani sil.
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar); //sildiğimiz maaşı diziden de sildik, ekrandan da silinsin
  }
};

// Maaslar dizisindeki maas bilgilerini ve toplam maas bilgisini HTML'deki aciklama (h1) elemanina yazdir.
const aciklamaGuncelle = function (dizi) {
  //ne gönderilirse ona göre çalışır
  const aciklama = document.querySelector(".aciklama");
  const yeniMaaslar = dizi.join(" "); //diziyi virgülden kurtardık
  aciklama.innerHTML = `Maaşlar: ${yeniMaaslar} <br> 
  Toplam Maaş: ${dizi.reduce((x, y) => x + y, 0)}`;
};
// Aciklama (h1) elemaninin bilgilerini güncelle.



// input elemaninda klavyeden bir tusa basildiginda islem yap.(onkeypress= inputa girildiğinde demek olduğu için alttaki sil(Delete) kısayolunu çalıştırmaz, ekle yi çalıştırır).keydown : Klavyeden bir tuşa basıldığı anda çalışır. keypress : Klavyeden tuşa basıldığında ve basılı tutulduğu sürece çalışır. keyup : Klavye tuşuna bastıktan sonra parmağımızı çektiğimizde çalışır.
document.querySelector(".input-liste").onkeydown = function (e) {
  //e=inputa basılan değer
  console.log(e);
  // Enter tusuna basildi ise ekle metodunu cagir.
  if (e.key === "Enter") {
    // alternatif olarak e.keyCode === 13 kullanilabilir.(enter ascıı değeri 13)
    document.querySelector(".ekle").onclick(); //ekle ye basılmış yap
  }
  // Del tusuna basildi ise sil metodunu cagir.
  if (e.key === "Delete") {
    // alternatif olarak e.keyCode === 46 kullanilabilir.
    document.querySelector(".sil").onclick();
  }
};
