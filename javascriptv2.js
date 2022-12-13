console.log("javascriptv2.js");

function submit() {
  document.getElementById("nommsg").innerHTML = "";
  let nameinput = document.getElementById("nom");
  let nameinputval = nameinput.value;

  document.getElementById("prenommsg").innerHTML = "";
  let prenominput = document.getElementById("prenom");
  let prenominputval = prenominput.value;

  document.getElementById("emailmsg").innerHTML = "";
  let emailinput = document.getElementById("email");
  let emailinputval = emailinput.value;
  var patt = /[a-z]\.[a-z]+@ofppt.com/;

  document.getElementById("phonemsg").innerHTML = "";
  let phoneinput = document.getElementById("phone");
  let phoneinputval = phoneinput.value;
  let regex_tel = /0[5-7]{1}[0-9]{8}$/;

  var total = 0;
  for (var i = 0; i < document.formclub.selectgrp.length; i++) {
    if (document.formclub.selectgrp[i].selected) total = total + 1;
  }

  if (
    nameinputval.length <= 30 &&
    nameinputval.length > 0 &&
    prenominputval.length <= 30 &&
    prenominputval.length > 0 &&
    patt.test(emailinputval) == true &&
    regex_tel.test(phoneinputval) == true &&
    total >= 1 &&
    total < 3
  ) {
    document.getElementById("error").innerHTML = "";
    window.open("./confirmation.html", "_self");
  } else {
    document.getElementById("error").innerHTML =
      "&#9746;&nbsp Ressayer de valider tous les inputs";
    nameinput.style.border = "2px solid red";
    document.getElementById("nommsg").innerHTML =
      "&#9746;&nbsp Entrer un nom entre 1 et 30 lettres";
    prenominput.style.border = "2px solid red";
    document.getElementById("prenommsg").innerHTML =
      "&#9746;&nbsp Entrer un prenom entre 1 et 30 lettres";
    phoneinput.style.border = "2px solid red";
    document.getElementById("phonemsg").innerHTML =
      "&#9746;&nbsp Le numéro de téléphone doit avoir exactement 10 chiffres et commencer obligatoirement par 05 ou 06 ou 07";
    emailinput.style.border = "2px solid red";
    document.getElementById("emailmsg").innerHTML =
      "&#9746;&nbsp ressayer d'entrer un email valide";
    document.getElementById("clubmsg").innerHTML =
      "vous pouvez choiser 3 choix au max";
  }
}
