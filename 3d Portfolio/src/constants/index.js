import {
    contact,
    csharp,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    typescript,
    Java,
    ASP,
    springBoot,
    sql,
    Figma,
    Bootstrap,
    AngularJS,
    Swagger,
    Jira
} from "../assets/icons";

import {
 Portfolio,
 LLM,
 QuizGame,
 RecipeWebsite,
} from "../assets/images"

export const skills = [
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: ASP,
        name: "ASP.NET",
        type: "Backend",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springBoot,
        name: "SpringBoot",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: Bootstrap,
        name: "BootStrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: AngularJS,
        name: "AngularJS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: Figma,
        name: "Figma",
        type: "Frontend",
    },
    {
        imageUrl: Swagger,
        name: "Swagger",
        type: "API",
    },
    {
        imageUrl: Jira,
        name: "Jira",
        type: "Agile Project Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const projects = [
    {
        cover: QuizGame,
        title: "Real-Time Multiplayer Quiz Game",
        skills: "Angular, TypeScript, Node.js, Express.js, Socket.IO(WebSocket), BootStrap, REST APIs",
        description: "A real-time multiplayer quiz game where players can join rooms, answer timed questions, and compete with live score updates. Includes dynamic gameplay features like automatic scoring, timers, and winner detection for an interactive experience.",
        url: ""
    },
    {
        cover: Portfolio,
        title: "3d Interactive Portfolio",
        skills: "React, Vite, Three.js, Tailwind CSS",
        description: "A 3D interactive portfolio showcasing projects and skills through an immersive user experience. Features animated models, smooth transitions, and interactive elements to create a visually engaging interface.",
        url: "https://github.com/GurleenKaur655/3dInteractivePortfolio"
    },
    {
        cover: RecipeWebsite,
        title: "Recipe Management Website",
        skills: "C#, ASP.NET MVC, SQL Server, JavaScript, Bootstrap, HTML",
        description: "A recipe management web application where users can create, edit, and browse recipes with features like filtering, pagination, and image uploads. Includes admin approval and role-based access to manage content.",
        url: ""
    },
    {
        cover: LLM,
        title: "LLM From Scratch",
        skills: "Python, PyTorch, Transformer Architecture, Ollama",
        description: "Currently building a transformer-based Large Language Model inspired by GPT-2 (124M parameters) to explore token embeddings, self-attention, and modern LLM architecture. Experimenting with local inference and project-based workflows using Ollama.",
        url: "https://github.com/GurleenKaur655/Building-LLMs"
    }
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/GurleenKaur655',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gurleen-kaur-b54129294/',
    }
];
