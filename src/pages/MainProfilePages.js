import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {
    updateUserInfo,
    getUserInformation,
    SetImages,
    updateUserAvatar,
    getUserStock,
    userReserves
} from "../services/userService";
import axios from "axios";
import config from "../services/config.json"
import http from "../services/httpService";
import Logo from "../images/Logo.png";
import UserImage from "../images/user.png";
import {Link, NavLink} from "react-router-dom";
import ProfileWalletPageHandle from "../emptyAndHandlePage/ProfileWalletPageHandle";
import ProfilePageReservationHandle from "../emptyAndHandlePage/ProfilePageReservationHandle";
import ProfilePageTransactionHandle from "../emptyAndHandlePage/ProfilePageTransactionHandle";
import MyAccomodationProfilePageHandle from "../emptyAndHandlePage/MyAccomodationProfilePageHandle";
import ProfilePageReservationRequestedHandle from "../emptyAndHandlePage/ProfilePageReservationRequestedHandle";
import ProfilePageCommentsHandle from "../emptyAndHandlePage/ProfilePageCommentsHandle";
import ProfilePageCalendarHandle from "../emptyAndHandlePage/ProfilePageCalendarHandle";
import ProfilePage from "./ProfilePage";
import ProfileFavoritesPage from "./profileFavoritesPage";
import ProfilePageWallet3 from "./ProfilePageWallet3";
import MainPage from "./MainPage";
import TestProfilePages2 from "./TestProfilePages2";
import ProfilePageCalender from "./ProfilePageCalender";


