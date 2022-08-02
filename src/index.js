import loadHome from "./homepage";
import loadMenu from "./menu";

let content = document.querySelector("#content");

loadHome(content);

document.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    content.innerHTML = "";
    loadHome(content);
  } else if (e.target.id === "services") {
    content.innerHTML = "";
    loadMenu(content);
  }
});
