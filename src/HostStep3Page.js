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
                                    test
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

                                <MDBRow className={"fv-hostStep3CheckBox"}>
                                    <MDBCol md={1} sm={2}>
                                        <input type="checkBox"/>
                                    </MDBCol>
                                    <MDBCol md={5} sm={10}>
                                        <p>سرویس بهداشتی مشترک است</p>
                                    </MDBCol>
                                </MDBRow>
                            <h5 className={"fv-hostStep3AnyPlace"}>سایر فضاها</h5>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={2} sm={6}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8}  sm={8}>
                                            <p>سونا</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol  md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineOne test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>استخر</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineTwo test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol  md={8} sm={8}>
                                            <p>آلاچیق</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={2} sm={6}  className={"fv-hostStep3CheckBoxGroupInLineOneThree test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>باربیکیو</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineFour test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>پارکینگ</p>
                                        </MDBCol>
                                    </MDBRow>
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
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>رو به دریا</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={3} sm={6} className={"fv-hostStep3CheckBoxGroupInLineSecondTwo test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>روبه جنگلا</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={3} sm={6} className={"fv-hostStep3CheckBoxGroupInLineSecondThree test"}>
                                    <MDBRow>
                                        <MDBCol md={4} sm={4}>
                                            <input type="checkBox"/>
                                        </MDBCol>
                                        <MDBCol md={8} sm={8}>
                                            <p>روبه جنگل</p>
                                        </MDBCol>
                                    </MDBRow>
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