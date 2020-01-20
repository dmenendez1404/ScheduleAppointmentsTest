import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CustomCalendar = (props) => {

    const localizer = Calendar.momentLocalizer(moment);
    const DnDCalendar = withDragAndDrop(Calendar);

    return (
        <div className="App">
            <DnDCalendar
                defaultDate={new Date()}
                defaultView="week"
                events={props.events}
                localizer={localizer}
                onSelectEvent={props.onSelectEvent}
                onEventDrop={props.onEventDrop}
                onEventResize={props.onEventResize}
                onSelectSlot={props.onSelectSlot}
                resizable
                views={['week', 'agenda']}
                selectable={'ignoreEvents'}
                style={{height: "100vh"}}
            />
        </div>
    );
}

export default CustomCalendar;