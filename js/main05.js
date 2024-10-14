//v novem JS mam k dispozici Promisy
//nemusime tedy uz pouzivat callbacky
//prepiseme funkce aby uz nebyly callback based misto toho budou promise based

function vypisD () {
    return new Promise((uspech, neuspech) => {
       setTimeout(() => {
            console.log("dddddd");
            if (Math.random () < 0.2) {
                neuspech("D se nepovedlo");
            }else{
                uspech();
            }
            uspech();
        }, 1000 * Math.random()); 
    });
}

function vypisE() {
    return new Promise((uspech, neuspech) => {
        setTimeout(() => {
            console.log("eeeeee");
            if (Math.random () < 0.2) {
                neuspech("E se nepovedlo");
            }else{
                uspech();
            }
            uspech();
        }, 1000 *  Math.random());});
}

function vypisF() {
    return new Promise((uspech, neuspech) => {
        setTimeout(() => {
            console.log("ffffff");
            if (Math.random () < 0.2) {
                neuspech("F se nepovedlo");
            }else{
                uspech();
            }
            uspech();
        }, 1000 * Math.random());
    });
}

//.then() se vykona pokud prechozi funkce byla uspesna
//pokud ejjaka funkce v tomto retezci operaci zfailuje, tak to rovnou skoci do vetve .catch()
vypisD().then(() => {
    return vypisE();
}).then(() => {
    return vypisF();
}).catch((zprava) => {
    console.log("chyba!!!");
    console.log(zprava);
});