/**
 * L E S O U T I L S P O U R P R A T I Q U E R
  Pour commencer à coder en JS, les seules applications dont nous avons besoin sont :
  - Un éditeur de texte (Notepad ++ fera l’affaire)
  - Un navigateur (Firefox est recommandé)
  - Le module Firebug pour Firefox (pour voir notre code source dans le navigateur)
  - Le module Web Developer pour Firefox (nous indique les erreurs JS)
  S Y N T A X E E T A F F I C H A G E S
  Note importante : Le Javascript est sensible à la casse
  Exemples:  <script type= « text/javascript »>
              alert(‘Bonjour’);
            </script>
  * La fonction d’affichage alert(), permet d’écrire dans une boîte de dialogue,
  * Ouverture de la balise <script> pour écrire du JS,
  Message affiché en QUOTES ou GUILLEMETS
  Une instruction JS se terminera TOUJOURS par un point virgule,
  * Fermeture de la balise </script>
    <script type="text/javascript"> confirm('Tu commences le JS');</script>
  * Cette fonction affiche une boîte de dialogue avec le bouton « OK »
    <script type="text/javascript"> prompt('Quel âge as-tu ?');</script>
  * Affiche une boîte de dialogue avec une question et un champ pour remplir la réponse
    <script type="text/javascript"> console.log('Voici la console');</script>
  * Affiche le message dans une console
 */

/**
 * Les variables
 * D E F I N I T I O N
« Emplacement de stockage nommé qui peut contenir des données pouvant être modifiées pendant
l'exécution du script. Chaque variable a un nom qui l'identifie de façon unique à l'intérieur de son
niveau de portée. »
Plus simplement, une variable est une zone en mémoire du système, qui sert à conserver une valeur.
Les variables sont des sortes de boîtes dans lesquelles on stock des données.
Une fois les données stockées dans cette variable, nous pouvons manipuler le contenu de cette
variable, le contenu est appelé la « valeur ».
*/
D E C L A R A T I O N E T A F F E C T A T I O N
Exemple :
var maBoite = 'Salut toi !';
alert(maBoite);
// Affichera son contenu DONC 'Salut toi !'
/**
 * Pour déclarer une variable on utilise le mot clé « var ».
Le signe « = » permet d’affecter la variable d’une valeur. Ainsi chaque fois que l’on manipulera une
variable cela veut dire que l’on manipule son contenu, donc sa valeur.
Pour faire comprendre à notre machine que l’on utilise une variable et non du texte brut on écrit la
variable sans quottes ni guillemets.
 */
var monMessage= 'Coucou !';
alert(monMessage);
// Affichera son contenu DONC 'Coucou !'
alert('monMessage');
// Affichera 'monMessage' car se trouve entre quottes
// Nous pouvons stocker plusieurs sortes de données dans les variables
var monPrenom = "Pierre";
alert(monPrenom) ; // affichera Pierre
var monAge = 27;
//les chiffres ne prennent pas de quottes
var monAge = prompt('Quel âge as-tu ?'); // Ici j’affecte la valeur que
// l’internaute rentrera dans le champ généré par prompt
var monPrenom = "Marie"; // Ici Marie prendra la place de Pierre dans la
variable
alert(monPrenom) ; // affichera Marie

/**
 * L E S P O R T E E S D E S V A R I A B L E S
Lorsqu’on affecte une variable, nous pouvons manipuler la valeur affectée à cette variable.
Elle nous est donc accessible. Cependant, cette accessibilité dépend de l’endroit où la variable a été
affectée. On parle donc de la portée de la variable.
 */
-
/**
 * Une variable déclarée en dehors de toute fonction peut être utilisée n’importe où dans le
script. On parle alors de VARIABLE GLOBALE.
 */
-
/**
 * Une variable déclarée dans une fonction aura une portée limitée à cette seule fonction, c’est-
à-dire quelle est inutilisable ailleurs. On parle alors de VARIABLE LOCALE.
Pour déclarer une variable à l’intérieur d’une fonction et la rendre GLOBALE donc accessible de
partout dans le script, celle-ci doit être déclarée sans le mot clé var. Exemple :
 */
monMessage = 'Salut' ;

/**
 * Pour bien comprendre l’utilité de la portée des variables ainsi que leur utilisation, se reporter au
chapitre des fonctions.
LES TYPES DE VARIABLES
En Javascript comme dans tous les langages de programmation il existe plusieurs types de données.
La fonction typeof() permet d’obtenir le type d’une donnée
Les nombres :
 */
