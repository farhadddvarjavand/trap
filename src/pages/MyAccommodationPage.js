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
import "../style/scroolBodyProfilePages.scss"

class MyAccommodationPage extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('login');
        }
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
                    <HeaderSearch  {...this.props}
                                   thisPageName = "اقامتگاه های من" />
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>

                        <MDBRow className={"fv-addMyAccommodation"}>
                            <MDBCol md={10} sm={6} >
                                <h5 className={"fv-ProfilePageCalenderTextMobile"}>اقامتگاه های من</h5>
                            </MDBCol>
                            <MDBCol md ={1} sm={6}>
                                <input type={"button"} value={"+"} onClick={()=>{
                                    localStorage.removeItem("step1")
                                    localStorage.removeItem("step2")
                                    localStorage.removeItem("step2-2")
                                    localStorage.removeItem("step3")
                                    localStorage.removeItem("step4")
                                    localStorage.removeItem("step5")
                                    localStorage.removeItem("step5-2")
                                    localStorage.removeItem("editCode")
                                    this.props.history.push('/hostStepBasicInformation')
                                }}/>

                            </MDBCol>
                        </MDBRow>
                        <MDBRow>

                            {this.state.userVillas.map(userVilla=>{
                               // console.log(userVilla)
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

                 <MDBRow>
                    <Footer />
                </MDBRow>


            </MDBContainer>
        )}
}
export default MyAccommodationPage