import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

import './index.scss'
import Welcome from './pages/Welcome/Welcome.jsx'
import Login from './pages/Login/Login.jsx'
import { createTheme, ThemeProvider } from "@mui/material/styles";


const { palette } = createTheme();
const theme = createTheme({
    palette: {
        primary: palette.augmentColor({
            color: {
                main: "#342f88",
            },
        }),
    },
});


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
    },
    {
        path: "/login",
        element: <Login />,
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>

)
