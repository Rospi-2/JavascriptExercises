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

const Tabelle2 = {Vorname:0, Nachname:1, Alter:2};
const Tabelle2a = [
    ["Hans", "Müller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayr", 19]
]
console.log(Tabelle2)

const Tabelle3 = [
    {Vorname:"Hans", Nachname:"Müller", Alter:22},
    {Vorname:"Georg", Nachname: "Huber", Alter: 22},
    {Vorname:"Fritz", Nachname:"Mayr", Alter: 19}]
console.log(Tabelle3[0].Vorname)

