import {createContext, useReducer} from 'react';
import RequestReducer from "../Reducer/RequestReducer";

export const RequestContext = createContext({state:[] , dispatch:()=>{}});


const RequestContextProvider = ({children}) => {
    const [requestData , dispatch] = useReducer(RequestReducer);
    return(
        <RequestContext.Provider value={{requestData , dispatch}}>
            {children}
        </RequestContext.Provider>
    )
}


export default RequestContext;