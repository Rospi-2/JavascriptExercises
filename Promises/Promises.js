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
rl.on('close', () => process.exit(0));

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
const PfadJson = './Promises.json';

readFile(PfadJson, 'utf8')
    .then((data) =>{
        console.log('File read', data);
    })
    .catch((err) =>{
        console.log('Error reading file', err);
    })
    .finally(() => {
        console.log('After read or error');
    });
console.log('Before file was loaded');
let isValid;
let notFound;
async function execute() {

    do {
        let myOperation = await prompt("Please enter one action:\n for adding a new product press a \n for finding a product press f \n for saving and end press x\n");
        isValid = (myOperation === "a" || myOperation === "f" || myOperation === "x");
        switch (myOperation) {
            case "a":
                let askProductNumber = await prompt("Please enter a product number:");
                let askProductName = await prompt("Please enter a product name:");
                let askProductPreis = await prompt("Please enter a product price:");
                addProduktnummer(askProductNumber,askProductName,askProductPreis)
                isValid = true;
                break;
            case "f":
                let notFound = true
                let findProductNumber = await prompt("Please enter a product number:");
                findProductNumber(findProductNumber);
                break;
            case "x":
                console.log("See you again!!")
                const dataToWrite = JSON.stringify(dataKatalog);
                SaveProductNumber(addProduktnummer());
                isValid = false
                break;
        }
        
    } while (isValid)

}
execute().finally(() => rl.close());

function isNotFloat (preis){
    if(preis % 1 !== 0){
    return true}
}

function addProduktnummer(NewProduktnummer, NewBezeichnung,Newpreis) {
    return new Promise1((resolve, reject) => {
        if (Number.isInteger(NewProduktnummer) || isNotString(NewBezeichnung) ) {
            reject('One or more values are not correct, please try it again');
        } else {
            let newProduct = {
                Produktnummer: NewProduktnummer,
                Bezeichnung: NewBezeichnung,
                preis: Newpreis
            }
            resolve(dataKatalog.push(newProduct));
        }
    });
}

function FindProduktnummer(findProduktnummer) {
    return new Promise2((resolve, reject) => {
        if (isNotNumber(findProduktnummer)) {
            reject('Error, no valid Product number please try it again');
        } else {
            for (let i = 0; i < dataKatalog.length; i++) {
                if (dataKatalog[i].Produktnummer === findProduktnummer) {
                    console.log(dataKatalog[i]);
                }
            }
            if (notFound) {
                console.log("Product not found")
            }
        }
            resolve(dataKatalog[i]);
        });
}

function SaveProductNumber (findProduktnummer) {
    return new Promise3((resolve, reject) => {
        if (isNotNumber(Produktnummer)) {
            reject('Error, no valid Product number please try it again');
        } else {
            for (let i = 0; i < dataKatalog.length; i++) {
                if (dataKatalog[i].Produktnummer === findProduktnummer) {
                    console.log(dataKatalog[i]);
                }
            }
            if (isValid === false) {
                console.log("Product not found")
            }
           
        }
        resolve(writeFile(PfadJson, dataToWrite, 'utf8',   (err) => {
            if (err) {
                console.error('Error writing file');
            } else {
                console.log('File saved successfully!');
            }
        }))
    });
}

