describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {

    it('returns default temperature', function() {
      expect(thermostat.temperature()).toEqual(20)
    });
  });

  describe('#up', function() {

    it('increases temperature by 1', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21)
    });

    describe('when power save is on', function() {
      it('it does not increase temperature above 25', function() {
        var times = 5;
        for(var i=0; i < times; i++){
          thermostat.up();
        };
        expect(function(){ thermostat.up() } ).toThrow("can not increase temperature above 25 when power saver is on")
      });
    });

    describe('when power save is off', function() {
      it('it does not increase temperature above 32', function() {
        thermostat.powerSaverOff()
        var times = 12;
        for(var i=0; i < times; i++){
          thermostat.up();
        };
        expect(function(){ thermostat.up() } ).toThrow("can not increase temperature above 32")
      });
    });
  });

  describe('#down', function() {

    it('decreases temperature by 1', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19)
    });

    describe('when temperature is 10', function() {

      it('throws error message', function() {
        var times = 10;
        for(var i=0; i < times; i++){
          thermostat.down();
        };
        expect(function(){ thermostat.down() } ).toThrow("can not decreases temperature below 10")
      });

    });

  });

  describe('#powerSaverOff', function() {

    it('sets power saver mode to false', function() {
      thermostat.powerSaverOff()
      expect(thermostat.isPowerSaver()).toEqual(false)
    });
  });

  describe('#powerSaverOn', function() {

    it('sets power saver mode to true again', function() {
      thermostat.powerSaverOff()
      thermostat.powerSaverOn()
      expect(thermostat.isPowerSaver()).toEqual(true)
    });
  });
  describe('#reset', function() {

    it('resets the temperature to 20', function() {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.temperature()).toEqual(20)
    });
  });

  describe('#usage', function() {

    it('shows the current energy usage as low when temperature is below 18', function() {
      var times = 3;
      for(var i=0; i < times; i++){
        thermostat.down();
      };
      expect(thermostat.usage()).toEqual('low')
    });

    it('shows the current energy usage as medium when temperature is 20', function() {
      expect(thermostat.usage()).toEqual('medium')
    });

    it('shows the current energy usage as high when temperature is above 25', function() {
      thermostat.powerSaverOff()
      var times = 6;
      for(var i=0; i < times; i++){
        thermostat.up();
      };
      expect(thermostat.usage()).toEqual('high')
    });
  });

});
