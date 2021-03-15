import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import FotterpageLogo from "./images/Logo.png"
import "./HeaderSteps.scss"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"


class HeaderSteps extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer className={"hostStepPage"}>
                <MDBRow className={'footerHostStep1Page'}>
                    <MDBCol md={3} sm={6}>
                        <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                        <i className="fas fa-chevron-down name_mobile" />
                        <a className={"name_desktop"}>نام و نامخانوادگی</a>
                    </MDBCol>
                    <MDBCol md={9} sm={6} className={""}>
                        <img src={FotterpageLogo} className={"hide_mobile"}/>
                        <img src={LogoName} className={"hide_desktop"}/>
                        <img src={MobileLogo} className={"hide_desktop"}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm={10} className={"fv-HostStep1Path"}>
                        <p> صفحه اصلی </p>
                        <i className="fas fa-chevron-left" />
                        <p> پنل کاربری </p>
                        <i className="fas fa-chevron-left" />
                        <p className={"fv-HostStepNow"}> ثبت اقامت گاه </p>
                    </MDBCol>
                    <MDBCol sm={2} className={"fv-HostStep1Path"}>
                        <i className="fa fa-question-circle" aria-hidden="true" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className={"fv-headerHomeImage"}>
                    <MDBCol md={1} className={"selectedIcon"}>
                        <i className="fas fa-home" />
                        <p className={"text_mobile"}>اطلاعات اولیه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="btn_mobile slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="btn_mobile slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="btn_mobile slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="btn_mobile slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel"  />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon fv-hostStep2PageSelectIcon"}>
                        <i className="fas fa-map-marker-alt" />
                        <p className={"text_mobile"}>آدرس</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep2PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep2PageSelect" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon fv-hostStep3PageSelectIcon"}>
                        <i className="fa fa-align-left" />
                        <p className={"text_mobile"}>مشخصات اقامت گاه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="btn_mobile slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep3PageSelect" />
                            <button className="slider_pagination_btn fv-hostStep3PageSelect" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fa fa-gopuram" />
                        <p className={"text_mobile"}>امکانات اقامت گاه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn " />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fas fa-dollar-sign" />
                        <p className={"text_mobile"}>قیمت گذاری</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn " />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fas fa-exclamation-triangle" />
                        <p className={"text_mobile"}>قوانین</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="btn_mobile slider_pagination_btn " />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="btn_mobile slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fa fa-file-image" />
                        <p className={"text_mobile"}>تصاویر</p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HeaderSteps
