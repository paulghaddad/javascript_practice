'use strict';

/*
  Complete the getGrade(score) function. It has one parameter: an integer, score,
  denoting the number of points Julia earned on an exam. It must return the letter
  corresponding to her  according to the following rules:

  if 25 < score <= 30, then grade = A
  if 20 < score <= 25, then grade = B
  if 15 < score <= 20, then grade = C
  if 10 < score <= 15, then grade = D
  if 5 < score <= 10, then grade = E
  if 0 < score <= 5, then grade = F
*/

function getGrade(score) {
  var grade = void 0;

  if (score > 25 && score <= 30) {
    grade = 'A';
  } else if (score > 20 && score <= 25) {
    grade = 'B';
  } else if (score > 15 && score <= 20) {
    grade = 'C';
  } else if (score > 10 && score <= 15) {
    grade = 'D';
  } else if (score > 5 && score <= 10) {
    grade = 'E';
  } else {
    grade = 'F';
  }

  return grade;
}

process.stdout.write(getGrade(28) + '\n');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMi9pZi1lbHNlLmVzNiJdLCJuYW1lcyI6WyJnZXRHcmFkZSIsInNjb3JlIiwiZ3JhZGUiLCJwcm9jZXNzIiwic3Rkb3V0Iiwid3JpdGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixNQUFJQyxjQUFKOztBQUVBLE1BQUlELFFBQVEsRUFBUixJQUFjQSxTQUFTLEVBQTNCLEVBQStCO0FBQzdCQyxZQUFRLEdBQVI7QUFDRCxHQUZELE1BRU8sSUFBSUQsUUFBUSxFQUFSLElBQWNBLFNBQVMsRUFBM0IsRUFBK0I7QUFDcENDLFlBQVEsR0FBUjtBQUNELEdBRk0sTUFFQSxJQUFJRCxRQUFRLEVBQVIsSUFBY0EsU0FBUyxFQUEzQixFQUErQjtBQUNwQ0MsWUFBUSxHQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUlELFFBQVEsRUFBUixJQUFjQSxTQUFTLEVBQTNCLEVBQStCO0FBQ3BDQyxZQUFRLEdBQVI7QUFDRCxHQUZNLE1BRUEsSUFBSUQsUUFBUSxDQUFSLElBQWFBLFNBQVMsRUFBMUIsRUFBOEI7QUFDbkNDLFlBQVEsR0FBUjtBQUNELEdBRk0sTUFFQTtBQUNMQSxZQUFRLEdBQVI7QUFDRDs7QUFFRCxTQUFPQSxLQUFQO0FBQ0Q7O0FBRURDLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkwsU0FBUyxFQUFULENBQXhCIiwiZmlsZSI6ImlmLWVsc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb21wbGV0ZSB0aGXCoGdldEdyYWRlKHNjb3JlKcKgZnVuY3Rpb24uIEl0IGhhcyBvbmUgcGFyYW1ldGVyOiBhbiBpbnRlZ2VyLMKgc2NvcmUsXG4gIGRlbm90aW5nIHRoZSBudW1iZXIgb2YgcG9pbnRzIEp1bGlhIGVhcm5lZCBvbiBhbiBleGFtLiBJdCBtdXN0IHJldHVybiB0aGUgbGV0dGVyXG4gIGNvcnJlc3BvbmRpbmcgdG8gaGVywqDCoGFjY29yZGluZyB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuXG4gIGlmIDI1IDwgc2NvcmUgPD0gMzAsIHRoZW4gZ3JhZGUgPSBBXG4gIGlmIDIwIDwgc2NvcmUgPD0gMjUsIHRoZW4gZ3JhZGUgPSBCXG4gIGlmIDE1IDwgc2NvcmUgPD0gMjAsIHRoZW4gZ3JhZGUgPSBDXG4gIGlmIDEwIDwgc2NvcmUgPD0gMTUsIHRoZW4gZ3JhZGUgPSBEXG4gIGlmIDUgPCBzY29yZSA8PSAxMCwgdGhlbiBncmFkZSA9IEVcbiAgaWYgMCA8IHNjb3JlIDw9IDUsIHRoZW4gZ3JhZGUgPSBGXG4qL1xuXG5mdW5jdGlvbiBnZXRHcmFkZShzY29yZSkge1xuICBsZXQgZ3JhZGU7XG5cbiAgaWYgKHNjb3JlID4gMjUgJiYgc2NvcmUgPD0gMzApIHtcbiAgICBncmFkZSA9ICdBJztcbiAgfSBlbHNlIGlmIChzY29yZSA+IDIwICYmIHNjb3JlIDw9IDI1KSB7XG4gICAgZ3JhZGUgPSAnQic7XG4gIH0gZWxzZSBpZiAoc2NvcmUgPiAxNSAmJiBzY29yZSA8PSAyMCkge1xuICAgIGdyYWRlID0gJ0MnO1xuICB9IGVsc2UgaWYgKHNjb3JlID4gMTAgJiYgc2NvcmUgPD0gMTUpIHtcbiAgICBncmFkZSA9ICdEJztcbiAgfSBlbHNlIGlmIChzY29yZSA+IDUgJiYgc2NvcmUgPD0gMTApIHtcbiAgICBncmFkZSA9ICdFJztcbiAgfSBlbHNlIHtcbiAgICBncmFkZSA9ICdGJztcbiAgfVxuXG4gIHJldHVybiBncmFkZTtcbn1cblxucHJvY2Vzcy5zdGRvdXQud3JpdGUoYCR7Z2V0R3JhZGUoMjgpfVxcbmApO1xuIl19