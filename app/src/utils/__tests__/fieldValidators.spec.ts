import { getEmptyControl } from '../ControlHelper';
import { VALIDATOR_MESSAGES } from '..';
import { _isEmail, _isRequired, isValidControl, _isEmpty } from '../FieldValidators';

describe('Field Validators', () => {
    it('should get invalid control with no validators', async (done) => {
        let control = getEmptyControl();
        control = isValidControl(control);
        expect(control.error).toEqual(false);
        done();
    });

    it('should get invalid control with empty value', async (done) => {
        let control = getEmptyControl();
        control.validators = [_isEmpty];
        control = isValidControl(control);
        expect(control.error).toEqual(true);
        done();
    });

    it('should get valid with value on _isEmpty', async (done) => {
        let control = getEmptyControl();
        control.value = 'test';
        control = _isEmpty(control);
        expect(control.error).toEqual(false);
        done();
    });

    
    it('should get invalid with empty value on _isEmpty', async (done) => {
        let control = getEmptyControl();
        control = _isEmpty(control);
        expect(control.error).toEqual(true);
        expect(control.mensaje).toEqual(VALIDATOR_MESSAGES.Required_field);
        done();
    });

    it('should get valid with valid email on _isEmail', async (done) => {
        let control = getEmptyControl();
        control.value = 'test@gmail.com';
        control = _isEmail(control);
        expect(control.error).toEqual(false);
        done();
    });

    
    it('should get invalid with not valid email on _isEmail', async (done) => {
        let control = getEmptyControl();
        control.value= 'asd@';
        control = _isEmail(control);
        expect(control.error).toEqual(true);
        expect(control.mensaje).toEqual(VALIDATOR_MESSAGES.Email_wrong_format);
        done();
    });

    it('should get valid with valid email on _isRequired', async (done) => {
        let control = getEmptyControl();
        control.value = 'test@gmail.com';
        control = _isRequired(control);
        expect(control.error).toEqual(false);
        done();
    });

    
    it('should get invalid with undefined on _isRequired', async (done) => {
        let control = getEmptyControl();
        delete control.value;
        control = _isRequired(control);
        expect(control.error).toEqual(true);
        expect(control.mensaje).toEqual(VALIDATOR_MESSAGES.Required_field);
        done();
    });

    it('should get invalid with null or empty on _isRequired', async (done) => {
        let control = getEmptyControl();
        control.value = null;
        control = _isRequired(control);
        expect(control.error).toEqual(true);
        expect(control.mensaje).toEqual(VALIDATOR_MESSAGES.Required_field);
        done();
    });

});
