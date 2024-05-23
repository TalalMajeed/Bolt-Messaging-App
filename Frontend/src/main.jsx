import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

import './index.scss'
import Welcome from './components/Welcome/Welcome.jsx'

const IndexPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/welcome");
    }, []);
    return <></>
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/welcome",
        element: <Welcome />,
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
