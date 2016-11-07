$(document).ready(function () {
	$("button").click(function () {
		/* votre code ici*/
		if ($("#nom").val().length < 1 || $("#prenom").val().length < 1 || $("#datepicker").val().length < 1 || $("#addr").val().length < 1 || $("#mail").val().length < 1) {
			$('#lModalLabel').text('Error');
			$('#modal1').text('Veuillez remplir tous les champs svp');
			$('#lModal').modal('show');
		}
		else {
			$('#lModalLabel').text('Bienvenue ' + $("#nom").val());
			$("#modal1").text('Vous êtes nés le' + $("#datepicker").val() + ' et vous habitez');
			$("#lModal .modal-body a").attr("href", "https://maps.google.com/maps?q=" + $("#addr").val() + "&markers=" + $("#addr").val());
			$("#lModal .modal-body a img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?size=400x250&center=" + $("#addr").val() + "&markers=" + $("#addr").val());
			$("#modal3").text($("#addr").val());
			$('#lModal').modal('show');
		}
	});

	$("#datepicker").datepicker({
		dateFormat: "dd/mm/yy",
		maxDate: 31
	});
});
