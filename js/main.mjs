import { loadHeader, loadFooter } from "./layout.mjs";
import { blogPosts } from "./blogposts.mjs";
import { mainPost } from "./blogposts.mjs";

document.getElementById("header-placeholder").innerHTML = loadHeader();
document.getElementById("footer-placeholder").innerHTML = loadFooter();

const pageContainer = document.getElementById("page-container");

const heroSection = document.querySelector(".hero");

heroSection.innerHTML = `
  <div class="hero__text-container">
    <div class="hero__info">
      <p class="hero__date">${mainPost[0].date}</p>
      <h1 class="hero__title">${mainPost[0].title}</h1>
    </div>
    <p class="hero__blog-extract">${mainPost[0].excerpt}<a class="hero__link" href="fullBlogPost.html?id=${mainPost[0].id}">Read more</a></span></p>

  </div>
`;

console.log(mainPost);
