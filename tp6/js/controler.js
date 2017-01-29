var meteoControllers = angular.module('meteoControllers', []);
meteoControllers.controller('MainController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.recherche = function () {
            /* appel AJAX à l’API openweathermap */
            $http.get(' https://demo.bilelz.fr/owmap/?q=' + $scope.city + '&units=metric&appid=81a52eeb49dcdacf2c277f49dff18353')
                .success(function (data) {
                    /* on met dans l’objet meteo les données retournées par openweathermap */
                    $scope.meteo = data;
                    $scope.meteo.date = new Date($scope.meteo.dt * 1000);
                }).error(function (data) {
                    /* en cas d’erreur */
                    $scope.errorMsg = "Hum. Error... please retry.";
                });
        }
        $scope.gps = function () {
            /* appel AJAX à l’API openweathermap */
            navigator.geolocation.getCurrentPosition(function (position){
			$scope.city ="Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
            $http.get('https://demo.bilelz.fr/owmap/?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=81a52eeb49dcdacf2c277f49dff18353')
                .success(function (data) {
                    /* on met dans l’objet meteo les données retournées par openweathermap */
                    $scope.meteo = data;
                    $scope.meteo.date = new Date($scope.meteo.dt * 1000);
                }).error(function (data) {
                    /* en cas d’erreur */
                    $scope.errorMsg = "Hum. Error... please retry.";
                });
            })
        }
    }]);