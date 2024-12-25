window.onload = function () {
  const music = document.getElementById("backgroundMusic");
  const playButton = document.getElementById("playButton");

  if (!music || !playButton) {
    console.log("Audio or button element not found!");
    return;
  }

  // Wait for the audio to be fully loaded
  music.addEventListener("loadeddata", function () {
    console.log(
      "Audio loaded. Current time before playing: " + music.currentTime
    );

    // Set the audio to start at 30 seconds
    music.currentTime = 50;
    console.log(
      "Current time after setting to 30 seconds: " + music.currentTime
    );

    // Play the audio when the button is clicked
    playButton.addEventListener("click", function () {
      music
        .play()
        .then(() => {
          console.log("Audio started playing");
          playButton.style.display = "none"; // Hide the play button after the audio starts
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    });
  });
};
