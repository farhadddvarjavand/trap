import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import "./ProfilePageReservation2.scss"
import "./ProfilePageTransaction2.scss"
import "./ProfilePageReservationsRequested.scss"
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

class ProfilePageReservationsRequested extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageReservationsRequested"}>
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
                        <p className={"fv-ProfilePageReservationsRequestedPTitle"}>جهت تایید یا عدم تایید رزرو مهمان هر سطر را انتخاب کنید و تایید یا عدم تایید کنید</p>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>

                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="از تاریخ"/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="تا تاریخ"/>
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageReservationRequestedAccommodation"}>
                                <input type="text" value="نام اقامت گاه"/>
                            </MDBCol>
                            <MDBCol md={3} sm={10} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جست و جو"/>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th className={"fv-tableTitleRightOne"}>نام اقامت گاه</th>
                                <th className={"fv-tableTitleRightSecond"}>نام مهمان</th>
                                <th>تعداد نفرات</th>
                                <th>از تاریخ</th>
                                <th className={"fv-tableTitleContent"}>از تاریخ</th>
                                <th className={"fv-tableTitleLeftOne"}>وضعیت</th>
                            </tr>
                            <tr>
                                <td>کلبه سبز</td>
                                <td></td>
                                <td>3</td>
                                <td>99/10/01</td>
                                <td>99/10/01</td>
                                <td> تایید شده</td>
                            </tr>
                            <tr>
                                <td>کلبه سبز</td>
                                <td></td>
                                <td>3</td>
                                <td>99/10/01</td>
                                <td>99/10/01</td>
                                <td className={"fv-test"}>تایید شده</td>
                            </tr>
                        </table>

                        <MDBRow className={"fv-ProfilePageReservationSetInfo fv-ProfilePageReservationsRequestedButton"}>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageUserSetInfoButtonRight"}>
                               <a> <input type="button" value="جستجو"/></a>
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton "}>
                               <a> <input type="button" value="جستجو"/></a>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageReservationsRequested