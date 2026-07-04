// Replace these with your own screenshots
import wedding from "../../assets/wedding-zone.png";
import appNest from "../../assets/AppNest.png";
import fastFix from "../../assets/FastFix.png";

const projects = [
    {
        id: "my-wedding-zone",

        title: "My Wedding Zone",

        image: wedding,

        description:
            "A full-stack wedding service booking platform where users can rent wedding products, book services, manage bookings, and securely authenticate.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "ReactRouter",
            "Express.js",
            "MongoDB",
            "Firebase",
            "JWT",
            "Tailwind CSS",
            "DaisyUI",
            "Sweet Alert",
            "Recharts"
        ],

        live: "https://my-wedding-zone.vercel.app/",

        github:
            "https://github.com/monirzkhan/My-Weeding-Zone",

        challenges: [
            "JWT authentication",
            "Role-based dashboard",
            "Booking availability",
            "Responsive UI",
        ],

        improvements: [
            "Online payment",
            "Vendor messaging",
            "Ratings & Reviews",
            "Email notifications",
        ],
    },

    {
        id: "app-nest",

        title: "App Nest",

        image: appNest,

        description:
            "A web platform for discovering, reviewing, and managing useful applications.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "ReactRouter",
            "Node.js",
            "Tailwind CSS",
            "DaisyUI",
            "Recharts",
            "React Toastify"



        ],

        live: "https://app-nest-alpha.vercel.app/",

        github:
            "https://github.com/monirzkhan/AppNest",

        challenges: [
            "Search optimization",
            "Filtering",
            "Responsive dashboard",
            "CRUD operations",
        ],

        improvements: [
            "AI recommendations",
            "Push notifications",
            "Dark mode",
            "Analytics",
        ],
    },

    {
        id: "fastfix-ticket-system",

        title: "FastFix Ticket System",

        image: fastFix,

        description:
            "A helpdesk ticket management system where users can create, assign, track, and resolve support tickets efficiently.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Tailwind CSS",
            "DaisyUI",
            "React Toastify"
        ],

        live: "https://incandescent-selkie-aef535.netlify.app/",

        github:
            "https://github.com/monirzkhan/FastFix-Ticket-System",

        challenges: [
            "Ticket workflow",
            "Role permissions",
            "Real-time status updates",
            "Dashboard statistics",
        ],

        improvements: [
            "Live chat",
            "AI ticket classification",
            "Email alerts",
            "Performance reports",
        ],
    },
];

export default projects;