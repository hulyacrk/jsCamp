console.log("Merhaba Kodlama.io")

//JS typesafe değildir...
let dolarBugun = 9.30

//console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //bu hata verir

console.log(euroDun)



let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)