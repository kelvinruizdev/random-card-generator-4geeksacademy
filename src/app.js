/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let table = document.getElementById("table");
  table.style.backgroundColor = "green";
  table.style.width = "1000px";
  table.style.height = "1000px";
  table.style.margin = "0 auto";
  table.style.position = "relative";

  let card = document.createElement("div");
  card.style.backgroundColor = "white";
  card.style.width = "300px";
  card.style.height = "450px";
  card.style.margin = "0 auto";
  card.style.borderRadius = "15px";
  card.style.position = "relative";
  table.appendChild(card);

  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  switch (Math.floor(Math.random() * 1 + 1)) {
    case 1:
      let heartOne = document.createElement("h1");
      let heartTwo = document.createElement("h1");
      let value = document.createElement("h1");

      heartOne.style.color = "red";
      heartOne.style.textAlign = "left";
      heartOne.style.marginLeft = "10px";
      heartOne.style.fontSize = "100px";
      heartOne.textContent = "♥";

      value.textContent = values[Math.floor(Math.random() * 10 + 1)];
      console.log(value.textContent);

      heartTwo.style.color = "red";
      heartTwo.style.textAlign = "right";
      heartTwo.style.position = "absolute";
      heartTwo.style.bottom = "0px";
      heartTwo.style.right = "10px";
      heartTwo.style.fontSize = "100px";
      heartTwo.textContent = "♥";

      card.appendChild(heartOne);
      card.appendChild(heartTwo);
      break;

    case 2:
      let diamondOne = document.createElement("h1");
      let diamondTwo = document.createElement("h1");
      diamondOne.style.color = "red";
      diamondOne.style.textAlign = "left";
      diamondOne.style.marginLeft = "10px";
      diamondOne.style.fontSize = "100px";
      diamondOne.textContent = "♦";

      diamondTwo.style.color = "red";
      diamondTwo.style.textAlign = "right";
      diamondTwo.style.position = "absolute";
      diamondTwo.style.bottom = "0px";
      diamondTwo.style.right = "10px";
      diamondTwo.style.fontSize = "100px";
      diamondTwo.textContent = "♦";

      card.appendChild(diamondOne);
      card.appendChild(diamondTwo);
      break;

    case 3:
      let spadeOne = document.createElement("h1");
      let spadeTwo = document.createElement("h1");
      spadeOne.style.color = "black";
      spadeOne.style.textAlign = "left";
      spadeOne.style.marginLeft = "10px";
      spadeOne.style.fontSize = "100px";
      spadeOne.textContent = "♠";

      spadeTwo.style.color = "black";
      spadeTwo.style.textAlign = "right";
      spadeTwo.style.position = "absolute";
      spadeTwo.style.bottom = "0px";
      spadeTwo.style.right = "10px";
      spadeTwo.style.fontSize = "100px";
      spadeTwo.textContent = "♠";

      card.appendChild(spadeOne);
      card.appendChild(spadeTwo);
      break;

    case 4:
      let clubOne = document.createElement("h1");
      let clubTwo = document.createElement("h1");
      clubOne.style.color = "black";
      clubOne.style.textAlign = "left";
      clubOne.style.marginLeft = "10px";
      clubOne.style.fontSize = "100px";
      clubOne.textContent = "♣";

      clubTwo.style.color = "black";
      clubTwo.style.textAlign = "right";
      clubTwo.style.position = "absolute";
      clubTwo.style.bottom = "0px";
      clubTwo.style.right = "10px";
      clubTwo.style.fontSize = "100px";
      clubTwo.textContent = "♣";

      card.appendChild(clubOne);
      card.appendChild(clubTwo);
      break;
  }

  // for (let i = 0; i < tipe.length; i++) {

  // }

  // let heart = document.createElement("h1");
  // heart.style.color = "red";
  // heart.textContent = "♥";

  /*let diamond = document.createElement("h1");
  diamond.style.color = "red";
  diamond.textContent = "♦";

  let spade = document.createElement("h1");
  spade.style.color = "black";
  spade.textContent = "♠";

  let club = document.createElement("h1");
  club.style.color = "black";
  club.textContent = " ♣";

  card.appendChild(heart);
  card.appendChild(diamond);
  card.appendChild(spade);
  card.appendChild(club);*/
};
