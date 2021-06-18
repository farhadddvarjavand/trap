import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep2Page.scss"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt";
import MobileLogo from "../images/MobileLogo.png";
import HostStepImage1 from "../images/home_miz1 png.png"
import Footer from "../componentsPages/footer";

class HostStep2Page extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('/login');
        }
        this.state={
            city:'',
            village:'',
            postCode:'',
            address:'',

            validCity:false,
            validAddress:false,
            click:false,
            hideUniq:false,
        }

    }
    componentDidMount() {
        if( JSON.parse(localStorage.getItem("step2"))){
            const prevData =  JSON.parse(localStorage.getItem("step2"))
            let validCity = false
            let validAddress =  false
            let hideUniq = false
            if(prevData.city !== ""){
                validCity=true
            }
            if(prevData.address){
                validAddress=true
            }
            if(prevData.postalCodeDisable){ // agar az safhe eddit rafte bashad bayad gheire faal bashad
                hideUniq=true
            }


            this.setState({
                city:prevData.city,
                village:prevData.village,
                postCode:prevData.postal_code,
                address:prevData.address,

                validCity:validCity,
                validAddress:validAddress,
                hideUniq:hideUniq
            })
        }
    }

    render() {

        let validationInputs = false
        if(this.state.validCity  && this.state.validAddress){
            validationInputs=true
        }

        // console.log(JSON.parse(localStorage.getItem("step1")))
        const localStorageData={
            city:this.state.city,
            village:this.state.village,
            postal_code:this.state.postCode,
            address:this.state.address,
            postalCodeDisable:true
        }

        if(this.state.hideUniq === false){           // yani dar halate eddit nistim
            delete localStorageData.postalCodeDisable
        }



        return (
            <MDBContainer className={"fv-HostStep2Page fv-HostStep2PageOnly"}>
                <MDBRow>
                    <MDBContainer className={"fv-HostStep1Page"}>
                        <HeaderSteps/>

                        <MDBRow className={"fv-HostStep1PageBody"}>
                            <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                                <h6 style={{paddingBottom : '3%'}} className={this.state.click && validationInputs===false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا کادر های قرمز را به درستی پر کنید</h6>
                                <p className={this.state.click && this.state.validCity===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}><i className="fas fa-exclamation-triangle" />  پر کردن شهر اجباریست</p>
                                {/*  <p className={this.state.click && this.state.validPostCode===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" />کد پستی معتبر نمی باشد</p> */}
                                <p className={this.state.click && this.state.validAddress===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" />نوشتن آدرس اجباریست - آدرس باید بیشتر از ۵ کاراکتر داشته باشد</p>
                                <h6  className={"fv-hostStep2Page2Hidden"}>شهر/استان</h6>
                                <input type="text" placeholder={"شهر یا استان خود را وارد نماییید"} value={this.state.city} onChange={(event)=>{
                                    if(event.target.value){
                                        this.setState({validCity:true})
                                    }else {
                                        this.setState({validCity:false})
                                    }
                                    this.setState({city:event.target.value})
                                }} className={this.state.click && this.state.validCity===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"} />

                                <h6 className={"fv-hostStep2Page2Hidden"}>روستا/محله</h6>
                                <input type="text" value={this.state.village} onChange={(event)=>{ this.setState({village:event.target.value})} } className={"fv-hostStep2Page2Hidden"}/>
                                <h6 className={"fv-hostStep2Page2Hidden"}>کدپستی</h6>
                                <input type="text" value={this.state.postCode} onChange={(event)=>{
                                    {/* if(event.target.value.length === 10 &&  Number(event.target.value)){
                                        this.setState({validPostCode:true})
                                    }else {
                                        this.setState({validPostCode:false})
                                    } */}
                                    this.setState({postCode:event.target.value})
                                }}  className={"fv-hostStep2Page2Hidden"}/>
                                <h6 className={"fv-hostStep2Page2Hidden"}>آدرس دقیق</h6>
                                <textarea value={this.state.address} onChange={(event)=>{
                                    if(event.target.value.length > 5){
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
                                    <img src={HostStepImage1} className={"fv-hostStepPage1LeftImage"}/>
                                </MDBRow>
                                <MDBRow className={"fv-hostStepPage2LeftButtonBody"}>
                                    <input type="button" value="مرحله بعد"  className={"fv-hostStepPage1LeftButton"} onClick={()=>{
                                        if(validationInputs){
                                            localStorage.setItem(`${"step2"}`, JSON.stringify(localStorageData))
                                            this.props.history.push('../../hostStepSetMapLocation')
                                        }
                                        else {
                                            this.setState({click:true})
                                        }
                                    }}/>
                                    <input type="button" value="مرحله قبل"  className={"fv-hostStepPage2LeftButton fv-hostStepPage1LeftButton"} onClick={()=>{
                                        this.props.history.push('../../hostStepBasicInformation')
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
                                nextLink={'../../hostStepSetMapLocation'}
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