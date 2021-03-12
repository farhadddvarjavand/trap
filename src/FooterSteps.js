import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import FotterpageLogo from "./images/Logo.png"
import "./FooterSteps.scss"


class FooterSteps extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer className={"hostStepPage"}>
                <MDBRow className={'footerHostStep1Page'}>
                    <MDBCol md={3}>
                        <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                        <a>نام و نامخانوادگی</a>
                    </MDBCol>
                    <MDBCol md={9} sm={9} className={""}>
                        <img src={FotterpageLogo} className={""}/>
                    </MDBCol>
                </MDBRow>
                <MDBCol className={"fv-HostStep1Path"}>
                    <p> صفحه اصلی </p>
                    <i className="fas fa-chevron-left" />
                    <p> پنل کاربری </p>
                    <i className="fas fa-chevron-left" />
                    <p className={"fv-HostStepNow"}> ثبت اقامت گاه </p>
                </MDBCol>

                <MDBRow className={"fv-headerHomeImage"}>
                    <MDBCol md={1} className={"selectedIcon"}>
                        <i className="fas fa-home" />
                       <p>اطلاعات اولیه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel"  />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                            <button className="slider_pagination_btn slider_pagination_btn--sel" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fas fa-map-marker-alt" />
                        <p>آدرس</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fa fa-align-left" />
                        <p>مشخصات اقامت گاه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn " />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fa fa-gopuram" />
                        <p>امکانات اقامت گاه</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn " />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fas fa-dollar-sign" />
                        <p>قیمت گذاری</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn " />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fas fa-exclamation-triangle" />
                        <p>قوانین</p>
                    </MDBCol>
                    <MDBCol md={1}>
                        <div className="slider_pagination">
                            <button className="slider_pagination_btn " />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                            <button className="slider_pagination_btn" />
                        </div>
                    </MDBCol>
                    <MDBCol md={1} className={"unselectedIcon"}>
                        <i className="fa fa-file-image" />
                        <p>تصاویر</p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        )
    }
}
export default FooterSteps
