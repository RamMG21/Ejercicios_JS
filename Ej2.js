/* Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/

let nota = 0;
 nota = prompt("cual es la nota");

if (nota >= 3 && nota <= 5) {
    alert("Insuficiente")   
}

if (nota >= 5 && nota <= 6) {
    alert("Sufuciente")   
}

if (nota >= 6 && nota <= 7) {
    alert("bien")   
}

if (nota >= 7 && nota <= 9) {
    alert("notable")   
}

if (nota >= 9 && nota <= 10) {
    alert("Sobresaleinte")   
}
