import {Box, Button, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import Theme from "../theme/Theme";
import './style.css'
import {useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../../AxiosServices/AxiosServices";
import {AuthContext} from "../../Context/auth";


const MapStation = ({data}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState(false);
    const [form , setForm] = useState({machine:'', token:''});
    const Data = useContext(AuthContext);


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        setColor(true)
    };




    const manageSubmit = (e)=>{
        e.preventDefault();
        api.post('/webapi/Request/SendRequest' , {
            userToken:form.token,
            vehicleUserTypeId:0,
            source:form.machine,
            destination:form.machine,
        }).then(result => {
            if (result.data.status === 1){
                alert(`
                   درخواست با موفقیت ثبت شد
                   کد رهگیری: ${result.data.data.requestNo}
                `)
                navigate('/success')
            }else if(result.data.status === 0){
                alert(result.data.message)
                navigate('/login')
            }
        })
    }
    return(
        <div className={'mapStation'}>
            <form onSubmit={manageSubmit} style={{display:"flex" , flexDirection:"column"}}>
                <Box sx={{textAlign:'end' }}>
                    <Typography variant={'h6'} theme={Theme} sx={{color : 'green' , fontWeight:'900' , marginBottom:3 , fontSize:16}}>
                        {`:مبدا`}
                        <Typography sx={{margin:0}}>
                            {`${data.lat === undefined ? "مبدا تعیین نشده" : data.lat }  ,  ${data.lng === undefined ? "مبدا تعیین نشده" : data.lng}`}
                        </Typography>
                    </Typography>
                </Box>
                <Box sx={{textAlign:'end'}}>
                    <Typography variant={'h6'} theme={Theme}  sx={{color : 'red' , fontWeight:'900' , marginBottom:3 , fontSize:16}}>
                        {`:مقصد`}
                        <Typography sx={{margin:0}}>

                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <InputLabel id={'selectCar'}>انتخاب ماشین آلات</InputLabel>
                    <Select labelId={'selectCar'} value={"انتخاب وسیله نقلیه"}>
                    </Select>
                </Box>
                <TextField name={'token'}  sx={{my: 2}}
                           label={'کد اعتبار سنجی'} theme={Theme} InputLabelProps={{style: {fontFamily: "Yekan"}}} onChange={handleChange} value={form.token}/>
                    <Button onClick={manageSubmit} type={'submit'} variant="contained" component="label" color={color === false ? 'error' : 'success'} theme={Theme} sx={{py:2 , borderRadius:50 , marginTop:2}} >
                        ثبت درخواست
                    </Button>
            </form>
        </div>

    )
}


export default MapStation;