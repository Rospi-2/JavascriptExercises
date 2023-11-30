const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));


let Laberinto = [
    ["#", " ", "#", "#", "#", "#", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", "#", "#", "#", " ", "#"],
    ["#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", " ", " ", "#", " ", "#"],
    ["#", "#", "#", "#", "#", " ", "#"]
]



function printField(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].join("  ")) &&
        console.log();
    }
}

printField(Laberinto);

const Spieler = {r: 0, c:1};
const Ziel= {r: 7, c:6};

printField(Laberinto);


async function execute() {
// Euer Code kommt hier hinein

    do {
        const direction = await prompt("Try to get the gift at the end of the labyrinth," +
            " Please enter a direction (u/d/l/r: ");
        switch (direction) {
            case "u":
                goUp(Laberinto, Spieler.r, Spieler.c, Spieler,Spieler.r, Spieler.c);
                Laberinto[Spieler.r][Spieler.c]="S"
                printField(Laberinto)
                Laberinto[Spieler.r][Spieler.c]=" "
                break;
            case "d":
                goDown(Laberinto, Spieler.r, Spieler.c, Spieler,Spieler.r, Spieler.c);
                Laberinto[Spieler.r][Spieler.c]="S"
                printField(Laberinto)
                Laberinto[Spieler.r][Spieler.c]=" "
                break;
            case "l":
                goLeft(Laberinto, Spieler.r, Spieler.c, Spieler,Spieler.r, Spieler.c);
                Laberinto[Spieler.r][Spieler.c]="S"
                printField(Laberinto)
                Laberinto[Spieler.r][Spieler.c]=" "
                break;
            case "r":
                goRight(Laberinto, Spieler.r, Spieler.c, Spieler,Spieler.r, Spieler.c);
                Laberinto[Spieler.r][Spieler.c]="S"
                printField(Laberinto)
                Laberinto[Spieler.r][Spieler.c]=" "
                break;
            default:
                console.log("Ohje! please try again");
                break;
        }

    } while (Spieler.r !== Ziel.r && Spieler.c !== Ziel.c )
    console.log("Congratulations! You've achieved the exit, you get the present!!")

}

execute().finally(() => rl.close());


function getIndex(arr, o) {
    return indexOf(o.arr);
}

function getLaberinto() {
    return console.log(Laberinto);
}

function goRight(arr, row, column, Spieler,r,c) {
    if (arr[row][column + 1] === " ") {
       Spieler.r = row
        Spieler.c = column + 1
    } else console.log("Wall");

}

function goLeft(arr, row, column,Spieler,r,c) {
    if (arr[r][c - 1] === " ") {
        Spieler.r = row
        Spieler.c = column-1
    } else console.log("Wall");
}

function goUp(arr, row, column,Spieler,r,c) {
    if (arr[r - 1][c] === " ") {
       Spieler.r = row-1
        Spieler.c = column
    } else console.log("Wall");
}

function goDown(arr, row, column, Spieler, r,c ) {
    if (arr[r + 1][c] === " ") {
        Spieler.r = row+1
        Spieler.c = column
    } else console.log("Wall");
}

