import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep2Page.scss"
import HostStep1Page from "./HostStep1Page";

class HostStep2Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer className={"fv-HostStep2Page"}>
                <MDBRow>
                    <HostStep1Page />
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep2Page