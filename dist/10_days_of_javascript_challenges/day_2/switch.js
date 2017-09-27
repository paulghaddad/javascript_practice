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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMi9zd2l0Y2guZXM2Il0sIm5hbWVzIjpbImdldExldHRlciIsInMiLCJsZXR0ZXIiLCJmaXJzdENoYXIiLCJzZWFyY2giLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7OztBQVlBLFNBQVNBLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQ3BCLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxZQUFZRixFQUFFLENBQUYsQ0FBaEI7O0FBRUEsVUFBUSxDQUFSO0FBQ0UsU0FBS0UsVUFBVUMsTUFBVixDQUFpQixTQUFqQixDQUFMO0FBQ0VGLGVBQVMsR0FBVDtBQUNBO0FBQ0YsU0FBS0MsVUFBVUMsTUFBVixDQUFpQixTQUFqQixDQUFMO0FBQ0VGLGVBQVMsR0FBVDtBQUNBO0FBQ0YsU0FBS0MsVUFBVUMsTUFBVixDQUFpQixTQUFqQixDQUFMO0FBQ0VGLGVBQVMsR0FBVDtBQUNBO0FBQ0Y7QUFDRUEsZUFBUyxHQUFUO0FBWEo7O0FBY0EsU0FBT0EsTUFBUDtBQUNEOztBQUVERyxRQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBcUIsZ0JBQXJCOztBQUVBRixRQUFRQyxNQUFSLENBQWVDLEtBQWYsY0FBZ0NQLFVBQVUsT0FBVixDQUFoQyIsImZpbGUiOiJzd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb21wbGV0ZSB0aGXCoGdldExldHRlcihzKcKgZnVuY3Rpb24gaW4gdGhlIGVkaXRvci4gSXQgaGFzIG9uZSBwYXJhbWV0ZXI6IGEgc3RyaW5nLMKgcywgY29uc2lzdGluZyBvZiBsb3dlcmNhc2UgRW5nbGlzaCBhbHBoYWJldGljIGxldHRlcnMgKGkuZS4swqBhwqB0aHJvdWdowqB6KS4gSXQgbXVzdCByZXR1cm7CoEEswqBCLMKgQywgb3LCoETCoGRlcGVuZGluZyBvbiB0aGUgZm9sbG93aW5nIGNyaXRlcmlhOlxuICAqIElmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gc3RyaW5nwqDCoGlzIGluIHRoZSBzZXTCoHthLCBlLCBpLCBvLCB1fSwgdGhlbiByZXR1cm7CoEEuXG4gICogKiBJZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHN0cmluZ8KgwqBpcyBpbiB0aGUgc2V0wqB7YiwgYywgZCwgZiwgZ30sIHRoZW4gcmV0dXJuwqBCLlxuICAqICogSWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBzdHJpbmfCoMKgaXMgaW4gdGhlIHNldMKge2gsIGosIGssIGwsIG19LCB0aGVuIHJldHVybsKgQy5cbiAgKiAqIElmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gc3RyaW5nwqDCoGlzIGluIHRoZSBzZXTCoHtuLCBwLCBxLCByLCBzLCB0LCB2LCB3LCB4LCB5LCB6fSwgdGhlbiByZXR1cm7CoEQuXG5cbiAgQ29uc3RyYWludHNcbiAgKiAqIDEgPD0gfHN9IDw9IDEwMCwgd2hlcmXCoHxzfCDCoGlzIHRoZSBsZW5ndGggb2bCoHMuXG4gICogKiBTdHJpbmfCoHPCoGNvbnRhaW5zIGxvd2VyY2FzZSBFbmdsaXNoIGFscGhhYmV0aWMgbGV0dGVycyAoaS5lLizCoGHCoHRocm91Z2jCoHopIG9ubHkuXG4qL1xuXG5mdW5jdGlvbiBnZXRMZXR0ZXIocykge1xuICBsZXQgbGV0dGVyO1xuICBsZXQgZmlyc3RDaGFyID0gc1swXTtcblxuICBzd2l0Y2ggKDApIHtcbiAgICBjYXNlIGZpcnN0Q2hhci5zZWFyY2goL1thZWlvdV0vKTpcbiAgICAgIGxldHRlciA9ICdBJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZmlyc3RDaGFyLnNlYXJjaCgvW2JjZGZnXS8pOlxuICAgICAgbGV0dGVyID0gJ0InO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBmaXJzdENoYXIuc2VhcmNoKC9baGprbG1dLyk6XG4gICAgICBsZXR0ZXIgPSAnQyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGV0dGVyID0gJ0QnO1xuICB9XG5cbiAgcmV0dXJuIGxldHRlcjtcbn1cblxucHJvY2Vzcy5zdGRvdXQud3JpdGUoXCJJbnB1dDogYWRmZ3RcXG5cIik7XG5cbnByb2Nlc3Muc3Rkb3V0LndyaXRlKGBPdXRwdXQ6ICR7Z2V0TGV0dGVyKCdhZGZndCcpfVxcbmApO1xuIl19