export default function loadMenu(contentHook) {
  // NAV
  let navi = document.createElement("nav");
  let ulist = document.createElement("ul");
  let homeList = document.createElement("li");
  let servicesList = document.createElement("li");
  let aboutList = document.createElement("li");
  let home = document.createElement("a");
  let services = document.createElement("a");
  let about = document.createElement("a");

  home.href = "#";
  services.href = "#";
  about.href = "#";

  home.textContent = "HOME";
  services.textContent = "SERVICES";
  about.textContent = "ABOUT";
  home.setAttribute("id", "home");
  services.setAttribute("id", "services");
  about.setAttribute("id", "about");

  homeList.appendChild(home);
  servicesList.appendChild(services);
  aboutList.appendChild(about);
  ulist.appendChild(homeList);
  ulist.appendChild(servicesList);
  ulist.appendChild(aboutList);
  navi.appendChild(ulist);
  // NAV

  // MAIN CONTENT
  let mainDiv = document.createElement("div");
  let header1 = document.createElement("h1");
  let header2 = document.createElement("h2");
  let imag = document.createElement("img");
  let price = document.createElement("h1");

  mainDiv.classList.add("menuMainContent");
  header1.textContent = "SERVICES";
  header2.setAttribute("style", "white-space: pre;");
  header2.textContent = "Don't want your burger? \r\n mine now hehe";
  imag.src = "./eat-burger.gif";

  mainDiv.appendChild(header1);
  mainDiv.appendChild(header2);
  mainDiv.appendChild(imag);

  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}
