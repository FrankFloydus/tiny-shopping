/*
 
4 compiti: 1) Aggiungere prodotti da una lista (no duplicati) col pulsante aggiungi;
			  2) Eliminare prodotti da una lista (se esistono) col pulsante elimina;
			  3) Visualizzare la lista con un apposito pulsante;
			  4) Nascondere la lista con un apposito pulsante;
			  
*/

// Selezione degli elementi del DOM su cui devo lavorare;

var inputProdotti = document.querySelector('.insProdotto'); // Input
var btnAggiungi = document.querySelector('.aggiungi'); // Pulsante Aggiungi
var txtArea = document.querySelector('textarea'); // Textarea
var visualizza = document.querySelector('.visualizzaLista'); // Pulsante Visualizza Shopping List
// Mi creo una lista vuota (aka Array);
var listaProdotti = [];

txtArea.style.display = 'none';

// 1 - Aggiungere prodotti da una lista
// ----------------------------------------------------------------------------------------

// Al click del pulsante 'Aggiungi' (evento);
btnAggiungi.addEventListener('click', function() {  

		// Recupero la stringa che l'utente ha scritto nell'input e la salvo in una variabile;
		var prodottoAggiunto = inputProdotti.value.toLowerCase();
			// Se il campo non è vuoto allora
			if ( prodottoAggiunto !== "" ) {
				 // Inserisco la mia variabile all'interno dell'array (la mia lista);
				 listaProdotti.push(prodottoAggiunto);
				 
				 var listaTxt = listaProdotti.join(", ");
				 txtArea.value = listaTxt;
			};
		
		// Svuoto il campo di inserimento prodotti per renderlo pronto per un nuovo inserimento
		inputProdotti.value = "";  
	
});

// Impostiamo una variabile che farà da interruttore per aprire o chiudere la nostra lista (falsa di default)
var toggle = false;

visualizza.addEventListener('click', function() {  
	
	// Se l'interruttore è false (default) allora la lista è non visibile 
	if ( toggle === false ) {
		
		// quindi rendo visibile la lista
		txtArea.style.display = 'block';
		// e imposta il mio interruttore a vero
		toggle = true;
		
		// altrimenti, se è vero
	} else {
		// nascondo la lista
		txtArea.style.display = 'none';
		// imposto l'interruttore a falso
		toggle = false;
	}
		
});










