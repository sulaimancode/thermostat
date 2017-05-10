var Thermostat = function(){
  this._degrees = 20,
  this._powerSaver = true;
};

Thermostat.prototype = {

  temperature: function() {
    return this._degrees;
  },

  up: function() {
    if (this._degrees >= 32 && !this.isPowerSaver())  {
      throw 'can not increase temperature above 32';
    }
    if (this._degrees >= 25 && this.isPowerSaver())  {
      throw 'can not increase temperature above 25 when power saver is on';
    }
    else {
      this._degrees++
    }
  },

  down: function() {
    if (this._degrees <= 10) {
      throw 'can not decreases temperature below 10';
    }
    else {
      this._degrees--
    }
  },

  isPowerSaver: function() {
    return this._powerSaver;
  },

  powerSaverOff: function() {
    this._powerSaver = false
  },

  powerSaverOn: function() {
    this._powerSaver = true
  }
};
