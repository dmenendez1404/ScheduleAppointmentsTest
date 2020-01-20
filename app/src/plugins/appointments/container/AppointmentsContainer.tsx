import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../store/actions/app";
import CustomCalendar from "../../../componentsUI/Calendar/Calendar";

const AppointmentsContainer = (props) => {

    const events: any[] = useSelector((state: any) => state.app.APPOINTMENTS).map(doc => ({
        start: new Date(doc.startTime),
        end: new Date(doc.endTime), ...doc
    }))

    const mounted = useRef(false);
    const dispatch = useDispatch();
    const loadAppointments = useCallback(() => dispatch(actions.loadAppointments()), [dispatch]);

    const onEventResize = (type, {event, start, end, allDay}) => {
        const evt = events.filter(e=>e._id === event.id)[0]
        evt.start = new Date(start);
        evt.end = new Date(end);
    };

    const onEventDrop = ({event, start, end, allDay}) => {
        const evtIndex = events.indexOf(event)
        events[evtIndex].start = start;
        events[evtIndex].end = end;
    };

    const onSelectEvent = (evtprops) => {
       console.log(evtprops)
    };

    const onSelectSlot = (evtprops) => {
        console.log(evtprops)
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
