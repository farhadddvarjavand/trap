import React, {Component} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import LogoName from "./images/LogoName.png";
import MobileLogo from "./images/MobileLogo.png";

class HeaderSearch extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"fv-footerMenu fv-footerDisplayPage fv-DisplayPage"}>
            <MDBRow className={' fv-footerDisplayPageBody'}>
                <MDBCol md={2}>
                    <i className="fa fa-user-alt" />
                    <a> حساب کاربری</a>
                </MDBCol>
                <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                    <input type='searchBbox' value=' جستجو'/>
                </MDBCol>
                <MDBCol  md={2} className={"fv-DisplayPageSearchIcon"} >
                    <a><i className="fa fa-search" /></a>
                </MDBCol>

                <MDBCol sm={2}  sm={2} className={"fv-DisplayPageLoginImageMobile"} >
                    <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>

                </MDBCol>
                <MDBCol sm={1} className={"fv-DisplayPageLoginSignMobile"} >
                    <i className="fas fa-chevron-down" />
                </MDBCol>
                <MDBCol md={6} sm={9} className={"menuMobile"}>
                    <img src={LogoName} className={"fv-DisplayPageSearchName"}/>
                    <img src={MobileLogo} className={"fv-DisplayPageSearchLogo"}/>
                </MDBCol>
            </MDBRow>
            </div>
        )
    }
}
export default HeaderSearch