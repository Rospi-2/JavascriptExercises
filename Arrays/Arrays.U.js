/*  1. Definiere die Wochentage in einem Array, lese vom Nutzer eine Zahl von 1-7 ein
und gib den entsprechenden Wochentag aus dem Array aus.*/

 weekDays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
const a=0;
console.log(weekDays[a]);

/* 2. Definiere ein Objekt mit diversen Daten eures lieblings Fahrzeugs (Auto, Motorrad, Fahrrad,...)
dabei sollten verschiedenen Datentypen verwendet werden. Gebt die Daten mit einem Template Literal
schön formatiert aus.
 */

 const car ={
     brand: "Seat",
     Motornummer: 897863805742,
     configuration:["Türe", "asset1", "asset2", "asset3"],
 }
 console.log(`Hier steht ${car.configuration}...`)

 /* Nutze die selbe Tabelle als zweidimensionales Array, aber lass den Nutzer eine
 eine Zeilennummer und den Namen einer Spalte angeben.Nutze
 zur Zuordnung des Spaltensnamens zu einer Spaltennummer ein Objekt. Gib den gewünschten Wert aus.
  */


const Tabelle1 = [
    ["Vorname", "Nachname", "Alter"],
    ["Hans", "Müller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayr", 19]
]

console.log(Tabelle1)
//********************************IMPORTANTE********************************//
/*Nutze die selbe Tabelle als zweidimensionales Array, aber lass den Nutzer
eine Zeilennummer und den Namen einer Spalte angeben. Nutze zur
Zuordnung des Spaltennamens zu einer Spaltennummer ein Objekt. Gib den
gewünschten Wert aus.*/
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
// Euer Code kommt hier hinein
    const line = parseFloat(await prompt("Please enter the desidered line number: "));
    const column = await prompt("Please enter the column: ")

    const columnNames = {Vorname:0, Nachname:1, Alter:2};
    const Tabelle2a = [
    ["Hans", "Müller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayr", 19]
    ]
const spaltenIndex = columnNames[column];
console.log(Tabelle2a[line][spaltenIndex]);


    /* otra manera con Arrays, sin objetos*/

    const lineArr = parseFloat(await prompt("Please enter the desidered line number: "));
    const columnArr = await prompt("Please enter the column: ")
const columnNamesArr = ["Vorname", "Nachname","Alter"];
    const spaltenIndexArr = columnNamesArr.indexOf(columnArr)
    console.log(Tabelle2a[lineArr][spaltenIndexArr]);



/*5. Lege die selbe Tabelle als Array von Objekten an, wobei die Spaltennamen
die Schlüssel in den Objekten darstellen. Lass den Nutzer eine Zeilennummer
und den Namen einer Spalte angeben, gib den gewünschten Wert aus.*/

const Tabelle3 = [
    {Vorname:"Hans", Nachname:"Müller", Alter:22},
    {Vorname:"Georg", Nachname: "Huber", Alter: 22},
    {Vorname:"Fritz", Nachname:"Mayr", Alter: 19}]
console.log(Tabelle3[0].Vorname)



}
execute().finally(() => rl.close());
