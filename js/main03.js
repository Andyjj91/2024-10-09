console.log($);

//selectovani
//chceme vsechny zebry
const poleZeber = document.querySelectorAll(".zebra");
const kolekceZeber = $(".zebra");

console.log(poleZeber); //toto je obycejne vanilla pole elementu
console.log(kolekceZeber); //toto je objekt, ktery obsahuje elementy a navic dalsi uzitecne metody

//chceme vsem zebram prepsat text na "Ja jsem zebra!"
for (const zebra of poleZeber) {
    zebra.innerHTML = "Ja jsem zebra!"; 
}

//pomoci jquery zmenime text vsem zebram na "Mam pruhy!!!"
//metody, ktere pouzijme se aplikuji na vsechny elementy uvnitr kolekce
kolekceZeber.html("Mam pruhy!");

//zmente barvu pisma vsem zebram na zelenou, velikost pisma na 1.5rem
for (const zebra of poleZeber) {
    zebra.style.color = "green";
    zebra.style.fontSize = "1.5rem";
}

//jak se to dela v jQuery
kolekceZeber.css({
    backgroundColor: "red",
    fontFamily: "courier"
});

//podtrhneme jen druhou zebru (zebra na indexu 1)
poleZeber[1].style.textDecoration = "underline";

//jak v jq vyberem jen 1 konkretni element?
//zavolame metodu .eq() a vlozime do ni index
kolekceZeber.eq(1).css({
    fontWeight: "bold"
});

//eventy
//po kliknuti na nadpis ho chceme obarvit na oranzovou
const nadpis = document.querySelector("h1");
nadpis.addEventListener("click", () => {
    nadpis.style.color = "orange";
});

//takto se to dela pomoci juqery
const jqNadpis = $("h1");
jqNadpis.on("click", () => {
    jqNadpis.css({backgroundColor: "blue"});
});