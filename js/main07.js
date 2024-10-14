const poleCisel = [8, -7, 7, 45, 5, -23, 11]
//funkce reduce
//original pole zustava stejny
//reduce proiteruje pole a vysledkem je nejaka 1 hodnota
const vysledekReduce = poleCisel.reduce((kumulator, cislo) => {
    kumulator += cislo;
    return kumulator;
}, 0); 

console.log(vysledekReduce);

//funkce map
//map protiteruje pole a vrati nove pole se stejnym poctem prvku
const vysledekMap = poleCisel.map((cislo) => {
    const druhaMocnina = cislo * cislo;
    return druhaMocnina;
});

console.log(vysledekMap);

//funkce sort
//tato funkce vrati pole, kde honoty budou serazeny podle nejake nasi logiky

const vysledekSort = poleCisel.sort((cisloA, cisloB) => {
    if (cisloA < cisloB) {
        return -1;
    }else if (cisloA > cisloB) {
        return 1;
    }else{
        return 0;
    }
});

console.log(vysledekSort);

//funkce filter
//tato funkce proiteruje pole a vrati nove pole, kde budou jenom polozky, ktere prosli filtrem
const vysledekFilter = poleCisel.filter((cislo) => {
    if (cislo%2 ==0) {
        return true;
    }else{
        return false;
    }
});

console.log(vysledekFilter);

const poleProduktu = [
    {
        jmeno: "hrnek",
        pocet: 120,
        cena: 150
    },
    {
        jmeno: "tricko",
        pocet: 50,
        cena: 250
    },
    {
        jmeno: "boty",
        pocet: 12,
        cena: 1500
    },
    {
        jmeno: "kalhoty",
        pocet: 160,
        cena: 700
    },
    {
        jmeno: "cepice",
        pocet: 600,
        cena: 125
    },
];

//kolik kusu mame celkem na sklade?
const celkovyPocet = poleProduktu.reduce((kumulator, produkt) => {
    kumulator += produkt.pocet;
    return kumulator;
}, 0);

console.log(celkovyPocet);

const celkovaCenaSkladu = poleProduktu.reduce((kumulator, produkt) => {
    kumulator += produkt.pocet * produkt.cena;
    return kumulator;
}, 0);

console.log(celkovaCenaSkladu);

//vypsat pouze produkty ktere jsou levnejsi nez 300kc
const levneProdukty = poleProduktu.filter((produkt) => {
    if (produkt.cena < 300) {
        return true;
    }else{
        return false;
    }
});

console.log(levneProdukty);

//chceme seradit produkty podle poctu kusu
//od nejvetsiho poctu az po nejmensi
const produktyOdNejpocetnejsiho = poleProduktu.sort((produktA, produktB) => {
    if (produktA.pocet > produktB.pocet) {
        return -1;
    }else if (produktA.pocet < produktB.pocet) {
        return 1;
    }else{
        return 0;
    }
});

console.log(produktyOdNejpocetnejsiho);

//vsechny produkty zdrazit o 15% ceny
//pokud vyjde destine cislo, tak zaokrouhlit smerem dolu
const poleNovychCen = poleProduktu.map((produkt) => {
    produkt.cena = Math.floor(produkt.cena * 1.15);
    return produkt;
});

console.log(poleNovychCen);

//dokud jsme meli pole cisel, nebo stirngu nebo booleanu, tak se original nezmenil
//pokud ale funkci map menime vlasnotsti objektu nebo nejake vnitrni pole, tak se tim zmeni i original!!!!
console.log(poleProduktu);