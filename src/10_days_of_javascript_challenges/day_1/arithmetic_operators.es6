/*
  Calculate the area of a rectangle.

  length: The length of the rectangle.
  width: The width of the rectangle.

  Return a number denoting the rectangle's area.
*/

function getArea(length, width) {
  return length * width;
}

process.stdout.write(`${getArea(3, 4.5)}\n`);

/*
  Calculate the perimeter of a rectangle.

  length: The length of the rectangle.
  width: The width of the rectangle.

  Return a number denoting the perimeter of a rectangle.
*/

function getPerimeter(length, width) {
  return 2 * (length + width);
}

process.stdout.write(`${getPerimeter(3, 4.5)}\n`);
