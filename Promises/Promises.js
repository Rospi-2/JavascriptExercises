/*1. Schreibe die Übung aus dem letzten Kapitel so um, dass die Filesystem Promises-API genutzt wird. Nutze die .then Schreibweise.
2. Schreibe die Übung aus dem letzten Kapitel so um, dass die Filesystem Promises-API genutzt wird. Nutze die async/await Schreibweise
wo es möglich ist.
3. Es gibt die Funktion setTimeout(callbackFn, milliseconds), mit der man eine gegebene Callback-Funktion verzögert nach einer
gegebenen Zeit in Millisekunden (1000 entspricht einer Sekunde) ausführen lassen kann.
    Mach dich zunächst mit der setTimeout Funktion vertraut, probiere sie aus, bis du ihre Funktionsweise verstanden hast.
    Diese setTimeout Funktion gibt es nur als Callback-API, schreibe sei selbst auf Promises um, gib ihr den Namen pause und erlaube die
Übergabe eines milliseconds Parameters, so dass man sie beispielsweise mit await pause(3000) aufrufen kann.
    Nutze diese neue Funktion nun, um einen Ladebalken anzuzeigen und zu füllen, dieser soll mit hilfe von #-Zeichen und [ ] zur
Begrenzung dargestellt werden. Am Anfang sollen nur die eckigen Klammern mit 10 Leerzeichen dazwischen angezeigt werden, dann
soll sich der Balken sekündlich um ein #-Zeichen mehr füllen. Für Beispiele, wie die Ausgabe zu verschiedenen Zeitpunkten aussehen
soll, siehe unten. Nutze die Funktion console.clear() um den vorher ausgegebenen Text immer wieder wegzulöschen.*/

import {readFile, writeFile} from 'node:fs/promises';
import readline from "readline";
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));




const prod1 = {Produktnummer:"1", Bezeichnung: "Banane", preis: 1.79};
const prod2 = {Produktnummer:"11", Bezeichnung: "Bio-Banane", preis: 2.30};
const prod3 = {Produktnummer:"2", Bezeichnung: "Broccoli", preis: 2};
const prod4 = {Produktnummer:"21", Bezeichnung: "Bio-Broccoli", preis: 2.5};
const prod5 = {Produktnummer:"3", Bezeichnung: "Gurken", preis: 0.79};
const prod6 = {Produktnummer:"31", Bezeichnung: "Bio-Gurken", preis: 1.25};
const prod7 = {Produktnummer:"4", Bezeichnung: "Roma Tomaten", preis: 1.85};
const prod8 = {Produktnummer:"41", Bezeichnung: "Bio-Roma Tomaten", preis: 2.5};
const prod9 = {Produktnummer:"5", Bezeichnung: "San Marzano Tomaten", preis: 2.5};
const prod10 = {Produktnummer:"6", Bezeichnung: "Cherry Tomaten", preis: 15};

let dataKatalog = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10]
console.log(dataKatalog);
readFile('./package.json', 'utf8')
    .then((data) =>{
        console.log('File read', data);
    })
    .catch((err) =>{
        console.log.eror('Error reading file', err);
    })
    .finally(() => {
        console.log('After read or error');
    });
console.log('Before file was loaded');