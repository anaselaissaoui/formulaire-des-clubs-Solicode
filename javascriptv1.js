function limitnom() {
  document.getElementById("nommsg").innerHTML = "";
  let nameinput = document.getElementById("nom");
  let inputval = nameinput.value;
  if (inputval.length <= 30 && inputval.length > 0) {
    nameinput.style.border = "2px solid green";
    return true;
  } else {
    nameinput.style.border = "2px solid red";
    document.getElementById("nommsg").innerHTML =
      "&#9746;&nbsp Entrer un nom entre 1 et 30 lettres";
  }
}

function limitprenom() {
  document.getElementById("prenommsg").innerHTML = "";
  let prenominput = document.getElementById("prenom");
  let inputval = prenominput.value;
  if (inputval.length <= 30 && inputval.length > 0) {
    prenominput.style.border = "2px solid green";
    return true;
  } else {
    prenominput.style.border = "2px solid red";
    document.getElementById("prenommsg").innerHTML =
      "&#9746;&nbsp Entrer un prenom entre 1 et 30 lettres";
  }
}

function limitemail() {
  document.getElementById("emailmsg").innerHTML = "";
  let emailinput = document.getElementById("email");
  let inputval = emailinput.value;
  var patt = /[a-z]\.[a-z]+@ofppt+\.com/;

  if (patt.test(inputval) == false || inputval == "") {
    emailinput.style.border = "2px solid red";
    document.getElementById("emailmsg").innerHTML =
      "&#9746;&nbsp ressayer d'entrer un email valide";
  } else {
    emailinput.style.border = "2px solid green";
    return true;
  }
}

function limitphone() {
  document.getElementById("phonemsg").innerHTML = "";
  let phoneinput = document.getElementById("phone");
  let inputval = phoneinput.value;
  let regex_tel = /0[5-7]{1}[0-9]{8}$/;
  if (regex_tel.test(inputval) == false || inputval == "") {
    phoneinput.style.border = "2px solid red";
    document.getElementById("phonemsg").innerHTML =
      "&#9746;&nbsp Le numéro de téléphone doit avoir exactement 10 chiffres et commencer obligatoirement par 05 ou 06 ou 07";
  } else {
    phoneinput.style.border = "2px solid green";
    return true;
  }
}

const radioButtons = document.querySelectorAll('input[name="gender"]');
const btn2 = document.getElementById("pick-gender");
btn2.addEventListener("onmousedown", radselec);
function radselec() {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return true;
    } else {
      document.getElementById("genderselc").innerHTML =
        "vous pouvez choiser 3 choix au max";
    }
  }
}

function checkvalid(j) {
  var total = 0;
  for (var i = 0; i < document.formclub.selectgrp.length; i++) {
    if (document.formclub.selectgrp[i].selected) total = total + 1;
  }

  if (total >= 1 && total < 4) {
    return true;
  } else {
    document.formclub.selectgrp[j].selected = false;
    document.getElementById("clubmsg").innerHTML =
      "vous pouvez choiser 3 choix au max";
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", submit);
function submit() {
    const t = limitnom();
    const t = limitprenom();
    const t = limitemail();
    const t = limitphone();
    const t = limitnom();
    const t = limitnom();
  if (
    limitnom() &&
    limitprenom() &&
    limitemail() &&
    limitphone() &&
    checkvalid() &&
    radselec()
  ) {
    alert("ok");
  } else {
    document.getElementById("error").innerHTML =
      "&#9746;&nbsp Ressayer de valider tous les inputs";
  }
}
