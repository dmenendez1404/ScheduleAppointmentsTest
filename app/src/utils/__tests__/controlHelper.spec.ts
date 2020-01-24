import { getEmptyControl, handleControlChange } from '../ControlHelper';
import { Spy } from '..';

describe('Control Helpers', () => {
    it('should get empty control', async (done) => {
        const control = getEmptyControl();
        expect(control.value).toEqual('');
        expect(control.error).toEqual(false);
        expect(control.message).toEqual('');
        done();
    });

    it('should call control change', async (done) => {
        const change = Spy;
        const event = {
            persist: () => {},
            target: {
                value: ''
            }
        };
        handleControlChange(event, getEmptyControl(), change.fn);
        expect(change.calls).toEqual(1);
        done();
    });

});
