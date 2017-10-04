const baseVehicle = {
  makeNoise: function() {
    console.log('Boom!');
  }
}

function enhancedVehicle(enhancements) {
  return Object.assign({}, baseVehicle, enhancements);
}

function createCar() {
  return enhancedVehicle({
    move: function() {
      console.log('driving');
    },
    makeNoise: function() {
      console.log('honk!');
    }
  });
}

function createAirplane() {
  return enhancedVehicle({
    move: function() {
      console.log('flying');
    }
  });
}

let car = createCar();
car.move();
car.makeNoise();

let airplane = createAirplane();
airplane.move();
airplane.makeNoise();
