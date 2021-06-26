import React, {Component} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import {getUserInformation, updateUserAvatar, updateUserInfo} from "../services/userService";
import {waitingForCalculate, WaitingLoadingProfilePage} from "../componentsPages/WaitingLoad";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        if (!JSON.parse(localStorage.getItem("info"))) {
            this.props.history.push('/login');
        }
        this.state = {
            ...props,
            ...this.state,
            ...this.props,
            nameAndFamily: '',
            mobileNumber: '',
            emailAddress: '',
            nationalCode: '',
            job: '',
            education: '',
            foreignTab: '',
            cardNumber: '',
            shabaNumber: '',
            errorField: '',

            clickLoaderAvatar: false,
            avatarImageData: '',

            UserInfo: '',
            loadingPageWaiting: true,
            waitingButtonClick: false,
            waitingButtonStoreClick: false,

        }

    }

    componentDidMount() {

        this.authentication()
    }

    authentication = async () => {
        getUserInformation()
            .then(res => {
                console.log(res)
                this.setState({
                    nameAndFamily: res.data.fullname,
                    mobileNumber: res.data.phone_number,
                    emailAddress: res.data.email,
                    nationalCode: res.data.national_code,
                    job: res.data.job,
                    education: res.data.education,
                    foreignTab: res.data.foreign_language,
                    cardNumber: res.data.card_number,
                    shabaNumber: res.data.shaba_number,


                    UserInfo: res.data,
                    loadingPageWaiting: false,
                    waitingButtonStoreClick: false
                })
            })
            .catch(err => this.setState({waitingButtonStoreClick: false}))
    }
    handleError = (errorData) => {
        const errors = []
        if (errorData.card_number) {
            errors.push('cardNumber')
        }
        if (errorData.email) {
            errors.push('email')
        }
        if (errorData.fullname) {
            errors.push('fullname')
        }
        if (errorData.national_code) {
            errors.push('notionalCode')
        }
        if (errorData.phone_number) {
            errors.push('phoneNumber')
        }
        if (errorData.shaba_number) {
            errors.push('shabaNumber')
        }
        this.setState({errorField: errors, waitingButtonClick: false, waitingButtonStoreClick: false})
    }

    fileSelectedHandler = (event) => {

        if ((event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png" || event.target.files[0].type === "image/bmp" || event.target.files[0].type === "image/jpeg") && event.target.files[0].size < 3000000) {
            this.setState({clickLoaderAvatar: true})
            console.log(event)
            event.preventDefault()
            //  this.setState({clickLoader:true})
            console.log(event.target.files[0])
            console.log(event.target.name)

            let formData = new FormData();
            formData.append("avatar", event.target.files[0])
            updateUserAvatar(formData)
                .then(res => {
                    if (res.data.avatar_count !== 0) {
                        this.setState({avatarImageData: res.data.avatar}, () => {
                            const info = JSON.parse(localStorage.getItem("infoUser"))
                            let avatar = ""
                            let fullName = ""
                            if (info) {
                                fullName = info.userInfo.fullname
                                avatar = info.userInfo.avatar
                            }

                            let setAvatar = ""
                            if (this.state.avatarImageData) {
                                setAvatar = this.state.avatarImageData
                            } else {
                                setAvatar = avatar
                            }
                            const userInfo = {
                                avatar: setAvatar,
                                fullname: fullName,
                            }

                            const dataInfoUpdate = {
                                userInfo: userInfo
                            }
                            localStorage.setItem("infoUser", JSON.stringify(dataInfoUpdate))
                            this.props.ChangeUserAvatarSrc(res.data.avatar)
                            this.setState({clickLoaderAvatar: false})
                        })
                    }
                })

            this.setState({avatarImageData: formData})

        }
        if (event.target.files[0].size > 3000000) {
            alert("حجم فایل عکس باید حداکثر 2 مگابایت باشد")
        }
        if ((event.target.files[0].type !== "image/jpg" && event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/bmp" && event.target.files[0].type !== "image/jpeg")) {
            alert("لطفا فایل عکس انتخواب کنید")
        }
    };

    render() {
        let test = <p>s</p>
        let IR = "IR-"
        const info = JSON.parse(localStorage.getItem("infoUser"))
        // let fullName =  ""
        let avatar = ""
        if (info) {
            //  fullName=info.userInfo.fullname
            avatar = info.userInfo.avatar
        }
        console.log(this.state.avatarImageData)
        const {nameAndFamily, mobileNumber, emailAddress, job, nationalCode, education, foreignTab, cardNumber, shabaNumber} = this.state


        return (
            <>
                {this.state.loadingPageWaiting ?
                    WaitingLoadingProfilePage(true, "fv-waitingLoadPublicFullScreen")
                    :
                    <div className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                        <div className={"fv-ProfilePageLeftBody"}>

                            <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-profilePageInner"}>
                                <p className={this.state.errorField ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>لطفا
                                    کادر های قرمز را به درستی پر کنید</p>
                                <h6 className={"fv-userInfoText"}>اطلاعات کاربری</h6>
                                <h6>نام و نام خانوادگی</h6>
                                <input type="text"
                                       className={this.state.errorField.includes('fullname') === true ? "fv-redBorderError" : ''}
                                       value={this.state.nameAndFamily}
                                       onChange={(e) => this.setState({nameAndFamily: e.target.value})}/>
                                <h6>شماره موبایل</h6>
                                <input type="text"
                                       className={this.state.errorField.includes('phoneNumber') === true ? "fv-redBorderError" : 'fv-english-number'}
                                       value={this.state.mobileNumber}
                                       onChange={(e) => this.setState({mobileNumber: e.target.value})}/>
                                <h6>آدرس ایمیل</h6>
                                <input type="text"
                                       className={this.state.errorField.includes('email') === true ? "fv-redBorderError" : ''}
                                       value={this.state.emailAddress}
                                       onChange={(e) => this.setState({emailAddress: e.target.value})}/>
                                <h6>کد ملی</h6>
                                <input type="text" value={this.state.nationalCode}
                                       className={this.state.errorField.includes('notionalCode') === true ? "fv-redBorderError fv-english-number" : 'fv-english-number'}
                                       onChange={(e) => this.setState({nationalCode: e.target.value})}/>
                                <h6>شغل</h6>
                                <input type="text" value={this.state.job}
                                       onChange={(e) => this.setState({job: e.target.value})}/>
                                <h6>تحصیلات</h6>
                                <input type="text" value={this.state.education}
                                       onChange={(e) => this.setState({education: e.target.value})}/>
                                <h6>زبانه خارجه</h6>
                                <input type="text" value={this.state.foreignTab}
                                       onChange={(e) => this.setState({foreignTab: e.target.value})}/>
                                <h6>شماره کارت</h6>
                                <input type="text" value={this.state.cardNumber}
                                       className={this.state.errorField.includes('cardNumber') === true ? "fv-redBorderError fv-english-number" : 'fv-english-number'}
                                       onChange={(e) => this.setState({cardNumber: e.target.value})}/>
                                <h6>شماره شبا</h6>
                                <input type="text" value={`${IR}${this.state.shabaNumber}`}
                                       className={this.state.errorField.includes('shabaNumber') === true ? "fv-redBorderError fv-english-number" : 'fv-english-number'}
                                       onChange={(e) => {
                                           let mystring = e.target.value.replace('IR-', '');
                                           this.setState({shabaNumber: mystring})
                                       }}/>


                                {/*   <MDBRow md={3} sm={12}>
                                <MDBContainer className={"fv-hostStep5Page3Images fv-inputProfilePageAvatar"}>


                                    <label htmlFor="myInput">
                                        <label htmlFor="files2" className={this.state.clickLoaderAvatar ?  "fv-hideLoader" : "btn"}>تصویر خود را انتخاب کنید</label>
                                        <input id="files2"   style={{display:'none'}}   onChange={this.fileSelectedHandler}  type="file"   name={'avatar'} />

                                        <MDBRow>
                                            <div className={this.state.clickLoaderAvatar ? "loaderAvatar" : "fv-hideLoader"}>
                                                <svg className="circular" viewBox="25 25 50 50">
                                                    <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                                            stroke-miterlimit="10"/>
                                                </svg>
                                            </div>
                                        </MDBRow>
                                    </label>
                                </MDBContainer>
                            </MDBRow> */}


                                <MDBRow>
                                    <MDBCol md={12} sm={12}
                                            className={this.state.waitingButtonStoreClick ? "fv-hideForWaiting" : 'fv-ProfilePageUserSetInfoButton fv-profilePageEnButton'}>

                                        <input type="button" value="ذخیره"
                                               className={this.state.waitingButtonStoreClick ? "fv-hideForWaiting" : ''}
                                               onClick={() => {
                                                   this.setState({
                                                       waitingButtonClick: true,
                                                       waitingButtonStoreClick: true
                                                   })

                                                   if (this.state.clickLoaderAvatar) {  // agar karbar zamani ke ax dar hale upload ast click konad
                                                       this.setState({waitingButtonStoreClick: false})
                                                       alert("لطفا منتظر بمانید تا عکس آپلود شود")
                                                   } else {

                                                       const data = {
                                                           fullname: nameAndFamily,
                                                           phone_number: mobileNumber,
                                                           email: emailAddress,
                                                           national_code: nationalCode,
                                                           job: job,
                                                           education: education,
                                                           foreign_language: foreignTab,
                                                           card_number: cardNumber,
                                                           shaba_number: shabaNumber,
                                                           avatar: this.state.avatarImageData,
                                                       }


                                                       let setAvatar = ""
                                                       if (this.state.avatarImageData) {
                                                           setAvatar = this.state.avatarImageData
                                                       } else {
                                                           setAvatar = avatar
                                                       }
                                                       const userInfo = {
                                                           avatar: setAvatar,
                                                           fullname: data.fullname,
                                                       }

                                                       const dataInfoUpdate = {
                                                           userInfo: userInfo
                                                       }


                                                       console.log(userInfo)
                                                       updateUserInfo(data)
                                                           .then(result => {
                                                               console.log(result)
                                                               if (result.status === 200) {
                                                                   localStorage.setItem("infoUser", JSON.stringify(dataInfoUpdate))
                                                                   this.setState({
                                                                       waitingButtonClick: false,
                                                                       waitingButtonStoreClick: false
                                                                   })
                                                                   this.props.ChangeUserNameAndFamily(userInfo.fullname)

                                                                   alert("اطلاعات شما با موفقیت به روزرسانی شد")
                                                                   this.authentication()
                                                               }
                                                           })
                                                           .catch(error => this.handleError(error.response.data.errors))


                                                   }

                                               }}/>

                                    </MDBCol>
                                    <MDBCol md={12} sm={12}
                                            className={!this.state.waitingButtonStoreClick ? "fv-hideForWaiting" : 'fv-waitingProfilePageBody'}>
                                        {waitingForCalculate(this.state.waitingButtonStoreClick, "fv-waitingProfilePage")}
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </div>

                    </div>
                }


            </>
        )
    }
}

export default ProfilePage