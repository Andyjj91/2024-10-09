//kontorla zda jsme spravne pripojili knihovnu jquery
console.log($);

const tlacitko = document.querySelector(".pridat");
tlacitko.addEventListener("click", () => {
    //po kliknuti na tlacitko posleme ajaxovy formular
    //type: post nebo get
    //url: je stejna jako action, rika kam se formular odesle
    //data: jsou name a value inputu naseho formulare
    //dataType: jaky vymenny format ocekavame (json,text,html,xml,....)
    //success: obsahuje arrow funkci, ktera se spusti po tom, co obdrzime data od serveru
    $.ajax({
        type: "post", //method
        url: "./server.php", //action
        data: {
            pocet: 5, //input:text name="pocet"
            preskocit: document.querySelectorAll(".seznam-statu li").length, //input:text name="preksocit"
            statySubmit: true //button:submit name="statySubmit"
        },
        dataType: "json", //pokud nic neuvedem tak ocekavame obycejny string
        success: (odpoved) => {
            console.log(odpoved)
            //odpoved je pole
            //diky dataType: "json" se nam string rovnou prevedl na pole

            for (const zeme of odpoved) {
                //vytovrime novy element
                const elmLI = document.createElement("li");
                //zmenime mu text
                elmLI.innerHTML = zeme.stat;
                //vlozime ho do DOMu
                const elmUl = document.querySelector(".seznam-statu");
                elmUl.appendChild(elmLI);
            }
        }
    });
});