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
            this.setState({
                accommodationTitle:prevData.title,
                accommodationKind:prevData.type,
                number:prevData.phone_number,
                accommodationHistory:prevData.story,
            })
        }
    }

    render() {
      const localStorageData={
          title:this.state.accommodationTitle,
          type:this.state.accommodationKind,
          phone_number:this.state.number,
          story:this.state.accommodationHistory,
      }


      const getError =(data) =>{
          const errors = []
          if(data.phone_number){
              errors.push("phoneNumber")
          }
          if(data.story){
              errors.push("story")
          }
          if(data.title){
              errors.push("title")
          }
          this.setState({errorField:errors})
      }

        return (
            <MDBContainer className={"fv-HostStep1Page"}>
                <HeaderSteps
                    nameAndFamily={this.state.nameAndFamily}
                    avatar={this.state.avatar}/>


                <MDBRow className={"fv-HostStep1PageBody"}>
                    <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                        <p className={this.state.errorField ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا کادر های قرمز را به درستی پر کنید</p>
                        <p className={this.state.errorField.includes('title') ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}>پر کردن عنوان اقامتگاه اجباریست</p>
                        <p className={this.state.errorField.includes('phoneNumber') ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}>شماره تلفن معتبر نمی باشد</p>
                        <p className={this.state.errorField.includes('story') ? "fv-alertErrorTextWithoutBorder" : 'fv-alertNotErrorText'}>پر کردن داستان اقامتگاه اجباریست</p>
                            <p  className={"fv-hostStep2Page2Hidden"}>عنوان اقامت گاه</p>
                            <input type="text" value={this.state.accommodationTitle} onChange={(event)=>this.setState({accommodationTitle:event.target.value})} className={this.state.errorField.includes('title') ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
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
                            <input type="text" value={this.state.number} onChange={(event)=>this.setState({number:event.target.value})} className={this.state.errorField.includes('phoneNumber') ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> داستان اقامت گاه شما</p>
                            <textarea value={this.state.accommodationHistory} onChange={(event)=>this.setState({accommodationHistory:event.target.value})} className={this.state.errorField.includes('story') ?  "fv-hostStep2Page2Hidden fv-redBorderError" : "fv-hostStep2Page2Hidden"}/>
                    </MDBCol>


                    <MDBCol className={"fv-hostStepPage1Left"} sm={12} md={6}>
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


                            }}/>
                            <input type="button" value="مرحله قبل"  className={"fv-hostStepPage2LeftButton fv-hostStepPage1LeftButton"} onClick={()=>{
                                this.props.history.push('../../hostStep1')
                            }}/>
                        </MDBRow>
                    </MDBCol>

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
                    localStorageData={localStorageData}/> */}
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep1Page
