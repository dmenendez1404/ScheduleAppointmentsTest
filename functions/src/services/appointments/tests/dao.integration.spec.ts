import {expect} from 'chai';
import {AppointmentsDao} from "../appointments.dao";
import {MongoClient} from "mongodb";
import CONFIG from "../../../config";

describe('appointments MongoDB integration', function () {

    let requestsDao: AppointmentsDao;
    let appointment = {
        title: 'test appointment'
    }
    let id: string;
    beforeEach(async () => {
        requestsDao = new AppointmentsDao(new MongoClient(CONFIG.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }));
    });

    it('create Appointment Request', async () => {
        const result = await requestsDao.createAppointment(appointment);
        id  = result.data._id;
        expect(result.data.title).to.be.equal(appointment.title);
    });

    it('get Appointment Request', async () => {
        const result = await requestsDao.getAppointmentById(id);
        expect(result.title).to.be.equal(appointment.title);
    });

    it('update Appointment Request', async () => {
        appointment.title = 'title updated';
        const result = await requestsDao.updateAppointment(id, appointment);
        appointment = result.data
        expect(result.data.title).to.be.equal('title updated');
    });

    it('delete Appointment Request', async () => {
        const result = await requestsDao.deleteAppointmentById(id);
        expect(result.message).to.be.equal('Appointment deleted successful');
    });

});
