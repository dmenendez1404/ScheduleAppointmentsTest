import {Types} from '../actions/app';
import update from 'immutability-helper';
import { createReducer } from 'reduxsauce';


export const getInitial = () => ({
    DATA: [],
    APPOINTMENTS:[],
    LOADING: false,
    NOTIFIER: {
        open:  false,
        message: '',
        type: 'primary'
    }
})

export const initial = getInitial();

const handlers = {
    [Types.SET_LOADING]: (state: any, action: any) => {
        return update(state, {
            LOADING: { $set: action.isLoading },
        });
    },
    [Types.SET_NOTIFIER]: (state: any, action: any) => {
        return update(state, {
            NOTIFIER: { $set: action.data },
        });
    },
    [Types.CLEAR_STATE]: (state: any, action: any) => {
        return getInitial();
    },
    [Types.LOAD_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {
        return update(state, {
            APPOINTMENTS: { $set: action.data.data },
        });
    },
};
const app = createReducer(getInitial(), handlers);

export default app;
