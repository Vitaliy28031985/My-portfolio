import './sass/main.scss'
import avatar from "./assets/IMG_2440.jpeg";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin.svg";
import author from "./assets/author.jpg";
import projectsImg from "./assets/projectsImg.jpg";

const mainImage = document.getElementById("mainImage");
const mainInstagram = document.getElementById("instagram");
const mainFacebook = document.getElementById("facebook");
const mainLinkedin = document.getElementById("linkedin");
const mainAuthor = document.getElementById("author");
const mainProjectsImg = document.getElementById("projectsImg");

mainImage.src = avatar;
mainInstagram.src = instagram;
mainFacebook.src = facebook;
mainLinkedin.src = linkedin;
mainAuthor.src = author;
mainProjectsImg.src = projectsImg;

const hello = require('./js/hello')