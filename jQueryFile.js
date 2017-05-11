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
      $('.container').attr('id', thermostat.usage());
    }



});
