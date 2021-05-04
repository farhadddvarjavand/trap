import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";

class ProfilePageWallet2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            sourceOfTransaction:'',
            transactionAmount:'',
            transactionDate:'',
            transactionDescription:''

        }
    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
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
                        <p>منبع تراکنش</p>
                        <input type="text"  value={this.state.sourceOfTransaction}
                               onChange={(event)=>{this.setState({sourceOfTransaction:event.target.value})}}/>
                        <p>مبلغ تراکنش</p>
                        <input type="text"  value={this.state.transactionAmount}
                               onChange={(event)=>{this.setState({transactionAmount:event.target.value})}}/>
                        <p>تاریخ تراکنش</p>
                        <input type="text"  value={this.state.transactionDate}
                               onChange={(event)=>{this.setState({transactionDate:event.target.value})}}/>
                        <p>شرح تراکنش</p>
                        <MDBRow className={"fv-ProfilePageWallet2TextArea"}>
                            <MDBCol>
                                <textarea value={this.state.transactionDescription}
                                            onChange={(event)=>{this.setState({transactionDescription:event.target.value})}}>
                                </textarea>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ذخیره تراکنش"/>
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
export default ProfilePageWallet2