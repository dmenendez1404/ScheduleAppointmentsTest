import 'mocha'
//@ts-ignore
import *as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { verify } from 'ts-mockito';
import {AppointmentsController} from "../appointments.controller";
import {AppointmentsDao} from "../appointments.dao";
import {createRequestControllerMock} from "./appointmentsRequests.utils.spec";

chai.use(chaiAsPromised);

describe('Appointment Controller Tests', () => {
    let requestsController: AppointmentsController;
    let requestsDao: AppointmentsDao;
    const id = '1';
    let appointment: any;

    beforeEach(() => {
        const controllerMock = createRequestControllerMock();
        requestsController = controllerMock.controller;
        requestsDao = controllerMock.requestsDao;
        appointment = {
            _id: 2,
            title: 'test appointment'
        }

    });

    describe('Test Controller CRUD Appointment', () => {

        it(`Test Create Appointment`, async () => {
            await requestsController.createAppointment(appointment);
            verify(requestsDao.createAppointment(appointment)).once();
        });

        it(`Test Get Appointment`, async () => {
            await requestsController.getAppointmentById(id);
            verify(requestsDao.getAppointmentById(id)).once();
        });

        it(`Test Get Appointment`, async () => {
            await requestsController.getAppointments();
            verify(requestsDao.getAppointments()).once();
        });

        it(`Test Update Appointment`, async () => {
            await requestsController.updateAppointment(id, appointment);
            verify(requestsDao.updateAppointment(id, appointment)).once();
        });

        it(`Test Delete Appointment`, async () => {
            await requestsController.deleteAppointmentById(id);
            verify(requestsDao.deleteAppointmentById(id)).once();
        });
    });
});
