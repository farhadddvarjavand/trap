import React, {Component} from "react";
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
import {getUserInfo , sendPhoneNumber} from "../services/userService"


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            mobileNumber:'',

            test:''
        }
    }

    render() {
        const PostData = this.state.mobileNumber
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
                            <MDBCol sm={12}>
                                <h3>ورود به حساب کاربری</h3>
                                <p>شماره موبایل خود را وارد نمایید</p>
                                <input type="text" placeholder={'شماره موبایل'} value={this.state.mobileNumber} onChange={((e)=>this.setState({mobileNumber : e.target.value}))}/>
                                <MDBRow>
                                    <input className={"fv-loginPageButton"} type="button" value={"ادامه"} onClick={()=>{


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

                                        fetch('https://mahoorapps.ir/api/v1/user/getUserInfo')                            /* GET */
                                            .then(response => response.json())
                                            .then(json => {
                                                this.setState({mobileNumber:json.support.text});
                                                this.props.history.push('/login2');
                                            });

                                        fetch('https://mahoorapps.ir/api/v1/login', {                     /* POST */
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