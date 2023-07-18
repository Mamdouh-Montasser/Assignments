
var quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "Marilyn Monroe"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard"
    },
    {
      quote: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde"
    },
    {
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: " Martin Luther King Jr"
    },
    {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
  ];
  
  function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");
  
    quoteElement.textContent = quotes[randomIndex].quote;
    authorElement.textContent = "- " + quotes[randomIndex].author;
  }
  

























// // Array of quotes
// const quotes = [
//     "Be yourself; everyone else is already taken.",
//     "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//     "Be the change that you wish to see in the world.",
//     "In three words I can sum up everything I've learned about life: it goes on.",
//     "If you tell the truth, you don't have to remember anything.",
//     "A friend is someone who knows all about you and still loves you.",
//     "To live is the rarest thing in the world. Most people exist, that is all.",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts."
//   ];
  
//   function generateQuote() {
//     const randomNumber = Math.floor(Math.random() * quotes.length); // Generate a random number
//     const quoteElement = document.getElementById("quote"); // Get the quote element
//     quoteElement.textContent = quotes[randomNumber]; // Set the random quote as the content
//   }
  