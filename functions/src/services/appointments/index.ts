import * as functions from 'firebase-functions';
import * as express from 'express';
import { AppointmentsController } from './appointments.controller';
import { FunctionBase, AsyncFn } from '../core';
import registryDao from "../registry.dao";
import * as cors from 'cors';

class AppointmentsRoute implements FunctionBase {

    constructor(private app = express(), private appointmentsController = new AppointmentsController(registryDao.appointmentRequestsDao)) {
        app.use(cors())
    }
    export = () => {
        this.app.get('/:id', (req: any, res: any) => AsyncFn(res, this.appointmentsController.getAppointmentById(req.params.id)));
        this.app.post('/', (req: any, res: any) => AsyncFn(res, this.appointmentsController.createAppointment(req.body)));
        this.app.patch('/:id', (req: any, res: any) => AsyncFn(res, this.appointmentsController.updateAppointment(req.params.id, req.body)));
        this.app.delete('/:id', (req: any, res: any) => AsyncFn(res, this.appointmentsController.deleteAppointmentById(req.params.id)));
        this.app.get('/', (req: any, res: any) => AsyncFn(res, this.appointmentsController.getAppointments()));
        return functions.https.onRequest(this.app);
    }
}


export default AppointmentsRoute;
