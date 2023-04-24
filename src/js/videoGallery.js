import { helpers } from "./helpers/helpers";
import { videos } from "./db/videos";

const video = document.querySelector(".video-gallery-video");

const returnId = document.getElementById("return");
const nextId = document.getElementById("next");
const videoId = document.getElementById("video");



returnId.addEventListener("click", function () {
  helpers.counterDecrement(helpers.count, videos.length - 1);
videoId.src = videos[helpers.count].link;
});
nextId.addEventListener("click", function () {
  helpers.counterIncrement(videos.length - 1);
videoId.src = videos[helpers.count].link;
  console.log(helpers.count);
});


    //videos[helpers.getCount()].link


// const videoGallery = () => {
//   const render = ` <iframe width="560" id="video" height="315" src=""
//   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

//   video.insertAdjacentHTML("afterbegin", render);
// };

// videoGallery();
