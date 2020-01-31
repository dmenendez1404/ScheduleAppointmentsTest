import {put, delay, call} from 'redux-saga/effects';
import actions from '../actions/app';
import {AppointmentService} from "../../plugins/appointments/service";
import httpUnsplashApi from "../../services/base/httpUnsplashApi";

export function* setNotifierfetchData(action) {
    try {
        if (action.data.open) {
            yield delay(3000);
            yield put(actions.setNotifier({open: false}));
        }
    } catch (error) {
    }
}


export function* unsplashFetchData() {
    try {
        const data = yield call(httpUnsplashApi.getRandomPhoto);
        yield put(actions.loadRandomUserSuccess(data));
    } catch (error) {
        yield put(actions.requestFails(error));
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

export function* appointmentsAddData(action) {
    try {
        const data = yield call(AppointmentService.save, action.payload);
        yield put(actions.addAppointmentsSuccess(data));
    } catch (error) {
        yield put(actions.requestFails(error));
    }
}

export function* appointmentsUpdateData(action) {
    try {
        const data = yield call(AppointmentService.update, action.payload);
        yield put(actions.updateAppointmentsSuccess(data));
    } catch (error) {
        yield put(actions.requestFails(error));
    }
}

export function* appointmentsDeleteData(action) {
    try {
        const data = yield call(AppointmentService.delete, action.payload,);
        yield put(actions.removeAppointmentsSuccess(data));
    } catch (error) {
        yield put(actions.requestFails(error));
    }
}