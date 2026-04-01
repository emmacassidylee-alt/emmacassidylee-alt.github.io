import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { CaseStudies } from "./pages/case-studies-new";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "case-studies", Component: CaseStudies },
      { path: "*", Component: NotFound },
    ],
  },
]);