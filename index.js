window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  if (!music) {
    console.log("Audio element not found!");
    return;
  }

  // Wait for the audio to be fully loaded and ready to play
  music.addEventListener("loadeddata", function () {
    console.log(
      "Audio loaded. Current time before playing: " + music.currentTime
    ); // Log before setting currentTime

    // Set the audio to start at 30 seconds
    music.currentTime = 59;
    console.log(
      "Current time after setting to 30 seconds: " + music.currentTime
    ); // Log after setting currentTime

    // Check if autoplay is blocked, and play only when the user can interact
    music
      .play()
      .then(() => {
        console.log("Audio started playing");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  });
};
