import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage3.scss"
import LoginPageImage from "../images/simon-haslett-BSkXuvmSHLA-unsplash 1.png"
import {Link} from "react-router-dom";
import {registerUser} from "../services/userService"
import {digitsFaToEn} from "@persian-tools/persian-tools";

class LoginPage3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameAndLastNAme: '',
            mobileNumber: '',
            errorsText: " لطفا اطلاعات خود را به درستی وارد نمایید",
            validNameAndPhoneNumber: true,
            clickLoader: false,
        }
    }

    componentDidMount() {
        let phoneNumber = localStorage.getItem("phone_number")
        this.setState({mobileNumber: phoneNumber})
        console.log(phoneNumber)
    }

    sendSms = async () => {
        const datas = {
            fullname: this.state.nameAndLastNAme,
            phone_number: this.state.mobileNumber
        }

        await registerUser(datas).then(result => {
            console.log(result)
            const status = result.status
            const data = result.data
            if (status === 200 && data.status === 2) {
                // Phone number have to save in local storage for use it, in the next step

                localStorage.setItem('phone_number', (datas.phone_number));
                alert('پیامک اعتبارسنجی ارسال شد');
                this.props.history.push("/loginMembership");

            } else if (status === 200 && data.status === 1) {
                this.setState({
                    validNameAndPhoneNumber: false,
                    clickLoader: false,
                    errorsText: ' پیامک برای شما ارسال شده لطفا چند دقیقه دیگر تلاش مجدد فرمایید'
                })
            } else {
                this.setState({validNameAndPhoneNumber: false, clickLoader: false, errorsText: ' شماره نامعتبر است'})
            }
        })
            .catch(error => {
                console.log(error.response)
                if (error.response.data.errors.phone_number && error.response.data.errors.fullname === undefined) {
                    if (error.response.data.errors.phone_number[0] === "شماره تلفن قبلا انتخاب شده است.") {
                        alert(' شما قبلا ثبت نام کرده اید')
                        this.props.history.push("/login");
                    } else {
                        this.setState({
                            validNameAndPhoneNumber: false,
                            clickLoader: false,
                            errorsText: ' لطفا شماره موبایل خود را به درستی وارد نمایید'
                        })
                    }
                }
                if (error.response.data.errors.phone_number && error.response.data.errors.fullname) {
                    this.setState({
                        validNameAndPhoneNumber: false,
                        clickLoader: false,
                        errorsText: ' لطفا اطلاعات خود را به درستی وارد نمایید'
                    })
                }
                if (error.response.status !== 422) {
                    alert(" اررور از سمت سرور رخ داده است")
                }

            })


        /* axios.post('/login', {
             firstName: 'Finn',
             lastName: 'Williams'
         })
             .then((response) => {
                 console.log(response);
             }, (error) => {
                 console.log(error);
             }); */


    }


    render() {
        const {nameAndLastNAme, mobileNumber} = this.state
        return (
            <MDBContainer className={"fv-loginPagesBody"}>
                <MDBRow className={"fv-loginPage fv-loginPage3"}>
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right"/><p><Link to={'/'}>صفحه اصلی</Link></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <p className={this.state.validNameAndPhoneNumber === false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}>
                                <i className="fas fa-exclamation-triangle"/> {this.state.errorsText} </p>
                            <MDBCol sm={12}>
                                <h4>ثبت نام</h4>
                                <input type="text" placeholder={"نام و نام خانوادگی"} value={nameAndLastNAme}
                                       onChange={((e) => this.setState({nameAndLastNAme: e.target.value}))}/>
                                <input type="number" placeholder={"شماره موبایل"}
                                       className={"fv-loginPage3MobileNumber fv-english-number"} value={mobileNumber}
                                       onChange={((e) => this.setState({mobileNumber: digitsFaToEn(e.target.value)}))}/>
                                <MDBRow>
                                    <div className={this.state.clickLoader ? "loader" : "fv-hideLoader"}>
                                        <svg className="circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                                    stroke-miterlimit="10"/>
                                        </svg>
                                    </div>

                                    <input className={this.state.clickLoader ? "fv-hideLoader" : "fv-loginPageButton"}
                                           type="button" value={"ثبت نام"} onClick={() => {
                                        this.setState({clickLoader: true})
                                        {
                                            this.sendSms()
                                        }
                                        /*   fetch('https://reqres.in/api/posts', {                     // POST
                                               method: 'POST',
                                               headers: { 'Content-Type': 'application/json' },
                                               body: JSON.stringify({nameAndLastNAme,mobileNumber})
                                           })
                                               .then(response => response.json())
                                               .then(data =>{
                                                   if(data){
                                                       console.log(nameAndLastNAme,mobileNumber)
                                                       this.props.history.push('/')
                                                   }
                                               }) ; */
                                    }}/>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={6} className={"fv-loginPageImageLeftBody"}>
                        <img src={LoginPageImage}/>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        )
    }
}

export default LoginPage3