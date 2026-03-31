import { createBrowserRouter } from "react-router"
import App from "./layouts/App"
import Ideas from "./pages/Ideas"
import Project from "./pages/Project"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Ideas },
            { path: "project/:id", Component: Project },
        ]
    }
])