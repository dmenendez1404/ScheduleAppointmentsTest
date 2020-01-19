import { AppActions } from "../actions/index"

describe('App actions', () => {
    it('should create an action to set loading', () => {
        const isLoading = true;
        const expectedAction = {
            type: '@@ROOT/SET_LOADING',
            isLoading
        }
        expect(AppActions.setLoading(true)).toEqual(expectedAction)
    });

    it('should create an action to set notifier', () => {
        const data = {
            open:  true,
            message: 'Notification',
            type: 'primary'
        };
        const expectedAction = {
            type: '@@ROOT/SET_NOTIFIER',
            data
        }
        expect(AppActions.setNotifier(data)).toEqual(expectedAction)
    });

})