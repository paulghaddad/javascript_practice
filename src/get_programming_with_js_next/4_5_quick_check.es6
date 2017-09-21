/*
 Rewrite the following function in ES6

(function (namespace) {

  var DEFAULT_START = 0;
  var DEFAULT_STEP  = 1;

  var range = function (start, stop, step) {
    var arr = [];

    if (!step) {
      step = DEFAULT_STEP;
    }

    if (!stop) {
      stop = start;
      start = DEFAULT_START;
    }

    if (stop < start) {
      (function () {
        // reverse values
        var tmp = start;
        start = stop;
        stop = tmp;
      }());
    }

    (function () {
      var i;
      for (i = start; i < stop; i += step) {
        arr.push(i);
      }
    }());

    return arr;
 }

  namespace.range = range;

  }(window.mylib));
*/

const DEFAULT_START = 0;
const DEFAULT_STEP = 0;

let range = function (start, step, stop) {
  let arr = [];

  if (!step) {
    step = DEFAULT_STEP;
  }

  if (!stop) {
    stop = start;
    start = DEFAULT_START;
  }

  if (stop < start) {
    let tmp = start;
    start = stop;
    stop = tmp;
  }

  for (let i = start; i < stop; i++) {
    arr.push(i);
  }

  console.log(arr);
}

range(10, 1, 20);
