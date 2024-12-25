document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    
    // Set the starting point of the song (in seconds)
    const startTime = 30; // Adjust this to the desired start time
    
    // Wait for the audio to be loaded
    audio.addEventListener("canplay", () => {
      audio.currentTime = startTime; // Jump to the desired start time
      audio.play(); // Start playback
    });
  
    // Optional: Loop the music if desired
    audio.loop = true;
}
