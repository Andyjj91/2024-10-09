const tlacitko = document.querySelector(".tlacitko");

tlacitko.addEventListener("click", () => {
    //1) vytvorime element (zatim neni soucasti DOMu)
    const elmKolecko = document.createElement("div");
    //2) elementu pridame classu
    elmKolecko.classList.add("kolecko");
    //3) vygenerujeme nahodnou barvu
    const cervena = Math.floor(Math.random() * 256);
    const zelena = Math.floor(Math.random() * 256);
    const modra = Math.floor(Math.random() * 256);
    const kodBarvy = `rgb(${cervena}, ${zelena}, ${modra})`;
    //4) vlozime text kodu barvy do kolecka
    elmKolecko.innerHTML = kodBarvy;
    //5) kolecko obarvime stylem
    elmKolecko.style.backgroundColor = kodBarvy;
    //6) vlozime do DOMu
    const elmContainer = document.querySelector(".container");
    elmContainer.appendChild(elmKolecko);
});