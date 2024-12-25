window.onload = function () {
  const music = document.getElementById("backgroundMusic");

  // Start playing at 30 seconds into the song
  music.currentTime = 59; // Set the time (in seconds) where you want the song to start
  music.play(); // Play the song automatically
};
