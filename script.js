/* ---------- CURRENT LANGUAGE ---------- */

let currentLanguage = "ru";

/* ---------- OPEN INVITATION ---------- */

function openInvitation(){

    document
        .getElementById("langSelect")
        .classList.add("show");
}

/* ---------- CHOOSE LANGUAGE ---------- */

function chooseLanguage(lang){

    currentLanguage = lang;

    setLanguage(lang);

    const intro =
        document.getElementById("introScreen");

    const site =
        document.getElementById("mainContent");

    intro.classList.add("hide");

    site.classList.add("show");

    document.body.style.overflow = "auto";
}

/* ---------- TRANSLATIONS ---------- */

const translations = {

    ru: {

        mainTitle: "Однажды они",

        mia: "Мия",
        miaDescription: "Опасно харизматична.",
        miaDetail: "Из тех людей, которые появляются в сюжете не случайно.",

        ilias: "Ильяс",
        iliasDescription: "Такое ощущение, будто у него отдельный саундтрек.",
        iliasDetail: "Пугающе хорош в том, что делает.",

        met: "встретились",

        saidYes: "и сказали друг другу “да”",

        invitationText: "приглашаем вас стать свидетелями того, как начинается наша общая история",
        invitationTextAct: "Ждем на кыз узату",

        detailsTitle: "Детали",

        detailDate: "Дата: 20 июля 2024 года",
        detailTime: "Время: 18:00",
        detailLocation: "Место: Ресторан \"Золотой Двор\"",

        guestName: "Имя гостя",

        mayAttend: "приеду",
        cannotAttend: "не смогу",

        submitBooking: "Отправить",

        successMessage: "Спасибо ✨ Будем ждать вас"
    },

    kz: {

        mainTitle: "Бір күні олар",

        mia: "Мия",
        miaDescription: "Қауіпті харизмалы.",
        miaDetail: "Оқиғаға кездейсоқ келмейтін жандардың бірі.",

        ilias: "Ілияс",
        iliasDescription: "Оның өз саундтрегі бар сияқты.",
        iliasDetail: "Ісінің нағыз шебері.",

        met: "кездесті",

        saidYes: "және бір-біріне “иә” деді",

        invitationText: "Бірге басталатын оқиғаның куәсі болуға шақырамыз",
        invitationTextAct: "Қыз ұзату тойына шақырамыз",

        detailsTitle: "Толығырақ",

        detailDate: "Күні: 2024 жылғы 20 шілде",
        detailTime: "Уақыты: 18:00",
        detailLocation: "Орны: \"Золотой Двор\" мейрамханасы",

        guestName: "Қонақтың аты",

        mayAttend: "келемін",
        cannotAttend: "келмеймін",

        submitBooking: "Жіберу",

        successMessage: "Рахмет ✨ Сіздерді күтеміз"
    }

};

/* ---------- SET LANGUAGE ---------- */

function setLanguage(lang){

    document.documentElement.lang = lang;

    localStorage.setItem("lang", lang);

    /* ---------- TEXT ---------- */

    const elements =
        document.querySelectorAll("[data-lang]");

    elements.forEach(element => {

        const key =
            element.getAttribute("data-lang");

        if(translations[lang][key]){

            element.textContent =
                translations[lang][key];
        }

    });

    /* ---------- PLACEHOLDERS ---------- */

    const placeholders =
        document.querySelectorAll("[data-placeholder]");

    placeholders.forEach(input => {

        const key =
            input.getAttribute("data-placeholder");

        if(translations[lang][key]){

            input.placeholder =
                translations[lang][key];
        }

    });

}

/* ---------- RESTORE LANGUAGE ---------- */

window.addEventListener("load", () => {

    const savedLang =
        localStorage.getItem("lang");

    if(savedLang){

        currentLanguage = savedLang;

        setLanguage(savedLang);
    }

});

/* ---------- MAP ---------- */

const mapFrame =
    document.getElementById("mapFrame");

const mapLink =
    document.getElementById("mapLink");

/* ---------- GOOGLE MAP ---------- */

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

/* ---------- DEFAULT MAP ---------- */

showGoogleMap();

/* ---------- MAP BUTTONS ---------- */

const buttons =
    document.querySelectorAll(".map-btn");

function setActiveButton(button){

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");
}


/* ---------- FORM ---------- */

const bookingForm =
    document.getElementById("bookingForm");

const successMessage =
    document.getElementById("successMessage");

/* ---------- SUBMIT ---------- */
bookingForm.addEventListener(
    "submit",
    async function(e){

    e.preventDefault();

    try {

        const guestName =
            document.getElementById("guestName").value;

        const attendanceInput =
            document.querySelector(
                'input[name="attendance"]:checked'
            );

        if(!attendanceInput){

            alert("Выберите вариант ответа");

            return;
        }

        const attendance =
            attendanceInput.value;

        const text =
`✨ Новая бронь

Имя: ${guestName}

Ответ: ${attendance}`;

        const url =
        "https://script.google.com/macros/s/AKfycbxuwK2BjP3LLdEpbpn0jQY4wWxqGeVRC6rbO_j0uDf0eYLhu-2vOX7CM2nPXlZzFywSAA/exec";

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ text })
        });

        console.log("response:", response);

        successMessage.style.display = "block";

        bookingForm.reset();

    } catch (error) {

        console.error("FULL ERROR:", error);

        alert("Ошибка отправки");
    }

});