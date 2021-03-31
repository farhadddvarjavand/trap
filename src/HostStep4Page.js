import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HeaderSteps.scss"
import "./HostStep2Page2.scss"
import "./HostStep1Page.scss"
import "./HostStep4Page.scss"
import HostStepIncreaseAndDecreaseButton from "./hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "./HeaderSteps";
import Logo from "./images/Logo.png";
import Footer from "./footer";
import HostStepLeftBodyContent from "./hostStepLeftBodyContetnt"
import HostStepCheckbox from "./hostStepCheckbox"
import HostStep4PageRightBody from "./hostStep4PageRightBody"

class HostStep4Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>
                        <HostStep4PageRightBody />


                        <HostStepLeftBodyContent
                            text="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                            ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                            ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                            کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                            ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."
                            image={Logo}/>
                    </MDBRow>
                    <MDBRow>
                        <Footer />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default HostStep4Page