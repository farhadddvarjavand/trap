import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageTransaction2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";

class ProfilePageTransaction2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2"}>
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
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>

                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="تاریخ تراکنش"/>
                            </MDBCol>
                            <MDBCol md={3} sm={7} className={""}>
                                <input type="text" value="مبلغ تراکنش"/>
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو"/>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th className={"fv-tableTitleRightOne"}>نوع تراکنش</th>
                                <th>تاریخ تراکنش</th>
                                <th>مبلغ</th>
                                <th className={"fv-tableTitleContent"}>شرح تراکنش</th>
                                <th className={"fv-tableTitleLeftOne"}>وضعیت</th>
                            </tr>
                            <tr>
                                <td>برداشت</td>
                                <td>99/10/01</td>
                                <td>2000000</td>
                                <td>برداشت از کیف پول</td>
                                <td>پرداخت شد</td>
                            </tr>
                            <tr>
                                <td>واریز</td>
                                <td>99/10/01</td>
                                <td>2000000</td>
                                <td>اجرا اقامتگاه کلبه سبز</td>
                                <td className={"fv-test"}>پرداخت شد</td>
                            </tr>
                        </table>

                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageTransaction2