import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const testData = () => {
    const defaultValue = {
        year: 2019,
        month: 3,
        day: 1,
    };

    return (
        <Calendar
            shouldHighlightWeekends
            locale={'fa'}
        />
    );
};

export default testData;