class MainProfilePages extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('login');
        }
        this.state={
            activeClassChevron:true,
            activeClass:'',
            stock:"",

            ProfilePageReservationHandlePageSwitch:'',
        }

    }
    componentDidMount() {
        getUserStock()
            .then(res=>{
                this.setState({stock:res.data.data})
            })
            .catch(err=>console.log(err.response))
    }



    swetchPages = (page) =>{
      this.setState({ProfilePageReservationHandlePageSwitch:page})
    }

    checkPage = () =>{

        userReserves()
            .then(res=>{
                console.log(res)
                if (res.data.data.length>0){
                    this.props.history.push("/MainProfilePages/TestProfilePages2")
                }else {
                    this.props.history.push("/ProfilePageReservationEmpty")
                    return ''
                }
            })
    }

    render() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }
        console.log(this.props.match.params.Page)

        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}  />  {/* for mobile same that */}
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
                        <img src={avatar ? `${config.webapi}/images/user/${avatar}` : UserImage}/>
                        <p>{nameAndFamily}</p>
                        <h5>اطلاعات کاربری</h5>
                        <MDBRow className={"fv-ProfilePageUserHoldingInfo"}>
                            <MDBCol md={12}>
                                <p>موجودی حساب شما</p>
                                <h5>{this.state.stock}</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                            <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                <NavLink to={'/MainProfilePages/ProfilePageReservationHandle'}><p className={ window.location.href.match(/\bProfileMyReservation\b/) ? "fv-reservationActive" : ''}  ><i className="fas fa-book" />رزرو های من</p></NavLink>
                                <NavLink to={'/MainProfilePages/ProfilePageTransactionHandle'}> <p className={ window.location.href.match(/\bProfileMyTransaction\b/) ? "fv-transaction" : ''}  > <i className="fas fa-chart-bar" />تراکنش های من</p> </NavLink>
                                <MDBRow className={"fv-ProfilePageFacilitiesMobile"}>
                                    <MDBCol md={8} sm={8}>
                                        <a onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}><i className="fa fa-file-invoice" />امکانات میزبان</a>
                                    </MDBCol>
                                    <MDBCol md={4} sm={4} className={this.state.activeClassChevron ? '' : "fv-chevronHide" }>  {/*  activeClassChevron === true    ">"   */}
                                        <a><i className="fas fa-chevron-left" onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                    </MDBCol>
                                    <MDBCol md={4} sm={4}  className={this.state.activeClassChevron ? "fv-chevronHide" : '' }>    {/*  activeClassChevron === true    "v"   */}
                                        <a><i className="fas fa-chevron-up" onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                    </MDBCol>
                                </MDBRow>
                                {this.state.activeClassChevron ? '' :
                                    <div>
                                        <NavLink to={'/MainProfilePages/MyAccomodationProfilePageHandle'}><p className={ window.location.href.match(/\bmyAccommodation\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-AccomoddationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>اقامت گاه های من</p></NavLink>
                                        <NavLink to={'/MainProfilePages/ProfilePageReservationRequestedHandle'}><p className={ window.location.href.match(/\bprofileReservations\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-RequestedReservationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>رزرو های درخواستی</p></NavLink>
                                        <NavLink to={'/MainProfilePages/ProfilePageCommentsHandle'}> <p className={ window.location.href.match(/\bprofileShowGuestComments\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-myCalenderActive" : 'fv-ProfilePageUserInfoDetailsOption'}> نظرات مهمان ها</p></NavLink>
                                        <NavLink to={'/MainProfilePages/ProfilePageCalendarHandle'}><p className={ window.location.href.match(/\bprofileCalender\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-gustCommentsActive" : 'fv-ProfilePageUserInfoDetailsOption'}>تقویم من</p></NavLink>
                                    </div>
                                }
                                <NavLink to={'/MainProfilePages/ProfileWalletPageHandle'}><p className={ window.location.href.match(/\bProfileWallet\b/) ? "fv-walletActive" : ''}  ><i className="fas fa-wallet"/>کیف پول</p></NavLink>
                                <NavLink to={'/MainProfilePages/profileWalletRequestWithdraw'}><p className={ window.location.href.match(/\bprofileWalletRequestWithdraw\b/) ? "fv-walletActive" : ''}  ><i className="fas fa-chart-bar" />درخواست برداشت</p></NavLink>
                                <NavLink to={'/MainProfilePages/Profile'}><p  className={ window.location.href.match(/\bProfile\b/) ? "fv-updateProfileActive" : ''} ><i className="fas fa-user" />ویرایش پروفایل</p></NavLink>
                                <NavLink to={'/MainProfilePages/profileFavoritesPage'}><p  className={ window.location.href.match(/\bprofileFavoritesPage\b/) ? "fv-myFavoritesActive" : ''} ><i className="fa fa-heart" />علاقه مندی ها</p></NavLink>
                                <NavLink to={'/'}><p><i className="fas fa-home" />صفحه اصلی</p></NavLink>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    {/* */}
                    {this.props.match.params.page === "ProfilePageReservationHandle" ? <ProfilePageReservationHandle /> : '' }


                    {this.props.match.params.page === "ProfilePageTransactionHandle" ? <ProfilePageTransactionHandle /> : '' }

                    {this.props.match.params.page === "MyAccomodationProfilePageHandle" ? <MyAccomodationProfilePageHandle /> : '' }

                    {this.props.match.params.page === "ProfilePageReservationRequestedHandle" ? <ProfilePageReservationRequestedHandle /> : '' }

                    {this.props.match.params.page === "ProfilePageCommentsHandle" ? <ProfilePageCommentsHandle {...this.props} /> : '' }

                    {this.props.match.params.page === "ProfilePageCalendarHandle" ? <ProfilePageCalendarHandle  {...this.props} /> : '' }

                    {this.props.match.params.page === `profileCalender` ? <ProfilePageCalender  {...this.props}/> : '' }

                    {this.props.match.params.page === "ProfileWalletPageHandle" ? <ProfileWalletPageHandle /> : '' }

                    {this.props.match.params.page === "profileWalletRequestWithdraw" ? <ProfilePageWallet3 /> : '' }

                    {this.props.match.params.page === "Profile" ? <ProfilePage /> : '' }

                    {this.props.match.params.page === "profileFavoritesPage" ? <ProfileFavoritesPage /> : '' }





                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default MainProfilePages