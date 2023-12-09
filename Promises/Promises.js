/*1. Schreibe die Übung aus dem letzten Kapitel so um, dass die Filesystem Promises-API genutzt wird. Nutze die .then Schreibweise.
2. Schreibe die Übung aus dem letzten Kapitel so um, dass die Filesystem Promises-API genutzt wird. Nutze die async/await Schreibweise
wo es möglich ist.
3. Es gibt die Funktion setTimeout(callbackFn, milliseconds), mit der man eine gegebene Callback-Funktion verzögert nach einer
gegebenen Zeit in Millisekunden (1000 entspricht einer Sekunde) ausführen lassen kann.
    Mach dich zunächst mit der setTimeout Funktion vertraut, probiere sie aus, bis du ihre Funktionsweise verstanden hast.
    Diese setTimeout Funktion gibt es nur als Callback-API, schreibe sei selbst auf Promises um, gib ihr den Namen pause und erlaube die
Übergabe eines milliseconds Parameters, so dass man sie beispielsweise mit await pause(3000) aufrufen kann.
    Nutze diese neue Funktion nun, um einen Ladebalken anzuzeigen und zu füllen, dieser soll mit hilfe von #-Zeichen und [ ] zur
Begrenzung dargestellt werden. Am Anfang sollen nur die eckigen Klammern mit 10 Leerzeichen dazwischen angezeigt werden, dann
soll sich der Balken sekündlich um ein #-Zeichen mehr füllen. Für Beispiele, wie die Ausgabe zu verschiedenen Zeitpunkten aussehen
soll, siehe unten. Nutze die Funktion console.clear() um den vorher ausgegebenen Text immer wieder wegzulöschen.*/

