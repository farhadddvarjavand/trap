import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import "./ProfilePageReservation2.scss"
import "./ProfilePageReservation.scss"
import "./ProfilePageWallet.scss"
import "./ProfilePageGustComments2.scss"
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

class PrfilePageGustComments2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageGustComments2"}>
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
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو"/>
                            </MDBCol>
                        </MDBRow>

                        <MDBContainer className={"fv-ProfilePageGustComments2CommentOne"}>
                            <MDBRow className={"fv-ProfilePageGustComments2CommentOneLogo"}>
                                <MDBCol md={2} sm={3}>
                                    <img src={MobileLogo}/>
                                </MDBCol>
                                <MDBCol md={7} sm={7}>
                                    <MDBRow>
                                        <h5>بهار</h5>
                                    </MDBRow>
                                    <MDBRow>
                                        <p>۳۱ مهرماه ۸۹۳۱</p>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <p>خیلی عالی بود،مخصوصا رفتار و برخورد میزبان.</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBContainer className={"fv-ProfilePageGustComments2CommentOneAnswer"}>
                                <MDBRow className={"fv-ProfilePageGustComments2CommentOneAnswerCommentDate"}>
                                    <MDBCol>
                                        <p>۳۱ مهرماه ۸۹۳۱</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <h5>میزبان کلبه سبز</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-ProfilePageGustComments2CommentOneAnswerComment"}>
                                    <MDBCol>
                                        <p> با تشکر از نظر شما</p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBContainer>

                        <MDBContainer className={"fv-ProfilePageGustComments2CommentOne fv-ProfilePageGustComments2CommentOne2"}>
                            <MDBRow className={"fv-ProfilePageGustComments2CommentOneLogo"}>
                                <MDBCol md={2} sm={3}>
                                    <img src={MobileLogo}/>
                                </MDBCol>
                                <MDBCol md={7} sm={7}>
                                    <MDBRow>
                                        <h5>علی </h5>
                                    </MDBRow>
                                    <MDBRow>
                                        <p>۳۱ مهرماه ۸۹۳۱</p>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <p>خیلی عالی بود،مخصوصا رفتار و برخورد میزبان.</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageGustComments2CommentOneAnswerButton"}>
                                <MDBCol>
                                    <h5>جواب دادن به نظر</h5>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        <MDBContainer className={"fv-ProfilePageGustComments2CommentOne"}>
                            <MDBRow className={"fv-ProfilePageGustComments2CommentOneLogo"}>
                                <MDBCol md={2} sm={3}>
                                    <img src={MobileLogo}/>
                                </MDBCol>
                                <MDBCol md={7} sm={7}>
                                    <MDBRow>
                                        <h5>سعید </h5>
                                    </MDBRow>
                                    <MDBRow>
                                        <p>۳۱ مهرماه ۸۹۳۱</p>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <p>خیلی عالی بود،مخصوصا رفتار و برخورد میزبان.</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageGustComments2SetComment"}>
                                <input type="textarea"/>
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                                <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input type="button" value="ذخیره پیام"/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>


                    </MDBCol>

                </MDBRow>



                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default PrfilePageGustComments2