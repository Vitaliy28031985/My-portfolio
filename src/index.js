import './sass/main.scss'
import avatar from "./assets/IMG_2440.jpeg";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin.svg";
import author from "./assets/author.jpg";

const mainImage = document.getElementById("mainImage");
const mainInstagram = document.getElementById("instagram");
const mainFacebook = document.getElementById("facebook");
const mainLinkedin = document.getElementById("linkedin");
const mainAuthor = document.getElementById("author");

mainImage.src = avatar;
mainInstagram.src = instagram;
mainFacebook.src = facebook;
mainLinkedin.src = linkedin;
mainAuthor.src = author;

const hello = require('./js/hello')