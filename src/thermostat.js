var Thermostat = function(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this.powerSaving = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if(this.getCurrentTemperature() < this.MAX_TEMPERATURE){
    this.temperature += 1
  }
  else{
    return 'MAX TEMPERATURE REACHED'
    };
  };

Thermostat.prototype.down = function(){
  if(this.getCurrentTemperature() > this.MIN_TEMPERATURE){
  this.temperature -= 1}
  else {
    return 'MIN TEMPERATURE REACHED'
  };
};

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
  this.maxTemperature = 25;
};

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
  this.MAX_TEMPERATURE = 32;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};


Thermostat.prototype.getCurrentEnergyUsage = function(){
  if(this.getCurrentTemperature() > 25){
    return "HIGH USAGE"
  }
  else if(this.getCurrentTemperature() < 18){
    return "LOW USAGE"
  }
  else {
    return "MEDIUM USAGE"
  }
};
