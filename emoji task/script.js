const emojiCategories = [
  { emojis: "🍔🎂", name: "fast food" },
  { emojis: "😺🐕", name: "pets" },
  { emojis: "📔🖊️", name: "book and pen" },
  { emojis: "🌞🌙", name: "day and night" },
  { emojis: "🎮🕹️", name: "gaming" },
  { emojis: "💻📱", name: "technology" },
  { emojis: "🍎🍌", name: "fruits" },
  { emojis: "🚗🛣️", name: "travel" },
  { emojis: "🎤🎶", name: "music" },
  { emojis: "🏠🌳", name: "home and nature" },
  { emojis: "💍❤️", name: "love and marriage" },
  { emojis: "📸🎥", name: "photography and video" },
  { emojis: "⚽🏀", name: "sports" },
  { emojis: "🌍🌏", name: "earth and world" },
  { emojis: "🍷🍸", name: "drinks and wine" },
  { emojis: "🛒💳", name: "shopping" },
  { emojis: "💼👔", name: "business" },
  { emojis: "🎉🎊", name: "celebration" },
  { emojis: "🚀🪐", name: "space exploration" },
  { emojis: "🧳✈️", name: "tour" }
];


let score = 0;

let randomEmoji;

let visitedEmoji = [];


function getRandomEmojis() {

  randomEmoji = emojiCategories[Math.floor(Math.random() * emojiCategories.length)];

  if (visitedEmoji.includes(randomEmoji)) {
    if (visitedEmoji.length == emojiCategories.length) {
      alert("Game Over! You have visited all the emojis!👋👋 \n Restart Game");
      score = 0;
      document.getElementById("score").textContent = "SCORE :" + score;
      visitedEmoji = [];
    } else {
      return getRandomEmojis();
    }
  } else {
    visitedEmoji.push(randomEmoji);
  }

  const h1 = document.createElement("h1")
  h1.textContent = randomEmoji.emojis;
  document.getElementById("emoji").innerHTML = "";
  document.getElementById("emoji").appendChild(h1);

  console.log("visited list: ", visitedEmoji);

}

getRandomEmojis();


function handleSubmit() {

  const answer = document.getElementById("input").value.trim();

  if (answer == randomEmoji.name) {
    score++;
    document.getElementById("score").textContent = "SCORE :" + score;
    document.getElementById("message").textContent = "🥳 Correct Guess! Well Done";
    setTimeout(() => {
      getRandomEmojis();
    }, 1500);
  }
  else if (randomEmoji.name.includes(answer)) {
    document.getElementById("message").textContent = "👏 Nice Try! You are close! Correct Answer: " + randomEmoji.name;
    setTimeout(() => {
      getRandomEmojis();
    }, 1500)
  }
  else {
    document.getElementById("message").textContent = "☹️ Wrong Guess! Try Again!";
  }

  setTimeout(() => {
    document.getElementById("message").textContent = "🤔 Try your guess!";
  }, 1500);

  if (score == 10) {
    alert("Game Over! You won the game! 🎉🎉🎉 \n Restart Game");
    score = 0;
    document.getElementById("score").textContent = "SCORE :" + score;
    visitedEmoji = [];
  }

  document.getElementById("input").value = "";

}

document.querySelector("#input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSubmit()
  }
});