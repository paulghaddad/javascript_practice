"use strict";

/*
 Rewrite the following function in ES6

	(function (namespace) {

		var DEFAULT_START = 0;
		var DEFAULT_STEP  = 1;

		var range = function (start, stop, step) {
			var arr = [];

			if (!step) {
				step = DEFAULT_STEP;
			}

			if (!stop) {
				stop = start;
				start = DEFAULT_START;
			}

			if (stop < start) {
				(function () {
					// reverse values
					var tmp = start;
					start = stop;
					stop = tmp;
				}());
			}

			(function () {
				var i;
				for (i = start; i < stop; i += step) {
					arr.push(i);
				}
			}());

			return arr;
	}

  namespace.range = range;

  }(window.mylib));
*/

var DEFAULT_START = 0;
var DEFAULT_STEP = 0;

var range = function range(start, step, stop) {
	var arr = [];

	if (!step) {
		step = DEFAULT_STEP;
	}

	if (!stop) {
		stop = start;
		start = DEFAULT_START;
	}

	if (stop < start) {
		var tmp = start;
		start = stop;
		stop = tmp;
	}

	for (var i = start; i < stop; i++) {
		arr.push(i);
	}

	console.log(arr);
};

range(10, 1, 20);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRfcHJvZ3JhbW1pbmdfd2l0aF9qc19uZXh0LzRfNV9xdWlja19jaGVjay5lczYiXSwibmFtZXMiOlsiREVGQVVMVF9TVEFSVCIsIkRFRkFVTFRfU1RFUCIsInJhbmdlIiwic3RhcnQiLCJzdGVwIiwic3RvcCIsImFyciIsInRtcCIsImkiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0EsSUFBTUEsZ0JBQWdCLENBQXRCO0FBQ0EsSUFBTUMsZUFBZSxDQUFyQjs7QUFFQSxJQUFJQyxRQUFRLFNBQVJBLEtBQVEsQ0FBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQ3ZDLEtBQUlDLE1BQU0sRUFBVjs7QUFFQSxLQUFJLENBQUNGLElBQUwsRUFBVztBQUNUQSxTQUFPSCxZQUFQO0FBQ0Q7O0FBRUQsS0FBSSxDQUFDSSxJQUFMLEVBQVc7QUFDVEEsU0FBT0YsS0FBUDtBQUNBQSxVQUFRSCxhQUFSO0FBQ0Q7O0FBRUQsS0FBSUssT0FBT0YsS0FBWCxFQUFrQjtBQUNoQixNQUFJSSxNQUFNSixLQUFWO0FBQ0FBLFVBQVFFLElBQVI7QUFDQUEsU0FBT0UsR0FBUDtBQUNEOztBQUVELE1BQUssSUFBSUMsSUFBSUwsS0FBYixFQUFvQkssSUFBSUgsSUFBeEIsRUFBOEJHLEdBQTlCLEVBQW1DO0FBQ2pDRixNQUFJRyxJQUFKLENBQVNELENBQVQ7QUFDRDs7QUFFREUsU0FBUUMsR0FBUixDQUFZTCxHQUFaO0FBQ0QsQ0F2QkQ7O0FBeUJBSixNQUFNLEVBQU4sRUFBVSxDQUFWLEVBQWEsRUFBYiIsImZpbGUiOiI0XzVfcXVpY2tfY2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJld3JpdGUgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpbiBFUzZcblxuXHQoZnVuY3Rpb24gKG5hbWVzcGFjZSkge1xuXG5cdFx0dmFyIERFRkFVTFRfU1RBUlQgPSAwO1xuXHRcdHZhciBERUZBVUxUX1NURVAgID0gMTtcblxuXHRcdHZhciByYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgc3RvcCwgc3RlcCkge1xuXHRcdFx0dmFyIGFyciA9IFtdO1xuXG5cdFx0XHRpZiAoIXN0ZXApIHtcblx0XHRcdFx0c3RlcCA9IERFRkFVTFRfU1RFUDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFzdG9wKSB7XG5cdFx0XHRcdHN0b3AgPSBzdGFydDtcblx0XHRcdFx0c3RhcnQgPSBERUZBVUxUX1NUQVJUO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3RvcCA8IHN0YXJ0KSB7XG5cdFx0XHRcdChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gcmV2ZXJzZSB2YWx1ZXNcblx0XHRcdFx0XHR2YXIgdG1wID0gc3RhcnQ7XG5cdFx0XHRcdFx0c3RhcnQgPSBzdG9wO1xuXHRcdFx0XHRcdHN0b3AgPSB0bXA7XG5cdFx0XHRcdH0oKSk7XG5cdFx0XHR9XG5cblx0XHRcdChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBpO1xuXHRcdFx0XHRmb3IgKGkgPSBzdGFydDsgaSA8IHN0b3A7IGkgKz0gc3RlcCkge1xuXHRcdFx0XHRcdGFyci5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KCkpO1xuXG5cdFx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cbiAgbmFtZXNwYWNlLnJhbmdlID0gcmFuZ2U7XG5cbiAgfSh3aW5kb3cubXlsaWIpKTtcbiovXG5cbmNvbnN0IERFRkFVTFRfU1RBUlQgPSAwO1xuY29uc3QgREVGQVVMVF9TVEVQID0gMDtcblxubGV0IHJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBzdGVwLCBzdG9wKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBpZiAoIXN0ZXApIHtcbiAgICBzdGVwID0gREVGQVVMVF9TVEVQO1xuICB9XG5cbiAgaWYgKCFzdG9wKSB7XG4gICAgc3RvcCA9IHN0YXJ0O1xuICAgIHN0YXJ0ID0gREVGQVVMVF9TVEFSVDtcbiAgfVxuXG4gIGlmIChzdG9wIDwgc3RhcnQpIHtcbiAgICBsZXQgdG1wID0gc3RhcnQ7XG4gICAgc3RhcnQgPSBzdG9wO1xuICAgIHN0b3AgPSB0bXA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzdG9wOyBpKyspIHtcbiAgICBhcnIucHVzaChpKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGFycik7XG59XG5cbnJhbmdlKDEwLCAxLCAyMCk7XG4iXX0=