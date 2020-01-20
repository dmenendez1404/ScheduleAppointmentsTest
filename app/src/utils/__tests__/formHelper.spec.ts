import { getEmptyControl } from '../ControlHelper';
import { _isEmail, _isRequired, isValidControl } from '../FieldValidators';
import FormHelper from '../formHelper';

describe('Form Helpers', () => {
    it('should get form format', async (done) => {
        const data = { field: 'Juan'};
        const form = FormHelper(data);
        console.log('fff', form);
        expect(form.field.value).toEqual('Juan');
        done();
    });

});
