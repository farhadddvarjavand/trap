import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageTransaction2.scss"
import "../style/MyAccommodationPage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import AccommmodationProduct from "../componentsPages/AccomodationProduct";

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