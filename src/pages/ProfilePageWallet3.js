import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import "../style/ProfilePageWallet3.scss"
import Footer from "../componentsPages/footer"
import MobileMenu from "../images/MobileMenu.png"
import Product from "../componentsPages/Product";
import TopicsMainPage from "../componentsPages/topicsMainPage";
import Calender from "../componentsPages/calender";
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {withdrawal} from "../services/userService";
import {waitingForCalculate} from "../componentsPages/WaitingLoad";

class ProfilePageWallet3 extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('/login');
        }
        this.state={
            amountRequested:'',
            waitingButton:false,
        }

    }

    render() {
        return(
            <div className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2 fv-ProfilePageWallet3"}>

                <div className={"fv-ProfilePageLeftBody"}>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <h5>درخواست برداشت</h5>
                        <p>میزان مبلغ درخواستی خود را بنوسید</p>
                        <input type="text" placeholder="تومان" value={this.state.amountRequested}
                               onChange={(event)=>{this.setState({amountRequested:event.target.value})}} />


                        <MDBRow>
                            <MDBCol md={12} sm={12} className={this.state.waitingButton ?  "fv-hideForWaiting" :"fv-ProfilePageUserSetInfoButton"} >
                                <input type="button" value="ارسال درخواست" className={this.state.waitingButton ?  "fv-hideForWaiting" : ""} onClick={()=>{
                                    this.setState({waitingButton:true})

                                    const withdrow  = {
                                        requested_amount:this.state.amountRequested
                                    }
                                        withdrawal(withdrow)
                                            .then(res=>{
                                                if(res.data.status === 1){
                                                    alert("درخواست بررداشت با موفقیت ثبت شد")
                                                    this.props.history.push(`/MainProfilePages/ProfileMyTransaction`)
                                                    console.log(res)  //s درخواست بررداشت باید فرستاده بشود  // "Withdrawal request created"
                                                }else {
                                                    alert(res.data.data)
                                                }

                                                this.setState({waitingButton:false})
                                            })
                                            .catch(err=>{if(err.response.data.errors.requested_amount[0]){
                                                 alert('مقدار نامعتبر میباشد')

                                                this.setState({waitingButton:false})
                                            }})
                                }}/>

                            </MDBCol>
                            <MDBCol md={12} sm={12}>
                                {waitingForCalculate(this.state.waitingButton, "fv-waitingButtonWalletPage3")}
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </div>


            </div>
        )}
}
export default ProfilePageWallet3