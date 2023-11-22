
/*2. Erstelle ein Array von Objekten (zum Beispiel Namen und Alter), und gib sie mit einer Schleife nacheinander auf die
Konsole aus.*/

const perArray =[
    {namen: "Jaimito", alter:89},
    {namen: "Pedro", alter:78},
    {namen: "Sara", alter:8} ];
for (let i=0; i<perArray.length; i+=1){
    console.log(perArray[i])
}

/*Lies vom Benutzer einen Wochentag (1-7) ein, bei ungültigen Eingaben wiederhole das einlesen! Gib anschließend
den Namen des Wochentags aus.*/

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
    let numberInput;
    let isInputValid = false;
    do {
        numberInput = parseFloat(await prompt('Please enter a number from 1-7 for a weekday '));
        isInputValid = !Number.isNaN(numberInput) && (numberInput<8 && numberInput>0);
        if (!isInputValid) {
            console.log('Invalid input');
        }
        else if (numberInput == 1) {
            console.log('Monday')
        } else if (numberInput == 2) {
            console.log('Tuesday')
        } else if (numberInput == 3) {
            console.log('Wednesday')
        } else if (numberInput == 4) {
            console.log('Thursday')
        } else if (numberInput == 5) {
            console.log('Friday')
        } else if (numberInput == 6) {
            console.log('Saturday')
        } else if (numberInput == 7) {
            console.log('Sunday')}

} while (!isInputValid);
console.log(`Valid input: ${numberInput}`);
}
execute().finally(() => rl.close());

/*3. Zahlenraten für 2 Spieler:
    Lass Spieler 1 eine ganze Zahl zwischen 1 und 100 eingeben, lass ihn die Eingabe wiederholen, wenn ein
ungültiger Wert eingegeben wurde. (Überlege dir, wie du auf den Wertebereich und auf ganze Zahlen prüfen
kannst)
Nach gültiger Eingabe, nutze die Funktion console.clear(); um die bisherigen Ein- und Ausgaben vor Spieler 2 zu
verbergen.
    Lass Spieler 2 so lange Zahlen raten (eingeben), bis er die richtige Zahl eingibt. Gib jeweils aus, ob die gesuchte
Zahl größer oder kleiner ist, oder ob die Eingabe ungültig war.
    Gib anschließend aus, wie viele Versuche Spieler 2 gebraucht hat, um die Zahl zu erraten.*/


async function execute2(){

        let numberPLayer1;
        let numberPLayer2;
        let isInputValid1 = false;
        let isInputValid2 =false;
        do {
            numberPLayer1 = parseInt(await prompt('Please enter a number between 1 and 100'));
            isInputValid1 = !Number.isNaN(numberInput1) && (numberInput1<101 && numberInput1>0);
            if (!isInputValid1) {
                console.log('Invalid input');
            }
            let result = numberPLayer1;
            console.clear();
           numberPLayer2 = parseInt(await prompt("Find the number from player 1"));
            if (result === numberPLayer2) {
             console.log("you win")}
            else if(numberPLayer2 < result) {
             console.log("the number from player 1 is a smaller number")}
            else if(numberPLayer2 > result) {
                 console.log("the number from player 1 is a greater number")}
            else console.log("Try again ");
    } while (!isInputValid1);
            console.log(`Valid input: ${numberPLayer1}`);
}




execute2().finally(() => rl.close());