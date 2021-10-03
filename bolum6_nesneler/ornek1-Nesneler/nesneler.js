// ======================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.
//alttaki objeyi javadaki gibi inherit etmediğim halde (console da gözüküyor) proto kısmında bütün metodlar gözüküyor
// Object literal
const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};

console.log(insan);

//1=>  .dot notasyonu ile verilere erişilebilir.
console.log(insan.ad);

//2=>  Köseli parantez erişimi (köşeli parantez içerisine bir expressiion yazmak mümkündür.)
console.log(insan["diller"]);
//-----------------------------------

console.log(`Adim ${insan.ad} ve yasim ${insan["yas"]}`);

const bilgiSecimi = prompt(
  "insan nesnesi hakkinda ne bilmek istersin? Seciminizi giriniz: ad, soyad, yas, meslek ve diller"
);
//prompt tan String geldiği için altta tırnağa gerek yok, prompt a meslek yazdık diyelim insan["meslek"] gibi algılayacak.(insan.bilgiSecimi şeklinde olmaz,çünkü o şekilde bilgiseçimi nin değişken olduğunu anlamıyor.String geldiği için=insan."bilgiSecimi" gibi bişey oluyor çünkü. )
if (insan[bilgiSecimi]) {
  //girilen key varsa.
  console.log(insan[bilgiSecimi]);
  //console.log(`${insan[bilgiSecimi]}`);
} else {
  console.log(
    "yanlis seçim. Lütfen ad, soyad,meslek, diller, yas şeklinde giriniz."
  );
}
//objeye key,value lar ekleme
insan.konum = "Türkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;
console.log(insan);

// ======================================================
//                  Nesne Metotları
// ======================================================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    //Date().getFullYear= bugünün yılını al
    return new Date().getFullYear() - this.dogumTarihi; //buraya dogumTarihi yazdığımız anda önüne this i kendi çıkarır, buradaki d.tarihini kullan diyor
  },
  ozet: function () {
    //burada arrow func kullanamayız çünkü objeye ait özellikleri (this) kullanamıyor. arrow iyi ama böyle sıkıntıları var
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir. Mesleği ${
      this.meslek
    } likdir.`;
  },
};

const tarih = new Date();
console.log(tarih.getTime());
console.log(tarih.getDay()); //bu üçü ile tarih olayını göstermiş oluyoruz
console.log(kisi.yasHesapla()); //func. çağırırken sonuna () gelmeli, yoksa o function un yanında yazanları döndürür
console.log(kisi.ozet());

// ======================================================
//                  Nesne (OBJECTS) Iterasyon Ornekleri
// ======================================================

const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },

  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];

console.log(kisiler);

// ÖRNEK1: kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim.
kisiler.forEach((x) => console.log(x.meslek));

//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni(map) bir diziye saklayiniz, (yazdır deseydi forEach de olurdu,foreach anlık kullanılır, yeni dizi isteyince Map).
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);

// ÖRNEK3: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.

kisiler.filter((x) => x.yas <= 25).forEach((a) => console.log(a.ad));

// ÖRNEK4: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.

const buyukHarf = kisiler.map((x) => {
  return {
    //birden çokşey döndüreceği için süslü lazım,birde hangi madde kime ait belirtmezsek (ad:x.ad...) hata verir, belirt der (ilk defa yapıyoruz)
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
    soyad: x.soyad,
  };
});

console.log(buyukHarf);

// ÖRNEK5: Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.

const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });

console.log(developer);

//ÖRNEK6: kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length; //burada toplam ın 0 dan başladığını belirtmezsek hata alırız, kisi.yas biraz değişik olunca şaşırıyor
console.log(ortalamaYas);
