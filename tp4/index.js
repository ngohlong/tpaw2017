$(document).ready(function () {
    $('#valid').click(function () {
        /* votre code ici*/
        if ($("#nom").val().length < 1 || $("#prenom").val().length < 1 || $("#datepicker").val().length < 1 || $("#addr").val().length < 1 || $("#mail").val().length < 1) {
            $('#l-ModalLabel').text('Error');
            $('#modal1').text('Veuillez remplir tous les champs svp');
            $('#l-Modal').modal('show');
        }
        else {
            document.getElementById("result").innerHTML = "Bravo! Le formulaire est sauvegardé.";
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("Nom", $("#nom").val());
                localStorage.setItem("Prenom", $("#prenom").val());
                localStorage.setItem("Date", $("#datepicker").val());
                localStorage.setItem("Address", $("#addr").val());
                localStorage.setItem("Email", $("#mail").val());
            } else {
                document.getElementById("result").innerHTML = " Sorry! No Web Storage support.."
            }
        }
    });

    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        maxDate: 31
    });

    $("#GPS").click(function () {
        //function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
            $("#addr").val("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
            document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
        }
    });
    $("#nom").keyup(function () { $("#carNom").text($("#nom").val().length + " car."); });
    $("#prenom").keyup(function () { $("#carPrenom").text($("#prenom").val().length + " car."); });
    $("#datepicker").click(function () { $("#carDate").text($("#datepicker").val().length + " car."); });
    $("#addr").click(function () { $("#carAddr").text($("#addr").val().length + " car."); });
    $("#mail").keyup(function () { $("#carEmail").text($("#mail").val().length + " car."); });
});