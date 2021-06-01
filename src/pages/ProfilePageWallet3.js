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

class ProfilePageWallet3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            amountRequested:'',
        }

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2 fv-ProfilePageWallet3"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}/>
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p>صفحه اصلی</p>
                            <i className="fas fa-chevron-left" />
                            <p>پنل کاربری</p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}>ایجاد تراکنش</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <h5>درخواست برداشت</h5>
                        <p>میزان مبلغ درخواستی خود را بنوسید</p>
                        <input type="text" placeholder="تومان" value={this.state.amountRequested}
                               onChange={(event)=>{this.setState({amountRequested:event.target.value})}} />


                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ارسال درخواست" onClick={()=>{

                                    if(this.state.amountRequested){
                                        withdrawal(this.state.amountRequested)
                                            .catch(err=>{if(err.response.data.errors.requested_amount[0]){
                                                return alert('مقدار نامعتبر میباشد')
                                            }})
                                    }
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
export default ProfilePageWallet3