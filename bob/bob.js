export const hey = (message) => {
  message = message.replace(/\s/g, '');
  var lastChar = message[message.length-1];
  var response = '';

  if (message.length === 0) {
    response = 'Fine. Be that way!';
  } else if (message.match(/[a-zA-Z]/) && message === message.toUpperCase() && lastChar === '?') {
    response = 'Calm down, I know what I\'m doing!'
  } else if (message.match(/[a-zA-Z]/) && message === message.toUpperCase()) {
    response = 'Whoa, chill out!';
  } else if (lastChar === '?') {
    response = 'Sure.'
  } else {
    response = 'Whatever.';
  }

  return response;
};
