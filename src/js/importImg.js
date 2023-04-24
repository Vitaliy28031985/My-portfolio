import avatar from "../assets/IMG_2440.jpeg";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import author from "../assets/author.jpg";
import projectsImg from "../assets/projectsImg.jpg";


const mainImage = document.getElementById("mainImage");
const mainGitHub = document.getElementById("github");
const mainFacebook = document.getElementById("facebook");
const mainLinkedin = document.getElementById("linkedin");
const mainAuthor = document.getElementById("author");
const mainProjectsImg = document.getElementById("projectsImg");


mainImage.src = avatar;
mainGitHub.src = github;
mainFacebook.src = facebook;
mainLinkedin.src = linkedin;
mainAuthor.src = author;
mainProjectsImg.src = projectsImg;

