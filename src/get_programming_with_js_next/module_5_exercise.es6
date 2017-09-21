/*
 Rewrite the module 4's exercise using constants where necessary.
*/

const DEFAULT_START = 0;
const DEFAULT_STEP = 0;

let range = function (start, step, stop) {
  const arr = [];

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
