import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React, {Component} from "react";

class footer extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
<MDBContainer>
            <MDBRow className={"fv-footerMainPage fv-footerMenus"}>
                <MDBCol md={5}>
                    <img className={"fv-footerMainPageBigger"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                    <img className={"fv-footerMainPageBigger"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                </MDBCol>
                <MDBCol md={7}>
                    <a>قوق کاربران</a>
                    <a>قوانین ترپ</a>
                    <a>تماس با پشتیبانی</a>
                    <a>درباره ترپ</a>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-footerMainPage fv-footerMenuMobile"}>
                <MDBRow className={"fv-footerMenuMobileTitle"}>
                    <MDBCol sm={5}>
                        <a>قوق کاربران</a>
                    </MDBCol>
                    <MDBCol sm={4}>
                        <a>قوانین ترپ</a>
                    </MDBCol>
                    <MDBCol sm={5}>
                        <a>تماس با پشتیبانی</a>
                    </MDBCol>
                    <MDBCol sm={4}>
                        <a>درباره ترپ</a>
                    </MDBCol>
                </MDBRow>

                <MDBCol sm={12}>
                    <MDBRow className={"fv-footerMainPageBigger"}>
                        <MDBCol sm={2}>
                            <img  src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img  src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-footerMainPageBigger"}>
                        <MDBCol sm={1} className={"fv-footerMainPageSmaller"}>
                            <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                        </MDBCol>
                        <MDBCol sm={1} className={"fv-footerMainPageSmaller"}>
                            <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                        </MDBCol>
                        <MDBCol sm={1} className={"fv-footerMainPageSmaller"}>
                            <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                        </MDBCol>
                        <MDBCol sm={1} className={"fv-footerMainPageSmaller"}>
                            <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

            </MDBRow>
</MDBContainer>
        );
    }
}

export default footer