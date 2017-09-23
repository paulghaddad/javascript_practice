'use strict';

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
    formattedAttributes += attribute + '="' + attributes[attribute] + '" ';
  }

  return formattedAttributes.trim();
}

function withProps() {
  var STRING_PARTS = arguments[0];
  var PROPS = [].slice.call(arguments, 1).shift();

  var htmlTag = STRING_PARTS.reduce(function (tag, part) {
    return tag + formatAttributes(PROPS) + part;
  });

  return htmlTag;
}

var IMG = withProps(_templateObject, PROPS);

process.stdout.write(IMG + '\n');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRfcHJvZ3JhbW1pbmdfd2l0aF9qc19uZXh0L21vZHVsZV83X2V4ZXJjaXNlLmVzNiJdLCJuYW1lcyI6WyJQUk9QUyIsInNyYyIsImFsdCIsImZvcm1hdEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiZm9ybWF0dGVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsInRyaW0iLCJ3aXRoUHJvcHMiLCJTVFJJTkdfUEFSVFMiLCJhcmd1bWVudHMiLCJzbGljZSIsImNhbGwiLCJzaGlmdCIsImh0bWxUYWciLCJyZWR1Y2UiLCJ0YWciLCJwYXJ0IiwiSU1HIiwicHJvY2VzcyIsInN0ZG91dCIsIndyaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNQSxRQUFRO0FBQ1pDLE9BQUssK0JBRE87QUFFWkMsT0FBSztBQUZPLENBQWQ7O0FBS0EsU0FBU0MsZ0JBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDO0FBQ3BDLE1BQUlDLHNCQUFzQixFQUExQjs7QUFFQSxPQUFLLElBQUlDLFNBQVQsSUFBc0JGLFVBQXRCLEVBQWtDO0FBQ2hDQywyQkFBMEJDLFNBQTFCLFVBQXdDRixXQUFXRSxTQUFYLENBQXhDO0FBQ0Q7O0FBRUQsU0FBT0Qsb0JBQW9CRSxJQUFwQixFQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQixNQUFNQyxlQUFlQyxVQUFVLENBQVYsQ0FBckI7QUFDQSxNQUFNVixRQUFRLEdBQUdXLEtBQUgsQ0FBU0MsSUFBVCxDQUFjRixTQUFkLEVBQXlCLENBQXpCLEVBQTRCRyxLQUE1QixFQUFkOztBQUVBLE1BQUlDLFVBQVVMLGFBQWFNLE1BQWIsQ0FBb0IsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCO0FBQ3JELFdBQU9ELE1BQU1iLGlCQUFpQkgsS0FBakIsQ0FBTixHQUFnQ2lCLElBQXZDO0FBQ0QsR0FGYSxDQUFkOztBQUlBLFNBQU9ILE9BQVA7QUFDRDs7QUFFRCxJQUFNSSxNQUFNVixTQUFOLGtCQUF1QlIsS0FBdkIsQ0FBTjs7QUFFQW1CLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUF3QkgsR0FBeEIiLCJmaWxlIjoibW9kdWxlXzdfZXhlcmNpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBXcml0ZSBhIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiB1c2UgdG8gdGFnIHRlbXBsYXRlIGxpdGVyYWxzIHRoYXQgY2hlY2tzIGVhY2hcbiAgdmFsdWUgaWYgaXQgaXMgYW4gb2JqZWN0LCBhbmQgaWYgc28sIGNvbnZlcnRzIHRoZSBvYmplY3QgaW50byBhIHN0cmluZyBvZlxuICBrZXkvdmFsdWUgcGFpcnMgYmVmb3JlIGludGVycG9sYXRpb24uXG5cbiAgSW5wdXQ6XG5cbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgc3JjOiAnaHR0cDovL2ZpbGxtdXJyYXkuY29tLzEwMC8xMDAnLFxuICAgIGFsdDogJ0JpbGwgTXVycmF5J1xuICB9O1xuXG4gIGNvbnN0IGltZyA9IHdpdGhQcm9wc2A8aW1nICR7cHJvcHN9PmA7XG5cbiAgT3V0cHV0OlxuXG4gIDxpbWcgc3JjPVwiaHR0cDovL2ZpbGxtdXJyYXkuY29tLzEwMC8xMDBcIiBhbHQ9XCJCaWxsIE11cnJheVwiPlxuKi9cblxuY29uc3QgUFJPUFMgPSB7XG4gIHNyYzogJ2h0dHA6Ly9maWxsbXVycmF5LmNvbS8xMDAvMTAwJyxcbiAgYWx0OiAnQmlsbCBNdXJyYXknXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgbGV0IGZvcm1hdHRlZEF0dHJpYnV0ZXMgPSAnJztcblxuICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgIGZvcm1hdHRlZEF0dHJpYnV0ZXMgKz0gYCR7YXR0cmlidXRlfT1cIiR7YXR0cmlidXRlc1thdHRyaWJ1dGVdfVwiIGA7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkQXR0cmlidXRlcy50cmltKCk7XG59XG5cbmZ1bmN0aW9uIHdpdGhQcm9wcygpIHtcbiAgY29uc3QgU1RSSU5HX1BBUlRTID0gYXJndW1lbnRzWzBdO1xuICBjb25zdCBQUk9QUyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5zaGlmdCgpO1xuXG4gIGxldCBodG1sVGFnID0gU1RSSU5HX1BBUlRTLnJlZHVjZShmdW5jdGlvbiAodGFnLCBwYXJ0KSB7XG4gICAgcmV0dXJuIHRhZyArIGZvcm1hdEF0dHJpYnV0ZXMoUFJPUFMpICsgcGFydDtcbiAgfSk7XG5cbiAgcmV0dXJuIGh0bWxUYWdcbn1cblxuY29uc3QgSU1HID0gd2l0aFByb3BzYDxpbWcgJHtQUk9QU30+YDtcblxucHJvY2Vzcy5zdGRvdXQud3JpdGUoYCR7SU1HfVxcbmApO1xuIl19