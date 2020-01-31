import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/app";
import CustomCalendar from "../../../componentsUI/Calendar/Calendar";
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {AppointmentsFormModal} from "../index";
import moment from "moment";
import {AppActions} from "../../../store/actions";

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
        if (validateDate(data.start, data.end)) {
            if (!data._id) {
                delete data._id
                addAppointment(data)
            }
            else
                updateAppointment(data)
        }
    }

    const onRemove = (id) => {
        deleteAppointment(id)
    }

    const validateDate = (start, end) => {
        const startDay = moment(start).isoWeekday();
        const endDay = moment(end).isoWeekday();
        const wekendDays = [6, 7];

        const startHour = moment(start, 'HH:mm:ss')
        const endHour = moment(end, 'HH:mm:ss')
        const startHourLimit = moment(start, 'HH:mm:ss').set({
            hour: 7,
            minute: 59,
            second: 59
        })
        const endHourLimit = moment(end, 'HH:mm:ss').set({
            hour: 17,
            minute: 0,
            second: 1
        })

        if (wekendDays.indexOf(startDay) !== -1 || wekendDays.indexOf(endDay) !== -1) {
            dispatch(AppActions.setNotifier({
                type: 'danger',
                open: true,
                message: `You can't schedule an appointment on weekends!`
            }));
            return false;
        }

        if (!startHour.isBetween(startHourLimit, endHourLimit) || !endHour.isBetween(startHourLimit, endHourLimit)) {
            dispatch(AppActions.setNotifier({
                type: 'danger',
                open: true,
                message: `The available schedule is from 8:00 am to 5:00 pm!`
            }));
            return false;
        }
        return true;
    }

    const onEventResize = ({event, start, end}) => {
        if (validateDate(start, end)) {
            const evtIndex = events.indexOf(event);
            events[evtIndex].start = start;
            events[evtIndex].date = start;
            events[evtIndex].end = end;
            updateAppointment(events[evtIndex]);
        }
    };

    const onEventDrop = ({event, start, end, allDay}) => {
        if (validateDate(start, end)) {
            const evtIndex = events.indexOf(event);
            events[evtIndex].start = start;
            events[evtIndex].date = start;
            events[evtIndex].end = end;
            updateAppointment(events[evtIndex]);
        }
    }


    const onSelectEvent = (evtprops) => {
        openModal(evtprops);
    };

    const onSelectSlot = (evtprops) => {
        if (validateDate(evtprops.start, evtprops.end)) {
            openModal(evtprops);
        }
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
