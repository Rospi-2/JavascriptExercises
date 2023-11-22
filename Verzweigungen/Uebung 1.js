
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
    if (Temperatur < 2 && Temperatur < 15) {
        console.log('heute ist eiskalt');
    } else if (Temperatur >= 15 && Temperatur < 25) {
        console.log('heute ist warm');
    } else if (Temperatur > 25 && Temperatur < 35) {
        console.log('heute ist warm');
    } else if (Temperatur > 35) {
        console.log("heute ist unverträglich")
    };




    let diaSem = 6;
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

    const semDia = String(await prompt('Please enter a week day number: '));
    switch (semDia) {
        case '1':
            console.log('Heute ist Montag');
            break;
        case "2":
            console.log('Heute ist Dienstag');
            break;
        case "3":
            console.log('Heute ist Mittwoch');
            break;
        case "4":
            console.log('Heute ist Donnerstag');
            break;
        case "5":
            console.log('Heute ist Freitag');
            break;
        case "6":
            console.log('Heute ist Samstag');
            break;
        case "7":
            console.log('Heute ist Sonntag');
            break;
        default:
            console.log('falsche Angabe');
            break;
    }
/*Lies einen einzelnen Buchstaben ein und gib aus, ob es ein Vokal oder Konsonant ist. Nutze dafür ein
switch-case mit fall-through und default case.*/

    const letter = String(await prompt('Please enter a letter: '));
    switch (letter) {
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
            console.log('This is a vocal');
            break;

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log('This is a consonant');
            break;
        default:
            console.log('falsche Angabe');
            break;
    }


    const zahlA = parseFloat(await prompt('Please enter the first number: '));
    const zahlB = parseFloat(await prompt('Please enter the second number: '));
    let operator = String(await prompt('Please enter an operator (+,-,*,/ ):'));
    switch (operator) {
        case "+":
            console.log("Addition: " + (zahlA + zahlB));
            break;
        case "-":
            console.log("Subtraction: " + zahlA - zahlB);
            break;
        case '*':
            console.log("Multiplication: " + zahlA * zahlB);
            break;
        case "/":
            console.log("Division: " + zahlA / zahlB);
            break;
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

   /* Lese vier Zahlen vom Benutzer ein, und gib die größte davon zurück. Nutze dabei Ternäre Ausdrücke*/
    const zahl1 = String(await prompt('Please enter the first number: '));
    const zahl2 = String(await prompt('Please enter the second number: '));
    const zahl3 = String(await prompt('Please enter the third number: '));
    const zahl4 = String(await prompt('Please enter the fourth number: '));
    const isBigger12 = zahl1 >= zahl2 ? zahl1 : zahl2;
    const isBigger34 = zahl3 >= zahl4 ? zahl3 : zahl4;
    const isBigger = isBigger12 >= isBigger34 ? isBigger12 : isBigger34;
    console.log(`The greater number is:  ${isBigger}`);


}
execute().finally(() => rl.close());
