import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageTransaction2.scss"
import "../style/MyAccommodationPage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import AccommmodationProduct from "../componentsPages/AccomodationProduct";
import {userVillas} from "../services/userService";
import config from "../services/config.json";

class MyAccommodationPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            userVillas:[]
        }
    }

    componentDidMount() {
        userVillas()
            .then(res=>res.data ? this.setState({userVillas: res.data.data}) : '')
    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-MyAccommodationPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> اقامتگاه های من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>اقامتگاه های من</h5>
                        <MDBRow>

                            {this.state.userVillas.map(userVilla=>{
                                console.log(userVilla)
                                let md = ''
                                let classNameActiveTopRightIn=""
                                let classNameActiveTopLeftIn=""
                                let classNameActiveBottonRightIn=""
                                let classNameActiveBottonLeftIn=""
                                let classNameActiveButtonIn=""
                                if(userVilla.status === "در انتظار تایید"){
                                    md=7
                                }
                                if(userVilla.status ==="غیر فعال"){
                                    md=5
                                    classNameActiveTopRightIn="fv-myAccommodationPageActiveButton"

                                }
                                if(userVilla.status ==="تایید شد"){
                                    md=4
                                    classNameActiveTopRightIn="fv-myAccommodationPageActiveButton"
                                    classNameActiveTopLeftIn="fv-myAccommodationPageActiveButton"
                                    classNameActiveBottonRightIn="fv-myAccommodationPageActiveButton"
                                    classNameActiveBottonLeftIn="fv-myAccommodationPageActiveButton"
                                    classNameActiveButtonIn="fv-myAccommodationPageActiveButton"
                                }
                                return(
                                    <AccommmodationProduct
                                        md={md}
                                        status={userVilla.status}
                                        title={userVilla.title}
                                        code={userVilla.id}
                                        mainImg={`${config.webapi}/images/villas/main/${userVilla.main_img }`}
                                        classNameActiveTopRight={classNameActiveTopRightIn}
                                        classNameActiveTopLeft={classNameActiveTopLeftIn}
                                        classNameActiveBottonRight={classNameActiveBottonRightIn}
                                        classNameActiveBottonLeft={classNameActiveBottonLeftIn}
                                        classNameActiveButton={classNameActiveButtonIn}
                                        {...this.props}/>
                                )
                            })}


                        </MDBRow>

                    </MDBCol>
                </MDBRow>

                {/* <MDBRow>
                    <Footer />
                </MDBRow>
                    */}

            </MDBContainer>
        )}
}
export default MyAccommodationPage