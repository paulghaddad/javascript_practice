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
    if ({}.hasOwnProperty.call(attributes, attribute)) {
      formattedAttributes += `${attribute}="${attributes[attribute]}" `;
    }
  }

  return formattedAttributes.trim();
}

function withProps(strParts, props) {
  const [openTag, closeTag] = strParts;

  return `${openTag}${formatAttributes(props)}${closeTag}`;
}

const IMG = withProps`<img ${PROPS}>`;

process.stdout.write(`${IMG}\n`);
