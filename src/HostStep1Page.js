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


class HostStep1Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer className={"fv-HostStep1Page"}>
                <MDBRow className={' fv-footerHostStep1Page'}>
                    <MDBCol md={3}>
                        <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                        <a>نام و نامخانوادگی</a>
                    </MDBCol>
                    <MDBCol md={9} sm={9} className={""}>
                        <img src={FotterpageLogo} className={""}/>
                    </MDBCol>
                </MDBRow>
                <MDBCol className={"fv-HostStep1Path"}>
                    <p> صفحه اصلی </p>
                    <i className="fas fa-chevron-left" />
                    <p> پنل کاربری </p>
                    <i className="fas fa-chevron-left" />
                    <p className={"fv-HostStep1hNow"}> ثبت اقامت گاه </p>
                </MDBCol>

                <MDBRow className={"fv-headerHomeImage"}>
                    <i className="fas fa-home" />
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep1Page
