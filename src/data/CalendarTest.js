import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar2 } from "react-modern-calendar-datepicker";
import {Calendar} from "./Calendar";
import  './style/CalendarTest.scss'

const CalendarTest = () => {
    const defaultDay =[
        // here we add some CSS classes
        { year: 1400, month: 2, day: 12, className: 'orangeDay' },
        { year: 1400, month: 2, day: 23, className: 'orangeDay' },
        { year: 1400, month: 2, day: 18, className: 'orangeDay' },
        { year: 1400, month: 3, day: 26, className: 'orangeDay' },
    ];

    const defaultFrom = {
        year: 1400,
        month: 2,
        day: 4,
    };

    const defaultTo = {
        year: 1400,
        month: 2,
        day: 4,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultRange
    );
    const [selectedDay, setSelectedDay] = useState(null);


    const test = () =>{
        console.log(selectedDayRange)
        console.log(setSelectedDayRange)
    }
    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                customDaysClassName={defaultDay}
                shouldHighlightWeekends


            />
            {test()}
        </>
    );
};

export default CalendarTest;
