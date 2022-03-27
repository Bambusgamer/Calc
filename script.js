const fernwärme = document.getElementById("fernwaerme_input");
const flaeche = document.getElementById("flaeche_input");
const verbrauch = document.getElementById("verbrauch_input");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    let messages = [];

    if (fernwärme.value == "") {
        messages.push("Bitte fernwärme CO2 werte eingeben");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
})
