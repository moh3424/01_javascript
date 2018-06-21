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
// var age = parseInt(prompt("Quel est votre age"));
// var major = 18;
// if (age >= major){
//     alert("Super ! tu es majeur");
// } else{
//     alert("Domage!!!!");
//     document.location.href = "https://google.fr";
// }

var x = 12;
// var x= 23;
// var x = "";

if ((Number.isInteger(x))){// comparaison 
     if(x<12){
         console.log("bonjour");
     }if (x==12){
         console.log("il est midi");
     }if (x<=22) {
         console.log("bonsoir");
     }else{
         console.log("bonne nuit");
     }
} else {
    document.location.href="http://devdocs.io/javascript/";
}


var tab = ["yessad", "mohamed", "sex", "dat_naiss", "adresse", "tel", "specialite", "moyen","montion"];

for (i=0; i < tab.length; i++ ){
    document.write("<br>"+tab[i]+" " +"<br>");
}

//push 
tab.push("adil");
tab.push("7 ans");

// //unshift
// tab.unshift("7 ans");

// //pop
// tab.pop();

// //shift
// tab.shift();

// for (i=0; i < tab.length; i++ ){
//     document.write("<br>"+"<strong><em><mark>"+tab[i]+"</mark></em></strong>"+" " +"<br>");
// }
var moi = string;
var stagiaire = [{prenom:"mohamed",nom: "yessad", email: " mohamed.yessad@lepoles.com", tel :"06 67 80 55 98"},{prenom: "adil", nom : "yessad", email: "Y@gmail.com", tel:"06 68 75 41"}, {prenom:"papa",nom:"coucou", email:"K@gmail", tel:"070502041"}]

for (i=0; i< stagiaire.length; i++){
    document.write("<br>"+"<strong><em><mark>"+stagiaire[i].prenom+"</mark></em></strong>"+" " +"<br>")
}





