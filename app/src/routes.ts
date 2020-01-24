import DashboardIcon from "@material-ui/icons/Dashboard";
import {GuestRoute} from "./layout/routes";
import AppointmentsRoutes from "./plugins/appointments/AppointmentsRoutes.routes";
// core components/views for Demos layout
// import { GuestRouteRoutes } from "./views";
// import {UserRoutes} from "./views/users";
// import TopUpRoutes from "./plugins/Top up/TopUpRoutes";

const dashboardRoutes = [
    // {
    //     path: "/users",
    //     name: "Users",
    //     icon: DashboardIcon,
    //     routeComponent: UserRoutes,
    //     routetype: GuestRouteRoutes
    // },
    {
        path: "/",
        name: "Appointments",
        icon: DashboardIcon,
        routeComponent: AppointmentsRoutes,
        routetype: GuestRoute
    },
];

export default dashboardRoutes