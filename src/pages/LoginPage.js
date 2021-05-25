import React, {Component, useRef} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage.scss"
import HostStepIncreaseAndDecreaseButton from "../componentsPages/hostStepIncreaseAndDecreaseButton"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import MobileLogo from "../images/MobileLogo.png"
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox"
import HostStep4PageRightBody from "../componentsPages/hostStep4PageRightBody"
import {Link, Route, Switch, BrowserRouter as Router, Redirect} from "react-router-dom";
import MainPage from "./MainPage";
import Login from "../components2/Login";
import { sendPhoneNumber} from "../services/userService"
import simpleReactValidator from "simple-react-validator";
import axios from "axios";
import config from "../services/config.json";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            mobileNumber:'',
            eNumber:'',
            phone_number:'',
            validNumber:true,
            clickLoader:false,

            test:'',
        }
    }

     sendSms = async  () =>{

         const phone_number = {
             phone_number: this.state.phone_number,
         }


     /*    axios.post(`${config.webapi}/api/v1/login`, {
             phone_number: this.state.phone_number,
         })
             .then((response) => {
                 console.log(response);
             }, (error) => {
                 console.log(error);
             });



         await sendPhoneNumber(phone_number)
             .then(res =>console.log(res))
             .catch(err => console.log(err))

             */

         await sendPhoneNumber(phone_number).then(result => {
             const status = result.status
             const data = result.data
             if (status === 200 &&  data.status===2) {
                 // Phone number have to save in local storage for use it, in the next step
                 localStorage.setItem('phone_number', (phone_number.phone_number));
                 alert('پیامک اعتبارسنجی ارسال شد');
                 this.props.history.push("/login2");

             }else if(status === 200 &&  data.status===1){
                 alert('پیامک برای شما ارسال شده لطفا چند دقیقه دیگر تلاش مجدد فرمایید');
             }
             else{
                 this.setState({validNumber:false , clickLoader:false})
             }
         })
             .catch(error => error.response.status === 422 ?  this.setState({validNumber:false ,clickLoader:false}) : '')



    }

    render() {
        return (
            <div>
                <MDBRow className={"fv-loginPage"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p><Link to={'/mainPage'}>صفحه اصلی</Link></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <p className={this.state.validNumber===false ? "fv-alertErrorText" : 'fv-alertNotErrorText'}><i className="fas fa-exclamation-triangle" />شماره مورد نظر نامعتبر میباشد</p>

                            <MDBCol sm={12}>
                                <h3>ورود به حساب کاربری</h3>
                                {/* <p>شماره موبایل خود را وارد نمایید</p> */}
                                <MDBRow>
                                    <MDBCol md={4}>
                                        <p>شماره موبایل خود را وارد نمایید</p>
                                    </MDBCol>
                                    <MDBCol >
                                        <Link to={"/login3"} ><p>عضو شوید</p> </Link>
                                    </MDBCol>
                                </MDBRow>
                                <input type="text" placeholder={'شماره موبایل'} className={this.state.validNumber===false ? "fv-redBorderError"  : "" }  name={'phone_number'} value={this.state.phone_number}
                                       onChange={((e)=>this.setState({phone_number : e.target.value }))}/>
                                <MDBRow>
                                    <div className={this.state.clickLoader ? "loader" : "fv-hideLoader"}>
                                        <svg className="circular" viewBox="25 25 50 50">
                                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                                    stroke-miterlimit="10"/>
                                        </svg>
                                    </div>

                                    <input  className={this.state.clickLoader ?  "fv-hideLoader" :"fv-loginPageButton"} type="button" value={"ادامه"} onClick={()=>{
                                        this.setState({clickLoader:true})
                                        {this.sendSms()}


                                          /*  const { status, data } = await sendPhoneNumber(user);
                                            if (status === 200 && data.status===2) {
                                                // Phone number have to save in local storage for use it, in the next step
                                                localStorage.setItem("phone_number",phone_number);
                                                alert('پیامک اعتبارسنجی ارسال شد');
                                                history.replace("/verifySms");

                                            }else{
                                                alert('شماره نامعتبر است')
                                            } */



                                        /*  {getUserInfo((dataGet)=>{
                                            dataGet.then(response => response.json())
                                            dataGet.then(json => {
                                                    this.setState({mobileNumber:json.support.text});
                                                    console.log(this.state.mobileNumber)
                                                });
                                        }) }     */

                                        /* {sendPhoneNumber(this.state.mobileNumber)}
                                        {getUserInfo( (dataGet)=>{
                                            dataGet.then(response => response.json())
                                            dataGet.then(json => {
                                                this.setState({test:json.support.text});
                                                console.log(this.state.test)
                                            });
                                        })} */



                                        {/*
                                        fetch('https://reqres.in/api/get/1')                            // GET
                                            .then(response => response.json())
                                            .then(json => {
                                                this.setState({mobileNumber:json.support.text});
                                                this.props.history.push('/login2');
                                            });

                                        fetch('https://reqres.in/api/posts', {                     //POST
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({PostData})
                                        })
                                            .then(response => response.json())
                                            .then(data =>{
                                                if(data){
                                                    console.log(PostData)
                                                    this.setState({PostData:"Successful" })
                                                    this.props.history.push('/login2');
                                                } else this.setState({PostData:"UnSuccessful"})
                                            }) ;
                                        */}
                                    }}/>
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
export default LoginPage;