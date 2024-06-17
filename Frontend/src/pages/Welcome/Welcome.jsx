import "./Welcome.scss";
import Loader from "../../components/Loader/Loader.jsx";
import Logo from "../../assets/logo.png";
import Button from '@mui/material/Button';
import { PrimaryButton } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Welcome = () => {

    const navigate = useNavigate();

    const welcomeButton = {
        ...PrimaryButton,
        width: "90%",
        height: "3.5rem",
    }

    const shiftToLogin = () => {
        navigate("/login");
    }

    const [connection, setConnection] = useState(true);


    return (
        <main id="welcome">
            <article>
                <div id="data" style={{ display: connection ? "flex" : "none" }}>
                    <img src={Logo} alt="" />
                    <h1>Bolt - Instant Chat</h1>
                    <p>Welcome to Bolt! A Web Based Instant Chat Application Powered by React!</p>
                    <p>Created using WSS Web Sockets & MongoDB</p>
                    <div className="spacer"></div>
                    <Button onClick={shiftToLogin} variant="contained" style={welcomeButton}>Login</Button>
                    <p>© Muhammad Talal Majeed</p>
                </div>
                <div id="waiter" style={{ display: !connection ? "flex" : "none" }}>
                    <Loader />
                </div>
            </article>
        </main>);
}

export default Welcome;