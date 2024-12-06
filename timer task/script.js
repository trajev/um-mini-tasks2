let playStatus = false;
let minutes = 25;
let seconds = 0;
let timerInterval;
let isMuted = false;

function startTimer() {
  timerInterval = setInterval(function () {
    if (seconds === 0 && minutes === 0) {
      clearInterval(timerInterval);
      document.getElementById("playBtn").style.display = "block";
      document.getElementById("pauseBtn").style.display = "none";
      playStatus = false;
      document.querySelector("audio").pause();
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    document.getElementById("timer").innerHTML =
      (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }, 1000);
}

function playPauseBtn() {
  if (playStatus) {
    document.querySelector("audio").pause();
    clearInterval(timerInterval);
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("pauseBtn").style.display = "none";
    playStatus = false;
  } else {
    document.querySelector("audio").play();
    startTimer();
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "block";
    playStatus = true;
  }
}

function resetBtn() {
  document.querySelector("audio").currentTime = 0;
  document.querySelector("audio").pause();
  clearInterval(timerInterval);

  minutes = 25;
  seconds = 0;
  document.getElementById("timer").innerHTML = "25:00";

  playStatus = false;
  document.getElementById("playBtn").style.display = "block";
  document.getElementById("pauseBtn").style.display = "none";
}


function muteMusicBtn() {
  let audio = document.querySelector("audio");
  if (isMuted) {
    document.querySelector("#volumeOn").style.display = "block";
    document.querySelector("#volumeOff").style.display = "none";
    audio.muted = false;
    isMuted = false;
  } else {
    document.querySelector("#volumeOn").style.display = "none";
    document.querySelector("#volumeOff").style.display = "block";
    audio.muted = true;
    isMuted = true;
  }
  document.getElementById("muteBtn").innerHTML = isMuted ? "Unmute" : "Mute";
}


// new features can be implemented in this app
/*
  1. Add hot toast notifications for messages.
  2. Add a feature to change the timer duration.
  3. Add a sound that plays when the timer ends.
  4. Implement a dark mode toggle for the application.
  5. Add a feature to log completed timer sessions.
  6. Add a feature to set custom break intervals.
  7. Implement a progress bar to visually represent the timer.
  8. Add keyboard shortcuts for play, pause, reset, and mute.
  9. Implement a feature to save and load timer settings.
*/
