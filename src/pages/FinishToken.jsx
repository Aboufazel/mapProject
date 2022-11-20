import {Box, CircularProgress} from "@mui/material";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const FinishToken = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/login')
        } , 5000)
    } , [])


    return(
        <Box>
            your login token expire
            <CircularProgress/>
        </Box>
    )
}



export default FinishToken;