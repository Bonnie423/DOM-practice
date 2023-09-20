let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: 'You must be the change you wish to see in the world.',
    person: 'Mahatma Gandhi',
  },
  {
    quote: 'The only thing we have to fear is fear itself.',
    person: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Do one thing every day that scares you.',
    person: 'Eleanor Roosevelt',
  },
  { quote: 'Well done is better than well said', person: 'Benjamin Franklin' },
  {
    quote: 'Be yourself; everyone else is already taken.',
    person: 'Oscar Wilde',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    person: 'Aristotle',
  },
  {
    quote: 'The only thing we have to fear is fear itself.',
    person: 'Franklin D. Roosevel',
  },
  {
    quote: 'The only impossible journey is the one you never begin.',
    person: 'Tony Robbins',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    person: 'Albert Einstein',
  },
  { quote: 'The purpose of our lives is to be happy.', person: 'Dalai Lama' },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    person: 'Mae West',
  },
  { quote: 'May you live all the days of your life.', person: 'onathan Swift' },
]

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length)
  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].person
})
