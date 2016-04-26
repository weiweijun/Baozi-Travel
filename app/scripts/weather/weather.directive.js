"use strict";

angular.module('baoziApp')
  .service('weatherService', function ($http) {
    var service = {
      curWeather: {},
      forecast: {},
      getWeather: function (location, units) {
        location = location || 'Sunnyvale,CA';
        if (service.curWeather[location]){
          return service.curWeather[location];
        }
        service.curWeather[location] = {
          temp : {},
          clouds: null
        };
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+
          location + 'units=' + units +
          '&cnt=5&APPID=b253934bbcdd1b68251e3854cc389ca0')
          .success(function (data) {
            if (data){
              if (data.main) {
                service.curWeather[location].temp.current = data.main.temp;
                service.curWeather[location].temp.min = data.main.temp_min;
                service.curWeather[location].temp.max = data.main.temp_max;
              }
              service.curWeather[location].clouds =
                data.clouds ? data.clouds.all : undefined;
            }
          });
        return service.curWeather[location];
      },
      getForecast: function (location, units) {
        location = location || 'Sunnyvale, CA';
        if (service.forecast[location]){
          return service.forecast[location];
        }
        service.forecast[location] = {};
        $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
          location + '&units=' + units +
          '&cnt=7&APPID=b253934bbcdd1b68251e3854cc389ca0').success(
          function (data) {
          if (data) {
            angular.copy(data, service.forecast[location]);
          }
        });
        return service.forecast[location];
      }
    };
    return service
  })
  .directive('weather', function () {
    return {
      templateUrl: 'scripts/weather/weather.html',
      restrict: 'E',
      controller: 'WeatherController',
      controllerAs: 'weather',
      replace: true
    };
  });
