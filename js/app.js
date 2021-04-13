//FROM dev.to
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
