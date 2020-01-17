import {createActions} from "reduxsauce";

export const {Types, Creators} = createActions({
        loadAppointments: [],
        loadAppointmentsSuccess: ['data'],
        setLoading: ['isLoading'],
        clearState: [],
        requestFails: ['error'],
        setNotifier: ['data']
    },
    {
        prefix: '@@ROOT/'
    });
export const types = Types;
export default Creators;