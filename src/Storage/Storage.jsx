function Storage() {
    return {
        setLogin: (userToken) => {
            const data = {
                userToken,
                isLogin : true,
            }
            localStorage.setItem('auth' , JSON.stringify(data));
        },

        getAccessToken: () => {
            const key = localStorage.getItem("auth");
            if (key === null){
                return false
            }
            const auth = JSON.parse(key);
            return auth?.getAccessToken;
        },
        getNeedTools: () => {
        },
        postRequest: () => {
        },
       get isLogin(){
            const key = localStorage.getItem("auth");
            if(key === null){
                return false;
            }
           const auth = JSON.parse(key);
            return auth?.isLogin;
        }
    }
}

export default Storage;