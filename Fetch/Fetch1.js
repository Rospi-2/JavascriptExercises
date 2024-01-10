/*Nutzt die Fetch API zum Senden von Requests
Lest aus einer JSON-Datei aus, ob der Nutzer bereits einen Ort zwischengespeichert hat
(siehe Unten wie die Datei zustande kommt).
Wenn kein Ort zwischengespeichert ist, lasst den Nutzer einen Ort / eine Stadt eingeben,
    nutzt die Geocoding API um nach dem Ort zu suchen. (Nutzt die Funktion
encodeURIComponent um die Nutzereingabe URL-sicher zu machen)
Gebt eine nummerierte Liste der besten Ergebnisse aus und lasst den Nutzer durch
Zahleneingabe ein Ergebnis wählen, für welches er das Wetter sehen möchte. Speichert
den gewählten Ort in eine JSON Datei.
    Nach der Auswahl (oder wenn ein Ort in der JSON-Datei zwischengespeichert war), fragt
mit der Weather Forecast API die Wettervorhersage ab und gebt diese schön formatiert
aus. (Welche Daten ihr genau anzeigt, bleibt euch überlassen).
Lass den Nutzer anschließend entscheiden, ob er von einem anderen Ort das Wetter
abfragen oder das Programm beenden möchte.*/



import {readFile, writeFile} from 'node:fs/promises';
import readline from "readline";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
let dataArr

const data = readFile('./Fetch.json', 'utf8')
    .then((data) => {
        console.log('File read', data);
        console.log();
        let data1;
        let data2;
        let isValid=true;
            
            async function execute() {
                    const location = await prompt("Please enter your location or a city: ");
                    console.log();
                    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&format=json`;
                    console.log(url);
                    const response = await fetch(url);
                    data1 = await response.json();
                    /* Gebt eine nummerierte Liste der besten Ergebnisse aus und lasst den Nutzer durch
                     Zahleneingabe ein Ergebnis wählen, für welches er das Wetter sehen möchte. Speichert
                     den gewählten Ort in eine JSON Datei*/
                    if (data1.results.length === 0) {
                        console.log("Not results")
                    } else {
                        console.log("DEBUG", data1);
                        for (let i = 0; i < data1.results.length; i++) {
                            const nameLocations = i + "- " + data1.results[i].name;
                            console.log(nameLocations);
                        }
                        const weather = await prompt("Please enter a location number: ");
                        const urlweather = `https://api.open-meteo.com/v1/forecast?latitude=${data1.results[weather].latitude}&longitude=${data1.results[weather].latitude}&daily=precipitation_sum`;
                        const response = await fetch(urlweather);
                        data2 = await response.json();
                        console.log(data2);
                    }
            }
            execute().finally(() => rl.close());
        })
    .catch((err) => {
        console.error('Error reading file', err);
    })
    .finally(() => {
        console.log('After read or error');
    });
console.log('Before file was loaded');

    






