// Dichiarazione di variabili globali per rappresentare lo stato dei pali e la hand
var palo1 = [1,2,3,4];
var palo2 = [];
var palo3 = [];
var hand = 0;
var aggiungiDifficoltà = true;

// Funzione per generare la rappresentazione HTML di un disco con dimensioni e colore basati sul parametro "dimension"
function drawDisk(dimension) {
    let color = "#FFFF00";
    if(dimension == 1) {
        color = "#FF0000";
    } else if(dimension == 2) {
        color = "#00FF00 ";
    } else if(dimension == 3) {
        color = "#0000FF ";
    } else if(dimension == 4) {
        color = "#FFFF00 ";
    } else if(dimension == 5) {
        color = "#2fbac2 ";
    } 
    return "<div class='disk' style='background-color: " + color + "; width:" + dimension * 10 + "%;'></div>";
}

// Funzione per ottenere l'array rappresentante un palo specifico
function getPalo(num) {
    if(num == 1) {
        return palo1;
    } else if(num == 2) {
        return palo2;
    } else {
        return palo3;
    }
}

// Funzione per disegnare i dischi su un palo specifico
function drawPalo(num) {
    let divPalo = document.getElementById("palo" + num);
    let palo = getPalo(num);
    divPalo.innerHTML = "";
    for(let i = 0; i < palo.length; i++) {
        divPalo.innerHTML += drawDisk(palo[i]);
    }
}

function drawHand(){
    let handDiv = document.getElementById("myHand");
    handDiv.innerHTML = drawDisk(hand);
}

// Funzione per disegnare tutti i pali
function drawAll() {
    drawPalo(1);
    drawPalo(2);
    drawPalo(3);
    drawHand();
    checkButtons();

}

// Funzione per controllare lo stato dei pulsanti in base alla hand e ai pali
function checkButtons() {
    checkButton(1);
    checkButton(2);
    checkButton(3);                
}

// Funzione per controllare lo stato di un pulsante specifico in base alla hand e al palo
function checkButton(n) {
    let btn = document.getElementById("btn" + n);
    let palo = getPalo(n);    
    if(hand == 0) {
        // hand vuota
        btn.disabled = palo.length == 0;
        btn.innerText = "Prendi";
    } else {
        // Disco in hand
        btn.disabled = palo.length > 0 && hand > palo[0];
        btn.innerText = "Inserisci";                            
    }
}

// Funzione chiamata quando si fa clic su uno dei pulsanti "Prendi"
function click1() {
    clickHandler(1);
}

function click2() {
    clickHandler(2);
}

function click3() {
    clickHandler(3);
}

// Funzione per gestire il clic su un pulsante, rappresentando il movimento dei dischi
function clickHandler(paloNum) {
    // Ottiene l'array che rappresenta il palo selezionato
    let palo = getPalo(paloNum);

    // Se non c'è alcun disco nella hand
    if(hand == 0) {

        // Se il palo selezionato ha almeno un disco
        if(palo.length > 0) {
            hand = palo.shift();  // Prende il disco più in alto
        }
    } else {  // Se c'è un disco nella hand
        // Se il palo selezionato è vuoto o il disco nella hand è più piccolo del disco più in alto nel palo
        if(palo.length === 0 || hand < palo[0]) {
            palo.unshift(hand);  // Inserisce il disco nella hand in cima al palo
            hand = 0;  // Resetta la hand (nessun disco in hand)
        }
    }

    // Aggiorna la visualizzazione dei pali dopo il movimento
    drawAll();
}

// Disegna i pali all'avvio della pagina
drawAll();


document.getElementById("btn5").addEventListener("click", function () {

    // Imposta a false dopo il primo click
    if(aggiungiDifficoltà){
        palo1.push(5); // Aggiunge un nuovo disco più grande alla pila 1
    }else{
        alert("Puoi cliccarlo una volta sola");
        disabilitaBottone("btn5");
    }
    drawAll(); // Aggiorna la visualizzazione dopo l'aumento di difficoltà
    aggiungiDifficoltà = false;

});

function disabilitaBottone(bottoneId) {
    document.getElementById(bottoneId).disabled = true;
}

var colori = ["black", "purple", "grey", "orange"];
var posizione = 0;

document.getElementById("btn4").addEventListener("click", function() {

    document.body.style.backgroundColor = colori[posizione];

    if(document.body.style.backgroundColor == "black"){
        document.body.style.color = "white";
    }else if(document.body.style.backgroundColor == "purple"){
        document.body.style.color = "white";
    }else if(document.body.style.backgroundColor == "cyan"){
        document.body.style.color = "white";
    }else if(document.body.style.backgroundColor == "grey"){
        document.body.style.color = "white";
    }else if(document.body.style.backgroundColor == "orange"){
        document.body.style.color = "black";
    }

    // Incrementa l'indice del colore e torna all'inizio se supera la lunghezza dell'array
    posizione = (posizione + 1) % colori.length;
});

// Funzione per effettuare il reset della pagina
function resetPage() {
    location.reload(); // Ricarica la pagina
}

// Aggiungi un listener per il click sul pulsante di reset
document.getElementById("resetBtn").addEventListener("click", resetPage);