import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./HeaderSteps.scss"
import "./HostStep2Page2.scss"
import "./HostStep1Page.scss"
import "./HostStep3Page.scss"
import HostStepIncreaseAndDecreaseButton from "./hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "./HeaderSteps";
import Logo from "./images/Logo.png";
import Footer from "./footer";
import HostStepLeftBodyContent from "./hostStepLeftBodyContetnt"
import HostStepCheckbox from "./hostStepCheckbox"

class HostStep3Page extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>

                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>

                                 <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>ظرفیت اقامت گاه</h5>

                            <HostStepIncreaseAndDecreaseButton
                            text="ظرفیت استاندارد"
                            number="1"/>
                            <HostStepIncreaseAndDecreaseButton
                                text="حداکثر ظرفیت"
                                number="1"/>
                            <h5>نوع اجاره</h5>
                            <select>
                                <option>
                                    خانه دربست
                                </option>
                                <option>
                                    خانه اشتراکی
                                </option>
                            </select>
                            <h5 className={"fv-hostStep3BedRoom"}>اتاق خواب</h5>
                            <div  className={"fv-hostStep3CapacityOfRom"}>
                                <HostStepIncreaseAndDecreaseButton
                                    text="تعداد اتاق خواب را مشخص کنید"
                                    number="1"/>
                            </div>

                            <h5>حمام/سرویس بهداشتی</h5>
                            <HostStepIncreaseAndDecreaseButton
                                text="توالت ایرانی"
                                number="1"/>
                            <HostStepIncreaseAndDecreaseButton
                                text="توالت فرنگی"
                                number="1"/>
                            <HostStepIncreaseAndDecreaseButton
                                text="دوش آب"
                                number="1"/>

                                <HostStepCheckbox
                                    className="fv-hostStep3CheckBox"
                                    mdCheckbox = "1"
                                    smCheckbox="2"
                                    mdCheckboxText="5"
                                    smCheckboxText="10"
                                    text="سرویس بهداشتی مشترک است"/>

                            <h5 className={"fv-hostStep3AnyPlace"}>سایر فضاها</h5>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={2} sm={6}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="سونا"/>
                                </MDBCol>
                                <MDBCol  md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineOne test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="استخر"/>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineTwo test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="آلاچیق"/>
                                </MDBCol>
                                <MDBCol md={2} sm={6}  className={"fv-hostStep3CheckBoxGroupInLineOneThree test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="باربیکیو"/>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineFour test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="پارکینگ"/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-marginRight fv-hostStep3AddNewPlace"}>اضافه کردن فضای جدید</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" value=" فضا خود را بنویسید "/>
                                </MDBCol>
                                <MDBCol sm={2}  className={"fv-hostStep3InputButtonMobile"}>
                                    <input type="button" value=" + "/>
                                </MDBCol>
                                <MDBCol md={5} sm={2}  className={"fv-hostStep3InputButton"}>
                                    <input type="button" value="+ افزودن فضا "/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3View"}>ویوی اقامت گاه</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine fv-hostStep3CheckBoxGroupInLineSecond"}>
                                <MDBCol md={3} sm={6} className={""} >
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="رو به دریا"/>
                                </MDBCol>
                                <MDBCol md={3} sm={6} className={"fv-hostStep3CheckBoxGroupInLineSecondTwo test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="روبه جنگل"/>
                                </MDBCol>
                                <MDBCol md={3} sm={8} className={"fv-hostStep3CheckBoxGroupInLineSecondThree test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="روبه کوهستان"/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3Measure"}> متراژ اقامت گاه </h5>
                            <input className={"fv-marginRight"} type="text" value="   "/>
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
export default HostStep3Page