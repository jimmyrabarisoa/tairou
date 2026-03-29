import { createBrowserRouter } from "react-router"
import App from "./App"
import Ideas from "./pages/Ideas"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Ideas },
        ]
    }
])