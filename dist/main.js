// Select Dom elments
const menu = document.getElementById("menu");
const displayMenu = document.getElementById("displayMenu");
displayMenu.addEventListener("click", function () {
    this.classList.toggle("open");

    const spans = this.querySelectorAll("span");
    if (this.classList.contains("open")) {
        menu.classList.remove("hidden");
        spans[0].style.rotate = "45deg";
        spans[0].style.top = "50%";
        spans[0].style.translate = "translateY(-50%)";
        spans[1].style.opacity = "0";
        spans[2].style.rotate = "-45deg";
        spans[2].style.top = "50%";
        spans[2].style.translate = "translateY(-50%)";
    } else {
        spans.forEach(span  => {
            menu.classList.add("hidden");
            span.removeAttribute("style")
        })
    }
});
