/***
 * A random quote generator for the Treehouse
 * Full Stack JavaScript Techdegree
 * Project 1
 ***/

// Quotes array
const quotes = [
  {
    quote    : 'Who controls the past controls the future. Who controls the present controls the past.',
    source   : 'George Orwell',
    citation : '1984',
    year     : 1949,
  },
  {
    quote    : 'Science is magic that works.',
    source   : 'Kurt Vonnegut',
    citation : 'Cats Cradle',
    year     : 1963,
  },
  {
    quote    : 'You have to be a bit of a liar to tell a story the right way.',
    source   : 'Patrick Rothfuss',
    citation : 'The Name of the Wind',
    year     : 2007,
  },
  {
    quote    :
      'Like who really run this? Like who really run that man that say he run this? Who who really run that man that say he run this?',
    source   : 'Killer Mike',
    citation : 'Lie Cheat Steal',
    year     : 2014,
  },
  {
    quote    : 'A little nonsense now and then is relished by the wisest men.',
    source   : 'Roald Dahl',
    citation : 'Charlie and the Great Glass Elevator',
    year     : 1972,
  },
  {
    quote    : "We shouldn't be looking for heroes, we should be looking for good ideas.",
    source   : 'Noam Chomsky',
    citation : 'Interview with David Cogswell',
    year     : 1993,
  },
];

/**
 * returns a random quote object from an array
 * 
 * @param {array} arr - The array of quote objects
 * @return {object} The quote object from the array
 */

const getRandomQuote = (arr) => {
  // generate random number based on array length
  const randNum = Math.floor(Math.random() * arr.length);
  // get random quote based on index
  const randQuote = arr[randNum];
  // return randQuote
  return randQuote;
};

/***
 * `printQuote` function
***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
