/*
=========================================================
BUSYBODYZ SMALL GROUP PROGRAMS

To add a new program:
1. Copy one complete program object.
2. Paste it after the previous program.
3. Add a comma between program objects.
4. Change the information inside the quotation marks.

Avoid changing the property names such as:
name, duration, tagline, description, suitableFor, outcomes
=========================================================
*/
window.groupProgramDefaults = {
    sessionsPerWeek: "Two coached sessions per week",

    location: "BusyBodyz studio",

    maximumParticipants: "Maximum five participants",

    cohortProgression:
        "Cohort-based progression from start to finish",

    missedSessionSummary:
        "Make-up or recorded session option",

    missedSessionSupport:
        "Optional in-studio make-up sessions may be available when space permits. A recorded online session is also provided when a participant cannot attend."
};
window.groupPrograms = [
    {
        id: "make-life-feel-easier",

        name: "Make Life Feel Easier",

        duration: "8 weeks",

        shortLabel: "Everyday strength and confidence",

        tagline:
            "Build the strength, mobility, and confidence that help everyday movement feel easier.",

        description:
            "Make Life Feel Easier is a progressive small-group coaching program designed to improve the physical capacity you rely on in daily life. Through coached strength, balance, mobility, and practical movement, participants build greater confidence in how they move and what they feel capable of doing.",

        suitableFor: [
            "Adults who want everyday movement to feel easier",
            "People returning to exercise after time away",
            "Anyone wanting to improve strength, balance, and mobility",
            "People who value personal coaching in a supportive environment"
        ],

        outcomes: [
            "Improved whole-body strength",
            "Greater balance and movement confidence",
            "Better mobility for everyday activities",
            "Increased physical capacity and resilience"
        ],

        sessionsPerWeek: "Two coached sessions per week",

        location: "BusyBodyz studio",

        cohortProgression:
            "Cohort-based progression from start to finish",

        missedSessionSummary:
            "Make-up or recorded session option",
        missedSessionSupport:
            "Optional in-studio make-up sessions may be available when space permits. A recorded online session is also provided when a participant cannot attend.",

        callToAction: "I'm interested.",

        bookingLink: "#group-coaching-inquiry",
        status: {
            text: "Registration Open",
            class: "text-emerald-700"
        },
        schedule: "To be announced",

        availability: "5 places",


        maximumParticipants: "5 participants",

        featured: true,

        featuredLabel: "Featured Program"
    },

    {
        id: "reset-and-reconnect",

        name: "Reset & Reconnect",

        duration: "6 weeks",

        shortLabel: "Restore movement and consistency",

        tagline:
            "Reconnect with your body, rebuild consistency, and create a more sustainable relationship with movement.",

        description:
            "Reset & Reconnect is designed for people who feel physically disconnected, out of routine, or unsure how to begin again. The program provides a calm and progressive return to structured movement, helping participants rebuild confidence, awareness, and consistency without feeling rushed or overwhelmed.",

        suitableFor: [
            "People who have fallen out of a regular movement routine",
            "Adults who feel stiff, low in energy, or physically disconnected",
            "People seeking a manageable return to exercise",
            "Anyone who prefers supportive coaching over high-pressure workouts"
        ],

        outcomes: [
            "Improved body awareness",
            "Renewed confidence with movement",
            "Greater consistency and momentum",
            "Improved mobility, strength, and energy"
        ],

        sessionsPerWeek: "Two coached sessions per week",

        location: "BusyBodyz studio",

        maximumParticipants: "Maximum five participants",

        cohortProgression:
            "Cohort-based progression from start to finish",
        missedSessionSummary:
            "Make-up or recorded session option",
        missedSessionSupport:
            "Optional in-studio make-up sessions may be available when space permits. A recorded online session is also provided when a participant cannot attend.",

        callToAction: "I'm interested.",

        bookingLink: "#group-coaching-inquiry",

        status: "Upcoming cohort",

        schedule: "To be announced",

        availability: "5 places",

        featured: false
    },

    {
        id: "move-like-an-animal",

        name: "Move Like an Animal",

        duration: "6–8 weeks",

        shortLabel: "Strength, mobility and movement skill",

        tagline:
            "Develop strength, coordination, mobility, and confidence through purposeful ground-based movement.",

        description:
            "Move Like an Animal uses crawling, reaching, transitioning, supporting, and ground-based movement patterns to build adaptable strength and better movement control. The program is progressive and coached, making complex movement approachable while helping participants become more capable and confident in their bodies.",

        suitableFor: [
            "Adults wanting a more engaging way to build strength",
            "People interested in improving coordination and mobility",
            "Participants comfortable learning new movement skills",
            "Anyone wanting to become more adaptable and physically capable"
        ],

        outcomes: [
            "Improved coordination and body control",
            "Greater shoulder, trunk, and hip strength",
            "Better mobility and ground-movement confidence",
            "Increased movement adaptability"
        ],

        sessionsPerWeek: "Two coached sessions per week",

        location: "BusyBodyz studio",

        maximumParticipants: "Maximum five participants",
        cohortProgression:

            "Cohort-based progression from start to finish",
        missedSessionSummary:
            "Make-up or recorded session option",
        missedSessionSupport:
            "Optional in-studio make-up sessions may be available when space permits. A recorded online session is also provided when a participant cannot attend.",

        callToAction: "I'm interested.",

        bookingLink: "#group-coaching-inquiry",

        status: "Upcoming cohort",

        schedule: "To be announced",

        availability: "5 places",

        featured: false
    }
];