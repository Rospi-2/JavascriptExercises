/*Tipp: JSON.parse / JSON.stringify kann nicht nur mit JS Objekten, sondern auch mit Arrays (und allen anderen Datentypen außer Funktionen) umgehen.
Lest eine Datei data.json ein, und wandelt die Daten in ein JS Array um. Behandelt den Fehler, falls diese nicht existiert (geht dann von einem leeren Array für eure
Daten aus).
Lasst den Nutzer entscheiden ob er Daten hinzufügen möchte (Durch Eingabe von a), Daten finden (Eingagbe f) oder speichern und beenden (Eingabe x) möchte.
Hinzufügen von Daten: Fordert den Nutzer nacheinander auf, eine Produktnummer, eine Bezeichnung und einen Preis einzugeben. Danach wird ein neues Objekt
mit diesen Daten in das Data-Array eingefügt. Lasst den Nutzer danach wieder entscheiden, was er als nächstes machen möchte.
Daten.
Für diese Übung mit der Callback-API muss beim readFile ein async vor die callback-funktion eingefügt werden und es muss die letzte Zeile des Frameworks verändert
werden, sonst wird das Programm unter Umständen zu früh beendet. Verändert sie so wie unten abgebildet, ruft aber die Funktion rl.close() in dem Moment auf, in dem
ihr das Programm beenden möchtet (nach dem Schreiben der Datei (im callback)).
 */