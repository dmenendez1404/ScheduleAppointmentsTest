import {getInitial} from "../reducers/app"
import reducer from "../reducers/app";

describe('App reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(getInitial());
    })

    it('should handle SET_LOADING', () => {
        let State = getInitial();
        State.LOADING = true;
        expect(
            reducer(State, {
                type: '@@ROOT/SET_LOADING',
                isLoading: true,
            })
        ).toEqual(State);
        State.LOADING = false;
        expect(
            reducer(State,
                {
                    type: '@@ROOT/SET_LOADING',
                    isLoading: false,
                }
            )
        ).toEqual(State)
    });

    it('should handle SET_NOTIFIER', () => {
        const data = {
            open: true,
            message: 'Notification',
            type: 'primary'
        };
        let State = getInitial();
        State.NOTIFIER = data;
        expect(
            reducer(State, {
                type: '@@ROOT/SET_NOTIFIER',
                data
            })
        ).toEqual(State);
    })


    it('should handle CLEAR_STATE', () => {
        let State = getInitial();
        const data = {
            DATA: [],
            LOADING: false,
            NOTIFIER: {
                open: false,
                message: '',
                type: 'primary'
            }
        }
        expect(
            reducer(State, {
                type: '@@ROOT/CLEAR_STATE',
                data
            })
        ).toEqual(State);
    })
})