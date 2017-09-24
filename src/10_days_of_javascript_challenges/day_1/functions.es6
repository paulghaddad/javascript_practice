/*
  Implement a function named factorial that has one parameter: an integer, n.
  It must return the value of n! (i.e., n factorial).

  Sample Input: 4
  Sample Output: 24
*/

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

process.stdout.write(`${factorial(4)}\n`);
