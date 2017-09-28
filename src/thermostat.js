var Thermostat = function(){
  this.temperature = 20;
  this.minTemperature = 10;
  this.powerSaving = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if((this.powerSaving = true) && (this.temperature < 25)){
    this.temperature += 1}
  else{
    return 'MAX TEMPERATURE REACHED'
    };
  };


Thermostat.prototype.down = function(){
  if(this.temperature > 10){
  this.temperature -= 1}
  else {
    return 'MIN TEMPERATURE REACHED'
  };
};

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
}
