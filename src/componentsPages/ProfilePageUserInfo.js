import {MDBCol, MDBRow} from "mdbreact";
import Logo from "../images/Logo.png";
import React from "react";
import {Link} from "react-router-dom";

class ProfilePageUserInfo extends React.Component{
    constructor() {
        super();
        this.state={
            activeClassChevron:true,
            activeClass:''

        }
    }
    setClassName = () =>{
        this.setState({activeClass:"fv-Active"})
    }
    render() {
        return(
            <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
                <img src={Logo}/>
                <p>نام و نام خانوادگی</p>
                <h5>اطلاعات کاربری</h5>
                <MDBRow className={"fv-ProfilePageUserHoldingInfo"}>
                    <MDBCol md={12}>
                        <p>موجودی حساب شما</p>
                        <h5>تومان ۵۴۲۰۰۰ </h5>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                    <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                        <Link to={'/ProfileReservation2'}><p className={ window.location.href.match(/\bProfileReservation2\b/) ? "fv-reservationActive" : ''}  ><i className="fas fa-book" />رزرو های من</p></Link>
                        <Link to={'/ProfileTransaction2'}> <p className={ window.location.href.match(/\bProfileTransaction2\b/) ? "fv-transaction" : ''}  > <i className="fas fa-chart-bar" />تراکنش های من</p> </Link>
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
                                <Link to={'/myAccommodation'}><p className={ window.location.href.match(/\bmyAccommodation\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-AccomoddationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>اقامت گاه های من</p></Link>
                                <Link to={'/profileReservations'}><p className={ window.location.href.match(/\bprofileReservations\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-RequestedReservationActive" : 'fv-ProfilePageUserInfoDetailsOption'}>رزرو های درخواستی</p></Link>
                                <Link to={'/profileGustComments2/5'}> <p className={ window.location.href.match(/\bprofileGustComments2\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-myCalenderActive" : 'fv-ProfilePageUserInfoDetailsOption'}> نظرات مهمان ها</p></Link>
                                <Link to={'/profileCalender'}><p className={ window.location.href.match(/\bprofileCalender\b/) ? "fv-ProfilePageUserInfoDetailsOption fv-gustCommentsActive" : 'fv-ProfilePageUserInfoDetailsOption'}>تقویم من</p></Link>
                            </div>
                        }
                        <Link to={'/ProfileWallet'}><p className={ window.location.href.match(/\bProfileWallet\b/) ? "fv-walletActive" : ''}  ><i className="fas fa-wallet"/>کیف پول</p></Link>
                        <Link to={'/Profile'}><p  className={ window.location.href.match(/\bProfile\b/) ? "fv-updateProfileActive" : ''} ><i className="fas fa-user" />ویرایش پروفایل</p></Link>
                        <p  className={ window.location.href.match(/\bLink\b/) ? "fv-myFavorite" : ''} ><i className="fa fa-heart" />علاقه مندی ها</p>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        )
    }
}
export default ProfilePageUserInfo