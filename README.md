# Gurleen Kaur's Coding Portfolio

This repository contains the source code for my interactive 3D developer portfolio. It is a React and Vite project that combines a 3D interactive experience, animated models, project highlights, an about page, and a contact form to showcase both my technical skills and my creative approach to frontend development.

Live site: [gurleenkaur655.vercel.app](https://gurleenkaur655.vercel.app)

![Portfolio Preview](./3d%20Portfolio/src/assets/images/Portfolio.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Credits](#credits)

## Introduction

This portfolio was built to create a more immersive alternative to a standard personal website. Instead of a simple static layout, the project uses interactive 3D scenes and animations to make exploring the site feel more engaging while still keeping the focus on my work, skills, and contact information.

The application includes:

- a 3D landing experience on the home page
- dedicated About, Projects, and Contact pages
- animated 3D models for interaction and visual storytelling
- a working contact form powered by EmailJS
- background audio controls for a more atmospheric experience

## Features

- Interactive 3D home page with a scene the user can explore
- About page that presents my skills and technical background
- Projects page featuring some of my latest work
- Contact page with an animated unicorn that reacts to user interaction
- Background sound toggle for a more immersive experience
- Client-side routing between the main sections of the portfolio

## Installation

To run the project locally:

The Vite app is inside the `3d Portfolio` folder, so after cloning the repository run:

```bash
git clone https://github.com/GurleenKaur655/3dInteractivePortfolio.git
cd 3dInteractivePortfolio/"3d Portfolio"
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies Used

- React
- Vite
- JavaScript (JSX)
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-spring/three`
- `react-router-dom`
- Tailwind CSS
- EmailJS

## Project Structure

```text
3dInteractivePortfolio/
├── README.md
├── vercel.json
└── 3d Portfolio/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── assets/
        │   ├── 3d/
        │   ├── icons/
        │   └── images/
        ├── components/
        ├── constants/
        ├── hooks/
        ├── models/
        ├── pages/
        ├── App.jsx
        ├── main.jsx
        └── style.css
```

### Folder Overview

- `src/assets`: 3D models, icons, images, audio, and other static assets
- `src/components`: reusable UI pieces such as the navbar, footer, loader, and alerts
- `src/constants`: portfolio content and shared data used across the app
- `src/hooks`: custom React hooks
- `src/models`: 3D model components used in the scenes
- `src/pages`: main route-based pages such as Home, About, Projects, and Contact

## Credits

This project was inspired by JavaScript Mastery's tutorial on YouTube.

Original tutorial: [YouTube link](https://www.youtube.com/watch?v=FkowOdMjvYo&t=204s)

### Customizations I Made

- Replaced the fox model with a unicorn for the contact page
- Added a custom island created in SketchUp
- Changed several models instead of using the exact tutorial assets
- Used the tutorial as inspiration while personalizing the design and learning how interactive 3D websites are built

Thank you for checking out my coding portfolio. If you have any questions or feedback, feel free to reach out.
