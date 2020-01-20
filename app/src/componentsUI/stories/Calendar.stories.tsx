import React from 'react';
import CustomCalendar from "../Calendar/Calendar";
import moment from "moment";

export default {
    component: CustomCalendar,
    title: 'Custom Calendar Stories',
};

const events = [
    {_id:"5e20e218334a003c803e1d1d",title:"Gym Trainner",start: moment().toDate(),end:moment().add(1,'hours').toDate(),createdAt:1579213336727,updatedAt:1579213336727},
    {_id:"5e20e21833asd003c803e1d1d",title:"Play Football",start: moment().add(2,'hours').toDate(),end:moment().add(3,'hours').toDate(),createdAt:1579213336727,updatedAt:1579213336727},
    ]

const onEventResize = (type, {event, start, end, allDay}) => {
    const evt: any = events.filter(e=>e._id === event.id)[0]
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


export const calendarStories = () => (
    <CustomCalendar events={events || []} onEventDrop={onEventDrop} onEventResize={onEventResize}
                    onSelectSlot={onSelectSlot} onSelectEvent={onSelectEvent}/>
);