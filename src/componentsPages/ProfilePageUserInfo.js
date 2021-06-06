import {MDBCol, MDBRow} from "mdbreact";
import Logo from "../images/Logo.png";
import React from "react";
import {Link} from "react-router-dom";
import {getUserStock} from "../services/userService";
import config from "../services/config.json";
import MobileMenu from "../images/MobileMenu.png";

class ProfilePageUserInfo extends React.Component{
    constructor() {
        super();
        this.state={
            activeClassChevron:true,
            activeClass:'',
            stock:"",

        }
    }
    componentDidMount() {
        getUserStock()
            .then(res=>{
                this.setState({stock:res.data.data})
            })
            .catch(err=>console.log(err.response))
    }

    setClassName = () =>{
        this.setState({activeClass:"fv-Active"})
    }

    render() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }
        return(
            <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
                <img src={avatar ? `${config.webapi}/images/user/${avatar}` : Logo}/>
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
                        <Link to={'/ProfilePageReservationHandle'}><p className={ window.location.href.match(/\bProfileReservation2\b/) ? "fv-reservationActive" : ''}  ><i className="fas fa-book" />رزرو های من</p></Link>
                        <Link to={'/ProfilePageTransactionHandle'}> <p className={ window.location.href.match(/\bProfileTransaction2\b/) ? "fv-transaction" : ''}  > <i className="fas fa-chart-bar" />تراکنش های من</p> </Link>
                        <MDBRow className={"fv-ProfilePageFacilitiesMobile"}>
                            <MDBCol md={8} sm={8}>
                                <a onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}><i className="fa fa-file-invoice" />امکانات میزبان</a>
                            </MDBCol>
                            <MDBCol md={4} sm={4} className={this.state.activeClassChevron ? '' : "fv-chevronHide" }>  {/*  activeClassChevron === true    ">"   */}
                                <a><i className="fas fa-chevron-right" onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                            </MDBCol>
                            <MDBCol md={4} sm={4}  className={this.state.activeClassChevron ? "fv-chevronHide" : '' }>    {/*  activeClassChevron === true    "v"   */}
                                <a><i className="fas fa-chevron-down" onClick={()=>this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                            </MDBCol>
                        </MDBRow>
                        {this.state.activeClassChevron ? '' :
                            <div>
                                <Link to={'/MyAccomodationProfilePageHandle'}><p className={ window.location.href.match(/\bmyAccommodation\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-AccomoddationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>اقامت گاه های من</p></Link>
                                <Link to={'/ProfilePageReservationRequestedHandle'}><p className={ window.location.href.match(/\bprofileReservations\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-RequestedReservationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>رزرو های درخواستی</p></Link>
                                <Link to={'/ProfilePageCommentsHandle'}> <p className={ window.location.href.match(/\bprofileGustComments2\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-myCalenderActive" : 'fv-ProfilePageUserInfoDetailsOption'}> نظرات مهمان ها</p></Link>
                                <Link to={'/ProfilePageCalendarHandle'}><p className={ window.location.href.match(/\bprofileCalender\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-gustCommentsActive" : 'fv-ProfilePageUserInfoDetailsOption'}>تقویم من</p></Link>
                            </div>
                        }
                        <Link to={'/ProfileWalletPageHandle'}><p className={ window.location.href.match(/\bProfileWallet\b/) ? "fv-walletActive" : ''}  ><i className="fas fa-wallet"/>کیف پول</p></Link>
                        <Link to={'/ProfileWallet3'}><p className={ window.location.href.match(/\bProfileWallet3\b/) ? "fv-walletActive" : ''}  ><i className="fas fa-chart-bar" />درخواست برداشت</p></Link>
                        <Link to={'/Profile'}><p  className={ window.location.href.match(/\bProfile\b/) ? "fv-updateProfileActive" : ''} ><i className="fas fa-user" />ویرایش پروفایل</p></Link>
                        <Link to={'/profileFavoritesPage'}><p  className={ window.location.href.match(/\bprofileFavoritesPage\b/) ? "fv-myFavoritesActive" : ''} ><i className="fa fa-heart" />علاقه مندی ها</p></Link>
                        <Link to={'/mainPage'}><p><i className="fas fa-home" />صفحه اصلی</p></Link>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        )
    }
}
export default ProfilePageUserInfo