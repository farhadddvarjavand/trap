import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import "./ProfilePageReservation2.scss"
import "./ProfilePageTransaction2.scss"
import "./MyAccommodationPage.scss"
import Footer from "./footer"
import Logo from "./images/Logo.png";
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
import MobileMenu from "./images/MobileMenu.png"
import Product from "./Product";
import TopicsMainPage from "./topicsMainPage";
import Calender from "./calender";
import HeaderSearch from "./HeaderSearch";
import ProfilePageUserInfo from "./ProfilePageUserInfo";
import AccommmodationProduct from "./AccomodationProduct";

class MyAccommodationPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-MyAccommodationPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> تراکنش های من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>تراکنش های من</h5>
                        <MDBRow>

                            <AccommmodationProduct
                              md={7}
                              title="در انتظار تایید"
                              classNameActiveTopRight=""
                              classNameActiveTopLeft=""
                              classNameActiveBottonRight=""
                              classNameActiveBottonLeft=""
                              classNameActiveButton=""/>
                            <AccommmodationProduct
                                md={5}
                                title="غیرفعال"
                                classNameActiveTopRight="fv-myAccommodationPageActiveButton"
                                classNameActiveTopLeft=""
                                classNameActiveBottonRight=""
                                classNameActiveBottonLeft=""
                                classNameActiveButton=""
                                />
                            <AccommmodationProduct
                                md={4}
                                title="تایید شد"
                                classNameActiveTopRight="fv-myAccommodationPageActiveButton"
                                classNameActiveTopLeft="fv-myAccommodationPageActiveButton"
                                classNameActiveBottonRight="fv-myAccommodationPageActiveButton"
                                classNameActiveBottonLeft="fv-myAccommodationPageActiveButton"
                                classNameActiveButton="fv-myAccommodationPageActiveButton"
                                />




                        </MDBRow>

                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default MyAccommodationPage