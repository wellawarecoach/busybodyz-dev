document.addEventListener("DOMContentLoaded", () => {

    const inquiryForm = document.getElementById(
        "group-coaching-inquiry-form"
    );

    if (!inquiryForm) {
        return;
    }

    inquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Inquiry submitted successfully.");

    });

});