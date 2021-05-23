import React, { useState } from "react";

import "./Calendar/DatePicker.css";

import './style/CalendarDesktop.scss'
import {Calendar} from "./CalendarForMobile"
import {getToday} from "../componentsPages/calculationsDate";

const CalenderProfileMobile = (props) => {

    const today = getToday()    /// show today date {year , month , dday }
    const preselectedDays = [
        {
            year: parseInt(today.year),
            month:parseInt(today.month),
            day: parseInt(today.day),
        },

    ]


    const [selectedDayRange, setSelectedDayRange] = useState(
        preselectedDays
    );

    props.getSelectedDay(selectedDayRange)

    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                shouldHighlightWeekends
                villaPrice={props.villaPrice}
            />


        </>
    );
};

export default CalenderProfileMobile;