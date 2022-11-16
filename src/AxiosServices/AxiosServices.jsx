import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../Context/auth";

const api = axios.create({
    baseURL:"https://exam.pishgamanasia.com",
})

api.interceptors.response.use()

export const PostData = (username , password)=>{

    return api.post('/webapi/Account/Login' , {username , password});
}

export const GetVehicleUsers = (search , token) =>{
    return api.get(`/webapi/Request/GetVehicleUsers?SearchTerm=${search}&UserToken=${token}`)
}

export const SendRequest = (token , machine , lat ) =>{
    api.post('/webapi/Request/SendRequest' , {
        token,
        vehicleUserTypeId:0,
        machine,
        lat
    })
}


export default api;
