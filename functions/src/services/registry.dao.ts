import {MongoClient} from 'mongodb'
import {AppointmentsDao} from "./appointments/appointments.dao";
import CONFIG from "../config";

class RegistryDao {

    connectMongoDB = () =>
        new MongoClient(CONFIG.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    get appointmentRequestsDao(): AppointmentsDao {
        return new AppointmentsDao(this.dbConnection);
    }

    get dbConnection() {
        return this.connectMongoDB()
    }
}

const registryDao = new RegistryDao();
export default registryDao;
