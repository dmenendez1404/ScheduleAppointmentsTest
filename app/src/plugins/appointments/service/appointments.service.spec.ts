import mockAxios from '../../../utils/spy/axios.mock';
import {AppointmentService} from "./";


jest.mock('axios');

const appointment = { title: 'Test Appointment' }
const appointments = [appointment];

describe('Http Base Service', () => {
    afterEach(() => {

    });

    it('should call getAll function', async (done) => {
        const resp = { data: appointments };
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve(resp),
        );

        const response = await AppointmentService.getAll();
        expect(response).toEqual(resp);
        done();
    });

    it('should call getById function', async (done) => {
        const resp = { data: appointments };
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve(resp),
        );
        const response = await AppointmentService.getById('1');
        expect(response).toEqual(resp);
        done();
    });


    it('should call save function', async (done) => {
        const resp = { data: appointments };
        mockAxios.post.mockImplementationOnce(() =>
            Promise.resolve(resp),
        );
        const response = await AppointmentService.save(appointments);
        expect(response).toEqual(resp);
        done();
    });

    
    it('should call update function', async (done) => {
        const resp = { data: appointment };
        mockAxios.put.mockImplementationOnce(() =>
            Promise.resolve(resp),
        );
        const response = await AppointmentService.update(appointment);
        expect(response).toEqual(resp);
        done();
    });

    it('should call delete function', async (done) => {
        const resp = { data: true };
        mockAxios.delete.mockImplementationOnce(() =>
            Promise.resolve(resp),
        );
        const response = await AppointmentService.delete('1');
        expect(response).toEqual(true);
        done();
    });

});
