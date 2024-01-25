/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
const result = area(15, 23);
console.log("Es.1 L'area del rettangolo è: " + result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    const sumMultiplied = sum * 3;
    console.log("Es.2 La somma è pari ha: " + sumMultiplied);
  } else {
    console.log("Es.2 La somma è pari ha: " + sum);
    return;
  }
}
crazySum(5, 5);
crazySum(5, 8);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1) {
  if (num1 > 19) {
    return Math.abs(num1 - 19) * 3;
  } else {
    return Math.abs(num1 - 19);
  }
}
console.log("Es.3 Il valore assoluto tra questi due valori è: " + crazyDiff(5));
console.log("Es.3 Il valore assoluto tra questi due valori è: " + crazyDiff(59));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("Es.4 Il numero da te inserito è: " + boundary(15));
console.log("Es.4 Il numero da te inserito è: " + boundary(35));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
  if (str.startsWith(`EPICODE`)) {
    return str;
  } else {
    return `EPICODE` + str;
  }
}
console.log("Es.5 " + epify(" ti da il benvenuto"));
console.log("Es.5 " + epify("EPICODE ti da il benvenuto"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(posNum) {
  if ((posNum > 0 && posNum % 3 === 0) || posNum % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Es.6 Il numero che hai inserito è un multiplo di 3 o di 7: " + check3and7(21));
console.log("Es.6 Il numero che hai inserito è un multiplo di 3 o di 7: " + check3and7(17));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str1) {
  let splitStr = str1.split("");
  let revStr = splitStr.reverse();
  let resultStr = revStr.join("");
  return resultStr;
}
console.log("Es.7 " + reverseString("STRAZIO"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*function upperFirst (multiStr) {
    let splitMultiStr = multiStr.split("");
    splitMultiStr[i]
}
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str2) {
  return str2.slice(1, str2.length - 1);
}
console.log("Es.9 " + cutString("DEVELOPER"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n4) {
  const numArr = [];
  for (let i = 0; i < n4; i++) {
    numArr.push(Math.ceil(Math.random() * 10));
  }
  return numArr;
}
console.log("Es.10 " + giveMeRandom(5));
