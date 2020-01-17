import React, {useCallback, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import actions from './store/actions/app';
import {useDispatch, useSelector} from "react-redux";
import {Appointment} from "./plugins/appointments/model/appointments.model";
//import {Appointment} from "./plugins/appointments/model/appointments.model";


const App: React.FC = () => {

    const DATA: Appointment[] = useSelector((state: any) => state.app.APPOINTMENTS)
    const mounted = useRef(false);
    const dispatch = useDispatch();
    const loadAppointments = useCallback(() => dispatch(actions.loadAppointments()), [dispatch]);

    useEffect(() => {
        console.log(DATA)
        if (!mounted.current) {
            loadAppointments();
        }
        mounted.current = true;
    }, [loadAppointments, DATA]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    List of Appointments
                </p>
                {DATA && DATA.map((appointment: Appointment) =>
                    <>
                        <p>{appointment.title}</p>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
