import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import "../style/profileFavoritesPage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import Product from "../componentsPages/Product";
import config from "../services/config.json";
import ProductFavorites from "../componentsPages/ProductFavorites";
import {favorites} from "../services/userService";
import CalendarLinear from "../data/CalenddarLinear";

class ProfilePageWallet2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            favoriteData:[],
            sourceOfTransaction:'',
            transactionAmount:'',
            transactionDate:'',
            transactionDescription:'',


        }
    }

    componentDidMount() {
        favorites()
            .then(res=>this.setState({favoriteData:res.data.data}))
    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2 fv-profileFavoritesPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}/>
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> علاقه مندی های من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>رزورو های من</h5>


                        <MDBRow>
                            <MDBRow className={"fv-ProfilePageLeftBody"}>

                                {this.state.favoriteData.map(favoritedatas =>{
                                    if(favoritedatas.details)   ///// ///// ///// ///// ///// //// /// باید حذف شود   //// //// //
                                    return   <MDBCol md={4} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                                        <ProductFavorites srcImage={`${config.webapi}/images/villas/main/${favoritedatas.main_img }`}
                                                          rate={favoritedatas.score}
                                                          topic={favoritedatas.title}
                                                          location={favoritedatas.city}
                                                          numberOfRoom={favoritedatas.details.bedroom}
                                                          capacity={favoritedatas.details.max_capacity}
                                                          price={favoritedatas.details.normal_cost}
                                                          id={favoritedatas.id}

                                        />
                                    </MDBCol>
                                })}

                            </MDBRow>
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