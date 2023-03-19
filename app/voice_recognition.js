const guessElement = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  guess = event.results[0][0].transcript;
  showGuessOnScreen(guess);
}

function showGuessOnScreen(guess) {
  guessElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `;
}
