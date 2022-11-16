import {createContext, useReducer} from 'react';
import AuthReducer from "../Reducer/Reducer";

export const AuthContext = createContext({state:[] , dispatch:()=>{}});


const AuthContextProvider = ({children}) => {
    const [authData , dispatch] = useReducer(AuthReducer);
    return(
        <AuthContext.Provider value={{authData , dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;
