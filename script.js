const form = document.querySelector("form");

const geschaeftsstelle = document.getElementById("geschaeftsstelle");
const abholung = document.getElementById("abholung");

const adressblock = document.getElementById("adressblock");

const strasse = document.getElementById("strasse");
const plz = document.getElementById("plz");
const ort = document.getElementById("ort");
const kleidungsart = document.getElementById("kleidungsart");
const krisengebiet = document.getElementById("krisengebiet");

const geschaeftsstellenPlz = "12345";

// Adressblock beim Start ausblenden
adressblock.style.display = "none";

// Wenn Geschäftsstelle gewählt wird
geschaeftsstelle.addEventListener("change", function () {
    adressblock.style.display = "none";
});

// Wenn Abholung gewählt wird
abholung.addEventListener("change", function () {
    adressblock.style.display = "block";
});

// PLZ-Prüfung beim Absenden
form.addEventListener("submit", function (event) {
    if (kleidungsart.selectedIndex === 0) {
    alert("Bitte wählen Sie eine Kleidungsart aus.");
    event.preventDefault();
    return;
}

if (krisengebiet.selectedIndex === 0) {
    alert("Bitte wählen Sie ein Krisengebiet aus.");
    event.preventDefault();
    return;
}

    if (abholung.checked) {

        if (strasse.value === "" || plz.value === "" || ort.value === "") {
            alert("Bitte geben Sie die vollständige Abholadresse ein.");
            event.preventDefault();
            return;
        }

        if (plz.value.length !== 5) {
            alert("Bitte geben Sie eine gültige fünfstellige Postleitzahl ein.");
            event.preventDefault();
            return;
        }

        if (plz.value.substring(0, 2) !== geschaeftsstellenPlz.substring(0, 2)) {
            alert("Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.");
            event.preventDefault();
            return;
        }
    }
});