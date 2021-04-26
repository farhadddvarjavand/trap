import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarTest = () => {
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
    return (
        <Calendar
            locale={'fa'}
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
        />
    );
};

export default CalendarTest;