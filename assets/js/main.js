const foodWrapper = document.getElementById("food-wrapper");
const drinksWrapper = document.getElementById("drinks-wrapper");
const farmacyWrapper = document.getElementById("farmacy-wrapper");
const otherWrapper = document.getElementById("other-wrapper");

const catalogo = document.getElementById("catalogo");
const catalogoMenu = document.getElementById("catalogo-menu");

function toggleMenu(event) {
    event.preventDefault();
    catalogoMenu.querySelectorAll(".active").forEach( item => item.classList.remove("active") );

    event.target.classList.add("active");

    if (event.target.id === "restaurantes") {
        //console.log(event.target.id);
        catalogo.querySelectorAll(".catalogo-wrapper").forEach( item => item.classList.add("hidden") );
        foodWrapper.classList.remove("hidden");
    } else if (event.target.id === "bebidas") {
        //console.log(event.target.id);
        catalogo.querySelectorAll(".catalogo-wrapper").forEach( item => item.classList.add("hidden") );
        drinksWrapper.classList.remove("hidden");
    } else if (event.target.id === "farmacias") {
        //console.log(event.target.id);
        catalogo.querySelectorAll(".catalogo-wrapper").forEach( item => item.classList.add("hidden") );
        farmacyWrapper.classList.remove("hidden");
    } else if (event.target.id === "outros") {
        //console.log(event.target.id);
        catalogo.querySelectorAll(".catalogo-wrapper").forEach( item => item.classList.add("hidden") );
        otherWrapper.classList.remove("hidden");
    }
}