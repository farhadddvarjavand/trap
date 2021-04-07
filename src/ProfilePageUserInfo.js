import {MDBCol, MDBRow} from "mdbreact";
import Logo from "./images/Logo.png";
import React from "react";

const ProfilePageUserInfo = () =>{
    return(
        <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
            <img src={Logo}/>
            <p>نام و نام خانوادگی</p>
            <h5>اطلاعات کاربری</h5>
            <MDBRow className={"fv-ProfilePageUserHoldingInfo"}>
                <MDBCol md={12}>
                    <p>موجودی حساب شما</p>
                    <h5>تومان ۵۴۲۰۰۰ </h5>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                    <p className={"fv-reservation"}><i className="fas fa-book" />رزرو های من</p>
                    <p className={"fv-transaction"}><i className="fas fa-chart-bar" />تراکنش های من</p>
                    <MDBRow className={"fv-ProfilePageFacilitiesMobile"}>
                        <MDBCol md={8} sm={8}>
                            <p><i className="fa fa-file-invoice" />امکانات میزبان</p>
                        </MDBCol>
                        <MDBCol md={4} sm={4}>
                            <i className="fas fa-chevron-down" />
                        </MDBCol>
                    </MDBRow>
                    <p className={"fv-ProfilePageUserInfoDetailsOption fv-Accomoddation"}>اقامت گاه های من</p>
                    <p className={"fv-ProfilePageUserInfoDetailsOption"}>رزرو های درخواستی</p>
                    <p className={"fv-ProfilePageUserInfoDetailsOption"}>رزرو های درخواستی</p>
                    <p className={"fv-ProfilePageUserInfoDetailsOption"}>تقویم من</p>
                    <p className={"fv-wallet"}><i className="fas fa-wallet"/>کیف پول</p>
                    <p><i className="fas fa-user" />ویرایش پروفایل</p>
                    <p className={"fv-testMobile"}><i className="fa fa-heart" />علاقه مندی ها</p>
                </MDBCol>
            </MDBRow>
        </MDBCol>
    )
}
export default ProfilePageUserInfo