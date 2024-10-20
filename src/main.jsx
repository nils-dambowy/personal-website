import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Projects from "./components/Projects.jsx"
import Project1 from "./components/Projects/Project1.jsx"
import Project2 from "./components/Projects/Project2.jsx"
import Project3 from "./components/Projects/Project3.jsx"
import Project4 from "./components/Projects/Project4.jsx"
import Project5 from "./components/Projects/Project5.jsx"
import Project6 from "./components/Projects/Project6.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "projects/1",
    element: <Project1/>,
  },
  {
    path: "projects/2",
    element: <Project2/>,
  },
  {
    path: "projects/3",
    element: <Project3/>,
  },
  {
    path: "projects/4",
    element: <Project4/>,
  },
  {
    path: "projects/5",
    element: <Project5/>,
  },
  {
    path: "projects/6",
    element: <Project6/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
