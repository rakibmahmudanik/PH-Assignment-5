const cards = document.querySelectorAll(".card");
const hearts = document.querySelectorAll(".heart");
const heartsCount = document.getElementById("hearts-count");
const coinsCount = document.getElementById("coins-count");

let counter = 1;
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartsCount.innerText = counter++;
  });
}

for (const card of cards) {
  const title = card.querySelector(".card-titles h2").innerText;
  const callNumber = card.querySelector(".card-number h1").innerText;
  card.querySelector(".call").addEventListener("click", function () {
    let coins = parseInt(coinsCount.innerText);
    if (coins >= 20) {
      let remainingCoins = coins - 20;
      coinsCount.innerText = remainingCoins;
      alert(`${title}\n${callNumber}`);
    } else {
      alert("insufficient Coin Balance!");
    }
  });
}
