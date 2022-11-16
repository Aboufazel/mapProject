import './App.css';
import AuthContextProvider, {AuthContext} from "./Context/auth";
import PrivateRoute from "./Router/PrivateRoute";
import {ThemeProvider} from "@mui/material";
import Theme from "./components/theme/Theme";


function App() {

    return (
        <AuthContextProvider>
            <ThemeProvider theme={Theme}>
                <PrivateRoute/>
            </ThemeProvider>
        </AuthContextProvider>
    );
}

export default App;
