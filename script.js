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
console.log(Body);

  // Part 3
const favUl = document.querySelector("ul");
favUl.lastElementChild.remove("favUl.lastElementChild");
console.log(favUl);

  // Part 4
const subTitle = document.querySelectorAll('.special-title');
subTitle.forEach(el => el.style.fontSize = '2rem');
console.log(subTitle);

  // Part 5
const pastRaces = document.getElementById('past-races');
pastRaces.children[3].remove()
console.log(pastRaces.children[3]);

  // Part 6
const newCityName = 'Paris';
const newLi = document.createElement('li');
newLi.textContent = newCityName;
console.log(newLi);
pastRaces.appendChild(newLi);
console.log(pastRaces);

// Part 7
function createNewBlogPost(cityName) {
  const newDiv = document.createElement('div');
  newDiv.className = 'blog-post purple';
  const newHeader = document.createElement('h1');
  newHeader.innerText = cityName;
  const newH2 = document.createElement('h2');
  newH2.innerText = `Heading for ${cityName}`;
  const newP = document.createElement('p');
  newP.innerText = 'Lorem ipsum and what not and other stuffLorem ipsum and what not and other stuff';
  newDiv.appendChild(newHeader);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  document.getElementById('dom-adventures').insertAdjacentElement('afterend', newDiv);
}

createNewBlogPost(newCityName);

// Part 8
const quoteTitle = document.querySelector('#quote-title');
quoteTitle.addEventListener('click', randomQuote);

// Part 9
const blogPosts = document.querySelectorAll('.blog-post');
console.log(blogPosts);
blogPosts.forEach(post => {
  post.addEventListener('mouseleave', (e) => {
    console.log('LEAVING');
togglePost(e.target)
  });
  post.addEventListener('mouseenter', (e) => {
    console.log('ENTERED');
togglePost(e.target)
  });
});
});
