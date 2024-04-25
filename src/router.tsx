import {createBrowserRouter, Outlet, ScrollRestoration} from "react-router-dom";
import {Main, Project} from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <><Outlet /><ScrollRestoration /></>,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/projects/:projectId",
                element: <Project />
            }
        ]
    }
]);
