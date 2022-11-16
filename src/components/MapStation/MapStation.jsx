import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import Theme from "../theme/Theme";
import './style.css'
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../../AxiosServices/AxiosServices";
import {AuthContext} from "../../Context/auth";
import {RequestContext} from "../../Context/Request";


const MapStation = ({data}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState(false);
    const [form, setForm] = useState({machine: '', token: ''});
    const [tools, setTools] = useState('');
    const mach = []
    const Data = useContext(AuthContext);
    const Vehicle = useContext(RequestContext);


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        setColor(true)
    };

    const handleTools = (e) =>{
        setTools(e.target.value);
    }


    const a = Object.entries(Vehicle);
    const b = Object.values(a[0][1]);
    b[2].map(item => (
        mach.push(item)
    ))
    console.log(mach)


    const manageSubmit = async (e) => {
        e.preventDefault();
        api.post('/webapi/Request/SendRequest', {
            userToken: Data.authData,
            vehicleUserTypeId: 0,
            source: "کامیون",
            destination: `${data.lat} , ${data.lng}`,
        }).then(result => {
            if (result.data.status === 1) {
                alert(`
                   درخواست با موفقیت ثبت شد
                   کد رهگیری: ${result.data.data.requestNo}
                `)
                navigate('/success')
            } else if (result.data.status === 0) {
                alert(result.data.message)
                navigate('/login')
            }
        })
    }
    return (
        <div className={'mapStation'}>
            <form onSubmit={manageSubmit} style={{display: "flex", flexDirection: "column"}}>
                <Box sx={{textAlign: 'end'}}>
                    <Typography variant={'h6'} theme={Theme}
                                sx={{color: 'green', fontWeight: '900', marginBottom: 3, fontSize: 16}}>
                        {`:مبدا`}
                        <Typography sx={{margin: 0}}>
                            {`${data.lat === undefined ? "مبدا تعیین نشده" : data.lat}  ,  ${data.lng === undefined ? "مبدا تعیین نشده" : data.lng}`}
                        </Typography>
                    </Typography>
                </Box>
                <Box sx={{textAlign: 'end'}}>
                    <Typography variant={'h6'} theme={Theme}
                                sx={{color: 'red', fontWeight: '900', marginBottom: 3, fontSize: 16}}>
                        {`:مقصد`}
                        <Typography sx={{margin: 0}}>

                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id={'selectCar'}>انتخاب ماشین آلات</InputLabel>
                        <Select
                            labelId="mach-select"
                            id="mach-data-select"
                            value={tools}
                            label="ماشین آلان"
                            onChange={handleTools}
                        >
                            {mach.map(item => (
                                    <MenuItem value={item.id}>
                                        {item.name}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl>
                </Box>
                <TextField name={'token'} sx={{my: 2}}
                           label={'کد اعتبار سنجی'} theme={Theme} InputLabelProps={{style: {fontFamily: "Yekan"}}}
                           onChange={handleChange} value={Data.authData}/>
                <Button onClick={manageSubmit} type={'submit'} variant="contained" component="label"
                        color={color === false ? 'error' : 'success'} theme={Theme}
                        sx={{py: 2, borderRadius: 50, marginTop: 2}}>
                    ثبت درخواست
                </Button>
            </form>
        </div>

    )
}


export default MapStation;