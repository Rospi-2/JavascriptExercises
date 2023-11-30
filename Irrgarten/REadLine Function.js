const getName =() => {
    console.log("getName wird gerufen")

    console.log("getName wird verlassen")
}

const getGrades =(irgendeineFunktion) => {
    console.log("getGrades wird gerufen")

    irgendeineFunktion()

    console.log("getGrades wird verlassen")
}

const getAge =() => {
    console.log("getAge wird gerufen")

    console.log("getAge wird verlassen")
}

getGrades(getName)




// Um diese Beispiel zu lösen muss unser Funktion getAge eine Funktion liefern wie zum Beispiel unten:

const getAge1 =() => {
    console.log("getAge wird gerufen")

    console.log("getAge wird verlassen")
    return getName;
}

getGrades(getAge1())