function Day0() {
  var parameterVariable;

  function doGreeting(param) {
    parameterVariable = param;
    process.stdout.write("Hello, world!\n");
    process.stdout.write(`${parameterVariable}\n`);
  }

  var publicAPI = {
    greeting: doGreeting
  };

  return publicAPI;
}

var day0 = new Day0();

day0.greeting("Welcome to 10 Days of JavaScript!");
