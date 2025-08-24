import { loadHeader, loadFooter } from "./layout.mjs";

document.getElementById("header-placeholder").innerHTML = loadHeader();
document.getElementById("footer-placeholder").innerHTML = loadFooter();
