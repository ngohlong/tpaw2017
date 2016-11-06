function validation() {
	if (document.getElementById("nom").value.length < 5) {
		document.getElementById("error").innerHTML = "La nom doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("prenom").value.length < 5) {
		document.getElementById("error").innerHTML = "La prenom doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("date").value.length < 8) {
		document.getElementById("error").innerHTML = "La date doit contenir au moins 8 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("addr").value.length < 5) {
		document.getElementById("error").innerHTML = "La address doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else if (document.getElementById("email").value.length < 5) {
		document.getElementById("error").innerHTML = "La email doit contenir au moins 5 caracteres";
		document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
	}
	else {
		document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("prenom").value;
		document.getElementById("error").style.display = "none";
		document.getElementById("resultat").style.display = "initial";
	}
}