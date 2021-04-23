import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import ReservationProduct from "../componentsPages/ReservatioonProduct";

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