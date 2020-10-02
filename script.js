const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateIconPlay() {
  play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
}

function updateIconPause() {
  play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
}

video.addEventListener("click", toggleVideoStatus);

video.addEventListener("play", updateIconPlay);

video.addEventListener("pause", updateIconPause);
