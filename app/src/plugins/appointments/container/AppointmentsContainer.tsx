import React, {useCallback, useEffect, useRef} from 'react';
import {Appointment} from "../model/appointments.model";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/app";

const AppointmentsContainer = (props) => {

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
        <>
            {
                DATA && DATA.map((doc: any) =>
                    <>
                        <p>{doc.title}</p>
                    </>
                )
            }
        </>
    )
}

export default AppointmentsContainer;
