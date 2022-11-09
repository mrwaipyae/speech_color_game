window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    if (!("SpeechRecognition" in window)) {
        console.log("Sorry, your browser doesn't support speech recognition");
        return;
    }
    console.log("starting...");
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.intermResults = true;
    recognition.onresult = handleResult;
    recognition.start();
}
start();

//# sourceMappingURL=index.24a7de50.js.map
