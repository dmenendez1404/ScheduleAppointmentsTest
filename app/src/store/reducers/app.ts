import {Types} from '../actions/app';
import update from 'immutability-helper';
import {createReducer} from 'reduxsauce';
import {User} from "../models/user.model";


export const getInitial = () => ({
    USER: {},
    APPOINTMENTS: [],
    LOADING: false,
    NOTIFIER: {
        open: false,
        message: '',
        type: 'primary'
    }
})

export const initial = getInitial();

const handlers = {
    [Types.SET_LOADING]: (state: any, action: any) => {
        return update(state, {
            LOADING: {$set: action.isLoading},
        });
    },
    [Types.SET_NOTIFIER]: (state: any, action: any) => {
        return update(state, {
            NOTIFIER: {$set: action.data},
        });
    },
    [Types.CLEAR_STATE]: (state: any, action: any) => {
        return getInitial();
    },
    [Types.LOAD_RANDOM_USER_SUCCESS]: (state: any, action: any) => {
        const user: User = {...action.data.data.user, banner_image: action.data.data.urls};
        return update(state, {
            USER: { $set: user },
        });
    },
    [Types.LOAD_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {
        return update(state, {
            APPOINTMENTS: {
                $set: action.data.data.map(evt => ({
                    ...evt,
                    start: new Date(evt.start),
                    end: new Date(evt.end)
                }))
            },
        });
    },
    [Types.ADD_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {
        return update(state, {
            APPOINTMENTS: {
                $push: [action.data.data].map(evt => ({
                    ...evt,
                    start: new Date(evt.start),
                    end: new Date(evt.end)
                }))
            },
        });
    },
    [Types.UPDATE_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {
        return update(state, {
            APPOINTMENTS: {
                $set: state.APPOINTMENTS.map((item) => {
                    if (item._id === action.data.data._id){
                        return {
                            ...action.data.data,
                            date: new Date(action.data.data.start),
                            start: new Date(action.data.data.start),
                            end: new Date(action.data.data.end)
                        }
                    }
                    return item
                })
            }
        });
    },
    [Types.REMOVE_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {
        const index = state.APPOINTMENTS.findIndex((e: any) => e._id === action.data.data._id)
        return update(state, {
            APPOINTMENTS: {$splice: [[index, 1]]},
        });
    },
};
const app = createReducer(getInitial(), handlers);

export default app;
