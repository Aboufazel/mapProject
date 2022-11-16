import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import Theme from "../theme/Theme";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {GetVehicleUsers} from "../../AxiosServices/AxiosServices";
import {AuthContext} from "../../Context/auth";
import MapStation from "../MapStation/MapStation";



const GetComponent = () => {
    const navigate = useNavigate();
    const [form , setForm] = useState({token:'' , tools:''});
    const {dispatch} = useContext(AuthContext)
    const charLimit = 2;
    const Data = useContext(AuthContext);

    const manageChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    const manageRequest = async (e) =>{
        e.preventDefault()
        const GetData = await GetVehicleUsers(`${form.tools}` , `${Data.authData}`)
             if(GetData.data.status === 1){
                 alert(`شما به دنبال وسیله ${GetData.data.data[0].name} هستید `);
                 dispatch({type:'GetVehicleUsers' , payload:GetData});
                 navigate('/map');
             }else if (GetData.data.status === 0){
                 alert(GetData.data.message);
                 navigate('/login');
             }
    }

    return(
        <Grid container mt={12} justifyContent={'center'} alignItems={'center'}>
            <Grid container item height={400} xs={10} lg={4} borderRadius={10} paddingY={2} boxShadow={5}>
                <Grid container item justifyContent={'center'}>
                    <Typography variant={'h5'} theme={Theme} sx={{marginTop: 3}}>
                        {'درخواست ماشین آلات'}
                    </Typography>
                </Grid>
                <Grid item xs={12} padding={5} justifyContent={'center'} alignItems={'center'}>
                    <form onSubmit={manageRequest} style={{display: "flex", flexDirection: "column"}}>
                        <TextField name={'token'} value={Data.authData}  sx={{my: 2}} onChange={manageChange}
                                   label={'کد اعتبار سنجی'} theme={Theme} InputLabelProps={{style: {fontFamily: "Yekan"}}}/>
                        <TextField type={'text'} name={'tools'} value={form.tools} onChange={manageChange} inputProps={{
                            maxLength: charLimit
                        }}
                                   sx={{my: 2}} label={'نوع ماشین آلات'} theme={Theme}
                                   InputLabelProps={{style: {fontFamily: "Yekan"}}}   helperText={`${form.tools.length}/${charLimit}`}/>
                        <Button onClick={manageRequest} type={'submit'} variant="contained" component="label"
                                color={'warning'} theme={Theme} sx={{py: 2, borderRadius: 50, marginTop: 2}}>
                            {'ثبت درخواست'}
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}



export default GetComponent;