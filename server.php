<?php
$instanceDB = new PDO(
    "mysql:host=127.0.0.1:3306;dbname=primakurzy;charset=utf8mb4",
    "root",
    "",
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
);

if (array_key_exists("statySubmit", $_POST)) {
    $pocet = $_POST["pocet"];
    $preskocit = $_POST["preskocit"];

    //normalne byhcom misto promennych pouzili ?, ale LIMIT s ? neumi pracovat
    //misto ? pouzijemejmenne parametry :nazevParametru
    $prikaz = $instanceDB->prepare("SELECT * FROM zeme_mena LIMIT :preskocit, :pocet");
    //propojime jmenne parametry s promennou a uvedeme datovy typ
    $prikaz->bindParam(":preskocit", $preskocit, PDO::PARAM_INT);
    $prikaz->bindParam(":pocet", $pocet, PDO::PARAM_INT);
    $prikaz->execute();
    //vytahneme data ven
    $poleZaznamu = $prikaz->fetchAll(PDO::FETCH_ASSOC);

    //echem se poslou informace zpet do ajaxu
    //nemuzeme echovat JS pole, musime pole nejprve prevest na json string
    echo json_encode($poleZaznamu);
    exit; //ukoncime odpoved ajaxu
}

