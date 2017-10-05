'use strict';

/*
  Complete the isPositive function below. It has one integer parameter, a. If the value
  of a is positive, it must return the string YES. Otherwise, it must throw an Error according
  to the following rules:
     * If 'a' is positive, return "YES".
     *  * If 'a' is 0, throw an Error with the message "Zero Error"
     * If 'a' is negative, throw an Error with the message "Negative Error"
*/

function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else if (a === 0) {
        throw new Error('Zero Error');
    } else {
        throw new Error('Negative Error');
    }
}

process.stdout.write(isPositive(2) + '\n');
process.stdout.write(isPositive(0) + '\n');
process.stdout.write(isPositive(-2) + '\n');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMy90aHJvdy5lczYiXSwibmFtZXMiOlsiaXNQb3NpdGl2ZSIsImEiLCJFcnJvciIsInByb2Nlc3MiLCJzdGRvdXQiLCJ3cml0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7O0FBU0EsU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFDbkIsUUFBSUEsSUFBSSxDQUFSLEVBQVc7QUFDUCxlQUFPLEtBQVA7QUFDSCxLQUZELE1BRU8sSUFBSUEsTUFBTSxDQUFWLEVBQWE7QUFDaEIsY0FBTSxJQUFJQyxLQUFKLENBQVUsWUFBVixDQUFOO0FBQ0gsS0FGTSxNQUVBO0FBQ0gsY0FBTSxJQUFJQSxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBRURDLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkwsV0FBVyxDQUFYLENBQXhCO0FBQ0FHLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkwsV0FBVyxDQUFYLENBQXhCO0FBQ0FHLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkwsV0FBVyxDQUFDLENBQVosQ0FBeEIiLCJmaWxlIjoidGhyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb21wbGV0ZSB0aGXCoGlzUG9zaXRpdmXCoGZ1bmN0aW9uIGJlbG93LiBJdCBoYXMgb25lIGludGVnZXIgcGFyYW1ldGVyLMKgYS4gSWYgdGhlIHZhbHVlXG4gIG9mwqBhwqBpcyBwb3NpdGl2ZSwgaXQgbXVzdCByZXR1cm4gdGhlIHN0cmluZ8KgWUVTLiBPdGhlcndpc2UsIGl0IG11c3TCoHRocm93wqBhbsKgRXJyb3LCoGFjY29yZGluZ1xuICB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIElmICdhJyBpcyBwb3NpdGl2ZSwgcmV0dXJuIFwiWUVTXCIuXG4gICAgICogICogSWYgJ2EnIGlzIDAsIHRocm93IGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2UgXCJaZXJvIEVycm9yXCJcbiAgICAgKiBJZiAnYScgaXMgbmVnYXRpdmUsIHRocm93IGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2UgXCJOZWdhdGl2ZSBFcnJvclwiXG4qL1xuXG5mdW5jdGlvbiBpc1Bvc2l0aXZlKGEpIHtcbiAgICBpZiAoYSA+IDApIHtcbiAgICAgICAgcmV0dXJuICdZRVMnO1xuICAgIH0gZWxzZSBpZiAoYSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1plcm8gRXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lZ2F0aXZlIEVycm9yJyk7XG4gICAgfVxufVxuXG5wcm9jZXNzLnN0ZG91dC53cml0ZShgJHtpc1Bvc2l0aXZlKDIpfVxcbmApO1xucHJvY2Vzcy5zdGRvdXQud3JpdGUoYCR7aXNQb3NpdGl2ZSgwKX1cXG5gKTtcbnByb2Nlc3Muc3Rkb3V0LndyaXRlKGAke2lzUG9zaXRpdmUoLTIpfVxcbmApO1xuIl19