import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> پنل کاربری </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                   <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <h5>اطلاعات کاربری</h5>
                        <p>نام و نام خانوادگی</p>
                        <input type="text" value=""/>
                        <p>شماره موبایل</p>
                        <input type="text" value=""/>
                        <p>آدرس ایمیل</p>
                        <input type="text" value=""/>
                        <p>کد ملی</p>
                        <input type="text" value=""/>
                        <p>شغل</p>
                        <input type="text" value=""/>
                        <p>تحصیلات</p>
                        <input type="text" value=""/>
                        <p>زبانه خارجه</p>
                        <input type="text" value=""/>
                        <p>شماره کارت</p>
                        <input type="text" value=""/>
                        <p>شماره شبا</p>
                        <input type="text" value=""/>
                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ذخیره"/>
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
export default ProfilePage