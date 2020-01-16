import {Appointment} from "./appointments.model";
import {ObjectID} from "mongodb";
import moment = require("moment");

export class AppointmentsDao {
    private dbConnection: any;

    constructor(dbConnection: any) {
        this.dbConnection = dbConnection;
    }

    async getAppointments(): Promise<any> {
        const client = await this.dbConnection.connect().catch((err: any) => {
            console.log(err);
        });
        if (!client) {
            return;
        }
        try {
            const db = client.db("schedule_appointments");
            return await db.collection('appointment').find({}).toArray().then((docs: any) => docs)
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    }

    async getAppointmentById(id: string): Promise<any> {
        const client = await this.dbConnection.connect().catch((err: any) => {
            console.log(err);
        });
        if (!client) {
            return;
        }
        try {
            const db = client.db("schedule_appointments");
            return await db.collection('appointment').findOne({_id: new ObjectID(id)}).then((docs: any) => docs)
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    }

    async createAppointment(body: any): Promise<any> {
        const client = await this.dbConnection.connect().catch((err: any) => {
            console.log(err);
        });
        if (!client) {
            return;
        }
        try {
            const db = client.db("schedule_appointments");
            const newAppointment: Appointment = JSON.parse(body);
            newAppointment.createdAt = moment.now()
            newAppointment.updatedAt = moment.now()
            let response = {};
            await db.collection('appointment').insertOne(newAppointment).then((res: any) => {
                if (!res.ops)
                    response = {
                        message: `The appointment wasn't created`,
                        statusCode: 406
                    };
                else {
                    response = {
                        data: res.ops[0],
                        message: `Appointment created successful`,
                        statusCode: 201
                    }
                }
            });
            return response
        } catch (err) {
            return err;
        } finally {
            client.close();
        }
    }

    async updateAppointment(id: string, body: any): Promise<any> {
        const client = await this.dbConnection.connect().catch((err: any) => {
            console.log(err);
        });
        if (!client) {
            return;
        }
        try {
            const db = client.db("schedule_appointments");
            const appointment: Appointment = JSON.parse(body);
            appointment.updatedAt = moment.now()
            let response = {};
            await db.collection('appointment').findOneAndUpdate({_id: new ObjectID(id)}, {$set: appointment}, {upsert: false}).then((res: any) => {
                console.log(res)
                if (!res.value)
                    response = {
                        message: `The appointment doesn't exist`,
                        statusCode: 406
                    };
                else {
                    response = {
                        data: res.value,
                        message: `Appointment saved successful`,
                        statusCode: 200
                    }
                }
            });
            return response
        } catch (err) {
            return err;
        } finally {
            client.close();
        }
    }

    async deleteAppointmentById(id: string): Promise<any> {
        const client = await this.dbConnection.connect().catch((err: any) => {
            console.log(err);
        });
        if (!client) {
            return;
        }
        try {
            const db = client.db("schedule_appointments");
            let response = {};
            await db.collection('appointment').findOneAndDelete({_id: new ObjectID(id)}).then((res: any) => {
                if (!res.value)
                    response = {
                        message: `The appointment doesn't exist`,
                        statusCode: 406
                    };
                else {
                    response = {
                        data: res.value,
                        message: `Appointment deleted successful`,
                        statusCode: 200
                    }
                }
            });
            return response
        } catch (err) {
            return err;
        } finally {
            client.close();
        }
    }

}
