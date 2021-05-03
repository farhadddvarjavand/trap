import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep2Page2.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep5Page2.scss"
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"

class HostStep5Page2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            rules:[],
            groupOfGuests:[],
            specialLaw:'',
            minimumNumberOfNights:'',
            maximumNumberOfNights:'',
        }

    }

    setCheckbox =(event,checkboxName) =>{
        let repeat = false
        const setData= this.state[checkboxName]
        if(event.target.checked === false){
            const index = setData.indexOf(event.target.name)
            if (index !== -1) {
                setData.splice(index, 1);
                this.setState({[checkboxName]:setData})
            }
        } else {
            setData.map(checked=>{
                if(checked === event.target.name){
                    repeat=true
                }
            })
            if(repeat === false){
                setData.push(event.target.name)
                this.setState({[checkboxName]:setData})
            }
        }
    }

    render() {
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page fv-hostStep5Page fv-hostStep5Page2"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>
                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>قوانین</h5>
                            <p className={"fv-hostStep5P"}>هرکدام از موارد که مهمان مجاز میباشد را انتخاب کنید</p>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol  md={12} sm={12} className={""}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="استعمال دخانیات"
                                        name='smoking'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'rules'}/>
                                </MDBCol>
                                <MDBCol  md={12} sm={12} className={""}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="امکان برگزرای جشن"
                                        name='getParty'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'rules'}/>
                                </MDBCol>
                                <MDBCol md={12} sm={12}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="ورود حیوانات (مثل سگ,گربه,پرنده و ...)"
                                        name='arrivalOfAnimals'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'rules'}/>

                                </MDBCol>
                                <MDBCol  md={12} sm={12} className={""}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="اقامت به افراد مجرد"
                                        name='stayForSinglePeople'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'rules'}/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>قوانین خاص</h5>
                            <p className={"fv-hostStep5P"}>اگر قانون خاص دیگری دارید در کادر پایین بنویسید</p>
                            <MDBRow className={"fv-hostStep3AddPlace fv-hostStep5Page2SpaceRow"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <textarea onChange={(e)=>this.setState({specialLaw:e.target.value})}>
                                        {this.state.specialLaw}
                                    </textarea>
                                </MDBCol>
                            </MDBRow>

                            <p className={"fv-hostStep5P"}>حداقل تعداد شب رزرو</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText fv-hostStep5Page2MobileInputText"} md={6}>
                                    <input type="text"  value={this.state.minimumNumberOfNights}
                                           onChange={(e)=>this.setState({minimumNumberOfNights:e.target.value})}/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-hostStep5P"}>حداکثر تعداد شب رزرو</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText fv-hostStep5Page2MobileInputText"} md={6}>
                                    <input type="text"  value={this.state.maximumNumberOfNights}
                                           onChange={(e)=>this.setState({maximumNumberOfNights:e.target.value})}/>
                                </MDBCol>
                            </MDBRow>

                            <p className={"fv-hostStep5P"}>باتوجه به معماری ساختمان ,تعداد پله و راحتی دسترسی مشخص کنید مناسب برای کدام گروه از مهمانان میباشد</p>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={12} sm={12}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="اقامت معلولین"
                                        name='disabledPeople'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'groupOfGuests'}/>

                                </MDBCol>
                                <MDBCol  md={12} sm={12} className={""}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="اقامت سالمندان"
                                        name='elderly'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'groupOfGuests'}/>
                                </MDBCol>
                                <MDBCol md={12} sm={12}>
                                    <HostStepCheckbox
                                        className="fv-hostStep5Page2PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="ورود حیوانات (مثل سگ,گربه,پرنده و ...)"
                                        name='animals'
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'groupOfGuests'}/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>زمان ورود و خروج</h5>
                            <p className={"fv-hostStep5P"}>لطفا زمان تحویل ملک به مهمان و تخلیه ملک را مشخص کنید</p>

                            <MDBRow className={"fv-timeOutAndTimeIn"}>
                                <MDBCol md={6} sm={12} >
                                    <MDBRow className={"fv-hostStep5Page2TimeIn"}>
                                        <MDBCol>
                                            <p>ساعت ورود</p>
                                        </MDBCol>
                                        <MDBCol >
                                            <select>
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol className={"fv-hostStep5Page2MobileTimeOut"} md={6}  sm={12}>
                                    <MDBRow>
                                        <MDBCol>
                                            <p>ساعت خروج</p>
                                        </MDBCol>
                                        <MDBCol>
                                            <select>
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>




                        </MDBCol>

                        <HostStepLeftBodyContent
                            text="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                            ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                            ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                            کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                            ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."
                            image={Logo}
                            nextLink={"../../hostStep5-3"}
                            returnLink={"../../hostStep5-1"}/>

                    </MDBRow>
                    <MDBRow>
                        <Footer />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default HostStep5Page2