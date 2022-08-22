let quote = document.getElementById("quote");
let author = document.getElementById("author");
let hr = document.querySelector("hr");

let quotes = {
  "Will Smith": "Money and success don’t change people; they merely amplify what is already there",
  "Steve Jobs": "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",
  "Leo Burnett": "Curiosity about life in all of its aspects, I think, is still the secret of great creative people",
  "Tim Berners-Lee": "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past",
  "Stewart Brand": "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road",
  "Bill Gates": "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life"
};

let authorList = ["Will Smith", "Steve Jobs", "Leo Burnett", "Tim Berners-Lee", "Stewart Brand", "Bill Gates"];

let check = 100;
function generate() {

  let randomNum = Math.floor(authorList.length * Math.random());
  if (check === randomNum) {
    return generate();
  }
  check = randomNum;

  quote.style.opacity = 0;

  setTimeout(function() {
    quote.style.opacity = 1;
  }, 300);
  // quote.style.opacity = 1;
  quote.textContent = quotes[authorList[randomNum]];
  author.textContent = authorList[randomNum];
  // let increase = setInterval(progress, 1);

  hr.style.width = "0%";
  count = 0, hrWidth = 0;
  let progress = setInterval(increaseBar, 10);

}


// let count = 0, hrWidth = 0;
// function increaseBar() {
//   count++;
//   if (count > 1000) {
//     clearInterval(progress);
//     count = 0;
//     hrWidth = 0;
//   }
//   hrWidth += 0.1;
//   hr.style.width = `${hrWidth}%`;
//
// }
generate();
// let interval = setInterval(generate, 10000);
// let interval = setInterval(generate, 10000);



// function progress() {
//   num += 0.042;
//   if (num > 100) {
//     clearInterval(increase);
//     num = 0;
//   }
//   hr.style.width = `${num}%`;
// }

// let increase = setInterval(progress, 1);
