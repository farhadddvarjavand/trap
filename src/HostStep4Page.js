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

                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>امکانات کلی</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text=" جارو برقی"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text=" اینترنت رایگان"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="تلفن"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="جعبه کمک های اولیه"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="مهر و جانماز"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="تلوزیون"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="یخچال"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="اجاق گاز"/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات آشپرخانه</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="بشقاب"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قاشق-چنگال"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="لیوان"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="سماور"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کتری"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="استکان"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قابلمه"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قوری"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="ماهیتابه"/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات سرمایشی و گرمایشی اتاق را مشخص کنید</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کولر"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="پنکه"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کولر گازی"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="پکیج"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کرسی"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="شومینه"/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="بخاری گازی"/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="هیتر"/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات ویژه</h5>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>هر کدام از امکانات زیر را ارائه میدهید انتخاب کنید و مبلغ آن را ذکر کنید</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="آشپز"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value="تومان"/>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="مهماندار"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value="تومان"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="راهنمای سفر"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value="تومان"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="بادیگارد"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value="تومان"/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>پذیرایی</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="صبحانه"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="نهار"/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="شام"/>
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
export default HostStep4Page