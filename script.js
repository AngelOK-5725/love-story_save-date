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

/* ---------- TG BOT ---------- */

const TOKEN = "СЮДА_ТОКЕН_БОТА";
const CHAT_ID = "СЮДА_CHAT_ID";

/* ---------- Form ---------- */

const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

bookingForm.addEventListener("submit", async function(e){

    e.preventDefault();

    const guestName =
        document.getElementById("guestName").value;

    const attendance =
        document.querySelector(
            'input[name="attendance"]:checked'
        ).value;

    /* ---------- Сообщение ---------- */

    const text =
`✨ Новая бронь

👤 Имя: ${guestName}

📍 Ответ: ${attendance}`;

    /* ---------- Отправка ---------- */

    const url =
`https://api.telegram.org/bot${TOKEN}/sendMessage`;

    try{

        await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text
            })
        });

        successMessage.style.display = "block";

        bookingForm.reset();

    }catch(error){

        alert("Ошибка отправки");

        console.error(error);
    }

});