document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById(
        "group-programs-container"
    );

    if (!container) {
        return;
    }

    if (
        !Array.isArray(window.groupPrograms) ||
        window.groupPrograms.length === 0
    ) {
        container.innerHTML = `
            <div class="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <p class="text-slate-600">
                    New small-group programs will be announced soon.
                </p>
            </div>
        `;

        return;
    }

    const programStyles = [
        {
            bar: "bg-slate-900",
            badgeBackground: "bg-slate-100",
            badgeText: "text-slate-700",
            button: "bg-slate-900 hover:bg-slate-700"
        },
        {
            bar: "bg-blue-900",
            badgeBackground: "bg-blue-50",
            badgeText: "text-blue-900",
            button: "bg-blue-900 hover:bg-blue-800"
        },
        {
            bar: "bg-emerald-800",
            badgeBackground: "bg-emerald-50",
            badgeText: "text-emerald-900",
            button: "bg-emerald-800 hover:bg-emerald-700"
        }
    ];

    function createProgramCard(program, index) {
        const programData = {
            ...window.groupProgramDefaults,
            ...program
        };
        const style =
            programStyles[index % programStyles.length];

        const selectedOutcomes = Array.isArray(program.outcomes)
            ? program.outcomes.slice(0, 2)
            : [];

        const outcomeItems = selectedOutcomes
            .map(
                outcome => `
                    <li class="flex items-start gap-2">
                        <span
                            class="mt-0.5 font-semibold text-slate-900"
                            aria-hidden="true"
                        >
                            ✓
                        </span>

                        <span>${outcome}</span>
                    </li>
                `
            )
            .join("");

        const bookingLink =
            program.bookingLink || "#group-coaching-contact";

        const buttonText =
            program.callToAction || "Ask About This Program";

        const status =
            program.status || "Dates coming soon";

        const schedule =
            program.schedule || "To be announced";
        const availability =
            program.availability || "Contact for availability";

        return `
            <article
                class="flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            >
                <div class="h-3 ${style.bar}"></div>

                <div class="p-7 sm:p-8 flex flex-col flex-1">
                    <div class="flex items-center justify-between gap-3">
                        <span
                            class="rounded-full ${style.badgeBackground} px-3 py-1 text-xs font-semibold ${style.badgeText}"
                        >
                            ${program.duration} Program
                        </span>

                        <span class="text-xs font-semibold text-amber-700 text-right">
                            ${status}
                        </span>
                    </div>

                    <h3 class="mt-6 text-2xl font-semibold text-slate-900">
                        ${program.name}
                    </h3>

                    <p class="mt-4 text-slate-600 leading-relaxed">
                        ${program.tagline}
                    </p>

                    <ul class="mt-6 space-y-3 text-sm text-slate-700">
                        <li class="flex items-start gap-2">
                            <span
                                class="mt-0.5 font-semibold text-slate-900"
                                aria-hidden="true"
                            >
                                ✓
                            </span>

                            <span>${program.sessionsPerWeek}</span>
                        </li>

                        <li class="flex items-start gap-2">
                            <span
                                class="mt-0.5 font-semibold text-slate-900"
                                aria-hidden="true"
                            >
                                ✓
                            </span>

                            <span>${program.maximumParticipants}</span>
                        </li>
<li class="flex items-start gap-2">
    <span
        class="mt-0.5 font-semibold text-slate-900"
        aria-hidden="true"
    >
        ✓
    </span>

    <span>${program.cohortProgression}</span>
</li>
                        ${outcomeItems}

                        <li class="flex items-start gap-2">
                            <span
                                class="mt-0.5 font-semibold text-slate-900"
                                aria-hidden="true"
                            >
                                ✓
                            </span>

                            <span>${program.missedSessionSummary}</span>
                        </li>
                    </ul>
                    <details
                        class="group mt-7 rounded-2xl border border-slate-200 bg-slate-50"
                    >
                        <summary
                            class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-900"
                        >
                            <span>View Program Details</span>

                            <span
                                class="text-lg leading-none transition-transform group-open:rotate-45"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>

                        <div class="border-t border-slate-200 px-5 py-5">
                            <p class="text-sm leading-relaxed text-slate-600">
                                ${program.description}
                            </p>

                            <div class="mt-5">
                                <h4 class="text-sm font-semibold text-slate-900">
                                    This program may be suitable for:
                                </h4>

                                <ul class="mt-3 space-y-2 text-sm text-slate-600">
                                    ${program.suitableFor
                .map(
                    item => `
                                                <li class="flex items-start gap-2">
                                                    <span
                                                        class="mt-0.5 text-slate-900"
                                                        aria-hidden="true"
                                                    >
                                                        •
                                                    </span>

                                                    <span>${item}</span>
                                                </li>
                                            `
                )
                .join("")}
                                </ul>
                            </div>

                            <div class="mt-5">
                                <h4 class="text-sm font-semibold text-slate-900">
                                    Program outcomes:
                                </h4>

                                <ul class="mt-3 space-y-2 text-sm text-slate-600">
                                    ${program.outcomes
                .map(
                    outcome => `
                                                <li class="flex items-start gap-2">
                                                    <span
                                                        class="mt-0.5 text-slate-900"
                                                        aria-hidden="true"
                                                    >
                                                        •
                                                    </span>

                                                    <span>${outcome}</span>
                                                </li>
                                            `
                )
                .join("")}
                                </ul>
                            </div>

                            <div class="mt-5 border-t border-slate-200 pt-5 text-sm">
                                <div>
                                    <span class="font-semibold text-slate-900">
                                        Location:
                                    </span>

                                    <span class="text-slate-600">
                                        ${program.location}
                                    </span>
                                </div>

                                <p class="mt-3 leading-relaxed text-slate-600">
                                    <span class="font-semibold text-slate-900">
                                        Missed sessions:
                                    </span>

                                    ${program.missedSessionSupport}
                                </p>
                            </div>
                        </div>
                    </details>
                    
                    <div class="mt-auto pt-8">
                        <div class="border-t border-slate-200 pt-6">
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div class="text-slate-500">
                                        Schedule
                                    </div>

                                    <div class="mt-1 font-semibold text-slate-900">
                                         ${schedule}
                                    </div>
                                </div>

                               <div>
    <div class="text-slate-500">
        Availability
    </div>

    <div class="mt-1 font-semibold text-slate-900">
        ${availability}
    </div>

    <div class="mt-2 text-xs font-medium text-emerald-700">
        ${program.status}
    </div>
</div>
                            </div>
                        </div>

                        <a
                            href="${bookingLink}"
                            class="mt-8 inline-flex w-full items-center justify-center rounded-full ${style.button} px-6 py-3.5 font-medium text-white transition"
                        >
                            ${buttonText}
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    container.innerHTML = window.groupPrograms
        .map(createProgramCard)
        .join("");
});