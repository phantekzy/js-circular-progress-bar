// Grab the number display element
let num = document.getElementById('number');
let counter = 0;

// Increment counter until 65% is reached
let calcul = setInterval(() => {
  if (counter === 65) {
    clearInterval(calcul); // stop when we reach 65
  } else {
    counter++;
    num.innerHTML = counter + "%"; // update text
  }
}, 30); // update speed in ms

