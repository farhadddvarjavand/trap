import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import "./ProfilePageReservation2.scss"
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
import ReservationProduct from "./ReservatioonProduct";

class ProfilePageReservation2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> رزروهای من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>رزورو های من</h5>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>
                            <MDBCol md={4} sm={12} className={""}>
                                <select>
                                    <option>
                                        شهر یا روستا را انتخاب کنید
                                    </option>
                                </select>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="رزرو اقامتگاه"/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="رزرو اقامتگاه"/>
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="رزرو اقامتگاه"/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>

                          <ReservationProduct
                          md="7"
                          title="در انتظار پذیرش میزبان"
                          classnameButton="fv-profilePaeReservation2PayButton"
                          />

                            <ReservationProduct
                                md="5"
                                title="در انتظار پرداخت"
                                classnameButton="fv-profilePaeReservation2PayButtonSet"
                            />
                            <ReservationProduct
                                md="4"
                                title="پرداخت شد"
                                classnameButton="fv-profilePaeReservation2PayButton"
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
export default ProfilePageReservation2