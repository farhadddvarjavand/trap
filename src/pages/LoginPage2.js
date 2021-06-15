import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage2.scss"
import HostStepIncreaseAndDecreaseButton from "../componentsPages/hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import MobileLogo from "../images/MobileLogo.png"
import LoginPageImage from "../images/simon-haslett-BSkXuvmSHLA-unsplash 1.png"
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"
import HostStep4PageRightBody from "../componentsPages/hostStep4PageRightBody"
import {Link} from "react-router-dom";
import {getUserInformation, sendPhoneNumber, verifySmsCode} from "../services/userService";

class LoginPage2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            validationCode:'',
            minutes: 3,
            seconds: 0,
            errorsText:"کد وارد شده معتبر نمیباشد",
            validCode:true,
            clickLoader:false,

        }
    }


    componentDidMount() {
        this.setTime()
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    setTime=()=>{
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    sendRepeatSms = async () =>{
        const phone_number = {
            phone_number: localStorage.getItem("phone_number")
        }
        const { status, data } =(await sendPhoneNumber(phone_number))
        if (status === 200 &&  data.status===2) {
            // Phone number have to save in local storage for use it, in the next step
            alert('پیامک اعتبارسنجی ارسال شد');
            this.setTime()
            this.setState({ minutes: 3,seconds: 0})

        }else if(status === 200 &&  data.status===1){
            alert('پیامک برای شما ارسال شده لطفا چند دقیقه دیگر تلاش مجدد فرمایید');
        }
        else{
            alert('شماره نامعتبر است')
        }
    }
    validation = async ()=>{
        const phone_number = localStorage.getItem("phone_number")
        const user={
            phone_number ,
            sms_code:this.state.validationCode
        }
        await verifySmsCode(user)
            .then(result => {
                const status = result.status
                const data = result.data
                if (status === 200 && data.data.user) {



                    const info={
                        userInfo:data.data.user
                    }
                    localStorage.setItem("infoUser" , JSON.stringify(info))
                    localStorage.setItem("info" , JSON.stringify(info))


                    // Redirect User
                    this.props.history.push("/");

                    // Save api token in local storage
                    localStorage.setItem("token",data.data.token);

                    // Save user data in State
                    // ...

                }else{
                    this.setState({validCode:false , clickLoader:false})
                }
            })
            .catch(err=>{
                if(err.response){
                    if(err.response.status=== 422){
                        if(err.response.data.errors.sms_code){
                            this.setState({errorsText:err.response.data.errors.sms_code , validCode:false , clickLoader:false})
                        }
                    }else {
                        alert("کد نامعتبر میباشد لطفا مجددا تلاش کنید")
                        this.props.history.push("/login");
                    }
                }else {
                    alert("کد نامعتبر میباشد لطفا مجددا تلاش کنید")
                    this.props.history.push("/login");
                }

            })

    }
    render() {




        const { minutes, seconds  , validationCode} = this.state
        return (
            <div>



                <MDBRow className={"fv-loginPage fv-loginPage2"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p><Link to={{
                                pathname: '/',
                                test:''  /* use : this.props.location.test */
                            }}>صفحه اصلی</Link></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <p className={this.state.validCode===false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}><i className="fas fa-exclamation-triangle" />{this.state.errorsText}</p>
                            <MDBCol sm={12} className={"fv-loginPage2RightBody"}>
                                <h3>ورود به حساب کاربری</h3>
                                <MDBRow>
                                    <MDBCol md={6} sm={12}>
                                        <p>کد تایید به شماره {this.props.mobileNumber} ارسال شد</p>
                                    </MDBCol>
                                    <MDBCol md={5} sm={12}>
                                        <p><Link to={'/login'}>ویرایش شماره</Link></p>
                                    </MDBCol>
                                </MDBRow>
                                <input type="text" placeholder={'کد تایید'} value={this.state.validationCode} className={this.state.validCode===false ? "fv-redBorderError"  : "" }
                                       onChange={((e)=>this.setState({validationCode : e.target.value}))} />
                                <MDBRow className={"fv-loginPage2RightBodyButtonAndTime"}>
                                    <MDBCol md={8} sm={6}>
                                        <p> <div>
                                            { minutes === 0 && seconds === 0
                                                ? <p onClick={()=> {this.sendRepeatSms()}} className={'fv-reloadLink'}>ارسال مجدد پیامک</p>
                                                : <p>زمان باقیمانده : {minutes}:{seconds}</p>
                                            }
                                        </div></p>
                                    </MDBCol>
                                    <MDBCol md={4} sm={6}>
                                        <div className={this.state.clickLoader ? "loader" : "fv-hideLoader"}>
                                            <svg className="circular" viewBox="25 25 50 50">
                                                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                                        stroke-miterlimit="10"/>
                                            </svg>
                                        </div>

                                        <input className={this.state.clickLoader ?  "fv-hideLoader" :"fv-loginPageButton"} type="button" onClick={()=>{
                                            this.setState({clickLoader:true})
                                            {this.validation()}
                                            /*
                                            fetch('https://reqres.in/api/posts', {                     / POST
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({validationCode})
                                            })
                                                .then(response => response.json())
                                                .then(data =>{
                                                    if(data){
                                                        console.log(validationCode)
                                                        this.props.history.push('/registration')
                                                    }
                                                }) ; */
                                        }} value={"ادامه"} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={6} className={"fv-loginPageImageLeftBody"}>
                        <img src={LoginPageImage}/>
                    </MDBCol>
                </MDBRow>


            </div>
        )
    }
}
export default LoginPage2