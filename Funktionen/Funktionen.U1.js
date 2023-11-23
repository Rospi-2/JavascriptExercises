/*1. Erstelle eine normale Funktion "isEven" der ihr eine Zahl übergebt. Die Funktion
sollte true zurückgeben, wenn die Zahl gerade ist, oder false wenn sie ungerade
ist.*/

function istEven (a){
    const modulo = a % 2 ;
    if (modulo === 0) {
        return console.log("true");
    }
    else if (modulo !== 0){
        return console.log("false");
    }
    else
        return console.log("This is not a number");
}

/* 2. Erstelle eine Arrow-Function "isEven" (so kurz wie möglich), der ihr eine Zahl
übergebt. Die Funktion sollte true zurückgeben, wenn die Zahl gerade ist, oder
false wenn sie ungerade ist. */

const arrowIstEven = (a) =>  {
    if( a % 2 === 0) {
        return console.log("true");
    }
    else {return console.log("false");}
}

arrowIstEven(8)

/*3. Erstelle eine Funktion, der man bis zu vier Zahlen übergeben kann, die Funktion
sollte die größte der Zahlen zurückgeben.*/

function reihe(a,b,c,d) {
    if(a>b && a>c && a>d)
    {return console.log(a)}
    else if(b>a && b>c && b>d)
    {return console.log(b)}
    else if(c>a && c>b && c>d)
    {return console.log(c)}
    else if(d>a && d>b && d>c)
    {return console.log(d)}
}

reihe(7,9,8,10);