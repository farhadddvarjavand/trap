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


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            mobileNumber:'',
        }
    }

    render() {
        return (
            <div>
                <MDBRow className={"fv-loginPage"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p>صفحه اصلی</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <MDBCol sm={12}>
                                <h3>ورود به حساب کاربری</h3>
                                <p>شماره موبایل خود را وارد نمایید</p>
                                <input type="text" placeholder={'شماره موبایل'} value={this.state.mobileNumber} onChange={((e)=>this.setState({mobileNumber : e.target.value}))}/>
                                <MDBRow>
                                    <input className={"fv-loginPageButton"} type="button" value={"ادامه"} onClick={()=>{
                                        fetch('https://reqres.in/api/get/1')
                                            .then(response => response.json())
                                            .then(json => {
                                                this.setState({mobileNumber:json.support.text});
                                                this.props.history.push('/MyAccommodation');
                                            });
                                    }}/>
                                </MDBRow>
                                <Link to={'/MyAccommodation'}>API</Link>
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