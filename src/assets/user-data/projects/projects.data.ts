import { Project } from "../../../app/types/project.types";

export const projects: Project[] = [
    {
        title: 'Website',
        summary:
            'An open-source profolio website. Built with Angular for the front-end and Node.js for the backend.',
        image: 'placeholder-1.png',
        icon: 'file-code.svg',
    },
    {
        title: 'Mobile App',
        summary:
            'A mobile app for Android and iOS. Built with Swift and Kotlin for the front-end, and Node.js for the back-end.',
        image: 'placeholder-2.png',
        icon: 'apps.svg',
    },
    {
        title: 'Platform',
        summary:
            'A marketplace platform for finding services and products. Used React.js for the front-end and Node.js for the back-end.',
        image: 'placeholder-3.png',
        icon: 'rocket.svg',
    },
];
