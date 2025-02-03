function showAlert() {
    alert("Thank you for reaching out to Tender Touch Care Giving Services Limited!");
}
document.addEventListener("DOMContentLoaded", function () {
    const text = ["Care for your loved ones", "Graphic Designer", "Freelancer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
        if (count === text.length) {
            count = 0;
        }
        currentText = text[count];
        letter = currentText.slice(0, ++index);
        document.querySelector("#auto-type").textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 200);
        }
    }

    type();
});