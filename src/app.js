console.log("Merhaba Kodlama.io")

//JS typesafe değildir...
let dolarBugun = 9.30
let dolarDun = 9.20
console.log(dolarDun)

{
    let dolarDun = 9.10
    //let olduğunda console bunu görmez
    //ama çalışan bir koddur
    //var kullanılırsa hata verir.
    //var global bir değişken gibi çalışır. 
}

const euroDun = 11.2
//euroDun = 11 bu hata verir çünkü ilk atanan değer geçerlidir.

console.log(euroDun)

//const ile bir değişken tanımlandığında ona yeni bir değer atanamaz.
//const sabittir.
//değer - referans ile ilgilidir.


let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)