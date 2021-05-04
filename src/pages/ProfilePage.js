import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            nameAndFamily:'',
            mobileNumber:'',
            emailAddress:'',
            nationalCode:'',
            job:'',
            education:'',
            foreignTab:'',
            cardNumber:'',
            shabaNumber:'',
        }

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> پنل کاربری </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                   <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <h5>اطلاعات کاربری</h5>
                        <p>نام و نام خانوادگی</p>
                        <input type="text" value={this.state.nameAndFamily}
                               onChange={(e)=>this.setState({nameAndFamily:e.target.value})}/>
                        <p>شماره موبایل</p>
                        <input type="text" value={this.state.mobileNumber}
                               onChange={(e)=>this.setState({mobileNumber:e.target.value})}/>
                        <p>آدرس ایمیل</p>
                        <input type="text" value={this.state.emailAddress}
                               onChange={(e)=>this.setState({emailAddress:e.target.value})}/>
                        <p>کد ملی</p>
                        <input type="text" value={this.state.nationalCode}
                               onChange={(e)=>this.setState({nationalCode:e.target.value})}/>
                        <p>شغل</p>
                        <input type="text" value={this.state.job}
                               onChange={(e)=>this.setState({job:e.target.value})}/>
                        <p>تحصیلات</p>
                        <input type="text" value={this.state.education}
                               onChange={(e)=>this.setState({education:e.target.value})}/>
                        <p>زبانه خارجه</p>
                        <input type="text" value={this.state.foreignTab}
                               onChange={(e)=>this.setState({foreignTab:e.target.value})}/>
                        <p>شماره کارت</p>
                        <input type="text" value={this.state.cardNumber}
                               onChange={(e)=>this.setState({cardNumber:e.target.value})}/>
                        <p>شماره شبا</p>
                        <input type="text" value={this.state.shabaNumber}
                               onChange={(e)=>this.setState({shabaNumber:e.target.value})}/>
                        <MDBRow>
                            <MDBCol md={12} sm={12} className={'fv-ProfilePageUserSetInfoButton fv-profilePageEnButton'} >
                                <input type="button" value="ذخیره"/>
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
export default ProfilePage