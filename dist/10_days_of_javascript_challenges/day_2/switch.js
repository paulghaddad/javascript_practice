'use strict';

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
  var letter = void 0;
  var firstChar = s[0];

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

process.stdout.write('Output: ' + getLetter('adfgt') + '\n');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMi9zd2l0Y2guanMiXSwibmFtZXMiOlsiZ2V0TGV0dGVyIiwicyIsImxldHRlciIsImZpcnN0Q2hhciIsInNlYXJjaCIsInByb2Nlc3MiLCJzdGRvdXQiLCJ3cml0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU0EsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDcEIsTUFBSUMsZUFBSjtBQUNBLE1BQUlDLFlBQVlGLEVBQUUsQ0FBRixDQUFoQjs7QUFFQSxVQUFRLENBQVI7QUFDRSxTQUFLRSxVQUFVQyxNQUFWLENBQWlCLFNBQWpCLENBQUw7QUFDRUYsZUFBUyxHQUFUO0FBQ0E7QUFDRixTQUFLQyxVQUFVQyxNQUFWLENBQWlCLFNBQWpCLENBQUw7QUFDRUYsZUFBUyxHQUFUO0FBQ0E7QUFDRixTQUFLQyxVQUFVQyxNQUFWLENBQWlCLFNBQWpCLENBQUw7QUFDRUYsZUFBUyxHQUFUO0FBQ0E7QUFDRjtBQUNFQSxlQUFTLEdBQVQ7QUFYSjs7QUFjQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBR0RHLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUFxQixnQkFBckI7O0FBRUFGLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixjQUFnQ1AsVUFBVSxPQUFWLENBQWhDIiwiZmlsZSI6InN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvbXBsZXRlIHRoZcKgZ2V0TGV0dGVyKHMpwqBmdW5jdGlvbiBpbiB0aGUgZWRpdG9yLiBJdCBoYXMgb25lIHBhcmFtZXRlcjogYSBzdHJpbmcswqBzLCBjb25zaXN0aW5nIG9mIGxvd2VyY2FzZSBFbmdsaXNoIGFscGhhYmV0aWMgbGV0dGVycyAoaS5lLizCoGHCoHRocm91Z2jCoHopLiBJdCBtdXN0IHJldHVybsKgQSzCoEIswqBDLCBvcsKgRMKgZGVwZW5kaW5nIG9uIHRoZSBmb2xsb3dpbmcgY3JpdGVyaWE6XG4gICogSWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBzdHJpbmfCoMKgaXMgaW4gdGhlIHNldMKge2EsIGUsIGksIG8sIHV9LCB0aGVuIHJldHVybsKgQS5cbiAgKiAqIElmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gc3RyaW5nwqDCoGlzIGluIHRoZSBzZXTCoHtiLCBjLCBkLCBmLCBnfSwgdGhlbiByZXR1cm7CoEIuXG4gICogKiBJZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHN0cmluZ8KgwqBpcyBpbiB0aGUgc2V0wqB7aCwgaiwgaywgbCwgbX0sIHRoZW4gcmV0dXJuwqBDLlxuICAqICogSWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBzdHJpbmfCoMKgaXMgaW4gdGhlIHNldMKge24sIHAsIHEsIHIsIHMsIHQsIHYsIHcsIHgsIHksIHp9LCB0aGVuIHJldHVybsKgRC5cblxuICBDb25zdHJhaW50c1xuICAqICogMSA8PSB8c30gPD0gMTAwLCB3aGVyZcKgfHN8IMKgaXMgdGhlIGxlbmd0aCBvZsKgcy5cbiAgKiAqIFN0cmluZ8Kgc8KgY29udGFpbnMgbG93ZXJjYXNlIEVuZ2xpc2ggYWxwaGFiZXRpYyBsZXR0ZXJzIChpLmUuLMKgYcKgdGhyb3VnaMKgeikgb25seS5cbiovXG5cbmZ1bmN0aW9uIGdldExldHRlcihzKSB7XG4gIGxldCBsZXR0ZXI7XG4gIGxldCBmaXJzdENoYXIgPSBzWzBdO1xuXG4gIHN3aXRjaCAoMCkge1xuICAgIGNhc2UgZmlyc3RDaGFyLnNlYXJjaCgvW2FlaW91XS8pOlxuICAgICAgbGV0dGVyID0gJ0EnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBmaXJzdENoYXIuc2VhcmNoKC9bYmNkZmddLyk6XG4gICAgICBsZXR0ZXIgPSAnQic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGZpcnN0Q2hhci5zZWFyY2goL1toamtsbV0vKTpcbiAgICAgIGxldHRlciA9ICdDJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsZXR0ZXIgPSAnRCc7XG4gIH1cblxuICByZXR1cm4gbGV0dGVyO1xufVxuXG5cbnByb2Nlc3Muc3Rkb3V0LndyaXRlKFwiSW5wdXQ6IGFkZmd0XFxuXCIpO1xuXG5wcm9jZXNzLnN0ZG91dC53cml0ZShgT3V0cHV0OiAke2dldExldHRlcignYWRmZ3QnKX1cXG5gKTtcbiJdfQ==