/*1. Date Klasse: Lasse das aktuelle Datum und Uhrzeit schön formatiert ausgeben.*/

console.log("Exercise 1: "+Date());

/*2. Math Klasse: Schreibe eine Funktion, die Zufallszahlen zwischen zwei Werten (die der Funktion
übergeben werden) zurückgibt. */

function getRandomInt(min,max){
    return Math.floor(Math.random()*min *max)
}
console.log("Exercise 2a: "+ getRandomInt(1,15));

/*Erweitere die Funktion um einen dritten Boolean-Parameter, der angibt, ob die Funktion nur ganze Zahlen
oder auch Kommazahlen zurückgeben darf, rundet sie gegebenenfalls auf ganze Zahlen.*/
//********************** TO BE IMPROVED *********************

/*function getRandom(min,max){

    return Math.random()*min *max
}
const z=getRandom(2,48);
console.log(z);
//
function istKommazahl(numero){
    const numero = (x % 1 !== 0) =>   {true:false};
}
 */

/*3. Array Klasse: Erstelle ein Array von Zahlen (nicht sortiert!), lass es sortieren.*/
for (var a=[],i=0;i<40;++i) 
    a[i]=Math.round(Math.random()*40);
console.log("Exercise 3: ")
console.log(a);
function compareNumbers(a, b) {
    return a - b;
}
console.log(a.sort(compareNumbers));

/*4. Object Klasse: Lasst alle Keys eines Objekts ausgeben - ohne eine for-in Schleife zu nutzen.*/

const lebensmittel= {
    category: 'Gemüse',
    name: 'Spinat',
    energy: 15,
    fett:0,
    kohlenhidrat:0,
    protein:23
}
console.log("Exercise 4: ")
console.log(lebensmittel.category);
console.log(lebensmittel.name);
console.log(lebensmittel.energy);
console.log(lebensmittel.fett);
console.log(lebensmittel.kohlenhidrat)
console.log(lebensmittel.protein)

/*5. JSON Klasse: Erstelle ein Objekt und lass dieses als JSON formatiert ausgeben.*/
console.log("Exercise 5: ")
console.log(JSON.stringify(lebensmittel.category));


/*6. Number Klasse: Lass den Nutzer eine Ganze Zahl als Binärzahl (als String, nur 0 und 1) eingeben,
    wandle sie in eine Dezimalzahl um.*/
console.log("Exercise 6: ")
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
    let number = await prompt("Please enter 0 or 1: ");
    let myNumber = parseFloat(number);
    if(myNumber===0 || myNumber===1) {
        console.log(myNumber.toFixed(2));
    }
    else {console.log("Error, please try again")
     }


/*7. String Klasse: Speicher den Text "Hallo Welt!" in einer Variable. Lass das Wort "Welt" mit einem Namen
ersetzen. Gib die länge des Textes und den ersten Buchstaben aus. Zerteile dann den Text am
Leerzeichen in ein Array und lass es ausgeben.*/
    console.log("Exercise 7: ")
const hallo ="Hallo Welt";
let welt = hallo.substring(6, 10); 
const name = "Peter";
console.log(welt);

function replaceString(string, newstr, altstr) {
    return string.split(altstr).join(newstr);
}

console.log(replaceString(hallo, name, welt));
console.log(hallo.length);
console.log(hallo.substring(0,1));

const halloarr =[hallo.substring(0, 5),hallo.substring(6, 10)];
console.log(halloarr);

}
execute().finally(() => rl.close());