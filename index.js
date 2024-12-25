window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  // Wait for the audio to load
  music.oncanplaythrough = function () {
    music.currentTime = 30; // Start the song at 30 seconds
    music.muted = false; // Unmute the audio
    music.play(); // Play the song automatically
  };
};
