
const AuthReducer = (state, action) => {

    const { type, payload } = action;
    switch (type){
        case 'UserData':
            return payload.data.data.userToken;
        case 'GetVehicleUsers':
            return payload.data
        default:
            return state
    }
}

export default AuthReducer