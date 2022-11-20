import {Backdrop, Button, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import Theme from "../theme/Theme";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PostData} from "../../AxiosServices/AxiosServices";
import {AuthContext} from "../../Context/auth";



const LoginForm = () => {
    const {state , dispatch} = useContext(AuthContext)
    const [form, setForm] = useState({username: '', password: ''})
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const manageChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const manageSubmit = async (e) => {
        e.preventDefault();
        setOpen(!open);
      const data = await PostData(form.username , form.password);
      console.log(data);
      if(data.data.status === 1){
          alert(data.data.message);
          dispatch({type: 'UserData' , payload:data});
          navigate('/get');
      }else {
          alert(data.data.message);
          navigate('/login')
      }

    }


    return (
        <Grid container mt={12} justifyContent={'center'} alignItems={'center'}>
            <Grid container item height={400} xs={10} lg={4} borderRadius={10} paddingY={2} boxShadow={5}>
                <Grid container item justifyContent={'center'}>
                    <Typography variant={'h5'} theme={Theme} sx={{marginTop: 3}}>
                        ورود
                    </Typography>
                </Grid>
                <Grid item xs={12} padding={5} justifyContent={'center'} alignItems={'center'}>
                    <form onSubmit={manageSubmit} style={{display: "flex", flexDirection: "column"}}>
                        <TextField name={'username'} value={form.username} onChange={manageChange} sx={{my: 2}}
                                   label={'نام کاربری'} theme={Theme} InputLabelProps={{style: {fontFamily: "Yekan"}}} key={1}/>
                        <TextField type={'password'} name={'password'} value={form.password} onChange={manageChange}
                                   sx={{my: 2}} label={'کلمه عبور'} theme={Theme}
                                   InputLabelProps={{style: {fontFamily: "Yekan"}}} key={2}/>
                        <Button onClick={manageSubmit} type={'submit'} variant="contained" component="label"
                                color={'info'} theme={Theme} sx={{py: 2, borderRadius: 50, marginTop: 2}}>
                            ورود
                        </Button>
                        <Backdrop
                            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                            open={open}
                        >
                            <CircularProgress color="inherit"/>
                        </Backdrop>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default LoginForm;