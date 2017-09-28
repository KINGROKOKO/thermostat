'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Check temperature', function(){

    it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20)

    });
  });

  describe('Increase temperature', function(){

    it('with UP by 10 degrees', function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)

    });
  });

describe('Decrease temperature', function(){

    it('with DOWN by 10 degrees', function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)

    });
  });

  describe('Do not decrease temperature', function(){

      it('with DOWN if less than 11 degrees', function(){

      var i = 1

      while(i<11){
      thermostat.down()
      i++;
      }
      expect(thermostat.down()).toEqual('MIN TEMPERATURE REACHED')

      });
    });

    describe('If power save is on', function(){

        it('max temperature is 25 degrees', function(){

        var i = 0

        while(i<5){
        thermostat.up()
        i++;
        }
        
        expect(thermostat.up()).toEqual('MAX TEMPERATURE REACHED')

        });
      });

      describe('If power save is on', function(){

          it('as default', function(){
          expect(thermostat.powerSaving).toEqual(true)

          });
        });

});
