import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import DefaultTemplate from "../template/DefaultTemplate"
import ErrorPage from "../pages/ErrorPage"
import ListGenerator from "../components/ListGenerator/ListGenerator"

const router = createBrowserRouter([
    {
        element: <DefaultTemplate />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/list-generator',
                element: <ListGenerator />
            }
        ],
    }
])

export default router