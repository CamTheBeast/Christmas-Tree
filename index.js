window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  if (!music) {
    console.log("Audio element not found!");
    return;
  }

  // Wait for the audio to be fully loaded
  music.addEventListener("loadeddata", function () {
    console.log(
      "Audio loaded. Current time before playing: " + music.currentTime
    );

    // Set the audio to start at 30 seconds
    music.currentTime = 30;
    console.log(
      "Current time after setting to 30 seconds: " + music.currentTime
    );

    // Unmute the audio and play it
    music.muted = false;
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
