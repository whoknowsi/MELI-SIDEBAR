const menuBtn = document.getElementsByClassName("sidebar__menu-btn-icon")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const submenues = document.getElementsByClassName("sidebar__list-item-link");



for(let i = 0; i < submenues.length; i++) {
    if(submenues[i].parentElement.classList.contains("submenu")) {
        submenues[i].addEventListener("click", () => {
            submenues[i].parentElement.classList.toggle("open")
        })
    }
}

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    sidebar.scrollTo(0, 0);
})

sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.add("open")
})

sidebar.addEventListener("mouseleave", () => {
    sidebar.classList.remove("open")
    sidebar.scrollTo(0, 0);
})