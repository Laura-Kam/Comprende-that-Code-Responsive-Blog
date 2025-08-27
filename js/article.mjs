import { loadHeader, loadFooter } from "./layout.mjs";
import { blogPosts } from "./blogposts.mjs";

document.getElementById("header-placeholder").innerHTML = loadHeader();
document.getElementById("footer-placeholder").innerHTML = loadFooter();

const fullArticleContainer = document.querySelector(".grid");

//find query string
const params = new URLSearchParams(window.location.search);

//get the id number from it
const blogId = parseInt(params.get("id"), 10);

//loop through blogposts and find the matching id
const blog = blogPosts.find((b) => b.id === blogId);

if (blog) {
  fullArticleContainer.innerHTML = `
  <div class="article-heading-container">
  <div class="article__info">
    <p class="article__date">${blog.date}</p>
    <h1 class="article__title">${blog.title}</h1>
  </div>
  <p class="hero__blog-extract">${blog.excerpt}</p>
  <img src="${blog.image}"/>
</div>
<section class="article-main-content">

<h2 class="article-main-content__subheading">${blog.subheading1}</h2>
<p lass="article-main-content__paragraph">${blog.paragraph1}</p>
<h2 class="article-main-content__subheading">${blog.subheading2}</h2>
<p lass="article-main-content__paragraph">${blog.paragraph2}</p>
<h2 class="article-main-content__subheading">${blog.subheading3}</h2>
<p lass="article-main-content__paragraph">${blog.paragraph3}</p>
</section>

    `;
} else {
  document.getElementById("article").innerHTML = `<p>Article not found.</p>`;
}
