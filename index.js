window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  // Wait for the audio to be fully loaded and ready to play
  music.addEventListener("loadeddata", function () {
    console.log(
      "Audio loaded. Current time before playing: " + music.currentTime
    ); // Log before setting currentTime

    music.currentTime = 30; // Start at 30 seconds

    console.log(
      "Current time after setting to 30 seconds: " + music.currentTime
    ); // Log after setting currentTime

    music.play(); // Ensure the audio plays
  });
};
