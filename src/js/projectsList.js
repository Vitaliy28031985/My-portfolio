import { projects } from "./db/projects";

const list = document.querySelector(".projects-list");

console.log(list);

const projectsList = () => {
   const render = projects
     .map(
       ({avatar, title, description, technologies, linkWeb, linkGit }) =>
         `<li data-aos="fade-in">
         <div><img src=${avatar} alt="${title}" /></div>
         <h3>${title}</h3>
         <p>${description}</p>
         <p>${technologies}</p>
         <a href="${linkWeb}">Перейти на сторінку застосунку</a>
         <a href="${linkGit}">Переглянути код</a>
         </li>`
     )
     .join("");
   
   list.insertAdjacentHTML("afterbegin", render);
};

projectsList();