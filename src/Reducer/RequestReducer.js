
const RequestReducer = (state , action) => {

    const { type, payload } = action;

    switch (type){
        case 'GetVehicle':
            return payload.data
        default:
            return state
    }
}


export default RequestReducer;