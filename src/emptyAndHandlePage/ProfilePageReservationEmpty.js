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
import "./profilePageReservationEmpty.scss"

class ProfilePageCalendarEmpty extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage  fv-ProfilePage fv-ProfilePageReservation  fv-profilePageReservationEmpty"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                                   thisPageName = "رزورو های من"/>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>
                    <ProfilePageUserInfo />

                    <EmptyImagesPage
                        title ="رزورو های من"
                        text="شما تاکنون رزروی نداشته اید"
                        image={Logo}/>

                    <MDBRow className={"fv-hostStepPage2LeftButtonBody"}>
                        <input type="button" value="رزرو اقامتگاه"  className={"fv-hostStepPage1LeftButton"} onClick={()=>{
                             this.props.history.push('/searchHomePage/Newest/1')

                        }}/>
                    </MDBRow>

                </MDBRow>



                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageCalendarEmpty