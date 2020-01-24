import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/app";
import CustomCalendar from "../../../componentsUI/Calendar/Calendar";
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {AppointmentsFormModal} from "../index";

const SwalWithReactContent = withReactContent(swal);

const AppointmentsContainer = (props) => {

    const events: any[] = useSelector((state: any) => state.app.APPOINTMENTS).map(doc => ({
        start: new Date(doc.startTime),
        end: new Date(doc.endTime), ...doc
    }));

    const mounted = useRef(false);
    const dispatch = useDispatch();
    const loadAppointments = useCallback(() => dispatch(actions.loadAppointments()), [dispatch]);
    const addAppointment = useCallback((data) => dispatch(actions.addAppointments(data)), [dispatch]);
    const updateAppointment = useCallback((data) => dispatch(actions.updateAppointments(data)), [dispatch]);
    const deleteAppointment = useCallback((id) => dispatch(actions.removeAppointments(id)), [dispatch]);

    const openModal = (event) => {
        SwalWithReactContent.fire({
            html: (
                <AppointmentsFormModal
                    onSubmit={onSave}
                    onRemove={onRemove}
                    referenceToSwal={SwalWithReactContent}
                    title={'Schedule an Appointment'}
                    event={event}
                />
            ),
            showConfirmButton: false,
            width: '65%',
            background: 'transparent'
        });
    }

    const onSave = (data) => {
        if (!data._id){
            delete data._id
            addAppointment(data)
        }
        else
            updateAppointment(data)
    }

    const onRemove = (id) => {
        deleteAppointment(id)
    }

    const onEventResize = ({event, start, end}) => {
        const evtIndex = events.indexOf(event);
        events[evtIndex].start = start;
        events[evtIndex].date = start;
        events[evtIndex].end = end;
        updateAppointment(events[evtIndex]);
    };

    const onEventDrop = ({event, start, end, allDay}) => {
        const evtIndex = events.indexOf(event);
        events[evtIndex].start = start;
        events[evtIndex].date = start;
        events[evtIndex].end = end;
        updateAppointment(events[evtIndex]);
    };

    const onSelectEvent = (evtprops) => {
        openModal(evtprops);
    };

    const onSelectSlot = (evtprops) => {
        openModal(evtprops);
    };

    useEffect(() => {
        if (!mounted.current) {
            loadAppointments();
        }
        mounted.current = true;
    }, [loadAppointments]);

    return (
        <CustomCalendar events={events || []} onEventDrop={onEventDrop} onEventResize={onEventResize}
                        onSelectSlot={onSelectSlot} onSelectEvent={onSelectEvent}/>
    )
}

export default AppointmentsContainer;
