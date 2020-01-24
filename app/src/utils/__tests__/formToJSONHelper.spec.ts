import { getEmptyControl } from '../ControlHelper';
import { _isEmail, _isRequired, isValidControl } from '../FieldValidators';
import FormHelper from '../formHelper';
import FormToJSONHelper from '../formToJSONHelper';

describe('Form to JSON Helpers', () => {
    it('should get Json format', async (done) => {
        const form = {
            name: {
                value: 'Juan',
                error: false,
                mensaje: '',
                validators: []
            }
        }
        const data = FormToJSONHelper(form);
        expect(data.name).toEqual('Juan');
        done();
    });

});
