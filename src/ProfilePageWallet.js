import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import "./ProfilePageReservation2.scss"
import "./ProfilePageReservation.scss"
import "./ProfilePageWallet.scss"
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

class ProfilePageWallet extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet"}>
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
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>
                            <MDBCol md={4} sm={12} className={""}>
                                <select>
                                    <option>
                                        نام اقامت گاه
                                    </option>
                                </select>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="از تاریخ"/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="تا تاریخ"/>
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو"/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-ProfilePageWalletWalletImage"}>
                            <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                <MDBRow className={"fv-ProfilePageWalletWalletImageP"}>
                                    <MDBCol md={12}>
                                        <p>در آمد شما از ترپ</p>
                                    </MDBCol>
                                    <MDBCol md={12}>
                                        <p>۰۰۰۵۴۲ تومان</p>
                                    </MDBCol>
                                </MDBRow>
                                <img src={MobileLogo} />
                            </MDBCol>
                            <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                <MDBRow className={"fv-ProfilePageWalletWalletImageP"}>
                                    <MDBCol md={12} className={"fv-ProfilePageWalletWalletImagePWhiteColor"}>
                                        <p>در آمد شما از ترپ</p>
                                    </MDBCol>
                                    <MDBCol md={12}>
                                        <p>۰۰۰۵۴۲ تومان</p>
                                    </MDBCol>
                                </MDBRow>
                                <img src={MobileLogo} />
                            </MDBCol>
                            <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                <MDBRow className={"fv-ProfilePageWalletWalletImageP fv-ProfilePageWalletWalletImagePWhiteColor"}>
                                    <MDBCol md={12}>
                                        <p>در آمد شما از ترپ</p>
                                    </MDBCol>
                                    <MDBCol md={12}>
                                        <p>۰۰۰۵۴۲ تومان</p>
                                    </MDBCol>
                                </MDBRow>
                                <img src={MobileLogo} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <h5>تراکنش های من</h5>
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
                        <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                <input type="button" value="ثبت تراکنش جدید"/>
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
export default ProfilePageWallet