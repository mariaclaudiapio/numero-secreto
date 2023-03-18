const lowerValue = 1;
const higherValue = 100;
const secretNumber = generateRandomNumber();

const lowerValueElement = document.getElementById("lower-value");
lowerValueElement.innerHTML = lowerValue;
const higherValueElement = document.getElementById("higher-value");
higherValueElement.innerHTML = higherValue;

function generateRandomNumber() {
  return parseInt(Math.random() * higherValue + 1);
}

console.log(`O número secreto é ${generateRandomNumber()}.`);
