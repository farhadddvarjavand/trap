import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HeaderSteps.scss"
import "./HostStep2Page2.scss"
import "./HostStep1Page.scss"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "./HeaderSteps";
import MobileLogo from "./images/MobileLogo.png";
import Footer from "./footer";
import HostStepLeftBodyContent from "./hostStepLeftBodyContetnt"

class HostStep2Page2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2"}>
            <MDBContainer className={"fv-HostStep1Page"}>
                <MDBRow>
                    <HeaderSteps />
                </MDBRow>

                <MDBRow className={"fv-HostStep1PageBody"}>
                    <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                        <p className={"fv-hostStep2Page2P"}> لطفا از روی نقشه آدرس دقیق خود را پیدا کنید</p>
                        <textarea className={"fv-hostStep2Page2Textarea"} value=" "/>
                        <MDBRow className={"fv-hostStep2Page2Map"}>
                            <img src={MobileLogo} />
                        </MDBRow>

                    </MDBCol>

                    <HostStepLeftBodyContent
                        text=" طراحان سایت هنگام طراحی قالب سایت معمولا ب
                    ا این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح
                    کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                    بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بو
                    د. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را
                    در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند"
                        image={MobileLogo}/>
                </MDBRow>
                <MDBRow>
                    <Footer />
                </MDBRow>
            </MDBContainer>
            </div>
        )
    }
}
export default HostStep2Page2