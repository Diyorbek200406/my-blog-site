import {
  bootstrap,
  chakra,
  country,
  css,
  docker,
  ejs,
  express,
  graphql,
  html,
  javascript,
  jwt,
  minio,
  mongodb,
  movie,
  mui,
  mysql,
  nest,
  netflix,
  next,
  node,
  postgres,
  postman,
  react,
  redis,
  sass,
  shadcn,
  socket,
  startup,
  swagger,
  tailwind,
  typescript,
} from "@/public/logo";
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

export const mySkills = [
  {
    title: "Frontend",
    skills: [
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
    ],
  },
  {
    title: "Backend",
    skills: [
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
    ],
  },
  {
    title: "Database",
    skills: [
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
    ],
  },
];

export const myProjects = [
  {
    name: "Countries",
    route: "https://diyorbek-countries.vercel.app/",
    image: country,
    github: "https://github.com/Diyorbek200406/2023-04-08-Countries-webpack-js",
  },
  {
    name: "StartUp",
    route: "https://diyorbek-startup.vercel.app/",
    image: startup,
    github: "https://github.com/Diyorbek200406/startup",
  },
  {
    name: "Movie",
    route: "https://diyor-movie.vercel.app/",
    image: movie,
    github: "https://github.com/Diyorbek200406/diyor-movie-app",
  },
  {
    name: "Netflix",
    route: "https://diyorbek-netflix.vercel.app/browse",
    image: netflix,
    github: "https://github.com/Diyorbek200406/netflix",
  },
];
