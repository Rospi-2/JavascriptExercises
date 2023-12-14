
import {readFile, writeFile} from 'node:fs';
import readline from "readline";
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const PfadJson = './FileSystem_Uebung.json';
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
console.log(dataKatalog[1].Produktnummer);


readFile(PfadJson, 'utf8', async (err, data) => {
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

        const dataToWrite = JSON.stringify(dataKatalog);
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
