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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMi9pZi1lbHNlLmpzIl0sIm5hbWVzIjpbImdldEdyYWRlIiwic2NvcmUiLCJncmFkZSIsInByb2Nlc3MiLCJzdGRvdXQiLCJ3cml0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUlDLGNBQUo7O0FBRUEsTUFBSUQsUUFBUSxFQUFSLElBQWNBLFNBQVMsRUFBM0IsRUFBK0I7QUFDN0JDLFlBQVEsR0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJRCxRQUFRLEVBQVIsSUFBY0EsU0FBUyxFQUEzQixFQUErQjtBQUNwQ0MsWUFBUSxHQUFSO0FBQ0QsR0FGTSxNQUVBLElBQUlELFFBQVEsRUFBUixJQUFjQSxTQUFTLEVBQTNCLEVBQStCO0FBQ3BDQyxZQUFRLEdBQVI7QUFDRCxHQUZNLE1BRUEsSUFBSUQsUUFBUSxFQUFSLElBQWNBLFNBQVMsRUFBM0IsRUFBK0I7QUFDcENDLFlBQVEsR0FBUjtBQUNELEdBRk0sTUFFQSxJQUFJRCxRQUFRLENBQVIsSUFBYUEsU0FBUyxFQUExQixFQUE4QjtBQUNuQ0MsWUFBUSxHQUFSO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLFlBQVEsR0FBUjtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDRDs7QUFFREMsUUFBUUMsTUFBUixDQUFlQyxLQUFmLENBQXdCTCxTQUFTLEVBQVQsQ0FBeEIiLCJmaWxlIjoiaWYtZWxzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvbXBsZXRlIHRoZcKgZ2V0R3JhZGUoc2NvcmUpwqBmdW5jdGlvbi4gSXQgaGFzIG9uZSBwYXJhbWV0ZXI6IGFuIGludGVnZXIswqBzY29yZSxcbiAgZGVub3RpbmcgdGhlIG51bWJlciBvZiBwb2ludHMgSnVsaWEgZWFybmVkIG9uIGFuIGV4YW0uIEl0IG11c3QgcmV0dXJuIHRoZSBsZXR0ZXJcbiAgY29ycmVzcG9uZGluZyB0byBoZXLCoMKgYWNjb3JkaW5nIHRvIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG5cbiAgaWYgMjUgPCBzY29yZSA8PSAzMCwgdGhlbiBncmFkZSA9IEFcbiAgaWYgMjAgPCBzY29yZSA8PSAyNSwgdGhlbiBncmFkZSA9IEJcbiAgaWYgMTUgPCBzY29yZSA8PSAyMCwgdGhlbiBncmFkZSA9IENcbiAgaWYgMTAgPCBzY29yZSA8PSAxNSwgdGhlbiBncmFkZSA9IERcbiAgaWYgNSA8IHNjb3JlIDw9IDEwLCB0aGVuIGdyYWRlID0gRVxuICBpZiAwIDwgc2NvcmUgPD0gNSwgdGhlbiBncmFkZSA9IEZcbiovXG5cbmZ1bmN0aW9uIGdldEdyYWRlKHNjb3JlKSB7XG4gIGxldCBncmFkZTtcblxuICBpZiAoc2NvcmUgPiAyNSAmJiBzY29yZSA8PSAzMCkge1xuICAgIGdyYWRlID0gJ0EnO1xuICB9IGVsc2UgaWYgKHNjb3JlID4gMjAgJiYgc2NvcmUgPD0gMjUpIHtcbiAgICBncmFkZSA9ICdCJztcbiAgfSBlbHNlIGlmIChzY29yZSA+IDE1ICYmIHNjb3JlIDw9IDIwKSB7XG4gICAgZ3JhZGUgPSAnQyc7XG4gIH0gZWxzZSBpZiAoc2NvcmUgPiAxMCAmJiBzY29yZSA8PSAxNSkge1xuICAgIGdyYWRlID0gJ0QnO1xuICB9IGVsc2UgaWYgKHNjb3JlID4gNSAmJiBzY29yZSA8PSAxMCkge1xuICAgIGdyYWRlID0gJ0UnO1xuICB9IGVsc2Uge1xuICAgIGdyYWRlID0gJ0YnO1xuICB9XG5cbiAgcmV0dXJuIGdyYWRlO1xufVxuXG5wcm9jZXNzLnN0ZG91dC53cml0ZShgJHtnZXRHcmFkZSgyOCl9XFxuYCk7XG4iXX0=