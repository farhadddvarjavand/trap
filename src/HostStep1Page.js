import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HostStep1Page.scss"
import Footer from "./footer"
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
import MobileMenu from "./images/MobileMenu.png"
import Product from "./Product";
import TopicsMainPage from "./topicsMainPage";
import Calender from "./calender";
import FooterSearch from "./FooterSearch";
import FooterSteps from "./FooterSteps";



class HostStep1Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer className={"fv-HostStep1Page"}>
                <FooterSteps />

            </MDBContainer>
        )
    }
}
export default HostStep1Page
