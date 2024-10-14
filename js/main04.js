//v js se funkce deli na sync a async
//vetsina kodu je synchroni
//sync zdy provede vse ve stejnem poradi tak, jak jsme to napsali

console.log("aaaaaaaaaa");
console.log("bbbbbbbbbb");
console.log("cccccccccc");

//async funkci je hrozne malo
//jsou to funkce, ktere ctou nejaky soubor, nebo posilaji nejaky pozadavek, casovaci funkce, nebo funkce, ktere cekaji na povoleni uzivatele

/*
setTimeout(() => {
    console.log("dddddd");
}, 1000 * Math.random());

setTimeout(() => {
    console.log("eeeeee");
}, 1000 *  Math.random());

setTimeout(() => {
    console.log("ffffff");
}, 1000 * Math.random());
*/

//vetsinou nam nevadi, ze kazda funkce dobehne jinak rychle
//co kdyz ale checeme provest nekolik async funkci vzdy ve stejnem poradi?
//existuj 3 zpusoby jak predelat async funkce na sync
//1) callbacky (pyramida zkazy)
//musime z kazdeho setTiemoutu udelat funkci
//callback je funkce v argumentu, ktera se ma spustit po tom co hlavni funkce skonci
function vypisD (argCallback) {
    setTimeout(() => {
        console.log("dddddd");
        argCallback();
    }, 1000 * Math.random());
}

function vypisE(argCallback) {
    setTimeout(() => {
        console.log("eeeeee");
        argCallback();
    }, 1000 *  Math.random());
}

function vypisF(argCallback) {
    setTimeout(() => {
        console.log("ffffff");
        argCallback();
    }, 1000 * Math.random());
}


vypisD(() => {
    vypisE(() => {
        vypisF(() => {});
    });
});

//muzeme poradi asynchronich funkci zmenit
/*
vypisF(() => {
    vypisD(() => {
        vypisE(() => {});
    });
});
*/