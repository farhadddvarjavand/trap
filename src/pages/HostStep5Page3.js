import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep2Page2.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep5Page3.scss"
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"

class HostStep5Page3 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page fv-hostStep5Page fv-hostStep5Page2 fv-hostStep5Page3"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>
                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>تصویر اصلی</h5>
                            <p className={"fv-hostStep5P"}>مهمانان ابتدا این تصویر را میبینند،این تصویر معرف اقامت گاه شماست،پس تصویر با کیفیت و زیبا انتخاب کنید</p>

                            <MDBRow className={"fv-hostStep5Page3TopPicImage"}>
                                <MDBCol>
                                    <img src={Logo}/>
                                    <p>تصویر خود را انتخاب کنید</p>
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

                    <MDBContainer className={"fv-hostStep5Page3MultiImages"}>
                        <MDBRow className={"fv-hostStep5Page3MultiImagesMobileAnotherPicP"}>
                                <p>تصاویر قسمت های دیگر اقامت گاه خود را انتخاب کنید</p>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <img src={Logo}/>
                                        <p>تصویر خود را انتخاب کنید</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <img src={Logo}/>
                                        <p>تصویر خود را انتخاب کنید</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <img src={Logo}/>
                                        <p>تصویر خود را انتخاب کنید</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <img src={Logo}/>
                                        <p>تصویر خود را انتخاب کنید</p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>


                    <MDBRow>
                        <Footer />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default HostStep5Page3