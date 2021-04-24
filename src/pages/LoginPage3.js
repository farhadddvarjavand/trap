import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/LoginPage3.scss"
import MobileLogo from "../images/MobileLogo.png"
import {Link} from "react-router-dom";

class LoginPage3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            nameAndLastNAme:'',
            mobileNumber:'',
        }
    }

    render() {
        const {nameAndLastNAme , mobileNumber} = this.state
        return (
            <div>
                <MDBRow className={"fv-loginPage fv-loginPage3"} >
                    <MDBCol md={6} sm={12} className={"fv-loginPageBody"}>
                        <MDBRow className={"fv-LoginPageHeader"}>
                            <MDBCol>
                                <i className="fas fa-chevron-right" /><p><Link to={'/mainPage'}>صفحه اصلی</Link></p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-loginPageBodyOne"}>
                            <MDBCol sm={12}>
                                <h4>ثبت نام</h4>
                                <input type="text" placeholder={"نام و نام خانوادگی"}  value={nameAndLastNAme} onChange={((e)=>this.setState({nameAndLastNAme : e.target.value}))} />
                                <input type="text" placeholder={"شماره موبایل"} className={"fv-loginPage3MobileNumber"} value={mobileNumber} onChange={((e)=>this.setState({mobileNumber : e.target.value}))} />
                                <MDBRow>
                                    <input className={"fv-loginPageButton"} type="button" value={"ثبت نام"} onClick={ ()=>{
                                        fetch('https://reqres.in/api/posts', {                     /* POST */
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({nameAndLastNAme,mobileNumber})
                                        })
                                            .then(response => response.json())
                                            .then(data =>{
                                                if(data){
                                                    console.log(nameAndLastNAme,mobileNumber)
                                                    this.props.history.push('/mainPage')
                                                }
                                            }) ;
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
export default LoginPage3