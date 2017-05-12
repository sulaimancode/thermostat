$( document ).ready(function() {

  var thermostat = new Thermostat();

    $( "#up" ).click(function() {
      thermostat.up();
      $('#temp').text(thermostat.temperature() + '°C');
      updatecolor();
    });

    $( "#down" ).click(function() {
      thermostat.down();
      $('#temp').text(thermostat.temperature() + '°C');
      updatecolor();
    });

    $( "#reset" ).click(function() {
      thermostat.reset();
      $('#temp').text(thermostat.temperature() + '°C');
    });

    $("#temp").text(thermostat.temperature() + '°C');

    $('label input[type="checkbox"]').each(function (){
      if($(this).hasClass('checked')){
        $(this).attr('checked', true);
      }
    });

    $( "#checkbox" ).click(function() {
      if(thermostat.isPowerSaver()) {
        thermostat.powerSaverOff();
      }
      else {
        thermostat.powerSaverOn();
      }
    });

    function updatecolor() {
      $('#temp').attr('class', thermostat.usage());
    }

    displayWeather('London');

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      displayWeather(city);
    });

    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=0dc2e4f5383c036814e42b03e0ebf58c';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
      var temperature = Math.floor(data.main.temp);
      $('#current-temperature').text(temperature  + '°C');
      $('#city').text(data.name);
      });
    }

});
