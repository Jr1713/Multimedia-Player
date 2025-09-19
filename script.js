// Highlight transcript when audio or video is playing
const audioPlayer = document.getElementById("audioPlayer");
const videoPlayer = document.getElementById("videoPlayer");
const transcript = document.getElementById("transcript");

function highlightTranscript() {
  transcript.classList.add("highlight");
}

function removeHighlight() {
  transcript.classList.remove("highlight");
}

// Audio events
audioPlayer.addEventListener("play", highlightTranscript);
audioPlayer.addEventListener("pause", removeHighlight);
audioPlayer.addEventListener("ended", removeHighlight);

// Video events
videoPlayer.addEventListener("play", highlightTranscript);
videoPlayer.addEventListener("pause", removeHighlight);
videoPlayer.addEventListener("ended", removeHighlight);
