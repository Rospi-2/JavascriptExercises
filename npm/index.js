/*Erstellt eine Datei index.js, in der ihr die Funktionen logRed, logGreen und logBlue aus
logger.js importiert und verwendet, um beliebigen Text bunt auszugeben.
Bevor ihr committed: Prüft, dass SourceTree (bzw. die Git-UI eurer Wahl) keine Dateien
aus dem Ordner node_modules committen möchte, sonst stimmt etwas mit eurer
.gitignore Datei nicht. Ihr dürft Dateien aus node_modules unter keinen Umständen
committen!
 */

import { logRed, logBlue, logGreen } from './logger.js';

const a ="Hola Mundo";

logGreen(a);
logBlue(a);
logRed(a);