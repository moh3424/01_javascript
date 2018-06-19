// // initialisation de l'objet moi
// var moi;

// moi = "mohamed";//une valeur de type string

// // alert("salut" +"  "+ moi);

// moi=30;//type number
// // alert("salut" + "   " + moi);

// moi= true; // type boolean
// // alert("salut" + "  " + moi);
// moi= 12.5;// type float

// moi= ["mohamed", 30, 12.5, true];// type array
// alert("Salut" + moi[0] +" tu as" + " " + moi[1]+ " et " + moi[2]+"  " + moi[3] );
// console.log("Salut" + moi[0] +" tu as" + " " + moi[1]+ " et " + moi[2]+"  " + moi[3] );
// document.write(moi);
var b = 5;
var a = 10;
var c= 3;
var s=a+b;
var div=a/b;
var mult=a*b;
var mod2=b%c;
var mod1=a%b;// renvoi le reste de la division



// alert("somme =" +s);//alert permet d'afficher sur la page web
// console.log("somme ="+s);//permet d'afficher dans la console
// console.log("division ="+div);
// console.log("multiplication ="+mult);
// console.log("modulo =" +mod);
// document.write("somme ="+s);

/*
document.write("division ="+div);
document.write("multiplication ="+mult);
document.write("modulo =" +mod2);
document.write("modulo =" +mod1);
*/
val1 = 5;
val2= 5;
if ((val1 === "5") || (val2 === 5)){
    console.log(val1, +" "+ val2);
}

if ((5==5) && ("5"==5)){
    console.log (typeof(5==5));
    console.log (typeof("5"==5));
    console.log (typeof("5"));
    console.log (typeof(5));
}

if (!((5===5) && ("5"===5))){// negation de condition
    console.log (typeof(5==5));
    console.log (typeof("5"==5));
    console.log (typeof("5"));
    console.log (typeof(5));
}

