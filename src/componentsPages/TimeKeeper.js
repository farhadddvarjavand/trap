// basic usage
// in some react component
import React from 'react';
import TimePicker from 'react-times';
// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';

class TimeKeeper extends React.Component {
    constructor(props) {
        super(props);
        const {defaultTime, meridiem, focused, showTimezone, timezone} = props;
        let hour = '';
        let minute = '';


        this.state = {
            hour,
            minute,
            meridiem,
            focused,
            timezone,
            showTimezone,
        };

        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.handleFocusedChange = this.handleFocusedChange.bind(this);
    }

    get basicTrigger() {
        const {hour, minute} = this.state;
        return (
            <div
                onClick={this.handleFocusedChange}
                className="time_picker_trigger"
            >
                <div>
                    Click to open panel<br/>
                    {hour}:{minute}
                </div>
            </div>
        );
    }

    get trigger() {
        const {customTriggerId} = this.props;
        const triggers = {
            0: (<div/>),
            1: this.basicTrigger,
        };
        return triggers[customTriggerId] || null;
    }

    componentDidMount() {
        if (this.props.prevHour && this.props.prevMinute) {
            this.setState({hour: this.props.prevHour, minute: this.props.prevMinute})
        }
    }

    onTimeChange(options) {
        const {
            hour,
            minute,
            meridiem
        } = options;

        this.setState({hour, minute, meridiem});
        this.props.SetGetTimeArrive(hour, minute)

    }

    onFocusChange(focused) {
        console.log(`onFocusChange: ${focused}`);
        this.setState({focused});
    }

    handleFocusedChange() {
        const {focused} = this.state;
        this.setState({focused: !focused});
    }

    render() {
        const {
            hour,
            minute,
            focused,
            meridiem,
            timezone,
            showTimezone,
        } = this.state;

        return (
            <div className="time_picker_wrapper">
                <TimePicker
                    trigger={this.trigger}
                    {...this.props}
                    focused={focused}
                    meridiem={meridiem}
                    timezone={timezone}
                    onFocusChange={this.onFocusChange}
                    onTimeChange={this.onTimeChange}
                    showTimezone={showTimezone}
                    time={hour && minute ? `${hour}:${minute}` : null}
                />
            </div>
        );
    }
}


export default TimeKeeper
