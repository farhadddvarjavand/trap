import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HostStep1Page.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"


class HostStep1Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <MDBContainer className={"fv-HostStep1Page"}>
                <HeaderSteps />

                <MDBRow className={"fv-HostStep1PageBody"}>
                    <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <p  className={"fv-hostStep2Page2Hidden"}>عنوان اقامت گاه</p>
                            <input type="text" value=" " className={"fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> نوع اقامت گاه</p>
                            <select type=" " value=" " className={"fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}>شماره ضروری</p>
                            <input type="text" value=" " className={"fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> داستان اقامت گاه شما</p>
                            <textarea value=" " className={"fv-hostStep2Page2Hidden"}/>
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
        )
    }
}
export default HostStep1Page