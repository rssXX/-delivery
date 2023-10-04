import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import DefaultTemplate from "../template/DefaultTemplate"
import ErrorPage from "../pages/ErrorPage"
// import ListGenerator from "../components/ListGenerator/ListGenerator"
import JsListGenerator from "../components/ListGenerator/JsListGenerator.js"

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
                element: <JsListGenerator />
            }
        ],
    }
])

export default router