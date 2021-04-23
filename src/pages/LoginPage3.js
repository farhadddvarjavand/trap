import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage3.scss"
import MobileLogo from "../images/MobileLogo.png"

class LoginPage3 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <MDBRow className={"fv-loginPage fv-loginPage3"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p>صفحه اصلی</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <MDBCol sm={12}>
                                <h4>ثبت نام</h4>
                                <input type="text" value={"نام و نام خانوادگی"}/>
                                <input type="text" value={"شماره موبایل"} className={"fv-loginPage3MobileNumber"}/>
                                <MDBRow>
                                    <input className={"fv-loginPageButton"} type="button" value={"ثبت نام"}/>
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
export default LoginPage3