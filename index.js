// Card Feature Collapse
const sectionCard = document.getElementsByClassName("section-card-collapsible");

for (let i = 0; i < sectionCard.length; i++) {
  sectionCard[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const sectionCardContent = this.nextElementSibling;
    if (sectionCardContent.style.maxHeight) {
      sectionCardContent.style.maxHeight = null;
    } else {
      sectionCardContent.style.maxHeight = sectionCardContent.scrollHeight + "px";
    }
  });
}

// Card Feature gif auto refresh

function isScrolledIntoView(elem) {
  const docViewTop = this.scrollY;
  const docViewBottom = docViewTop + document.documentElement.clientHeight;
  const elemTop = elem.offsetTop;
  const elemBottom = elemTop + elem.height;
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

window.addEventListener("scroll", function () {
  const bodyElement = document.querySelector("body");
  const sectionCardImg = document.getElementsByClassName("section-card-img");
  for (let i = 0; i < sectionCardImg.length; i++) {
    if (isScrolledIntoView(sectionCardImg[i].childNodes[1])) {
      sectionCardImg[i].childNodes[1].src = sectionCardImg[i].childNodes[1].src.split('?')[0] + '?' + Date.now();
    }
  }

} , false);




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
