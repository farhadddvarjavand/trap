import React from "react";

class Datas extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:'',
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/get/1')                            /* GET */
            .then(response => response.json())
            .then(json => {
                this.setState({data:json.support});
            });
    }
    render() {
        // pass new properties to wrapped component
        return <Datas {...this.props} {...this.state} />
    }

}
export default Datas