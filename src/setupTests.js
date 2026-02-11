// src/setupTests.js

//I did not have this file originally so I created it.
//I did not get the warning: Warning: An update to CitySearch inside a test was not wrapped in act(...).
//But I am adding it for the exercise

import '@testing-library/jest-dom';

// Here, add portions of the warning messages you want to intentionally prevent from appearing

const MESSAGES_TO_IGNORE = [
  'When testing, code that causes React state updates should be wrapped into act(...):',
  'Error:',
  'The above error occurred',
];

const originalError = console.error.bind(console.error);

console.error = (...arg) => {
  const ignoreMessage = MESSAGES_TO_IGNORE.find((message) =>
    args.toString().includes(message),
  );
  if (!ignoreMessage) originalError(...arg);
};
