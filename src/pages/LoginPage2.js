import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage2.scss"
import HostStepIncreaseAndDecreaseButton from "../componentsPages/hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import MobileLogo from "../images/MobileLogo.png"
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"
import HostStep4PageRightBody from "../componentsPages/hostStep4PageRightBody"
import {Link} from "react-router-dom";

class LoginPage2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            validationCode:'',
            minutes: 2,
            seconds: 0,

        }
    }


    componentDidMount() {
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

    componentWillUnmount() {
        clearInterval(this.myInterval)
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
                                pathname: '/mainPage',
                                test:''  /* use : this.props.location.test */
                            }}>صفحه اصلی</Link></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
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
                                <input type="text" placeholder={'کد تایید'} value={this.state.validationCode} onChange={((e)=>this.setState({validationCode : e.target.value}))} />
                                <MDBRow className={"fv-loginPage2RightBodyButtonAndTime"}>
                                    <MDBCol md={8} sm={6}>
                                        <p> <div>
                                            { minutes === 0 && seconds === 0
                                                ? <p><Link to={'/login'}>ویرایش شماره</Link></p>
                                                : <p>زمان باقیمانده : {minutes}:{seconds}</p>
                                            }
                                        </div></p>
                                    </MDBCol>
                                    <MDBCol md={4} sm={6}>
                                        <input className={"fv-loginPageButton"} type="button" onClick={()=>{

                                            fetch('https://reqres.in/api/posts', {                     /* POST */
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({validationCode})
                                            })
                                                .then(response => response.json())
                                                .then(data =>{
                                                    if(data){
                                                        console.log(validationCode)
                                                        this.props.history.push('/login3')
                                                    }
                                                }) ;
                                        }} value={"ادامه"} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={6} className={"fv-loginPageImageLeftBody"}>
                        <img src={MobileLogo}/>
                    </MDBCol>
                </MDBRow>


            </div>
        )
    }
}
export default LoginPage2