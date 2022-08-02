import loadHome from "./homepage";
import loadMenu from "./menu";
import loadAbout from "./about";

let content = document.querySelector("#content");

loadHome(content);

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.id === "home") {
    content.innerHTML = "";
    loadHome(content);
  } else if (e.target.id === "services") {
    content.innerHTML = "";
    loadMenu(content);
  } else if (e.target.id === "about") {
    content.innerHTML = "";
    loadAbout(content);
  }
});
