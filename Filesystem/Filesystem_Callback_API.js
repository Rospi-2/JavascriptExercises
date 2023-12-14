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

import {readFile, writeFile} from 'node:fs';
import readline from "readline";
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const PfadJson = './FileSystem_Uebung.json';

readFile(PfadJson, 'utf8', async (err, data) => {
    console.log("DEBUG MY PRODUCTS", data);
    const dataArr = JSON.parse(data);
    console.log(dataArr);
    if (err) {
        console.error('Error reading file');
    } else {
        console.log('File read');
        
        let isValid;
        do {
            let myOperation = await prompt("Please enter one action:\n for adding a new product press a \n for finding a product press f \n for saving and end press x\n");
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
                    dataArr.push(newProduct);
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
                    if (notFound){
                        console.log("Product not found")
                    }
                        break;
                case "x":
                    console.log("See you again!!")
                    isValid = false;
                    break;
                default:
                    console.log("Wrong input, please try it again!")
                    break;
            }
        } while (isValid)
        
            const dataToWrite = JSON.stringify(dataArr, null, 2);
            writeFile('C:\\Users\\rosam\\Desktop\\Codersbay\\Web\\Javascript\\JavascriptExercises\\Filesystem\\FileSystem_Uebung.json', dataToWrite, 'utf8', async (err) => {
                if (err) {
                    console.error('Error writing file');
                } else {
                    console.log('File saved successfully!');


                }
            });

    }
})













//execute().catch((err) => { console.error(err); });// .finally(() => rl.close());
