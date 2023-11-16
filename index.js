const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#teh-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const teh = document.querySelector('#teh-menu');
document.addEventListener('click', function(e){
    if (!teh.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})