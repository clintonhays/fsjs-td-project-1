/***
 * A random quote generator for the Treehouse
 * Full Stack JavaScript Techdegree
 * Project 1
 ***/

/***
 * Global variables
 ***/
const body = document.body;
const container = document.getElementsByClassName('container')[0];
const quoteBox = document.getElementById('quote-box');
const button = document.getElementById('load-quote');
let autoQuote; // empty variable to handle clearing setInterval when using button to generate new quote

// Quotes array
const quotes = [
  {
    quote    : 'Who controls the past controls the future. Who controls the present controls the past.',
    source   : 'George Orwell',
    citation : '1984',
    year     : 1949,
    tag      : 'wisdom',
  },
  {
    quote    : 'Science is magic that works.',
    source   : 'Kurt Vonnegut',
    citation : 'Cats Cradle',
    year     : 1963,
    tag      : 'wisdom',
  },
  {
    quote    : 'You have to be a bit of a liar to tell a story the right way.',
    source   : 'Patrick Rothfuss',
    citation : 'The Name of the Wind',
    year     : 2007,
    tag      : 'humor',
  },
  {
    quote    : 'Like who really run this? Like who really run that man that say he run this?',
    source   : 'Killer Mike',
    citation : 'Lie Cheat Steal',
    year     : 2014,
    tag      : 'politics',
  },
  {
    quote    : 'A little nonsense now and then is relished by the wisest men.',
    source   : 'Roald Dahl',
    citation : 'Charlie and the Great Glass Elevator',
    year     : 1972,
    tag      : 'humor',
  },
  {
    quote    : "We shouldn't be looking for heroes, we should be looking for good ideas.",
    source   : 'Noam Chomsky',
    citation : 'Interview with David Cogswell',
    year     : 1993,
    tag      : 'wisdom',
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

/**
 * generate a random hex color and assign it to body background
 */

const changeBG = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor;
};

/**
 * create fadeOut/fadeIn for quoteBox by
 * transitioning opacity. Works with transition
 * property on .quote-box in css file.
 */

const fadeOut = () => {
  quoteBox.style.opacity = 0;
};

const fadeIn = () => {
  quoteBox.style.opacity = 1;
};

/**
 * generates the html code block to be displayed in
 * quote-box
 */

const printQuote = () => {
  // call function to get random quote
  const quote = getRandomQuote(quotes);
  // generate html to display quote and additional properties
  let html = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  // check for additional properties & concat to html string
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tag) {
    html += `<span class="tag">${quote.tag}</span>`;
  }
  // concat closing tag
  html += `</p>`;
  // insert random quote and additional properties to quote-box div
  quoteBox.innerHTML = html;
  // call function to generate random background color
  changeBG();
  // clear setInterval on each call to keep timing when using button to generate new quote
  clearTimeout(autoQuote);
  // restart setInterval function
  handleAutoQuote();
};

/**
 * handles the process of fading out quote-box
 * printing new quote and fading in quote-box
 */

const handleFade = () => {
  fadeOut();
  setTimeout(printQuote, 300);
  setTimeout(fadeIn, 400);
};

/**
 * calls setInterval using a variable that allows
 * setInterval to be cleared in printquote function
 */

const handleAutoQuote = () => {
  autoQuote = window.setInterval(handleFade, 8000);
};

handleAutoQuote();

//   window.setTimeout(fadeOut, 7500);

//   fadeIn();
// };

// const autoQuote = () => window.setInterval(printQuote, 8000);

// autoQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

button.addEventListener('click', handleFade, false);
