import "./Welcome.scss";
import Logo from "../../assets/logo.png";
import Button from '@mui/material/Button';
import { PrimaryButton } from "../../styles";
import { useNavigate } from "react-router-dom";

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


    return (
        <main id="welcome">
            <article>
                <img src={Logo} alt="" />
                <h1>Bolt - Instant Chat</h1>
                <p>Welcome to Bolt! A Web Based Instant Chat Application Powered by React!</p>
                <p>Created using WSS Web Sockets & MongoDB</p>
                <div className="spacer"></div>
                <Button onClick={shiftToLogin} variant="contained" style={welcomeButton}>Login</Button>
                <p>© Muhammad Talal Majeed</p>
            </article>
        </main>);
}

export default Welcome;