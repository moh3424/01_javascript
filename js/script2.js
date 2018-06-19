var string = "string";
var float = 0.01;
// var number = 1;
var boolean = false;
var array = [];

console.log("string est de type  "  + typeof(string));
console.log("0.01 est de type  "  + typeof(float));
// console.log("1 est de type  "  + typeof(number));
console.log("false est de type  "+ typeof(boolean));
console.log("[] est de type  " + typeof(array));

document.write("string est de type  " + " " + typeof(string));
document.write("0.01 est de type  " + " " + typeof(float));
// document.write("1 est de type  " + " " + typeof(number));
document.write("false est de type  " + " " + typeof(boolean));
document.write("[] est de type  " + " " + typeof(array));

var t = float.toString(); // Fonction toString(); permet de convertir ma variable en texte

// console.log(typeof(t));
const CONSTANTE = 7; //const sert à déclarer une constante qui sera accessible uniquement en lecture
    //   CONSTANTE = 12;
console.log(CONSTANTE);
// début de la condition
if (CONSTANTE === 7) {// début bloc local
    let CONSTANTE = 20;
    console.log(CONSTANTE);
}// fin bloc local
// var CONSTANTE = 20;
console.log(CONSTANTE);
var result= prompt("1 + 1 = ?");
if (result == 2){
    console.log("bravo");
    result= prompt("2 + 2 = ?");
    if (result == 4) {
        console.log("bravo");
    } else
        console.log("nul");
        result= prompt("5 + 5 = ?");
    if (result == 10){
        console.log("bravo");
    } else
        console.log("nul");
    
} else { console.log("nul");}

const AZERTY = 30;
if (AZERTY < 20) {
    let AZERTY = 12;
    console.log(AZERTY);
    } else if (AZERTY === 20){
        console.log(12);
    }
else console.log(AZERTY);

// var azerty = prompt("Quel est votre age")
// alert(azerty);
// console.log(azerty +" "+ "ans");
// document.write(azerty +" "+ "ans");
// parseInt permet de préciser que l'on attend un nombre en retour
// var azerty = parseInt(prompt("Quel est votre age"));
// parsefloat permet de préciser que l'on attend un nombre réel en retour
// var azerty = parsefloat(prompt("Quel est votre age"));
var age = parseInt(prompt("Quel est votre age"));
var major = 18;
if (age >= major){
    alert("Super ! tu es majeur");
} else{
    alert("Domage!!!!");
    document.location.href = "https://google.fr";
}









