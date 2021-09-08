const icon = document.querySelector('.hamburger-menu');

const navbar = document.querySelector('.navbar');

// Ecouteur d'event au click sur l'icone de navbar, il va changer de style
icon.addEventListener ("click", () => {
    navbar.classList.toggle("change");
});