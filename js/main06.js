//toto je novy zpusob jak zpracovavat promisy
//nebudme uz pouzivat then a catch, misto toho pouzije asnyc await
//funkce jsou ale furt stejne, jsou promise based

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

//volani async funkci v poradi DEF
async function spustPrikazy () {
    try {
        await vypisD();
        await vypisE();
        await vypisF(); 
    }catch(zprava) {
        console.log("chyba!!!");
        console.log(zprava);
    } 
}

//spustime retez akci
spustPrikazy();