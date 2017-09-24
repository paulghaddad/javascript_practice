'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['<img ', '>'], ['<img ', '>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
  Write a function that you can use to tag template literals that checks each
  value if it is an object, and if so, converts the object into a string of
  key/value pairs before interpolation.

  Input:

  const props = {
    src: 'http://fillmurray.com/100/100',
    alt: 'Bill Murray'
  };

  const img = withProps`<img ${props}>`;

  Output:

  <img src="http://fillmurray.com/100/100" alt="Bill Murray">
*/

var PROPS = {
  src: 'http://fillmurray.com/100/100',
  alt: 'Bill Murray'
};

function formatAttributes(attributes) {
  var formattedAttributes = '';

  for (var attribute in attributes) {
    if ({}.hasOwnProperty.call(attributes, attribute)) {
      formattedAttributes += attribute + '="' + attributes[attribute] + '" ';
    }
  }

  return formattedAttributes.trim();
}

function withProps(strParts, props) {
  var _strParts = _slicedToArray(strParts, 2),
      openTag = _strParts[0],
      closeTag = _strParts[1];

  return '' + openTag + formatAttributes(props) + closeTag;
}

var IMG = withProps(_templateObject, PROPS);

process.stdout.write(IMG + '\n');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRfcHJvZ3JhbW1pbmdfd2l0aF9qc19uZXh0L21vZHVsZV83X2V4ZXJjaXNlLmVzNiJdLCJuYW1lcyI6WyJQUk9QUyIsInNyYyIsImFsdCIsImZvcm1hdEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiZm9ybWF0dGVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInRyaW0iLCJ3aXRoUHJvcHMiLCJzdHJQYXJ0cyIsInByb3BzIiwib3BlblRhZyIsImNsb3NlVGFnIiwiSU1HIiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLElBQU1BLFFBQVE7QUFDWkMsT0FBSywrQkFETztBQUVaQyxPQUFLO0FBRk8sQ0FBZDs7QUFLQSxTQUFTQyxnQkFBVCxDQUEwQkMsVUFBMUIsRUFBc0M7QUFDcEMsTUFBSUMsc0JBQXNCLEVBQTFCOztBQUVBLE9BQUssSUFBSUMsU0FBVCxJQUFzQkYsVUFBdEIsRUFBa0M7QUFDaEMsUUFBSSxHQUFHRyxjQUFILENBQWtCQyxJQUFsQixDQUF1QkosVUFBdkIsRUFBbUNFLFNBQW5DLENBQUosRUFBbUQ7QUFDakRELDZCQUEwQkMsU0FBMUIsVUFBd0NGLFdBQVdFLFNBQVgsQ0FBeEM7QUFDRDtBQUNGOztBQUVELFNBQU9ELG9CQUFvQkksSUFBcEIsRUFBUDtBQUNEOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCQyxLQUE3QixFQUFvQztBQUFBLGlDQUNORCxRQURNO0FBQUEsTUFDM0JFLE9BRDJCO0FBQUEsTUFDbEJDLFFBRGtCOztBQUdsQyxjQUFVRCxPQUFWLEdBQW9CVixpQkFBaUJTLEtBQWpCLENBQXBCLEdBQThDRSxRQUE5QztBQUNEOztBQUVELElBQU1DLE1BQU1MLFNBQU4sa0JBQXVCVixLQUF2QixDQUFOOztBQUVBZ0IsUUFBUUMsTUFBUixDQUFlQyxLQUFmLENBQXdCSCxHQUF4QiIsImZpbGUiOiJtb2R1bGVfN19leGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFdyaXRlIGEgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIHVzZSB0byB0YWcgdGVtcGxhdGUgbGl0ZXJhbHMgdGhhdCBjaGVja3MgZWFjaFxuICB2YWx1ZSBpZiBpdCBpcyBhbiBvYmplY3QsIGFuZCBpZiBzbywgY29udmVydHMgdGhlIG9iamVjdCBpbnRvIGEgc3RyaW5nIG9mXG4gIGtleS92YWx1ZSBwYWlycyBiZWZvcmUgaW50ZXJwb2xhdGlvbi5cblxuICBJbnB1dDpcblxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBzcmM6ICdodHRwOi8vZmlsbG11cnJheS5jb20vMTAwLzEwMCcsXG4gICAgYWx0OiAnQmlsbCBNdXJyYXknXG4gIH07XG5cbiAgY29uc3QgaW1nID0gd2l0aFByb3BzYDxpbWcgJHtwcm9wc30+YDtcblxuICBPdXRwdXQ6XG5cbiAgPGltZyBzcmM9XCJodHRwOi8vZmlsbG11cnJheS5jb20vMTAwLzEwMFwiIGFsdD1cIkJpbGwgTXVycmF5XCI+XG4qL1xuXG5jb25zdCBQUk9QUyA9IHtcbiAgc3JjOiAnaHR0cDovL2ZpbGxtdXJyYXkuY29tLzEwMC8xMDAnLFxuICBhbHQ6ICdCaWxsIE11cnJheSdcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICBsZXQgZm9ybWF0dGVkQXR0cmlidXRlcyA9ICcnO1xuXG4gIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoYXR0cmlidXRlcywgYXR0cmlidXRlKSkge1xuICAgICAgZm9ybWF0dGVkQXR0cmlidXRlcyArPSBgJHthdHRyaWJ1dGV9PVwiJHthdHRyaWJ1dGVzW2F0dHJpYnV0ZV19XCIgYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkQXR0cmlidXRlcy50cmltKCk7XG59XG5cbmZ1bmN0aW9uIHdpdGhQcm9wcyhzdHJQYXJ0cywgcHJvcHMpIHtcbiAgY29uc3QgW29wZW5UYWcsIGNsb3NlVGFnXSA9IHN0clBhcnRzO1xuXG4gIHJldHVybiBgJHtvcGVuVGFnfSR7Zm9ybWF0QXR0cmlidXRlcyhwcm9wcyl9JHtjbG9zZVRhZ31gO1xufVxuXG5jb25zdCBJTUcgPSB3aXRoUHJvcHNgPGltZyAke1BST1BTfT5gO1xuXG5wcm9jZXNzLnN0ZG91dC53cml0ZShgJHtJTUd9XFxuYCk7XG4iXX0=