/*
  Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
  * If the first character in string  is in the set {a, e, i, o, u}, then return A.
  * * If the first character in string  is in the set {b, c, d, f, g}, then return B.
  * * If the first character in string  is in the set {h, j, k, l, m}, then return C.
  * * If the first character in string  is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.

  Constraints
  * * 1 <= |s} <= 100, where |s|  is the length of s.
  * * String s contains lowercase English alphabetic letters (i.e., a through z) only.
*/

function getLetter(s) {
  let letter;
  let firstChar = s[0];

  switch (0) {
    case firstChar.search(/[aeiou]/):
      letter = 'A';
      break;
    case firstChar.search(/[bcdfg]/):
      letter = 'B';
      break;
    case firstChar.search(/[hjklm]/):
      letter = 'C';
      break;
    default:
      letter = 'D';
  }

  return letter;
}

process.stdout.write("Input: adfgt\n");

process.stdout.write(`Output: ${getLetter('adfgt')}\n`);
