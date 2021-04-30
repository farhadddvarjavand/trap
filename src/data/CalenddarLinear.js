import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import {tile2LatLng} from "google-map-react";


const CalendarLinear = (props) => {


    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <>
        <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            onChange={data => props.dayToGo(data)}
            locale={'fa'}
            inputPlaceholder="انتخاب روز"
            shouldHighlightWeekends

        />

        </>
    );
};

export default CalendarLinear;