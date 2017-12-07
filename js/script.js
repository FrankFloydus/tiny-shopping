// Seleziono gli elementi che utilizzo nel DOM:
var input = document.querySelector(".inserisciProdotto");  // Seleziono l'input;
var btnAggiungi = document.querySelector(".aggiungi");     // Seleziono pulsante "Aggiungi";
var btnElimina = document.querySelector(".elimina");	   // Seleziono pulsante "Elimina";
var btnSwitch = document.querySelector(".visLista");	   // Seleziono pulsante "VisLista";
var registro = document.querySelector(".registro");        // Seleziono il div che contiene la lista;
var txtArea = document.querySelector("textarea");          // Seleziono la textarea;


// Inizializzo una lista (array) vuota;
var listaProdotti = [];

// Nascondo di default il div contentente la lista
registro.style.display = "none";


// Quando clicco il pulsante "Aggiungi"
btnAggiungi.addEventListener( "click", function() {

	
	// Memorizzo il valore del campo input in una variabile;
	var valoreInput = input.value;
	
	// SE il campo input NON è vuoto allora
	if ( valoreInput !== "" ) { 

		// aggiungo questa variabile all'interno di una lista (array);
		listaProdotti.push(valoreInput);
		// converto l'array in una stringa memorizzandola in una variabile; 
		var listaInStringa = listaProdotti.join(", ");
		// assegno questa variabile come valore "value" della mia textarea
		txtArea.value = listaInStringa;
		// Svuoto il campo input
		input.value = "";
		// Metto in focus il campo input
		input.focus();
	}
	
	// ALTRIMENTI
	else {
		// dammi un alert che mi dica che il campo è rimasto vuoto
		alert("Attenzione, hai lasciato il campo vuoto");
		// Metto in focus il campo input
		input.focus();
	}

});


// Quando clicco il pulsante "Elimina"
btnElimina.addEventListener("click", function(){

	// Memorizzo il valore del campo input in una variabile;
	var valoreInput = input.value;
	// Converto la mia stringa nella textarea in un array
	var valoreTxtArea = txtArea.value;
	listaProdotti = valoreTxtArea.split(", ");
	// console.log(stringaInLista);
	// memorizzo l'indice del valore che l'utente ha cercato nell'input
	var index = listaProdotti.indexOf(valoreInput);

	// SE all'interno del mio array c'è la voce (ovvero l'indice è diverso da -1)
	if ( index !== -1 ) {
		// allora faccio uno splice() sull'array togliendo quella voce
		var spliced = listaProdotti.splice(index, 1);
		// converto nuovamente l'array in stringa con join()
		var listaInStringa = listaProdotti.join(", ");
		// assegno il valore del nuovo array convertito al valore della textarea
		txtArea.value = listaInStringa;
		// svuoto il campo di input resettandolo ad una stringa vuota
		input.value = "";
		// do il focus sul campo di input
		input.focus();
		
		// ALTRIMENTI
	} else {
		// Visualizzo un messagio di alert che indica che la voce che voglio eliminare non esiste
		alert("Attenzione! La voce che vuoi eliminare non esiste");
		// svuoto il campo di input
		input.value = "";
		// e reimposto il focus sull'input
		input.focus();
	}

});


// Inizializzo una variabile che userò come interruttore su FALSE
var interruttore = false;

// Quando clicco il pulsante "Visualizza Shopping List"
btnSwitch.addEventListener("click", function(){

	// SE la lista è nascosta (quindi interruttore === FALSE)
	if ( interruttore === false) {
		// visualizzo la lista
		registro.style.display = "block"; 
		// cambio il testo del pulsante da "Visualizza" a "Nascondi"
		btnSwitch.innerText = "Nascondi shopping list";
		// setto l'interruttore a TRUE
		interruttore = true;
	} 
		// ALTRIMENTI
	else {
		// nascondo la lista
		registro.style.display = "none";
		// cambio il testo del pulsante da "Nascondi" a "Visualizza"
		btnSwitch.innerText = "Visualizza shopping list";
		// setto l'interruttore a FALSE
		interruttore = false;
	}

});
