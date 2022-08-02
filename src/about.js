export default function loadAbout(contentHook) {
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
  let para = document.createElement("p");
  let imag = document.createElement("img");

  mainDiv.classList.add("aboutMainContent");
  header1.textContent = "ABOUT";
  para.textContent = "we like borger. so u pay us to eat ur burger";
  imag.src = "./dogee.png";

  mainDiv.appendChild(header1);
  mainDiv.appendChild(para);
  mainDiv.appendChild(imag);

  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}
