const cards = document.querySelectorAll(".card");
const hearts = document.querySelectorAll(".heart");
const heartsCount = document.getElementById("hearts-count");
const coinsCount = document.getElementById("coins-count");
const history = document.querySelector(".history-data");
const clear = document.getElementById("clear-history");
const copyBtn = document.getElementById("copy");

let heartCounter = 1;
let copyCounter = 3;
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartsCount.innerText = heartCounter++;
  });
}

for (const card of cards) {
  const title = card.querySelector(".card-titles h2").innerText;
  const callNumber = card.querySelector(".card-number h1").innerText;
  card.querySelector(".call").addEventListener("click", function (e) {
    let coins = parseInt(coinsCount.innerText);
    if (coins >= 20) {
      let remainingCoins = coins - 20;
      coinsCount.innerText = remainingCoins;

      alert(`Calling ${title} ${callNumber} ...`);

      if (e.target.classList.contains("call")) {
        const now = new Date();
        const time = now.toLocaleTimeString();

        const li = document.createElement("li");
        li.innerHTML = `<div class="info">
                <p>${title}</p>
                <span>${callNumber}</span>
              </div>
              <span class="time">${time}</span>
            `;

        history.appendChild(li);

        clear.addEventListener("click", function () {
          history.removeChild(li);
        });
      }
    } else {
      alert("insufficient Coin Balance!");
    }
  });

  card.querySelector(".copy").addEventListener("click", function (e) {
    if (e.target.classList.contains("copy")) {
      navigator.clipboard.writeText(callNumber);
      copyBtn.innerText = `${copyCounter++} Copy`;
      alert(`Number coppied ${callNumber}`);
    }
  });
}
