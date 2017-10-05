/*
  Complete the reverseString function; it has one parameter, s. You must perform the
  following actions:
    1. Try to reverse string s using the split, reverse, and join methods.
    2. If an exception is thrown, catch it and print the contents of the exception's
       message on a new line.
    3. Print s on a new line. If no exception was thrown, then this should be the reversed
       string; if an exception was thrown, this should be the original string.
*/

function reverseString(s) {
  try {
    let reversedNumber = String(s.split('').reverse().join(''));
    console.log(reversedNumber);
  } catch(e) {
    console.log(e.message);
    console.log(s);
  }
}

process.stdout.write(`${reverseString('1234')}\n`);
process.stdout.write(`${reverseString(Number(1234))}\n`);
