const mapFrame = document.getElementById("mapFrame");
const mapLink = document.getElementById("mapLink");

/* ---------- Google Maps ---------- */

function showGoogleMap(){

    mapFrame.src =
    "https://www.google.com/maps/embed?pb=!1m18!...";

    mapLink.href =
    "https://maps.google.com/?q=55.7558,37.6173";
}

/* ---------- 2GIS ---------- */

function show2GISMap(){

    mapFrame.src =
    "https://widgets.2gis.com/widget?type=firmsonmap&options=...";

    mapLink.href =
    "https://2gis.kz/almaty/firm/70000001000000000";
}

/* ---------- Карта по умолчанию ---------- */

showGoogleMap();

const buttons = document.querySelectorAll(".map-btn");

function setActiveButton(button){

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}