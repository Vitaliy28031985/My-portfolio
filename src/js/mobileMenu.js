
const burgerButton = document.getElementById("burger-button");
const closeButton = document.getElementById("close");
const headerContainer = document.getElementById("header-container");

headerContainer.classList.add("is-open");
closeButton.classList.add("remove-button");


const addOpacity = () => {
   headerContainer.classList.remove("is-open");
   closeButton.classList.remove("remove-button");
   burgerButton.classList.add("remove-button");
}

const removeOpacity = () => {
   
headerContainer.classList.add("is-open");  
closeButton.classList.add("remove-button");
burgerButton.classList.remove("remove-button");
}

burgerButton.addEventListener("click", addOpacity);
closeButton.addEventListener("click", removeOpacity);