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
    this._degrees--
    if (this._degrees >== 10) {
      throw 'can not decrease temperature below 10';
    }
    else {
      return  this._planes.push(plane);
    }
  }

};
