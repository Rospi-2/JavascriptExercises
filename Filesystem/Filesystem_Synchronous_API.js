/*Tipp: JSON.parse / JSON.stringify kann nicht nur mit JS Objekten, sondern auch mit Arrays (und allen anderen Datentypen außer Funktionen) umgehen.
Lest eine Datei data.json ein, und wandelt die Daten in ein JS Array um. Behandelt den Fehler, falls diese nicht existiert (geht dann von einem leeren Array für eure
Daten aus).
Lasst den Nutzer entscheiden ob er Daten hinzufügen möchte (Durch Eingabe von a), Daten finden (Eingagbe f) oder speichern und beenden (Eingabe x) möchte.
Hinzufügen von Daten: Fordert den Nutzer nacheinander auf, eine Produktnummer, eine Bezeichnung und einen Preis einzugeben. Danach wird ein neues Objekt
mit diesen Daten in das Data-Array eingefügt. Lasst den Nutzer danach wieder entscheiden, was er als nächstes machen möchte.
Daten.
Für diese Übung mit der Callback-API muss beim readFile ein async vor die callback-funktion eingefügt werden und es muss die letzte Zeile des Frameworks verändert
werden, sonst wird das Programm unter Umständen zu früh beendet. Verändert sie so wie unten abgebildet, ruft aber die Funktion rl.close() in dem Moment auf, in dem
ihr das Programm beenden möchtet (nach dem Schreiben der Datei (im callback)).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import readline from "readline";
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function execute() {
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
        const PfadJson = './FileSystem_Uebung.json'; 
    
        console.log(dataKatalog);
        let newKatalog;

        let isValid;
        do {
                let myOperation = await prompt("Please enter one action:\n - for adding a new product press a\n - for finding a product press f\n - for saving and end press x\n");
            isValid = (myOperation === "a" || myOperation === "f" || myOperation === "x");

            switch (myOperation) {
                case "a":
                    let askProductNumber = await prompt("Please enter a product number:");
                    let askProductName = await prompt("Please enter a product name:");
                    let askProductPreis = await prompt("Please enter a product price:");
                    let newProduct = {
                        Produktnummer: askProductNumber,
                        Bezeichnung: askProductName,
                        preis: askProductPreis
                    }
                    dataKatalog.push(newProduct);
                    break;
                case "f":
                    let notFound = true
                    let findProductNumber = await prompt("Please enter a product number:");
                    for (let i = 0; i < dataKatalog.length; i++) {
                        if (dataKatalog[i].Produktnummer === findProductNumber) {
                            console.log(dataKatalog[i]);
                            notFound = false;
                        }
                    }
                    if (notFound) {
                        console.log("Product not found")
                    }
                    break;
                    
                default:
                    console.log("Wrong input, please try it again!")
                    break;
                    
                case "x":
                    try {
                        const data = readFileSync(PfadJson, 'utf8');
                        const dataObj = JSON.parse(data);
                        dataObj.private = true;
                        const dataToWrite = JSON.stringify(dataKatalog, null, 2);
                        writeFileSync(PfadJson, dataToWrite, 'utf8');
                        console.log('File saved successfully!');
                    } catch (err) {
                        console.error('Error processing file'+ err);
                    }
                    console.log("See you again!!")
                    isValid = false;
                    break;
                    
            }

        } while (isValid);
        
        }execute().finally(() => rl.close());















//execute().catch((err) => { console.error(err); });// .finally(() => rl.close());
