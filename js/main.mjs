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

document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.querySelector(".grid");

  blogPosts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.id = post.id;

    article.innerHTML = `
        <img
          class="card__image"
          src="${post.image}"
          alt="${post.alt}"
        />
        <div class="card-info">
          <p class="card__date">${post.date}</p>
          <h2 class="card__title">${post.title}</h2>
        </div>
        <p class="card__extract">${post.excerpt}<span><a class="read-more__link" href="article.html?id=${post.id}}">Read more</a></span></p>
        </article>
      `;

    blogList.appendChild(article);
  });
});

console.log(mainPost);
