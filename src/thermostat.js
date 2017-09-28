var Thermostat = function(){
  this.temperature = 20;
  this.minTemperature = 10;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  if(this.temperature > 10){
  this.temperature -= 1}
  else {
  return 'MIN TEMPERATURE REACHED'
  };
};
