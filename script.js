/* Data to Show*/
const data = [
  {
    quote: `All good things come to an end. It’s been fun for everyone. Peace and hope are never gone. Love you all and say, “So long!”`,
    emoji: "🎆",
    image: `url(assets/theend.jpg)`
  },
  {
    quote: `When you sleep, I’m always here. Don’t be afraid, I am near. Watching over you with lots of love, your guardian angel from above!`,
    emoji: "😇",
    image: `url(assets/halo.jpg)`
  },
  {
    quote: `She darts around and swats the air, then looks confused when nothing’s there. Pick her up and pet her soft fur. Listen closely, and you’ll hear her purr!`,
    emoji: "🖤",
    image: `url(assets/prance.jpg)`
  },
  {
    quote: `Here’s a little squeeze from me. Just to show my love, you see. I hope you feel the same way, too because I know our love is true!`,
    emoji: "💗",
    image: `url(assets/littlesqueeze.jpg)`
  },
    {
    quote: `I’m pink, I’m pink, imagine that. A funny color for a cat. My favorite flower in Creation is a pretty pink carnation!`,
    emoji: "💐",
    image: `url(assets/carnation.jpg)`
  }
]
;

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = "Poems from some of my favorite Beanie Babies.";
// Check-Check: change emoji text
emoji.innerHTML = "🥰";
// Check-Check: background image
bgImage.style.backgroundImage = "url(/assets/pile.png)";


/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
