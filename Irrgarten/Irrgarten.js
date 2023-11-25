const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function getNumberInput() {
    let directionInput;
    let isInputValid = false;
    let Labyrinth = [
        ["#", {S: "X"}, "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#"],
        ["#", " ", "#", "#", "#", " ", "#"],
        ["#", " ", "#", " ", "#", " ", "#"],
        ["#", " ", " ", " ", "#", " ", "#"],
        ["#", "#", "#", "#", "#", {Z: "O"}, "#"]
    ]
    console.log(Labyrinth.S);
    do {
        directionInput = String(await prompt('Try to get out form the labyrinth, ' +
            'enter a direction (u/d/l/r): '));
        isInputValid = (directionInput === "u") || (directionInput === "d") || (directionInput === "l") || (directionInput === "r");
        if (!isInputValid) console.log('Invalid input');
    } while (!isInputValid);
    return directionInput;
    const number = await getNumberInput();

    if(directionInput===r){
        console.log(Labyrinth);
    }
}

getNumberInput().finally(() => rl.close());


   /* switch (directionInput){
        case "r":
            if( S.Labyrinth)
    }*/




function right (row,column){
    return object.right[row][column+1];
}




