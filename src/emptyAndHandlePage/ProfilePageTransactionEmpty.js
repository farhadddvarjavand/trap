import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation.scss"
import Footer from "../componentsPages/footer"
import Logo from "../images/Logo.png";
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {EmptyImagesPage} from "./emptyImages";

class ProfilePageCalendarEmpty extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                                   thisPageName = "تراکنش های من"/>
                </MDBContainer>
                <MDBRow className={"fv-ProfilePageLeftBody"}>
                    <ProfilePageUserInfo />

                    <EmptyImagesPage
                        title ="تراکنش های من"
                        text="شما تاکنون تراکنشی نداشته اید"
                        image={Logo}/>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageCalendarEmpty