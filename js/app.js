//To scroll to the section corresponding to the item clicked in the menubar

document.addEventListener("DOMContentLoaded", () => {
  const menu_items = document.querySelectorAll("[id^='item']");
  menu_items.forEach(function (menu_item) {
    menu_item.addEventListener("click", () => {
      menu_items.forEach((menu_item) => {
        if (menu_item.classList.contains("selected")) {
          menu_item.classList.remove("selected");
        }
      });

      menu_item.classList.add("selected");
      let el = menu_item.id.split("item");
      el = "#section" + el[1];
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: document.querySelector(el).offsetTop,
      });
    });
  });
});

//Highlight the item in the menubar according to the section that is in view

const nav_items = document.querySelectorAll(".nav_items");
const sections = document.querySelectorAll("section");

function highlightNavItem() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  nav_items.forEach((nav_item) => nav_item.classList.remove("selected"));
  nav_items[index].classList.add("selected");
}

highlightNavItem();
window.addEventListener("scroll", highlightNavItem);

//To make the menubar disappear once a section is being viewed

var prev_position = window.pageYOffset;
window.onscroll = function () {
  var current_position = window.pageYOffset;
  if (prev_position > current_position) {
    //document.getElementsByClassName('navbar__menu').style.top = "0";
    document.getElementById("navbar").style.top = "0";
  } else {
    //document.getElementsByClassName('navbar__menu').style.top = "-50px";
    document.getElementById("navbar").style.top = "-50px";
  }
  prev_position = current_position;
};
