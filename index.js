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


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}