var a = 36 ;
alert(typeof(a)) ; // Affichera « number »
// Les nombres simples sont dits « integer » et les nombres à virgule sont dits « float » ou « double ».
// On remarquera que lorsqu’on affecte un nombre, on ne met pas de quottes ni de guillemets.
// Les chaines de caractères (textes) :
var a = ‘Salut !’ ;
alert(typeof(a)) ; // Affichera « string »
// Les chaines de caractères ou textes sont appelés « string ».
// Les booléens :
var a = true ;
var b = false ;
// Une donnée a toujours une valeur, c'est-à-dire qu’elle est soit VRAIE soit FAUSSE (true ou false).
// Si var = 0, sa valeur est considérée comme FALSE,
// Si var = 1, ou n’importe quelle autre valeur (‘salut’ ou autre..), sa valeur est considérée comme TRUE.

/**
 * Les structures conditionnelles
  D E F I N I T I O N
  Nous appelons structure conditionnelle, la structure qui permet de réaliser une (ou plusieurs)
  instruction(s) sous certaines conditions. Elle nécessite l'utilisation des opérateurs de comparaisons et
  parfois des opérateurs logiques.
  En Javascript, comme dans tout langage de programmation, nous utilisons des conditions.
  Mettre une condition consiste à écrire du code Javascript, qui ne sera exécuté que si la personne
  rempli la condition.
  Par exemple, à l’aide du code JS, je demande à l’internaute quel est son sexe. Celui-ci me répond
  « féminin » ou « masculin ».
  S’il répond « féminin », j’affiche un background rose.
  Sinon, s’il répond « masculin », j’affiche un background bleu.
  Sinon s’il répond autre chose, ou ne répond pas, je lui écris « tu ne réponds pas à la question ».
  S Y N T A X E D E S C O N D I T I O N S I F , E L S E I F , E L S E
 */
if (ma condition) // voir les opérateurs de comparaisons, sous-chapitre suivant.
{ // Ne pas oublier l’ouverture d’accolade
alert("Mon message"); // Ce code ne sera exécuté QUE si la
condition est remplie, NE PAS OUBLIER LE POINT VIRGULE
} // IMPORTANT : Ne pas oublier les ACCOLADES, JAMAIS de POINT VIRGULE
// à la fermeture d’accolades
else if (mon autre condition)
{
alert("mon autre message");
}
else
{
alert("mon dernier message");
}

var question = prompt("De quel sexe es-tu ?") ;
// Ici la réponse de l’internautesera stockée dans la variable « question ».
if(question == "masculin") //Si la valeur de la variable est « masculin »
{
alert("Tu es un homme"); // Ce code ne sera exécuté QUE si la réponse
// est « masculin »
}
else if(question == "feminin") // Sinon si la valeur de la variable est
// « feminin »
{
alert("mon autre message"); // Le code précédent ne sera pas exécuté et CE code ci ne sera exécuté QUE si la réponse est « féminin »
}
else // Sinon, c'est-à-dire dans tous les autres cas.
{
alert("Ah .. Tu n’es ni l’un ni l’autre ?");
}
/**
 * LES OPERATEURS DE COMPARAISON
  Lorsqu’on pose une condition, pour que l’ordinateur comprenne que la condition est valide ou
  invalide. Le résultat de cette condition est forcément true ou false.
  Exemple dans le cas précédent, notre condition était if(question == 'masculin') ;
  Si la condition est remplie, le résultat sera true.
  Si la condition n’est pas remplie, le résultat sera false.
  Le résultat est donc un booléen.
  Les opérateurs de comparaison permettent de tester, l’égalité ou la différence entre deux données.
  Tous les tests sont à placer dans la condition if entre les deux parenthèses.
  Égal (==) Renvoie true si les valeurs des données sont égales.
 */
if(3 == var1)
if("3" == var1)
if(3 == '3')
// Différent (!=) Renvoie true si les valeurs des données ne sont PAS égales.
if(var1 != 4)
if(var2 != "3")
// Strictement égal (===) Renvoie true si les valeurs des données sont égales ET du même type.
if(3 === var1)


// Strictement différent (!==) Renvoie true si les valeurs des données ne sont PAS égales et/ou PAS du même type.
if(var1 !== "3")
if(3 !== '3')
// Plus grand que (>) Renvoie true si la valeur de gauche est plus grande que la valeur de droite.
if(var2 > var1)
if("12" > 2)
// Plus grand ou égal (>=) Renvoie true si la valeur de gauche est plus grande ou égale à la valeur de droite.
if(var2 >= var1)
if(var1 >= 3)
// Plus petit que (<) Renvoie true si la valeur de gauche est plus petite que la valeur de droite.
if(var1 < var2)
if("12" < var2)
// Plus petit ou égal (<=) Renvoie true si la valeur de gauche est plus petite ou égale à la valeur de droite.
if(var1 <= var2)
if(var2 <= 5)