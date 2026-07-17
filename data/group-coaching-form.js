document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById(
        "group-coaching-inquiry-form"
    );

    const formFields = document.getElementById(
        "inquiry-form-fields"
    );

    const selectedProgram = document.getElementById(
        "selected-program"
    );

    const selectedProgramDisplay = document.getElementById(
        "selected-program-display"
    );
    const pageUrl = document.getElementById(
        "page-url"
    );

    const submissionTime = document.getElementById(
        "submission-time"
    );
    const inquiryId = document.getElementById(
        "inquiry-id"
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

    const submitButton = document.getElementById(
        "inquiry-submit-button"
    );

    const submitSpinner = document.getElementById(
        "inquiry-submit-spinner"
    );

    const submitText = document.getElementById(
        "inquiry-submit-text"
    );

    const submitAnotherButton = document.getElementById(
        "submit-another-inquiry"
    );

    if (
        !inquiryForm ||
        !formFields ||
        !selectedProgram ||
        !selectedProgramDisplay ||
        !pageUrl ||
        !submissionTime ||
        !inquiryId ||
        !successMessage ||
        !successProgram ||
        !errorMessage ||
        !submitButton ||
        !submitSpinner ||
        !submitText ||
        !submitAnotherButton
    ) {
        console.error(
            "One or more group coaching form elements could not be found."
        );
        return;
    }
    pageUrl.value = window.location.href;
    function wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    function setSubmitting(isSubmitting) {
        submitButton.disabled = isSubmitting;

        submitSpinner.classList.toggle(
            "hidden",
            !isSubmitting
        );

        submitText.textContent = isSubmitting
            ? "Sending..."
            : "Submit Inquiry";
    }

    inquiryForm.addEventListener("submit", async event => {
        event.preventDefault();


        submissionTime.value = new Date().toLocaleString(
            "en-CA",
            {
                dateStyle: "medium",
                timeStyle: "short",
                timeZone: "America/Toronto"
            }
        );
        const now = new Date();

        const datePart = now
            .toISOString()
            .slice(0, 10)
            .replaceAll("-", "");

        const randomPart = Math.floor(
            1000 + Math.random() * 9000
        );

        inquiryId.value =
            `BBZ-${datePart}-${randomPart}`;
        successMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");
        const programName =
            selectedProgram.value || "this program";

        const subjectField = inquiryForm.querySelector(
            'input[name="_subject"]'
        );

        if (subjectField) {
            subjectField.value =
                `New BusyBodyz Inquiry: ${programName}`;
        }
        setSubmitting(true);

        const minimumDelay = wait(750);

        try {
            const responsePromise = fetch(inquiryForm.action, {
                method: "POST",
                body: new FormData(inquiryForm),
                headers: {
                    Accept: "application/json"
                }
            });

            const [response] = await Promise.all([
                responsePromise,
                minimumDelay
            ]);

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            const subjectField = inquiryForm.querySelector(
                'input[name="_subject"]'
            );

            if (subjectField) {
                subjectField.value =
                    `New BusyBodyz Inquiry: ${programName}`;
            }
            successProgram.textContent = programName;

            formFields.classList.add("hidden");
            successMessage.classList.remove("hidden");

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } catch (error) {
            console.error(error);

            errorMessage.classList.remove("hidden");

            errorMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        } finally {
            setSubmitting(false);
        }
    });

    submitAnotherButton.addEventListener("click", () => {
        inquiryForm.reset();

        selectedProgram.value = "";
        selectedProgramDisplay.textContent =
            "No program selected";

        successMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");
        formFields.classList.remove("hidden");

        formFields.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});