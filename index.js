window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  // Wait for the audio to be fully loaded and ready to play
  music.addEventListener("loadeddata", function () {
    music.currentTime = 30; // Start at 30 seconds
    music.play(); // Ensure the audio plays
  });
};
