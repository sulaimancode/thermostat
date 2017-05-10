describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {
    it('displays default temperature', function() {
      expect(thermostat.temperature()).toEqual(20)
    });
  });
});
