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

    const errorMessage = document.getElementById(
        "inquiry-error-message"
    );

    if (
        !inquiryForm ||
        !selectedProgram ||
        !successMessage ||
        !successProgram ||
        !errorMessage
    ) {
        return;
    }

    const submitButton = inquiryForm.querySelector(
        'button[type="submit"]'
    );

    inquiryForm.addEventListener("submit", async event => {
        event.preventDefault();

        successMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");

        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        submitButton.classList.add("cursor-not-allowed", "opacity-70");

        try {
            const response = await fetch(inquiryForm.action, {
                method: "POST",
                body: new FormData(inquiryForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            const programName =
                selectedProgram.value || "this program";

            successProgram.textContent = programName;
            successMessage.classList.remove("hidden");

            inquiryForm.reset();

            selectedProgram.value = programName;

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } catch (error) {
            console.error(error);

            errorMessage.classList.remove("hidden");

            errorMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            submitButton.classList.remove(
                "cursor-not-allowed",
                "opacity-70"
            );
        }
    });
});