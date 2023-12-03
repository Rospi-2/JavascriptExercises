/*Erstellt eine Datei logger.js, in der ihr die Funktionen logRed, logGreen und logBlue
definiert und exportiert nutzt dabei die chalk Library um den übergebenen Text in Blau,
Rot oder Grün auf der Konsole auszugeben.*/

//Funktionen logRed, logGreen und logBlue

import chalk from 'chalk';
import {text} from "express";


export function logRed(x){
    return console.log(chalk.red(x))
};

export function logBlue(x){
    return console.log(chalk.blue(x))
};
export function logGreen(x){
    return console.log(chalk.green(x))
};


const red ="Hello World";
const blue ="Hello World";
const green ="Hello World";

logRed(red);
logBlue(blue);
logGreen(green);