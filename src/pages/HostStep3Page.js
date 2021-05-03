import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep2Page2.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep3Page.scss"
import HostStepIncreaseAndDecreaseButton from "../componentsPages/hostStepIncreaseAndDecreaseButton"
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"

class HostStep3Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            standardCapacity:1,
            maximumCapacity:1,
            numberOfBedroom:1,
            iranianToilet:1,
            Toilet:1,
            shower:1,
            publicToiletCheckbox:[],
            otherViewsCheckbox:[],
            accommodationViewsCheckbox:[],
            typeOfRent:'title',
            yourSpace:'',
            yourAccommodationMeasure:''


        }

    }

    setStandardCapacityIncrement = (nameOfSection) =>{
            this.setState(prevstate => {
                return {[nameOfSection]: prevstate[nameOfSection] + 1}
            })
    }
    setStandardCapacityDecrement = (nameOfSection) =>{
        if(this.state[nameOfSection] >1){
            this.setState(prevstate => {
                return {[nameOfSection]: prevstate[nameOfSection] - 1}
            })
        }else alert('ظرفیت زیر صفر میباشد')
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
                            incrementFunction={this.setStandardCapacityIncrement}
                            decrementFunction={this.setStandardCapacityDecrement}
                            numberValue = {this.state.standardCapacity}
                            nameOfSection={'standardCapacity'}
                            />
                            <HostStepIncreaseAndDecreaseButton
                                text="ظرفیت حداکثر ظرفیت"
                                incrementFunction={this.setStandardCapacityIncrement}
                                decrementFunction={this.setStandardCapacityDecrement}
                                numberValue = {this.state.maximumCapacity}
                                nameOfSection={'maximumCapacity'}
                            />

                            <h5>نوع اجاره</h5>
                            <select value={this.state.typeOfRent} onChange={(event)=>this.setState({typeOfRent:event.target.value})}>
                                <option value='title' disabled>خانه دربست</option>
                                <option value="1">خانه اشتراکی</option>
                                <option value="2"> خانه اشتراکی</option>
                            </select>

                            <h5 className={"fv-hostStep3BedRoom"}>اتاق خواب</h5>

                            <div  className={"fv-hostStep3CapacityOfRom"}>
                                <HostStepIncreaseAndDecreaseButton
                                    text="تعداد اتاق خواب را مشخص کنید"
                                    incrementFunction={this.setStandardCapacityIncrement}
                                    decrementFunction={this.setStandardCapacityDecrement}
                                    numberValue = {this.state.numberOfBedroom}
                                    nameOfSection={'numberOfBedroom'}
                                />
                            </div>

                            <h5>حمام/سرویس بهداشتی</h5>

                            <HostStepIncreaseAndDecreaseButton
                                text="توالت ایرانی"
                                incrementFunction={this.setStandardCapacityIncrement}
                                decrementFunction={this.setStandardCapacityDecrement}
                                numberValue = {this.state.iranianToilet}
                                nameOfSection={'iranianToilet'}
                            />
                            <HostStepIncreaseAndDecreaseButton
                                text="توالت فرنگی"
                                incrementFunction={this.setStandardCapacityIncrement}
                                decrementFunction={this.setStandardCapacityDecrement}
                                numberValue = {this.state.Toilet}
                                nameOfSection={'Toilet'}
                            />
                            <HostStepIncreaseAndDecreaseButton
                                text="دوش آب"
                                incrementFunction={this.setStandardCapacityIncrement}
                                decrementFunction={this.setStandardCapacityDecrement}
                                numberValue = {this.state.shower}
                                nameOfSection={'shower'}
                            />



                            <HostStepCheckbox
                                className="fv-hostStep3CheckBox"
                                mdCheckbox = "1"
                                smCheckbox="2"
                                mdCheckboxText="5"
                                smCheckboxText="10"
                                text="سرویس بهداشتی مشترک است"
                                name='sharedBathroom'
                                setCheckbox = {this.setCheckbox}
                                nameOfPart={'publicToiletCheckbox'}/>
                            <h5 className={"fv-hostStep3AnyPlace"}>سایر فضاها</h5>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={2} sm={6}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="سونا"
                                        name = "sauna"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'otherViewsCheckbox'}/>
                                </MDBCol>
                                <MDBCol  md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineOne test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="استخر"
                                        name = "pool"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'otherViewsCheckbox'}/>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineTwo test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="آلاچیق"
                                        name = "pergola"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'otherViewsCheckbox'}/>
                                </MDBCol>
                                <MDBCol md={2} sm={6}  className={"fv-hostStep3CheckBoxGroupInLineOneThree test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="باربیکیو"
                                        name = "pergola"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'otherViewsCheckbox'}/>
                                </MDBCol>
                                <MDBCol md={2} sm={6} className={"fv-hostStep3CheckBoxGroupInLineFour test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="پارکینگ"
                                        text = "parking"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'otherViewsCheckbox'}/>
                                </MDBCol>
                            </MDBRow>
                            <p className={"fv-marginRight fv-hostStep3AddNewPlace"}>اضافه کردن فضای جدید</p>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" placeholder=" فضا خود را بنویسید " value={this.state.yourSpace}
                                    onChange={(e)=>this.setState({yourSpace:e.target.value})}/>
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
                                        text="رو به دریا"
                                        name = "viewTheSea"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'accommodationViewsCheckbox'}/>

                                </MDBCol>
                                <MDBCol md={3} sm={6} className={"fv-hostStep3CheckBoxGroupInLineSecondTwo test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="روبه جنگل"
                                        name = "viewTheForest"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'accommodationViewsCheckbox'}/>
                                </MDBCol>
                                <MDBCol md={3} sm={8} className={"fv-hostStep3CheckBoxGroupInLineSecondThree test"}>
                                    <HostStepCheckbox
                                        className=""
                                        mdCheckbox = "4"
                                        smCheckbox="4"
                                        mdCheckboxText="8"
                                        smCheckboxText="8"
                                        text="روبه کوهستان"
                                        name = "facingTheMountains"
                                        setCheckbox = {this.setCheckbox}
                                        nameOfPart={'accommodationViewsCheckbox'}/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3Measure"}> متراژ اقامت گاه </h5>
                            <input className={"fv-marginRight"} type="text" placeholder="" value={this.state.yourAccommodationMeasure}
                                   onChange={(e)=>this.setState({yourAccommodationMeasure:e.target.value})}/>
                        </MDBCol>

                        <HostStepLeftBodyContent
                            text="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                            ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                            ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                            کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                            ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."
                            image={Logo}
                            nextLink={"../../hostStep4"}
                            returnLink={"../../hostStep2-2"}/>
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