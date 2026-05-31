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

adressblock.style.display = "none";

geschaeftsstelle.addEventListener("change", function () {
    adressblock.style.display = "none";
});

abholung.addEventListener("change", function () {
    adressblock.style.display = "block";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!geschaeftsstelle.checked && !abholung.checked) {
        alert("Bitte wählen Sie eine Art der Übergabe aus.");
        return;
    }

    if (kleidungsart.selectedIndex === 0) {
        alert("Bitte wählen Sie eine Kleidungsart aus.");
        return;
    }

    if (krisengebiet.selectedIndex === 0) {
        alert("Bitte wählen Sie ein Krisengebiet aus.");
        return;
    }
    let uebergabeart = "";

if (geschaeftsstelle.checked) {
    uebergabeart = "Übergabe an der Geschäftsstelle";
}

if (abholung.checked) {
    uebergabeart = "Abholung durch Sammelfahrzeug";
}
    let ortDerSpende = "";

    if (geschaeftsstelle.checked) {
        ortDerSpende = "KleiderHilfe e.V., Musterstraße 1, 12345 Musterstadt";
    }

    if (abholung.checked) {
        if (strasse.value === "" || plz.value === "" || ort.value === "") {
            alert("Bitte geben Sie die vollständige Abholadresse ein.");
            return;
        }

        if (plz.value.length !== 5) {
            alert("Bitte geben Sie eine gültige fünfstellige Postleitzahl ein.");
            return;
        }

        if (plz.value.substring(0, 2) !== geschaeftsstellenPlz.substring(0, 2)) {
            alert("Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.");
            return;
        }

        ortDerSpende = strasse.value + ", " + plz.value + " " + ort.value;
    }

    const jetzt = new Date();
    const datum = jetzt.toLocaleDateString("de-DE");
    const uhrzeit = jetzt.toLocaleTimeString("de-DE");

    document.querySelector("main").innerHTML = `
    <section class="alert alert-danger">
        <h2>Registrierung erfolgreich</h2>

        <p>Vielen Dank für Ihre Kleiderspende.</p>

        <p><strong>Art der Übergabe:</strong> ${uebergabeart}</p>
        <p><strong>Art der Kleidung:</strong> ${kleidungsart.value}</p>
        <p><strong>Krisengebiet:</strong> ${krisengebiet.value}</p>
        <p><strong>Datum:</strong> ${datum}</p>
        <p><strong>Uhrzeit:</strong> ${uhrzeit}</p>
        <p><strong>Ort:</strong> ${ortDerSpende}</p>

        <button class="btn btn-success mt-3" onclick="location.reload()">
            Neue Spende registrieren
        </button>
    </section>
`;
});