import { put, delay, call} from 'redux-saga/effects';
import actions from '../actions/app';
import {AppointmentService} from "../../plugins/appointments/service";

export function* setNotifierfetchData() {
    try {
        yield delay(3000);
        yield put(actions.setNotifier({open: false}));        
    } catch (error) {
    }
}

export function* appointmentsFetchData() {
    try {
        const data = yield call(AppointmentService.getAll);
        yield put(actions.loadAppointmentsSuccess(data));
    } catch (error) {
        yield put(actions.requestFails(error));
    }
}
