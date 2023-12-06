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

import {readFile} from 'node:fs';
readFile('', 'utf8', async (err, data) => {
if (err) {
    console.error('Error reading file');
}else{
console.log('File read', err, data);}});

const prod1 = {Produktnummer:1, Bezeichnung:"Banane",preis:1.79};
const prod2 = {Produktnummer:11, Bezeichnung:"Bio-Banane",preis:2.30};
const prod3 = {Produktnummer:2, Bezeichnung:"Boccoli",preis:2};
const prod4 = {Produktnummer:21, Bezeichnung:"Bio-Broccoli",preis:2.5};
const prod5 = {Produktnummer:3, Bezeichnung:"Gurken",preis:0.79};
const prod6 = {Produktnummer:31, Bezeichnung:"Bio-Gurken",preis:1.25};
const prod7 = {Produktnummer:4, Bezeichnung:"Roma Tomaten",preis:1.85};
const prod8 = {Produktnummer:41, Bezeichnung:"Bio-Roma Tomaten",preis:2.5};
const prod9 = {Produktnummer:5, Bezeichnung:"San Marzano Tomaten",preis:2.5};
const prod10 = {Produktnummer:6, Bezeichnung:"Cherry Tomaten",preis:15};

writeFile('C:\\Users\\rosam\\Desktop\\Codersbay\\Web\\Javascript\\JavascriptExercises\\Filesystem\\FileSystem_Uebung.json', prod1,prod2,prod3, prod4,prod5,prod6,prod7,prod8,prod9,prod10, 'utf8', (err) => {
// auf Fehler prüfen
    if (Object.preis===0) {
        console.error('Error writing file');
    } else {
        console.log('File saved successfully!');
    }


execute().catch((err) => { console.error(err); });// .finally(() => rl.close());
