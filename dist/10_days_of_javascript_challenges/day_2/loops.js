"use strict";

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
  var vowels = [];
  var consonants = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (i.match(/[aeiou]/)) {
        vowels.push(i);
      } else {
        consonants.push(i);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = vowels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var vowel = _step2.value;

      process.stdout.write(vowel + "\n");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = consonants[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var consonant = _step3.value;

      process.stdout.write(consonant + "\n");
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

process.stdout.write("Input: javascriptloops\n");

vowelsAndConsonants('javascriptloops');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xMF9kYXlzX29mX2phdmFzY3JpcHRfY2hhbGxlbmdlcy9kYXlfMi9sb29wcy5lczYiXSwibmFtZXMiOlsidm93ZWxzQW5kQ29uc29uYW50cyIsInMiLCJ2b3dlbHMiLCJjb25zb25hbnRzIiwiaSIsIm1hdGNoIiwicHVzaCIsInZvd2VsIiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIiwiY29uc29uYW50Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztBQVdBLFNBQVNBLG1CQUFULENBQTZCQyxDQUE3QixFQUFnQztBQUM5QixNQUFJQyxTQUFTLEVBQWI7QUFDQSxNQUFJQyxhQUFhLEVBQWpCOztBQUY4QjtBQUFBO0FBQUE7O0FBQUE7QUFJOUIseUJBQWdCRixDQUFoQiw4SEFBbUI7QUFBQSxVQUFSRyxDQUFROztBQUNqQixVQUFJQSxFQUFFQyxLQUFGLENBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3RCSCxlQUFPSSxJQUFQLENBQVlGLENBQVo7QUFDRCxPQUZELE1BRU87QUFDTEQsbUJBQVdHLElBQVgsQ0FBZ0JGLENBQWhCO0FBQ0Q7QUFDRjtBQVY2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWE5QiwwQkFBb0JGLE1BQXBCLG1JQUE0QjtBQUFBLFVBQWpCSyxLQUFpQjs7QUFDMUJDLGNBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkgsS0FBeEI7QUFDRDtBQWY2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWlCOUIsMEJBQXdCSixVQUF4QixtSUFBb0M7QUFBQSxVQUF6QlEsU0FBeUI7O0FBQ2xDSCxjQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBd0JDLFNBQXhCO0FBQ0Q7QUFuQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQi9COztBQUVESCxRQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBcUIsMEJBQXJCOztBQUVBVixvQkFBb0IsaUJBQXBCIiwiZmlsZSI6Imxvb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29tcGxldGUgdGhlwqB2b3dlbHNBbmRDb25zb25hbnRzwqBmdW5jdGlvbiBpbiB0aGUgZWRpdG9yIGJlbG93LiBJdCBoYXMgb25lIHBhcmFtZXRlcixcbiAgYSBzdHJpbmcswqBzLCBjb25zaXN0aW5nIG9mIGxvd2VyY2FzZSBFbmdsaXNoIGFscGhhYmV0aWMgbGV0dGVycyAoaS5lLizCoGHCoHRocm91Z2jCoHopLlxuICBUaGUgZnVuY3Rpb24gbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxuXG4gIDEuIEZpcnN0LCBwcmludCBlYWNowqB2b3dlbMKgaW7CoHPCoG9uIGEgbmV3IGxpbmUuIFRoZSBFbmdsaXNoIHZvd2VscyBhcmXCoGEswqBlLMKgaSzCoG8sIGFuZMKgdSxcbiAgICAgYW5kIGVhY2ggdm93ZWwgbXVzdCBiZSBwcmludGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGl0IGFwcGVhcmVkIGluwqBzLlxuICAyLiBTZWNvbmQsIHByaW50IGVhY2jCoGNvbnNvbmFudMKgKGkuZS4sIG5vbi12b3dlbCkgaW7CoHPCoG9uIGEgbmV3IGxpbmUgaW4gdGhlIHNhbWUgb3JkZXJcbiAgICAgYXMgaXQgYXBwZWFyZWQgaW7CoHMuXG4qL1xuXG5mdW5jdGlvbiB2b3dlbHNBbmRDb25zb25hbnRzKHMpIHtcbiAgbGV0IHZvd2VscyA9IFtdO1xuICBsZXQgY29uc29uYW50cyA9IFtdO1xuXG4gIGZvciAoY29uc3QgaSBvZiBzKSB7XG4gICAgaWYgKGkubWF0Y2goL1thZWlvdV0vKSkge1xuICAgICAgdm93ZWxzLnB1c2goaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbmFudHMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuXG4gIGZvciAoY29uc3Qgdm93ZWwgb2Ygdm93ZWxzKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYCR7dm93ZWx9XFxuYCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNvbnNvbmFudCBvZiBjb25zb25hbnRzKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYCR7Y29uc29uYW50fVxcbmApO1xuICB9XG59XG5cbnByb2Nlc3Muc3Rkb3V0LndyaXRlKFwiSW5wdXQ6IGphdmFzY3JpcHRsb29wc1xcblwiKTtcblxudm93ZWxzQW5kQ29uc29uYW50cygnamF2YXNjcmlwdGxvb3BzJyk7XG4iXX0=