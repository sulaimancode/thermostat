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
  });

  describe('#down', function() {

    it('decreases temperature by 1', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19)
    });

    describe('when temperature is 10', function() {

      it('throws error message', function() {
        spyOn(thermostat, "temperature").and.returnValue(10)
        expect(function(){ thermostat.down() } ).toThrow("can not decreases temperature below 10")
      });
      
    });
  });
});
