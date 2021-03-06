'use strict';

/*
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*  Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
*/

function performOperation(secondInteger, secondDecimal, secondString) {
  var firstInteger = 4;
  var firstDecimal = 4.0;
  var firstString = 'HackerRank ';

  console.log(firstInteger + Number(secondInteger));
  console.log(firstDecimal + Number(secondDecimal));
  console.log(firstString + secondString);
}

performOperation('12', '4.32', 'is the best place to learn and practice coding!');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMC9kYXRhX3R5cGVzLmVzNiJdLCJuYW1lcyI6WyJwZXJmb3JtT3BlcmF0aW9uIiwic2Vjb25kSW50ZWdlciIsInNlY29uZERlY2ltYWwiLCJzZWNvbmRTdHJpbmciLCJmaXJzdEludGVnZXIiLCJmaXJzdERlY2ltYWwiLCJmaXJzdFN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTQSxnQkFBVCxDQUEwQkMsYUFBMUIsRUFBeUNDLGFBQXpDLEVBQXdEQyxZQUF4RCxFQUFzRTtBQUNwRSxNQUFNQyxlQUFlLENBQXJCO0FBQ0EsTUFBTUMsZUFBZSxHQUFyQjtBQUNBLE1BQU1DLGNBQWMsYUFBcEI7O0FBRUFDLFVBQVFDLEdBQVIsQ0FBWUosZUFBZUssT0FBT1IsYUFBUCxDQUEzQjtBQUNBTSxVQUFRQyxHQUFSLENBQVlILGVBQWVJLE9BQU9QLGFBQVAsQ0FBM0I7QUFDQUssVUFBUUMsR0FBUixDQUFZRixjQUFjSCxZQUExQjtBQUNEOztBQUVESCxpQkFBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0IsaURBQS9CIiwiZmlsZSI6ImRhdGFfdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiAgIFRoZSB2YXJpYWJsZXMgJ2ZpcnN0SW50ZWdlcicsICdmaXJzdERlY2ltYWwnLCBhbmQgJ2ZpcnN0U3RyaW5nJyBhcmUgZGVjbGFyZWQgZm9yIHlvdSAtLSBkbyBub3QgbW9kaWZ5IHRoZW0uXG4qICAgUHJpbnQgdGhyZWUgbGluZXM6XG4qICAgMS4gVGhlIHN1bSBvZiAnZmlyc3RJbnRlZ2VyJyBhbmQgdGhlIE51bWJlciByZXByZXNlbnRhdGlvbiBvZiAnc2Vjb25kSW50ZWdlcicuXG4qICAgMi4gVGhlIHN1bSBvZiAnZmlyc3REZWNpbWFsJyBhbmQgdGhlIE51bWJlciByZXByZXNlbnRhdGlvbiBvZiAnc2Vjb25kRGVjaW1hbCcuXG4qICAgMy4gVGhlIGNvbmNhdGVuYXRpb24gb2YgJ2ZpcnN0U3RyaW5nJyBhbmQgJ3NlY29uZFN0cmluZycgKCdmaXJzdFN0cmluZycgbXVzdCBiZSBmaXJzdCkuXG4qXG4qICBQYXJhbWV0ZXIocyk6XG4qICAgc2Vjb25kSW50ZWdlciAtIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gaW50ZWdlci5cbiogICBzZWNvbmREZWNpbWFsIC0gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGZsb2F0aW5nLXBvaW50IG51bWJlci5cbiogICBzZWNvbmRTdHJpbmcgLSBBIHN0cmluZyBjb25zaXN0aW5nIG9mIG9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCB3b3Jkcy5cbiovXG5cbmZ1bmN0aW9uIHBlcmZvcm1PcGVyYXRpb24oc2Vjb25kSW50ZWdlciwgc2Vjb25kRGVjaW1hbCwgc2Vjb25kU3RyaW5nKSB7XG4gIGNvbnN0IGZpcnN0SW50ZWdlciA9IDQ7XG4gIGNvbnN0IGZpcnN0RGVjaW1hbCA9IDQuMDtcbiAgY29uc3QgZmlyc3RTdHJpbmcgPSAnSGFja2VyUmFuayAnO1xuXG4gIGNvbnNvbGUubG9nKGZpcnN0SW50ZWdlciArIE51bWJlcihzZWNvbmRJbnRlZ2VyKSk7XG4gIGNvbnNvbGUubG9nKGZpcnN0RGVjaW1hbCArIE51bWJlcihzZWNvbmREZWNpbWFsKSk7XG4gIGNvbnNvbGUubG9nKGZpcnN0U3RyaW5nICsgc2Vjb25kU3RyaW5nKTtcbn1cblxucGVyZm9ybU9wZXJhdGlvbignMTInLCAnNC4zMicsICdpcyB0aGUgYmVzdCBwbGFjZSB0byBsZWFybiBhbmQgcHJhY3RpY2UgY29kaW5nIScpO1xuIl19