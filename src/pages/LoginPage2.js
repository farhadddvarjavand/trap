import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage2.scss"
import HostStepIncreaseAndDecreaseButton from "../componentsPages/hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import MobileLogo from "../images/MobileLogo.png"
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"
import HostStep4PageRightBody from "../componentsPages/hostStep4PageRightBody"

class LoginPage2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <MDBRow className={"fv-loginPage fv-loginPage2"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p>صفحه اصلی</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <MDBCol sm={12} className={"fv-loginPage2RightBody"}>
                                <h3>ورود به حساب کاربری</h3>
                                <MDBRow>
                                    <MDBCol md={6} sm={12}>
                                        <p>کد تایید به شماره ۸۹۸۹۹۰۹۱۰۹۰ ارسال شد</p>
                                    </MDBCol>
                                    <MDBCol md={5} sm={12}>
                                        <p>ویرایش شماره</p>
                                    </MDBCol>
                                </MDBRow>
                                <input type="text" value={"شماره موبایل"}/>
                                <MDBRow className={"fv-loginPage2RightBodyButtonAndTime"}>
                                    <MDBCol md={8} sm={6}>
                                        <p>asda</p>
                                    </MDBCol>
                                    <MDBCol md={4} sm={6}>
                                        <input className={"fv-loginPageButton"} type="button" value={"ادامه"}/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={6} className={"fv-loginPageImageLeftBody"}>
                        <img src={MobileLogo}/>
                    </MDBCol>
                </MDBRow>


            </div>
        )
    }
}
export default LoginPage2