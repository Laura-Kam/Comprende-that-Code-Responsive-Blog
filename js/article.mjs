import { loadHeader, loadFooter } from "./layout.mjs";
import { blogPosts, mainPost } from "./blogposts.mjs";

document.getElementById("header-placeholder").innerHTML = loadHeader();
document.getElementById("footer-placeholder").innerHTML = loadFooter();

const fullArticleContainer = document.querySelector(".article-grid");

//find query string
const params = new URLSearchParams(window.location.search);

//get the id number from it
const blogId = parseInt(params.get("id"), 10);

let blog;
//loop through blogposts and find the matching id
if (blogId === mainPost[0].id) {
  blog = mainPost[0];
} else {
  blog = blogPosts.find((b) => b.id === blogId);
}

if (blog) {
  fullArticleContainer.innerHTML = `
  
  <section class="article-intro-section">
  <div class="back-link-container">
  <a class="home-link" href="../index.html">
  <img class="home-link-img"src="../assets/images/back-arrow-grey.png" alt="Back"><span class="back-link-text">back</span>
</a>
</div>

  <header class="article__header">
    <p class="article__date">${blog.date}</p>
    <h1 class="article__title">${blog.title}</h1>
  </header>
  <p class="article__excerpt">${blog.excerpt}</p>
  <img class="article__image" src="${blog.image}"/>
  </section>

  <section class="article__main">
  <div class="article__paragraph-section">
<h2 class="article__subheading">${blog.subheading1}</h2>
<p lass="article__paragraph">${blog.paragraph1}</p>
</div>
<div class="article__paragraph-section">
    <h2 class="article__subheading">${blog.subheading2}</h2>
    <p class="article__paragraph">${blog.paragraph2}</p>
</div>
<div class="article__paragraph-section">
<h2 class="article__subheading">${blog.subheading3}</h2>
<p lass="article__paragraph">${blog.paragraph3}</p>
</div>
</section>



    `;
} else {
  fullArticleContainer.innerHTML = `<p class="article-error">Article not found.</p>`;
}
