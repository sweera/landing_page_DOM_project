//Manipulating the DOM Assignment
//Landing Page

//To scroll to the section corresponding to the item clicked in the menubar

document.addEventListener("DOMContentLoaded", () => {
  const menu_items = document.querySelectorAll("[id^='item']");
  //Using regex to look for the id starting with item i.e. elements in navbar
  menu_items.forEach(function (menu_item) {
    //looping over the node list obtained in menu_items to listen for a click on any of them
    menu_item.addEventListener("click", () => {
      menu_items.forEach((menu_item) => {
        if (menu_item.classList.contains("selected")) {
          menu_item.classList.remove("selected");
        }
      });

      menu_item.classList.add("selected"); //adding the selected class in the classlist of menu_item if it is not already
      let el = menu_item.id.split("item"); //adding the section the user wants to scroll to and use scroll function to take them there
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
window.addEventListener("scroll", highlightNavItem); //check for the scroll event and execute the function by adding selected class to classlist

//To make the menubar disappear once a section is being viewed
//Menubar disappears when user scrolls down and appears when the user scrolls up

let prev_position = window.pageYOffset;
window.onscroll = function () {
  let current_position = window.pageYOffset;
  if (prev_position > current_position) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prev_position = current_position;
};

//Smooth scroll to top

const topScroll = document.getElementById("#top");
topScroll.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
