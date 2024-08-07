import { lazy } from "react";

const Home = lazy(() => import("./home"));
const Housing = lazy(() => import("./housing"));
const About = lazy(() => import("./about"));
const Error = lazy(() => import("./error"));

export { Home, Housing, About, Error };
