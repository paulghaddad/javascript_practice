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

const PROPS = {
  src: 'http://fillmurray.com/100/100',
  alt: 'Bill Murray'
};

function formatAttributes(attributes) {
  let formattedAttributes = '';

  for (let attribute in attributes) {
    formattedAttributes += `${attribute}="${attributes[attribute]}" `;
  }

  return formattedAttributes.trim();
}

function withProps() {
  const STRING_PARTS = arguments[0];
  const PROPS = [].slice.call(arguments, 1).shift();

  let htmlTag = STRING_PARTS.reduce(function (tag, part) {
    return tag + formatAttributes(PROPS) + part;
  });

  return htmlTag
}

const IMG = withProps`<img ${PROPS}>`;

process.stdout.write(`${IMG}\n`);
