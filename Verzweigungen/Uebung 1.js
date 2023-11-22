
/*1. Lege im Code in einer Konstante ein "Passwort" fest (bitte kein echtes, das wird sichtbar im Repository
gepusht und dient nur der Übung!). Lasse den Nutzer ein Passwort eingeben und gebe mit einem
if/else aus, ob das eingegebene Passwort richtig oder falsch ist.*/
const readline = require('readline');
const zlib = require("zlib");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
    let passwort = String(await prompt('Please enter a password, with at least 6 characters '));
    if (passwort === "holacaracola"){
        console.log("Me encanta que los planes salgan bien")
    }



    const Temperatur = parseFloat(await prompt('Please enter a temperature, '));
    // ändere diesen Wert und überprüfe die Ausgabe
    if (Temperatur < 15) {
        console.log('Heute ist kalt');
    } else if (Temperatur < 2) {
        console.log('heute ist eiskalt');
    } else if (Temperatur >= 15) {
        console.log('heute ist warm');
    } else if (Temperatur > 25) {
        console.log('heute ist warm');
    } else if (Temperatur > 35) {
        console.log("heute ist unverträglich")
    };


    const diaSem = 9;
    if (diaSem == 1) {
        console.log('Heute ist Montag');
    } else if (diaSem == 2) {
        console.log('Heute ist Dienstag');
    } else if (diaSem == 3) {
        console.log('Heute ist Mittwoch');
    } else if (diaSem == 4) {
        console.log('Heute ist Donnerstag');
    } else if (diaSem == 5) {
        console.log('Heute ist Freitag');
    } else if (diaSem == 6) {
        console.log('Heute ist Samstag');
    } else if (diaSem == 7) {
        console.log('Heute ist Sonntag');
    } else {
        console.log('falsche Angabe');
    }
    const semDia = parseFloat(await prompt('Please enter a week day number: '));
    switch (semDia) {
        case 1:
            (semDia == 1)
            console.log('Heute ist Montag');
            break;
        case 2:
            (semDia == 2)
            console.log('Heute ist Dienstag');
            break;
        case 3:
            (semDia == 3)
            console.log('Heute ist Mittwoch');
            break;
        case 4:
            (semDia == 4)
            console.log('Heute ist Donnerstag');
            break;
        case 5:
            (semDia == 5)
            console.log('Heute ist Freitag');
            break;
        case 6:
            (semDia == 6)
            console.log('Heute ist Samstag');
            break;
        case 7:
            (semDia == 7)
            console.log('Heute ist Sonntag');
            break;
        default:
            console.log('falsche Angabe');
            break;
    }

    const zahlA = parseFloat(await prompt('Please enter the first number: '));
    const zahlB = parseFloat(await prompt('Please enter the second number: '));
    let operator = String(await prompt('Please enter an operator (+,-,*,/ ):'));
    switch (operator) {
        case 1:
            (operator === "+")
            console.log("Addition: " + zahlA + zahlB);
            break;
      /*  case 2:
            (operator === "-")
            console.log("Subtraction: " + zahlA - zahlB);
            break;
        case 3:
            (operator === '*')
            console.log("Multiplication: " + zahlA * zahlB);
            break;
        case 4:
            (operator === "/")
            console.log("Division: " + zahlA / zahlB);
            break; */
        default:
            console.log('falsche Angabe');
            break;
    }

    const zahlC = parseFloat(await prompt('Please enter a number: '));
    if (zahlC % 1 !== 0) {
        console.log("Das ist a Komma Zahl")
    }
    else if(zahlC % 2 === 0){
        console.log("Das ist ein gerade Zahl")
        }
    else {
        console.log("Das ist ein ungerade Zahl")
    }


}
execute().finally(() => rl.close());
