/*
  Write a function that will take an email address and mask all of the characters up to the @.

  For example the email address dog@example.com would be masked to ***@example.com
*/

function maskEmail(address) {
  let domainPosition = address.indexOf('@');

  let domain = address.substr(domainPosition);

  return domain.padStart(address.length, '*');
}

process.stdout.write(`${maskEmail('paulh16@gmail.com')}\n`);
