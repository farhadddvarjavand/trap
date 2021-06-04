import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {updateUserInfo, getUserInformation, SetImages} from "../services/userService";
import axios from "axios";
import config from "../services/config.json"
import http from "../services/httpService";
import Logo from "../images/Logo.png";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            nameAndFamily:'',
            mobileNumber:'',
            emailAddress:'',
            nationalCode:'',
            job:'',
            education:'',
            foreignTab:'',
            cardNumber:'',
            shabaNumber:'',
            errorField:'',

            clickLoaderAvatar:false,
            avatarImageData:'',

            UserInfo:'',

        }

    }
componentDidMount() {
    this.authentication()
}

    authentication = async () =>{
        getUserInformation()
            .then(res=>this.setState({
                nameAndFamily:res.data.fullname,
                mobileNumber:res.data.phone_number,
                emailAddress:res.data.email,
                nationalCode:res.data.national_code,
                job:res.data.job,
                education: res.data.education,
                foreignTab:res.data.foreign_language,
                cardNumber:res.data.card_number,
                shabaNumber:res.data.shaba_number,

                UserInfo : res.data,
            }))
    }
    handleError = (errorData) =>{
        const errors = []
            if(errorData.card_number){
              errors.push('cardNumber')
            }
            if(errorData.email){
                errors.push('email')
            }
            if(errorData.fullname){
                errors.push('fullname')
            }
            if(errorData.notional_code){
                errors.push('notionalCode')
            }
            if(errorData.phone_number){
                errors.push('phoneNumber')
            }
            if(errorData.shaba_number){
                errors.push('shabaNumber')
            }
        this.setState({errorField:errors})
    }

    fileSelectedHandler = (event) => {
        console.log(event)
        event.preventDefault()
        if((event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png" || event.target.files[0].type ===  "image/bmp" || event.target.files[0].type ===  "image/jpeg") && event.target.files[0].size < 2000005 ){

            //  this.setState({clickLoader:true})
            console.log( event.target.files[0])
            console.log(  event.target.name)

                let formData = new FormData() ;
                formData.append("image" , event.target.files[0])
                formData.append("input_name" , event.target.name)
                 formData.append("img_title" , "")
                // formData.append("img_src" , this.state.img_title0)
            this.setState({avatarImageData:formData} )

        }
        if(event.target.files[0].size > 2000005){
            alert("حجم فایل عکس باید حداکثر 2 مگابایت باشد")
        }
        if((event.target.files[0].type !== "image/jpg" && event.target.files[0].type !== "image/png" && event.target.files[0].type !==  "image/bmp" && event.target.files[0].type !==  "image/jpeg") ) {
            alert("لطفا فایل عکس انتخواب کنید")
        }
    };

    render() {
        console.log(this.state.avatarImageData)
        const   {nameAndFamily,  mobileNumber , emailAddress , job, nationalCode , education, foreignTab, cardNumber ,shabaNumber }  = this.state


        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}  />
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                   <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-profilePageInner"}>
                        <p className={this.state.errorField ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا کادر های قرمز را به درستی پر کنید</p>
                        <h5>اطلاعات کاربری</h5>
                        <p>نام و نام خانوادگی</p>
                        <input type="text" className={this.state.errorField.includes('fullname')===true ? "fv-redBorderError" : ''} value={this.state.nameAndFamily}
                               onChange={(e)=>this.setState({nameAndFamily:e.target.value})}/>
                        <p>شماره موبایل</p>
                        <input type="text" className={this.state.errorField.includes('phoneNumber')===true ? "fv-redBorderError" : ''} value={this.state.mobileNumber}
                               onChange={(e)=>this.setState({mobileNumber:e.target.value})}/>
                        <p>آدرس ایمیل</p>
                        <input type="text" className={this.state.errorField.includes('email')===true ? "fv-redBorderError" : ''} value={this.state.emailAddress}
                               onChange={(e)=>this.setState({emailAddress:e.target.value})}/>
                        <p>کد ملی</p>
                        <input type="text" value={this.state.nationalCode} className={this.state.errorField.includes('notionalCode')===true ? "fv-redBorderError" : ''}
                               onChange={(e)=>this.setState({nationalCode:e.target.value})}/>
                        <p>شغل</p>
                        <input type="text" value={this.state.job}
                               onChange={(e)=>this.setState({job:e.target.value})}/>
                        <p>تحصیلات</p>
                        <input type="text" value={this.state.education}
                               onChange={(e)=>this.setState({education:e.target.value})}/>
                        <p>زبانه خارجه</p>
                        <input type="text" value={this.state.foreignTab}
                               onChange={(e)=>this.setState({foreignTab:e.target.value})}/>
                        <p>شماره کارت</p>
                        <input type="text" value={this.state.cardNumber} className={this.state.errorField.includes('cardNumber')===true ? "fv-redBorderError" : ''}
                               onChange={(e)=>this.setState({cardNumber:e.target.value})}/>
                        <p>شماره شبا</p>
                        <input type="text" value={this.state.shabaNumber} className={this.state.errorField.includes('shabaNumber')===true ? "fv-redBorderError" : ''}
                               onChange={(e)=>this.setState({shabaNumber:e.target.value})}/>

                        <div className={this.state.clickLoaderAvatar ? "loaderImage" : "fv-hideLoader"}>
                            <svg className="circular" viewBox="25 25 50 50">
                                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                        stroke-miterlimit="10"/>
                            </svg>
                        </div>
                        <MDBRow md={3} sm={12}>
                            <MDBContainer className={"fv-hostStep5Page3Images"}>
                                        <label htmlFor="myInput">
                                            <label htmlFor="files2" className={this.state.clickLoaderAvatar ?  "fv-hideLoader" : "btn"}>تصویر خود را انتخاب کنید</label>
                                            <input id="files2"   style={{display:'none'}}   onChange={this.fileSelectedHandler}  type="file"   name={'avatar'} />
                                        </label>
                            </MDBContainer>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={12} sm={12} className={'fv-ProfilePageUserSetInfoButton fv-profilePageEnButton'} >
                                <input type="button" value="ذخیره" onClick={()=>{
                                    const data ={
                                        fullname:nameAndFamily,
                                        phone_number:mobileNumber,
                                        email:emailAddress,
                                        notional_code:nationalCode,
                                        job:job,
                                        education:education,
                                        foreign_language:foreignTab,
                                        card_number:cardNumber,
                                        shaba_number:shabaNumber,
                                        avatar:this.state.avatarImageData,
                                    }
                                    console.log(data)
                                    updateUserInfo(data)
                                        .then(result =>{
                                            if(result.status === 200){
                                                return(window.location.reload())
                                            }
                                        })
                                        .catch(error => this.handleError(error.response.data.errors))

                                }}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePage