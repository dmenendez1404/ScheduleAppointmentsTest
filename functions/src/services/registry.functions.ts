import AppointmentsRoute from "./appointments";

const registryFunctions = [
    {
        key: 'appointments',
        Fun: new AppointmentsRoute().export()
    },

];

export default registryFunctions;