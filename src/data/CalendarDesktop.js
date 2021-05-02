import React, { useState } from "react";
import "./Calendar/DatePicker.css";
import { Calendar2 } from '@hassanmojab/react-modern-calendar-datepicker';
import {Calendar} from "./Calendar";

import './style/CalendarDesktop.scss'
import SetPrice from './Calendar/components/DaysList'

const CalendarDesktop = (props) => {
    const defaultDay =[
        // here we add some CSS classes
        { year: 1400, month: 2, day: 12, className: 'orangeDay' },
        { year: 1400, month: 2, day: 23, className: 'orangeDay' },
        { year: 1400, month: 2, day: 18, className: 'orangeDay' },
        { year: 1400, month: 3, day: 26, className: 'orangeDay' },
    ];

    const defaultFrom = {
        year: 1300,
        month: 2,
        day: 4,
    };

    const defaultTo = {
        year: 1300,
        month: 2,
        day: 4,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    console.log('aaaa')
    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultRange
    );
    const [selectedDay, setSelectedDay] = useState(null);
    const  test2 = [1,2,3,4,5]
    const testname = () =>{
        /* return ({const [theArray, setTheArray] = useState([]); })*/
    }

    const setData = (data) =>{
        setSelectedDayRange(data)
       /*console.log(props.test)
        console.log('props.dateToGo')*/
    }
    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={data=>setData(data)}
                customDaysClassName={defaultDay}
                shouldHighlightWeekends
                priceDays={[1,2000000,3,4]}
                test = {testname}



            />

        </>
    );
};

export default CalendarDesktop;

