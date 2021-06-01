import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep2Page.scss"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt";
import MobileLogo from "../images/MobileLogo.png";
import Footer from "../componentsPages/footer";

class HostStep2Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            city:'title',
            village:'',
            postCode:'',
            address:'',

            validCity:false,
            validPostCode:false,
            validAddress:false,
            click:false,
            hideUniq:false,
        }

    }
    componentDidMount() {
        if( JSON.parse(localStorage.getItem("step2"))){
            const prevData =  JSON.parse(localStorage.getItem("step2"))
            let validCity = false
            let validPostCode = false
            let validAddress =  false
            let hideUniq = false
            if(prevData.city !== "title"){
                validCity=true
            }
            if(prevData.postal_code){
                validPostCode=true
                hideUniq=true
            }
            if(prevData.address){
                validAddress=true
            }


            this.setState({
                city:prevData.city,
                village:prevData.village,
                postCode:prevData.postal_code,
                address:prevData.address,

                validCity:validCity,
                validPostCode:validPostCode,
                validAddress:validAddress,
                hideUniq:hideUniq
            })
        }
    }

    render() {

        let validationInputs = false
        if(this.state.validCity  && this.state.validPostCode && this.state.validAddress){
            validationInputs=true
        }

        // console.log(JSON.parse(localStorage.getItem("step1")))
        const localStorageData={
            city:this.state.city,
            village:this.state.village,
            postal_code:this.state.postCode,
            address:this.state.address,
        }

        return (
            <MDBContainer className={"fv-HostStep2Page fv-HostStep2PageOnly"}>
                <MDBRow>
                    <MDBContainer className={"fv-HostStep1Page"}>
                        <HeaderSteps/>

                        <MDBRow className={"fv-HostStep1PageBody"}>
                            <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                                <p className={this.state.click && validationInputs===false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا کادر های قرمز را به درستی پر کنید</p>
                                <p className={this.state.click && this.state.validCity===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}><i className="fas fa-exclamation-triangle" />  پر کردن شهر اجباریست</p>
                                <p className={this.state.click && this.state.validPostCode===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" />کد پستی معتبر نمی باشد</p>
                                <p className={this.state.click && this.state.validAddress===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" />نوشتن آدرس اجباریس</p>
                                <p  className={"fv-hostStep2Page2Hidden"}>شهر/استان</p>
                                <select value={this.state.city} onChange={(event)=>{
                                    if(event.target.value !== "title"){
                                        this.setState({validCity:true})
                                    }else {
                                        this.setState({validCity:false})
                                    }
                                    this.setState({city:event.target.value})
                                }}  className={this.state.click && this.state.validCity===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}>
                                    <option value='title' disabled>نام شهر خود را وارد کنید</option>
                                    <option value="تهران">تهران</option>
                                    <option value="مشهد">مشهد</option>
                                    <option value="اصفهان">اصفهان</option>
                                    <option value="کرج">کرج</option>
                                    <option value="شیراز">شیراز</option>
                                    <option value="تبریز">	تبریز</option>
                                    <option value="قم">قم</option>
                                    <option value="اهواز">اهواز</option>
                                    <option value="کرمانشاه">کرمانشاه</option>
                                    <option value="ارومیه">ارومیه</option>
                                    <option value="رشت">رشت</option>
                                    <option value="زاهدان">زاهدان</option>
                                    <option value="همدان">همدان</option>
                                    <option value="کرمان">کرمان</option>
                                    <option value="یزد">یزد</option>
                                    <option value="اردبیل">اردبیل</option>
                                    <option value="اراک">اراک</option>
                                    <option value="بندرعباس">بندرعباس</option>
                                    <option value="زنجان">زنجان</option>
                                    <option value="سنندج">سنندج</option>
                                    <option value="قزوین">قزوین</option>
                                    <option value="خرم‌آباد">خرم‌آباد</option>
                                    <option value="گرگان">گرگان</option>
                                    <option value="ساری">ساری</option>
                                    <option value="بابل">بابل</option>
                                    <option value="سبزوار">سبزوار</option>
                                    <option value="گلستان">گلستان</option>
                                    <option value="آمل">آمل</option>
                                </select>
                                <p className={"fv-hostStep2Page2Hidden"}>روستا/محله</p>
                                <input type="text" value={this.state.village} onChange={(event)=>{ this.setState({village:event.target.value})} } className={"fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}>کدپستی</p>
                                <input type="text" value={this.state.postCode} disabled={this.state.hideUniq ? true : false} onChange={(event)=>{
                                    if(event.target.value.length === 10 &&  Number(event.target.value)){
                                        this.setState({validPostCode:true})
                                    }else {
                                        this.setState({validPostCode:false})
                                    }
                                    this.setState({postCode:event.target.value})
                                }}  className={this.state.click && this.state.validPostCode===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}>آدرس دقیق</p>
                                <textarea value={this.state.address} onChange={(event)=>{
                                    if(event.target.value){
                                        this.setState({validAddress:true})
                                    }else {
                                        this.setState({validAddress:false})
                                    }
                                    this.setState({address:event.target.value})
                                }}  className={this.state.click && this.state.validAddress===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                            </MDBCol>


                            <MDBCol className={"fv-hostStepPage1Left fv-hostStepPageSpace"} sm={12} md={6}>
                                <MDBRow className={"fv-hostStepPage1LeftContentBody"}>
                                    <p>
                                        ا این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح
                                        کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                                        بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بو
                                        د. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را
                                    </p>
                                    <img src={MobileLogo} className={"fv-hostStepPage1LeftImage"}/>
                                </MDBRow>
                                <MDBRow className={"fv-hostStepPage2LeftButtonBody"}>
                                    <input type="button" value="مرحله بعد"  className={"fv-hostStepPage1LeftButton"} onClick={()=>{
                                        if(validationInputs){
                                            localStorage.setItem(`${"step2"}`, JSON.stringify(localStorageData))
                                            this.props.history.push('../../hostStep2-2')
                                        }
                                        else {
                                            this.setState({click:true})
                                        }
                                    }}/>
                                    <input type="button" value="مرحله قبل"  className={"fv-hostStepPage2LeftButton fv-hostStepPage1LeftButton"} onClick={()=>{
                                        this.props.history.push('../../hostStep1')
                                    }}/>
                                </MDBRow>
                            </MDBCol>

                            {/*    <HostStepLeftBodyContent
                                text=" طراحان سایت هنگام طراحی قالب سایت معمولا ب
                                    ا این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح
                                    کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                                    بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بو
                                    د. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را
                                    در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند"
                                image={MobileLogo}
                                nextLink={'../../hostStep2-2'}
                                returnLink={'../../hostStep1'}
                                localStorageName={"step2"}
                                localStorageData={localStorageData}/>  */}
                        </MDBRow>

                        <MDBRow>
                            <Footer />
                        </MDBRow>
                    </MDBContainer>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep2Page