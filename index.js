// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    navBar();
};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navBar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
