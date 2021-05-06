
import React, { useState } from "react";

import "./Calendar/DatePicker.css";

import './style/CalendarDesktop.scss'
import {Calendar} from "./ProfileCalendarDesktop.js"

const CalendarForProfile = () => {

    const preselectedDays = [
        {
            year: 1399,
            month: 10,
            day: 2,
        },
        {
            year: 1399,
            month: 10,
            day: 15,
        },
        {
            year: 1400,
            month: 10,
            day: 30,
        },
    ]


    const [selectedDayRange, setSelectedDayRange] = useState(
        preselectedDays
    );
    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                shouldHighlightWeekends
                priceDays={[1,2000000,3,4]}
            />

            {console.log(selectedDayRange)}

        </>
    );
};

export default CalendarForProfile;
