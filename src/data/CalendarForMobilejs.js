import React, { useState } from "react";

import "./Calendar/DatePicker.css";

import './style/CalendarDesktop.scss'
import {Calendar} from "./CalendarForMobile"

const CalendarForMobilejs = (props) => {

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
    const  test2 = [1,2,3,4,5]
    const testname = () =>{
        /* return ({const [theArray, setTheArray] = useState([]); })*/
    }

    const test = () =>{
        /*      console.log('hi')
              console.log(selectedDayRange)
              console.log(setSelectedDayRange)*/
    }
    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                customDaysClassName={defaultDay}
                shouldHighlightWeekends
                priceDays={[1,2000000,3,4]}
                test = {testname}
                villaPrice={props.villaPrice}


            />


            {test()}
        </>
    );
};

export default CalendarForMobilejs;