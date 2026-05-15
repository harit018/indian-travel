function bookTrip() {
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;

    if (name == "") {
        alert("Please enter your name");
    } else {
        alert("Thank you " + name + "! Your trip to " + place + " is booked.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value.trim();
        var message = document.getElementById("message").value.trim();

        if (!name || !message) {
            alert("Please complete all required fields before sending your message.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent. We will contact you soon.");
        contactForm.reset();
    });
});
