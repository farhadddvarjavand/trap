import React, { useState , Component} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import {tile2LatLng} from "google-map-react";

class CalendarLinear extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date:''
        }
    }

    setData = (data) =>{
        if(data){
            this.setState({date:data})
            if(this.props.dayToGo){
                this.props.dayToGo(data)
            }
            if( this.props.dayToReturn){
                this.props.dayToReturn(data)
            }
            return data
        }
    }

    render(){

        return(
            <DatePicker
                value={this.state.date}
                onChange={data => this.setData(data)}
                locale={'fa'}
                inputPlaceholder="انتخاب روز"
                shouldHighlightWeekends

            />
        )
    }
}

export default CalendarLinear;