import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HostStep1Page.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import {getUserInformation, storeVilla} from "../services/userService";
import {Link} from "react-router-dom";


class HostStep1Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            accommodationTitle:'',
            accommodationKind:'title',
            number:'',
            accommodationHistory:'',
            nameAndFamily:'',
            avatar:'',
            errorField:"",

            validTitle:false,
            validPhoneNumber:false,
            validStory:false,
            click:false,
            hideUniq:false,
        }
    }
    componentDidMount() {
        getUserInformation()
            .then(res=>{
                const info={
                    nameAndFamily:res.data.fullname,
                    avatar:res.data.avatar
                }
                localStorage.setItem("info" , JSON.stringify(info))

                this.setState({
                    nameAndFamily:res.data.fullname,
                    avatar:res.data.avatar
                })
            })
            .catch(err=>console.log(err.response))

        if( JSON.parse(localStorage.getItem("step1"))){
            const prevData =  JSON.parse(localStorage.getItem("step1"))
            let validTitle = false
            let validPhoneNumber = false
            let validStory =  false
            let hideUniq = false
            if(prevData.title){
                validTitle=true
            }
            if(prevData.phone_number){
                validPhoneNumber=true
            }
            if(prevData.story){
                validStory=true
            }
            if(prevData.phoneNumberDisable){   // agar az safhe eddit rafte bashad bayad gheire faal bashad postalcode
                hideUniq=true
            }
            this.setState({
                accommodationTitle:prevData.title,
                accommodationKind:prevData.type,
                number:prevData.phone_number,
                accommodationHistory:prevData.story,

                validTitle:validTitle,
                validPhoneNumber:validPhoneNumber,
                validStory:validStory,
                hideUniq:hideUniq
            })
        }


    }


    render() {
        let validationInputs = false
        if(this.state.validTitle && this.state.validPhoneNumber && this.state.validStory){
            validationInputs=true
        }

        const localStorageData={
            title:this.state.accommodationTitle,
            type:this.state.accommodationKind,
            phone_number:this.state.number,
            story:this.state.accommodationHistory,
            phoneNumberDisable:true
        }

        if(this.state.hideUniq === false){           // yani dar halate eddit nistim
            delete localStorageData.phoneNumberDisable
        }




        return (

            <MDBContainer className={"fv-HostStep1Page"}>
                <HeaderSteps
                    nameAndFamily={this.state.nameAndFamily}
                    avatar={this.state.avatar}/>


                <MDBRow className={"fv-HostStep1PageBody"}>
                    <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                        <p className={this.state.click && validationInputs===false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا کادر های قرمز را به درستی پر کنید</p>
                        <p className={this.state.click && this.state.validTitle===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}><i className="fas fa-exclamation-triangle" />  پر کردن عنوان اقامتگاه اجباریست</p>
                        <p className={this.state.click && this.state.validPhoneNumber===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" /> شماره تلفن معتبر نمی باشد</p>
                        <p className={this.state.click && this.state.validStory===false ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}> <i className="fas fa-exclamation-triangle" /> پر کردن داستان اقامتگاه اجباریست</p>
                            <p  className={"fv-hostStep2Page2Hidden"}>عنوان اقامت گاه</p>
                            <input type="text" value={this.state.accommodationTitle} onChange={(event)=>{
                                if(event.target.value){
                                    this.setState({validTitle:true})
                                }else {
                                    this.setState({validTitle:false})
                                }
                                this.setState({accommodationTitle:event.target.value})
                            }} className={this.state.click && this.state.validTitle===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> نوع اقامت گاه</p>
                            <select value={this.state.accommodationKind} onChange={(event)=>this.setState({accommodationKind:event.target.value})}  className={"fv-hostStep2Page2Hidden"}>
                                <option value='title' disabled>نوع اقامت گاه</option>
                                <option value="ویلایی">ویلایی</option>
                                <option value="آپارتمانی">آپارتمانی</option>
                                <option value="مستقل">مستقل</option>
                                <option value="سازمانی">سازمانی</option>
                                <option value="سایر">سایر</option>
                            </select>
                            <p className={"fv-hostStep2Page2Hidden"}>شماره ضروری</p>
                            <input type="text" value={this.state.number} disabled={this.state.hideUniq ? true : false} onChange={(event)=>{
                                this.setState({number:event.target.value})
                                if(event.target.value.length === 11 && Number(event.target.value)){
                                   this.setState({validPhoneNumber:true})
                                }else {
                                    this.setState({validPhoneNumber:false})
                                }
                            }} className={this.state.click && this.state.validPhoneNumber===false  ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> داستان اقامت گاه شما</p>
                            <textarea value={this.state.accommodationHistory} onChange={(event)=>{
                                this.setState({accommodationHistory:event.target.value})
                                if(event.target.value){
                                    this.setState({validStory:true})
                                }else {
                                    this.setState({validStory:false})
                                }
                            }} className={this.state.click && this.state.validStory===false ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
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
                                    localStorage.setItem(`${"step1"}`, JSON.stringify(localStorageData))
                                    this.props.history.push('../../hostStep2')
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

                    {/*
                               let seterror = true
                               storeVilla(localStorageData)
                                    .then(res=>console.log(res))
                                    .catch(err=>{
                                        if( err.response.data.errors.phone_number || err.response.data.errors.title || err.response.data.errors.story){ // در مجموعه ارور هایی که با این دیتاها میفرستیم از سرور میگیریم اگر این ارور ها که مربوط به این صفحه بود درونش آنگاه ارور ها را باید نمایش بدیم
                                          getError(err.response.data.errors)
                                        }
                                      else {
                                            localStorage.setItem(`${"step1"}`, JSON.stringify(localStorageData))
                                            this.props.history.push('../../hostStep2')
                                        }
                                    })
                    */}

                    {/*  <HostStepLeftBodyContent
                    text=" طراحان سایت هنگام طراحی قالب سایت معمولا ب
                    ا این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح
                    کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                    بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بو
                    د. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را
                    در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند"
                    image={MobileLogo}
                    nextLink={'../../hostStep2'}
                    returnLink={'../../hostStep1'}
                    localStorageName={"step1"}
                    localStorageData={localStorageData}
                     click = {this.click}
                    validationInput={validationInputs}/>  */}
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep1Page
