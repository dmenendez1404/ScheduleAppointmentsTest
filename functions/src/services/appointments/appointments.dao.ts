import {Appointment} from "./appointments.model";
import {ObjectID} from "mongodb";
import {FormatResponse} from "../core/utils";

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
            return FormatResponse(400, err.message);
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
            return FormatResponse(400, err.message);
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
            const newAppointment: Appointment = body;
            let response = {};
            await db.collection('appointment').insertOne(newAppointment).then((res: any) => {
                if (!res.ops)
                    response = FormatResponse(406,null,`The appointment wasn't created`);
                else {
                    response = FormatResponse(201,res.ops[0],`Appointment created successful`);
                }
            });
            return response
        } catch (err) {
            return console.log(err)
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
            const appointment: Appointment = body;
            let response = {};
            await db.collection('appointment').findOneAndUpdate({_id: new ObjectID(id)}, {$set: appointment}, {upsert: false}).then((res: any) => {
                if (!res.value)
                    response = FormatResponse(406,null,`The appointment doesn't exist`);
                else {
                    response = FormatResponse(200, {_id: id, ...appointment} ,`Appointment saved successful`);
                }
            });
            return response
        } catch (err) {
            return FormatResponse(400, err.message);
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
                    response = FormatResponse(406,null, `The appointment doesn't exist`);
                else {
                    response = FormatResponse(200, res.value, `Appointment deleted successful`);
                }
            });
            return response
        } catch (err) {
            return FormatResponse(400, err.message);
        } finally {
            client.close();
        }
    }

}
