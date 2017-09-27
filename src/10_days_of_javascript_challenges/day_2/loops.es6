/*
  Complete the vowelsAndConsonants function in the editor below. It has one parameter,
  a string, s, consisting of lowercase English alphabetic letters (i.e., a through z).
  The function must do the following:

  1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u,
     and each vowel must be printed in the same order as it appeared in s.
  2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order
     as it appeared in s.
*/

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  for (const i of s) {
    if (i.match(/[aeiou]/)) {
      vowels.push(i);
    } else {
      consonants.push(i);
    }
  }


  for (const vowel of vowels) {
    process.stdout.write(`${vowel}\n`);
  }

  for (const consonant of consonants) {
    process.stdout.write(`${consonant}\n`);
  }
}

process.stdout.write("Input: javascriptloops\n");

vowelsAndConsonants('javascriptloops');
