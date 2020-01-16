import {AppointmentsDao} from "./appointments.dao";
import {Appointment} from "./appointments.model";

export class AppointmentsController {
    private readonly appointmentsDao: AppointmentsDao

    constructor(appointmentsDao: AppointmentsDao) {
        this.appointmentsDao = appointmentsDao;
    }
    async getAppointments(): Promise<Appointment> {
        return this.appointmentsDao.getAppointments();
    }
    async getAppointmentById(id: string): Promise<Appointment> {
        return this.appointmentsDao.getAppointmentById(id);
    }

    async createAppointment(accountRequest: any): Promise<Appointment> {
        return this.appointmentsDao.createAppointment(accountRequest);
    }

    async updateAppointment(id: string, appointment: any): Promise<Appointment> {
        return this.appointmentsDao.updateAppointment(id, appointment);
    }

    async deleteAppointmentById(id: string): Promise<boolean> {
        return this.appointmentsDao.deleteAppointmentById(id);
    }
}
