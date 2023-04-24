import { helpers } from "./helpers/helpers";
import { videos } from "./db/videos";


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


