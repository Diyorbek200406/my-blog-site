import { blog, bootstrap, chakra, country, css, docker, ejs, express, graphql, html, javascript, jwt, minio, mongodb, movie, mui, mysql, nest, netflix, next, node, postgres, postman, react, redis, sass, shadcn, socket, startup, swagger, tailwind, typescript } from "@/public/logo";
import { Youtube, Instagram, Linkedin, Facebook, Github } from "lucide-react";

export const navigation = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Projects",
    route: "/projects",
  },
  {
    title: "Skills",
    route: "/skills",
  },
  {
    title: "Blogs",
    route: "/blogs",
  },
  {
    title: "Contacts",
    route: "/contacts",
  },
];

export const footerIcons = [
  {
    title: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100093070954618",
  },
  {
    title: "instagram",
    icon: Instagram,
    href: "https://www.instagram.com/diyorbek_dev_04/",
  },
  {
    title: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/diyorbek-erkinov-8a4032278/",
  },
  {
    title: "youtube",
    icon: Youtube,
    href: "https://www.youtube.com/",
  },
  {
    title: "github",
    icon: Github,
    href: "https://github.com/Diyorbek200406",
  },
];

export const myFrontendSkills = [
  {
    title: "Html",
    href: html,
  },
  {
    title: "Css",
    href: css,
  },
  {
    title: "JavaScript",
    href: javascript,
  },
  {
    title: "TypeScript",
    href: typescript,
  },
  {
    title: "React",
    href: react,
  },
  {
    title: "Next",
    href: next,
  },
  {
    title: "Bootstrap",
    href: bootstrap,
  },
  {
    title: "Tailwind",
    href: tailwind,
  },
  {
    title: "Chakra",
    href: chakra,
  },
  {
    title: "MUI",
    href: mui,
  },
  {
    title: "Sass",
    href: sass,
  },
  {
    title: "Shadcn",
    href: shadcn,
  },
];

export const myBackendSkills = [
  {
    title: "Node",
    href: node,
  },
  {
    title: "Nest",
    href: nest,
  },
  {
    title: "Express",
    href: express,
  },
  {
    title: "Ejs",
    href: ejs,
  },
  {
    title: "Socket IO",
    href: socket,
  },
  {
    title: "Docker",
    href: docker,
  },
  {
    title: "Min IO",
    href: minio,
  },
  {
    title: "Graphql",
    href: graphql,
  },
  {
    title: "TypeScript",
    href: typescript,
  },
  {
    title: "Swagger",
    href: swagger,
  },
  {
    title: "Postman",
    href: postman,
  },
  {
    title: "JWT",
    href: jwt,
  },
];

export const myDatabaseSkills = [
  {
    title: "Postgresql",
    href: postgres,
  },
  {
    title: "Mongo DB",
    href: mongodb,
  },
  {
    title: "Redis",
    href: redis,
  },
  {
    title: "Msql",
    href: mysql,
  },
];

export const myProjects = [
  {
    name: "Countries",
    route: "https://diyorbek-countries.vercel.app/",
    image: country,
    github: "https://github.com/Diyorbek200406/2023-04-08-Countries-webpack-js",
    description: "Countries project very simple project this is ease for me",
    technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
  },
  {
    name: "StartUp",
    route: "https://diyorbek-startup.vercel.app/",
    image: startup,
    github: "https://github.com/Diyorbek200406/startup",
    description: "Start Up project very big project this is ease for me",
    technologies: ["date-fns", "framer-motion", "graphql", "graphql-request", "i18next", "i18next-browser-languagedetector", "i18next-http-backend", "next", "nprogress", "react", "react-dom", "react-hydration-provider", "react-i18next", "react-icons", "react-multi-carousel", "react-stars"],
  },
  {
    name: "Movie",
    route: "https://diyor-movie.vercel.app/",
    image: movie,
    github: "https://github.com/Diyorbek200406/diyor-movie-app",
    description: "Movie project very big project this is ease for me",
    technologies: ["Next", "TypeScript", "Tailwind", "axios", "formik", "yup", "zustand", "react-icons", "react-player", "stripe", "js-cookie", "firebase", "react-stars", "tailwind-scrollbar-hide", "type"],
  },
  {
    name: "Netflix",
    route: "https://diyorbek-netflix.vercel.app/browse",
    image: netflix,
    github: "https://github.com/Diyorbek200406/netflix",
    description: "Netflix project very big project this is ease for me",
    technologies: ["Next", "TypeScript", "Tailwind", "Shadcn", "axios", "bcryptjs", "framer-motion", "lucide-react", "mongoose", "next-auth", "react-hook-form", "next-themes", "react-icons", "react-player", "react-pin-input", "react-stars", "tailwind-scrollbar-hide", "zod"],
  },
  {
    name: "Portfolio",
    route: "https://diyorbek-vite-blog.vercel.app/",
    image: blog,
    github: "https://github.com/Diyorbek200406/vite-my-web-site",
    description: "portfolio project very big project this is ease for me",
    technologies: ["react", "react-circular-progress", "react-router-dom", "react-icons"],
  },
];
