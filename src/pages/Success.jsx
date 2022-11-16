import {Button} from "@mui/material";
import Theme from "../components/theme/Theme";
import success from "../assets/pics/bullseye.png"
import './sucess.css'
import {Link, Navigate} from "react-router-dom";
import Storage from "../Storage/Storage";


const Success = () => {
 return(
      <div className={'success'}>
           <div className={'successItem'}>
               <img src={success}/>
               <h1>
                   {"عملیات با موفقیت انجام شد"}
               </h1>
               <Link to={'/map'}>
                   <Button variant={"contained"} color={"success"}>
                       {'بازگشت به نقشه'}
                   </Button>
               </Link>
           </div>
      </div>
 )
}



export default Success;