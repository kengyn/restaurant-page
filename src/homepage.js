export default function loadHome(contentHook) {
  let navi = document.createElement("nav");
  let ulist = document.createElement("ul");
  let homeList = document.createElement("li");
  let servicesList = document.createElement("li");
  let aboutList = document.createElement("li");
  let home = document.createElement("a");
  let services = document.createElement("a");
  let about = document.createElement("a");
  let mainDiv = document.createElement("div");
  let header1 = document.createElement("h1");
  let header2 = document.createElement("h2");
  let btn = document.createElement("button");
  let span = document.createElement("span");

  // NAV
  home.href = "#";
  services.href = "#";
  about.href = "#";

  home.textContent = "HOME";
  services.textContent = "SERVICES";
  about.textContent = "ABOUT";

  homeList.appendChild(home);
  servicesList.appendChild(services);
  aboutList.appendChild(about);
  ulist.appendChild(homeList);
  ulist.appendChild(servicesList);
  ulist.appendChild(aboutList);
  navi.appendChild(ulist);
  // NAV

  // MAIN CONTENT
  mainDiv.classList.add("indexMainContent");
  header1.textContent = "KILL BORGER";
  header2.textContent = "we kill bOrger";
  span.textContent = "KILL BORGER NOW";

  btn.appendChild(span);
  mainDiv.appendChild(header1);
  mainDiv.appendChild(header2);
  mainDiv.appendChild(btn);
  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}
