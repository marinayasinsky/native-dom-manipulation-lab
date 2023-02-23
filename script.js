let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.getElementById('main-title')
  mainTitle.innerText = 'this is dome';


  // Part 2
const Body = document.querySelector('body')
Body.style.backgroundColor= 'pink'; 

  // Part 3
const favUl = document.querySelector("ul");
favUl.lastElementChild.remove("favUl.lastElementChild");
console.log(favUl);

  // Part 4
const subTitle = document.querySelectorAll('.special-title');
subTitle.forEach(el => el.style.fontSize = '2rem');
console.log(subTitle);

  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
