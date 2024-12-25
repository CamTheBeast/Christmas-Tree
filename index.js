window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  // Wait for the audio to load
  music.oncanplaythrough = function () {
    music.currentTime = 59; // Start the song at 59 seconds
    music.play(); // Play the song automatically
  };
};
