import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HeaderSteps.scss"
import "./HostStep2Page2.scss"
import "./HostStep1Page.scss"
import "./HostStep5Page.scss"
import HostStepIncreaseAndDecreaseButton from "./hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "./HeaderSteps";
import Logo from "./images/Logo.png";
import Footer from "./footer";
import HostStepLeftBodyContent from "./hostStepLeftBodyContetnt"
import HostStepCheckbox from "./hostStepCheckbox"
import HostStep4PageRightBody from "./hostStep4PageRightBody"

class HostStep5Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page fv-hostStep5Page"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>
                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>قیمت گذاری کلی</h5>
                            <p className={"fv-hostStep5P"}>قیمت از شنبه تا چهارشنبه</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-hostStep5P"}>قیمت پنجشنبه و جمعه و تعطیل (ایام پیک)</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-hostStep5P"}>قیمت نفر اضافه در روز های عادی</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-hostStep5P"}>قیمت نفر اضافه در روز های پیک</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>تخفیف</h5>
                            <p className={"fv-hostStep5P"}>میتوانید جهت تشویق مهمانان به رزرو بیشتر تخفیف قرار دهید</p>
                            <p className={"fv-hostStep5P"}>تخفیف هفتگی</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-hostStep5P"}>تخفیف ماهانه</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=""/>
                                </MDBCol>
                            </MDBRow>


                        </MDBCol>

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
export default HostStep5Page