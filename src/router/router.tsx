import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import DefaultTemplate from "../template/DefaultTemplate"
import ErrorPage from "../pages/ErrorPage"

const router = createBrowserRouter([
    {
        element: <DefaultTemplate/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ],
    }
])

export default router