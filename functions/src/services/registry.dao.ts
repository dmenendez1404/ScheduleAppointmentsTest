import {MongoClient} from 'mongodb'
import {AppointmentsDao} from "./appointments/appointments.dao";

class RegistryDao {

    connectMongoDB = () =>
        new MongoClient('mongodb+srv://dmenendez:allowToUse@scheduleappointmentstestdb-s3e7r.mongodb.net/test?retryWrites=true&w=majority', {
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
