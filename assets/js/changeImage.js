let originalImageSources = [
  "assets/img/about-us-ori-1.png",
  "assets/img/about-us-ori-2.png",
  "assets/img/about-us-ori-3.png",
  "assets/img/about-us-ori-4.png",
];


let ids = [
  "my-img-1",
  "my-img-2",
  "my-img-3",
  "my-img-4",
];

for (let i = 0; i < ids.length; i++) {
  let img = document.getElementById(ids[i]);
  let newSrc = "assets/img/about-us-new-" + (i + 1) + ".png";
  let originalSrc = originalImageSources[i];
  img.addEventListener("mouseover", function() {
    this.setAttribute("src", newSrc);
  });
  img.addEventListener("mouseout", function() {
    this.setAttribute("src", originalSrc);
  });
}