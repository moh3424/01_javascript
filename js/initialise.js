const NOM = "YESSAD";
var pseudo = "moh";
var mot_de_passe = "mohamed";

if (NOM === "YESSAD") {
    let NOM = "mohamed";
    console.log(NOM);
} else console.log("la valeur n'est pas valide");
var valeur1 = prompt("Entrer votre pseudo");
var i= 1;
var essay=3;
if (pseudo === valeur1){
    var valeur2 = prompt("Entrer votre mot de passe");
    while ((i<3)&(essay>0)){
        i=1;
        
        if(mot_de_passe === valeur2){
            document.location.href = "https://mail.google.com/mail/u/0/#inbox/164121a7020b7705";
            i=4;
        }else {
            alert("Mot de passe est incorect ");
            i++;
            essay= essay-1;
            if (essay>0){
              var valeur2 = prompt("Entrer votre mot de passe essay n° "+ essay);
            } else{
                alert("mot de passe oublier");
                confirm("Voulez vous récupérer votre mot de passe");
            }
        }
}

}else {
    alert("pseudo est incorect");
  
}

// const NOM = "MOHAMED";
// var pseudo = prompt("Quel est votre pseudo ?");

// if (NOM == "MOHAMED") {
//     let NOM =" beau";
//     console.log(NOM);
// }

// if (pseudo != "MOHAMED") {
//     alert("Pseudo incorrect !!");
// } else {
//     var motDePasse = prompt("Quel est votre Mot de passe ?");
//     if (motDePasse != "YESSAD"){
//         alert("Mot de passe est incorrect");
//     }else {
//         document.location.href = "https://mail.google.com/mail/u/0/#inbox/164121a7020b7705";
//     }

// }


