const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
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
function right (row,column){
    return object.right[row][column+1];
}
execute().finally(() => rl.close());

let Laberinto = [
    ["#", {S: "X"}, "#", "#", "#", "#", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", "#", "#", "#", " ", "#"],
    ["#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", " ", " ", "#", " ", "#"],
    ["#", "#", "#", "#", "#", {Z: "O"}, "#"]
]
console.log(Laberinto.join("\n")+"\n\n")

function labi(row,column){

}

function findWay(direction) {
    function find(row, coulmn) {
        if (current == target) { return history; }
        else if (current > target) { return null; }
        else {
            return find(current + 3,`(${history} + 3)`) ||
                find(current * 2,`(${history} * 2)`);
        }
    }
    return find(1,"1");
}
function direcciones(laberinto) {
    const aExplorar = [['', laberinto]];

    while (aExplorar.length != 0) {
        const [camino, objeto] = aExplorar.shift()

        for (let [direccion, casilla] of Object.entries(objeto)) {
            if (casilla == 'destino') {
                return camino + direccion;
            }

            if (casilla != 'pared') {
                aExplorar.push([camino + direccion, casilla])
            }
        }
    }

    return "" // Retornamos vacío si no hay camino
}





