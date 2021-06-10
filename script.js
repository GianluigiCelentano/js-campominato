// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// generiamo 16 numeri => creo funzione => while array.length < 16, 
// perché di volta in volta pusho nell'array il numero generato, solo se non è già presente
// --- 
//     0.      while listNum.length <= 16
//     1.      genero un numero randomico
//     2.      if num not in array then, lo pusho nell'array listNum

// ora listNum contiene 16 numeri NON duplicati.

// while userNums.length <= 84
//     chiedi all'utente un numero 
//     se askNums non è nell'array utentNums, ce lo aggiungo
//         se asknum è in array listNum (numeri generati dal computer), then break. // il gioco è finito, si stoppa il ciclo.
//         else push num to userNums => next step.

// risultato, stampo lo score che è userNums.length.

function randomNum () {
    var pcListNum = [];
        while (pcListNum.length < 16){
        var i = Math.floor(Math.random() * 100)
        if (pcListNum.includes(i) === false) {
            pcListNum.push(i)
        }
    }
    return pcListNum
    }
    console.log(randomNum())

var randomNumbersPc = randomNum()

var utentNums = []
while (utentNums.length <= 84) {
    var askNums = parseInt(prompt("Inserisci il tuo numero"))
    if (utentNums.includes(askNums) === false) {
        utentNums.push(askNums)
    } else {
        alert("Non puoi inserire lo stesso numero")
    }
}
if (randomNumbersPc.includes(askNums) === true) {
    alert("GIOCO FINITO, HAI PRESO LA BOMBA") 

}
    



//     if (parseInt(askNums) === randomNumbersPc.length) {
//         alert("GIOCO FINITO, HAI PRESO LA BOMBA")
//     }
//     else if (utentNums.includes(askNums) === false) {
//         utentNums.push(askNums)
//     } else {
//         alert("Non puoi inserire lo stesso numero")
//     }

