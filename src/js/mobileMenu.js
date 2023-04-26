import { helpers } from "./helpers/helpers";


const burgerButton = document.getElementById("burger-button");
const closeButton = document.getElementById("close");
const headerContainer = document.getElementById("header-container");


helpers.addOpacity(headerContainer, "is-open");
helpers.addOpacity(closeButton, "remove-button");

burgerButton.addEventListener("click", function () {
   helpers.removeOpacity(headerContainer, "is-open");
   helpers.removeOpacity(closeButton, "remove-button");
   helpers.addOpacity(burgerButton, "remove-button");
});

closeButton.addEventListener("click", function () {
   helpers.addOpacity(headerContainer, "is-open");
   helpers.addOpacity(closeButton, "remove-button");
   helpers.removeOpacity(burgerButton, "remove-button");
});