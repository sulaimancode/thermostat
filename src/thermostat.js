var Thermostat = function(){
  this._degrees = 20
};

Thermostat.prototype = {

  temperature: function() {
    return this._degrees;
  },

  up: function() {
    this._degrees++
  },

  down: function() {
    if (this._degrees <== 10) {
      throw 'can not decrease temperature below 10';
    }
    else {
      this._degrees--;
    }
  }
};
