window.onload = function () {
	document.getElementById("search").addEventListener("click", function (event) {
		event.preventDefault(); // pour annuler le rechargement de la page
		var city = document.getElementById("city").value;
		searchCity(city);
	});
	document.getElementById("gps").addEventListener("click", function (event) {
		event.preventDefault(); // pour annuler le rechargement de la page
		navigator.geolocation.getCurrentPosition(searchLatLng);
	});
}
function searchCity(_city) {
	console.log('searchCity', 'Hello from ' + _city);
	var request = new XMLHttpRequest();
	request.open('GET',
		'http://api.openweathermap.org/data/2.5/weather?q=' + _city + '&units=metric&appid=81a52eeb49dcdacf2c277f49dff18353', true);
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var resp = request.responseText;
			var responseJSON = JSON.parse(request.responseText);
			console.log(responseJSON);
			var name = responseJSON.name;
			var temp = responseJSON.main.temp;
			var icon = responseJSON.weather[0].icon;
			var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";
			var des = responseJSON.weather[0].description;
			var timestamp = responseJSON.dt;
			var date = new Date(timestamp * 1000); // multiplied by 1000 so that the argument is in milliseconds, not seconds.
			var hours = date.getHours(); // Hours part from the timestamp
			var minutes = "0" + date.getMinutes(); // Minutes part from the timestamp
			var seconds = "0" + date.getSeconds(); // Seconds part from the timestamp
			var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2); // Will display time in HH:mm:ss format
			var humidity = responseJSON.main.humidity;
			var cloud = responseJSON.clouds.all;
			var wind = responseJSON.wind.speed;
			var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + name + "&zoom=14&size=400x300&sensor=false";
			document.getElementById("cityname").innerHTML = name;
			document.getElementById("time").innerHTML = '@' + formattedTime;
			document.getElementById("icon").innerHTML = "<img src='" + icon_url + "'>";
			document.getElementById("temp").innerHTML = Math.round(temp) + "°C";
			document.getElementById("description").innerHTML = des;
			document.getElementById("humidity").innerHTML = humidity + "%";
			document.getElementById("cloud").innerHTML = cloud + "%";
			document.getElementById("wind").innerHTML = wind + ' m/s';
			document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
			document.getElementById("result").style.display = "initial";
		}
		else {
			document.getElementById("result").innerHTML = "We reached our target server, but it returned an error";
		}
	};
	request.onerror = function () {
		document.getElementById("result").innerHTML = "There was a connection error of some sort";
	};
	request.send();
}

function searchLatLng(position) {
	console.log(searchLatLng, 'Hello from ' + position.coords.latitude + ', ' + position.coords.longitude);
	var request = new XMLHttpRequest();
	request.open('GET',
		'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=81a52eeb49dcdacf2c277f49dff18353', true);

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var resp = request.responseText;
			var responseJSON = JSON.parse(request.responseText);
			console.log(responseJSON);
			var name = responseJSON.name;
			var temp = responseJSON.main.temp;
			var icon = responseJSON.weather[0].icon;
			var icon_url = "http://openweathermap.org/img/w/" + icon + ".png";
			var des = responseJSON.weather[0].description;
			var timestamp = responseJSON.dt;
			var date = new Date(timestamp * 1000); // multiplied by 1000 so that the argument is in milliseconds, not seconds.	
			var hours = date.getHours(); // Hours part from the timestamp
			var minutes = "0" + date.getMinutes(); // Minutes part from the timestamp
			var seconds = "0" + date.getSeconds(); // Seconds part from the timestamp
			var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2); // Will display time in HH:mm:ss format
			var humidity = responseJSON.main.humidity;
			var cloud = responseJSON.clouds.all;
			var wind = responseJSON.wind.speed;
			var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x300&sensor=false";
			document.getElementById("cityname").innerHTML = name;
			document.getElementById("time").innerHTML = '@' + formattedTime;
			document.getElementById("icon").innerHTML = "<img src='" + icon_url + "'>";
			document.getElementById("temp").innerHTML = Math.round(temp) + "°C";
			document.getElementById("description").innerHTML = des;
			document.getElementById("humidity").innerHTML = humidity + "%";
			document.getElementById("cloud").innerHTML = cloud + "%";
			document.getElementById("wind").innerHTML = wind + ' m/s';
			document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
			document.getElementById("result").style.display = "initial";
		}
		else {
			document.getElementById("result").innerHTML = "We reached our target server, but it returned an error";
		}
	};
	request.onerror = function () {
		document.getElementById("result").innerHTML = "There was a connection error of some sort";
	};
	request.send();
}


