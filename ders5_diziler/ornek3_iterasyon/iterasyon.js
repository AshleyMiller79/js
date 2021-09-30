//*****DİZİLERDE İTERASYON****** */

//****FOR DÖNGÜSÜ******

// const koordinatlar = [120, 100, -100, 220, 330, -50];

// let pozitif=0;
// let negatif=0;

// for(let i =0; i<koordinatlar.length; i++){
// koordinatlar[i] < 0 ? negatif=negatif+koordinatlar[i] : pozitif = pozitif+ koordinatlar[i];
// }
// console.log(`negatifler toplamı: ${negatif} pozifler toplamı: ${pozitif}`);

//****FOR IN DÖNGÜSÜ*********** */
const koordinatlar = [120, 100, -100, 220, 330, -50];


let pozitif = 0;
let negatif = 0;

for (let i in  koordinatlar) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(`negatifler toplamı: ${negatif} pozifler toplamı: ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar=[ "aslan", "fil", "kartal" , "kanarya", "aslan", "aslan", "timsah"];

// const ara=prompt("sayısını merak ettigin hayvanın adını yaz");
// const bulDondur=function (ara) {
// let hayvanSayısı=0;
// for(let i in hayvanlar)
// {
// if( hayvanlar[i]==ara)
// {hayvanSayısı++;}

// }
// hayvanSayısı==0? alert("aradıgın hayvandan bulunamadı"):
// alert(`aradıgınız ${ara} hayvanından ${hayvanSayısı} tane bulunmaktadır `);
// }
// bulDondur(ara);



//******FOR OF DONGUSU****** */


// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar = [ "BMW", "Volvo", "Mini"];

for(let i of arabalar){

 console.log(i);
}

//**** FOREACH METODU********** */
//! foreach metodu orjinal diziyi bozmaz

let ogrenciler =["Onur", "Hakan", "Furkan"];

console.log( ogrenciler.forEach((ogrenci) => console.log(ogrenci)));
 //undefined

ogrenciler.forEach((deger, index)=>console.log(index + ". kişi " + deger +"'dır"));


console.log(ogrenciler);  //["Onur", "Hakan", "Furkan"];



//*******MAP METODU***** */

//! map metodu orjinal diziyi değiştirmez

//ornek: bütün elemanların 3 katını alınız

const rakamlar= [3, 5, 3, 2, 6, 7, 9];

// console.log( rakamlar.map((x)=> x*3));

console.log( rakamlar.map((x, index)=> `${index+1}. elemanın 3 katı ${x*3}`));





























