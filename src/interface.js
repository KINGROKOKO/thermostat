$(document).ready(function(){

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
}

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#temp-reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.powerSavingOn();
  $('#power-saving-status').text('on')
  updateTemperature();
})

$('#powersaving-off').click(function() {
  thermostat.powerSavingOff();
  $('#power-saving-status').text('off')
  updateTemperature();
})

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
};

});
