const baseSpaceShip = {
  fly: function() {
    console.log('fly');
  },
  shoot: function() {
    console.log('shoot');
  },
  destroy: function() {
    console.log('destroy');
  }
}

function enhancedSpaceShip(enhancements) {
  return Object.assign({}, baseSpaceShip, enhancements);
}

function createBomberSpaceship() {
  return enhancedSpaceShip({
    bomb: function() {
      console.log('bomb');
    }
  });
}

function createStealthSpaceship() {
  return enhancedSpaceShip({
    stealth: function() {
      console.log('stealth');
    }
  });
}

function createWarpShipship() {
  return enhancedSpaceShip({
    warp: function() {
      console.log('warp');
    }
  });
}

function createStealthBomber() {
  // const bomber = createBomberSpaceship();
  const stealth = createStealthSpaceship();

  return Object.assign({}, bomber, stealth);
}

let bomber = createBomberSpaceship();
bomber.shoot();
bomber.bomb();

let stealthship = createStealthSpaceship();
stealthship.shoot();
stealthship.stealth();

let warpship = createWarpShipship();
warpship.destroy();
warpship.warp();

let stealthBomber = createStealthBomber();
stealthBomber.stealth();
stealthBomber.bomb();
