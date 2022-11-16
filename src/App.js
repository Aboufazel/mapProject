import './App.css';
import AuthContextProvider, {AuthContext} from "./Context/auth";
import PrivateRoute from "./Router/PrivateRoute";
import {ThemeProvider} from "@mui/material";
import Theme from "./components/theme/Theme";
import RequestContextProvider from "./Context/Request";


function App() {

    return (
        <AuthContextProvider>
            <RequestContextProvider>
                <ThemeProvider theme={Theme}>
                    <PrivateRoute/>
                </ThemeProvider>
            </RequestContextProvider>
        </AuthContextProvider>
    );
}

export default App;
