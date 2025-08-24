export function loadHeader() {
  return `
    <header class="header">
    <div class="header__brand">
      <img class="logo" src="../assets/images/CC.svg" />
      <span class="header__title">CodeComprende</span>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li><a href="index.html" class="header__nav-link">Home</a></li>
        <li>
          <a href="./blog-posts/about-me.html" class="header__nav-link"
            >About</a
          >
        </li>
      </ul>
    </nav>
  </header>
    `;
}

export function loadFooter() {
  return `
    <footer class="footer">
    <p class="footer__heading">CodeComprende</p>
    <img src="../assets/images/CC.svg" class="logo" />
    <p class="footer__copyright">Copyright@2022</p>
  </footer>
    `;
}
