import React, { useState } from "react";
import "./Calendar/DatePicker.css";
import { Calendar2 } from '@hassanmojab/react-modern-calendar-datepicker';
import {Calendar,utils } from "./Calendar";
import moment from "moment-jalaali";


import './style/CalendarDesktop.scss'
import SetPrice from './Calendar/components/DaysList'

const CalendarDesktop = (props) => {
    let defaultDay = ''
    defaultDay =[
        // here we add some CSS classes
        { year: 1400, month: 1, day: 6, className: 'orangeDay' },
        { year: 1400, month: 2, day: 23, className: 'orangeDay' },
        { year: 1400, month: 2, day: 18, className: 'orangeDay' },
        { year: 1400, month: 3, day: 26, className: 'orangeDay' },
        { year: 1400, month: 3, day: 4, className: 'purpleDay' },
        { year: 1400, month: 1, day: 13, className: 'yellowDay' },
        { year: 1400, month: 3, day: 26, className: 'navyBlueDay' },
    ];
    // className  yellowDay for disable days
    if(props.daysReserved){
        console.log(props.daysReserved)

        let disableDaysList = []
        for (let i = 0 ; i<props.daysReserved.daysList.length ; i++){
            let newList =  { year: '', month: '', day: '', className: '' }
            newList.year = parseInt(props.daysReserved.daysList[i].year)
            newList.month = parseInt(props.daysReserved.daysList[i].month)
            newList.day = parseInt(props.daysReserved.daysList[i].day)
            newList.className = "yellowDay"
            disableDaysList.push(newList)

        }
        defaultDay = disableDaysList
    }

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


    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultRange
    );

    const testname = () =>{
        /* return ({const [theArray, setTheArray] = useState([]); })*/
    }


    const disabledDays = [
        {
            year: 1400,
            month: 2,
            day: 20,
        },
        {
            year: 1400,
            month: 2,
            day: 25,
        },
        {
            year: 1400,
            month: 2,
            day: 7,
        }
    ];

    const setData = (data) =>{
        setSelectedDayRange(data)
       /*console.log(props.test)
        console.log('props.dateToGo')*/
    }
    const dayOfMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const monthOfYear = 2
    const year = 1400

    return (
        <>
            <Calendar
                locale={'fa'}
                value={selectedDayRange}
                onChange={data=>setData(data)}
                customDaysClassName={defaultDay}
                shouldHighlightWeekends
                disabledDays={disabledDays}
                priceDays={dayOfMonth}
                PriceMonth={monthOfYear}
                PriceYear={year}
                test = {testname}
                villaPrice={props.villaPrice}



            />

        </>
    );
};

export default CalendarDesktop;

