import React from "react";
import {MDBCol, MDBRow} from "mdbreact";

class topicsMainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <React.Fragment>

                    <MDBCol md={1} sm={1} >
                       <a> <i className="fas fa-angle-left" /> </a>
                    </MDBCol>
                    <MDBCol md={7}  sm={4} className={"fv-topicMainPageSeeAll"}>
                        <h8>مشاهده همه</h8>
                    </MDBCol>
                    <MDBCol md={4} sm={7} className={"fv-topicMainPageTopic"}>
                        <h4>{this.props.topic}</h4>
                    </MDBCol>

                </React.Fragment>
        )
    }
}
export default topicsMainPage;