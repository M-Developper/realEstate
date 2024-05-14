let linksButton = document.getElementById('links-btn');
let navbarLinks = document.querySelector('.header .links');

linksButton.onclick = () => {
    navbarLinks.classList.toggle('phone-navbar')
}
