import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HeaderSteps.scss"
import "./HostStep1Page.scss"
import "./HostStep2Page.scss"
import Footer from "./footer"
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
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