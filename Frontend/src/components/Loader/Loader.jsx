import Logo from "../../assets/logo.png";
import "./Loader.scss";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { customLoader } from "../../styles";

const Loader = () => {
    return (<section id="loader">
        <img src={Logo} alt="" />
        <Box sx={{ width: '100%' }}>
            <LinearProgress style={customLoader} color="primary" />
        </Box>
    </section>);
}

export default Loader;