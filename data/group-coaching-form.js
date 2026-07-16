document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById(
        "group-coaching-inquiry-form"
    );

    const selectedProgram = document.getElementById(
        "selected-program"
    );

    const successMessage = document.getElementById(
        "inquiry-success-message"
    );

    const successProgram = document.getElementById(
        "inquiry-success-program"
    );

    if (
        !inquiryForm ||
        !selectedProgram ||
        !successMessage ||
        !successProgram
    ) {
        return;
    }

    inquiryForm.addEventListener("submit", event => {
        event.preventDefault();

        const programName =
            selectedProgram.value || "this program";

        successProgram.textContent = programName;
        successMessage.classList.remove("hidden");
        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});