onload = () => {
  document.body.classList.remove("container");
};

var video = document.getElementById("myVideo");

video.addEventListener("ended", function () {
  video.currentTime = 0; // Mengembalikan video ke awal
  video.play(); // Memulai video lagi
});
