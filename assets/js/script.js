
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let btn = document.querySelector("button");
let result = document.querySelector(".result");
let imcIndex = document.querySelector(".imcIndex")
let imcIndex2 = document.querySelector(".imcIndex2")
let blocIMG = document.getElementById("blocimg");
const song = new Audio('assets/js/PigScream.mp3');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let IMC = weight.value / Math.pow(height.value * Math.pow(10, -2), 2);
    result.innerHTML = ("Votre imc est : " + parseFloat(IMC).toFixed(2) + "");
    result.style.color = "black";
    if(IMC <= 18.5 ){
        imcIndex.innerHTML = ("<p>Votre IMC est insuffisant</p>")
        imcIndex2.innerHTML =("<p>(Poids insuffisant et pouvant occasionner certains risques pour la santé.)</p>")
        blocIMG.classList.add("myIMG2");
        setTimeout(function () {
            location.reload()
        }, 6000);
    }else if(IMC >= 18.5 & IMC < 24.9){
        imcIndex.innerHTML = ("<p>Votre IMC est normal</p>")
        imcIndex2.innerHTML =("<p>(Poids santé qui n'augmente pas les risques pour la santé.)</p>")
    }else if (IMC >= 25 & IMC < 30) {
        imcIndex.innerHTML = ("<p>Vous êtes en surpoid</p>");
        imcIndex2.innerHTML =("<p>(excès de poids pouvant occasionner certains risques pour la santé.)</p>");
    }else if(IMC >= 30 & IMC < 40){
        imcIndex.innerHTML = ("<p>Vous êtes en obésité</p>")
        imcIndex2.innerHTML =("<p>(risque accru de développer certaines maladies.)</p>");
    }else if(IMC >= 40){
        imcIndex.innerHTML = ("<p>Vous êtes en obésité morbide</p>");
        imcIndex2.innerHTML =("<p>(votre vie est menacée à moyen terme et que le risque de développer des maladies cardio-vasculaires est extrêmement élevé.)</p>");
        blocIMG.classList.add("myIMG");
        for (let a = 0; a < 1000; a++) {
            song.play();
        }
        setTimeout(function () {
            location.reload()
        }, 6000);
    }else{
        result.innerHTML = ('Veuillez remplir les champs nécessaire ⚠');
        result.style.color = "#FD282E";
        result.style.textShadow = " 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;";
        imcIndex.innerHTML = "";
        imcIndex2.innerHTML = "";
    }
})







