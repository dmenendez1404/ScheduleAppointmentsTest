import HttpBase from "../../../services/base/httpBase";
import SERVICE_ROUTE from "../../../services/base/serviceRoutes";

class AppointmentsService extends HttpBase{
    constructor() {
        super(SERVICE_ROUTE.appointments)
    }
}

export default (new AppointmentsService())