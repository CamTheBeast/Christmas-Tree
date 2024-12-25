// Play music function with unmuting and error handling
function playMusic() {
  var audio = document.getElementById("myAudio");

  // Check if audio is already playing
  if (audio.paused) {
    // Unmute and play the audio
    audio.muted = false;
    audio.play().catch(function (error) {
      console.log("Audio play failed: ", error);
      // Optional: Show a message to the user about the error
    });
  }
}
