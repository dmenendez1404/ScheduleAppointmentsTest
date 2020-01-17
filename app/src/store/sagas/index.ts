import {Types} from '../actions/app';
import { takeEvery } from 'redux-saga/effects';
import * as appSagas from "./app";

export default function* rootSaga() {
    yield takeEvery(Types.SET_NOTIFIER, appSagas.setNotifierfetchData);
    yield takeEvery(Types.LOAD_APPOINTMENTS, appSagas.appointmentsFetchData);
}; 