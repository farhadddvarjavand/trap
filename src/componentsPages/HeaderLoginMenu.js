import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {Link} from "react-router-dom";
import config from "../services/config.json";
import MobileLogo from "../images/MobileLogo.png";
import FotterpageLogo from "../images/Logo.png";
import MobileMenu from "../images/MobileMenu.png";
import LogoName from "../images/LogoName.png";
import React from "react";
import "../style/SearchHomePage.css"
import "../style/headerLoginMenu.scss"

class HeaderLoginMenu extends React.Component{
    constructor() {
        super();
        this.state={
            onclickButtonHandle:true,
        }

    }

    render() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }

        return <MDBContainer className={"fv-SearchHomePage headerLoginMenu"}>
            <MDBContainer className={'fv-SearchHomePageBodyMobile fv-footerMenu main'}>
            <MDBRow className={'fv-footerMenuRibbonMobile'}>   {/* mobile menu */}
                <MDBCol sm={8} className={'fv-footerMenuImageMobile'}>
                    <img src={avatar ? `${config.webapi}/images/user/${avatar}` : MobileMenu} onClick={()=>{
                        this.setState({onclickHandelMobileMenu:!this.state.onclickHandelMobileMenu})
                    }}/>
                </MDBCol>
                <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                    <img src={LogoName} />
                </MDBCol>
                <MDBCol sm={2}>
                    <img src={MobileLogo} />
                </MDBCol>
            </MDBRow>

            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>     {/* mobile menu  gust or host  display menu*/}

                <MDBRow className={this.state.onclickHandelMobileMenu && localStorage.getItem("token") ?  "fv-ProfilePageLeftBody fv-hostUsersMenuSearchPage" : "fv-hideMenuSearchPageMobile"}> {/* profile info for mobile             if user*/}

                    <MDBContainer className={ `fv-containerOptionMainPageRowTop `}>
                        <MDBRow className={"fv-cascadeOptionMainPageRowTop"}>
                            <MDBCol md={12} sm={12}>
                                <MDBRow>
                                    <MDBCol md={2} sm={2}>
                                        <img src={avatar ? `${config.webapi}/images/user/${avatar}` : MobileLogo} />
                                    </MDBCol>
                                    <MDBCol className={"fv-textInToCascadeOptionMainPage"} md={12} sm={12}>
                                        <MDBRow>
                                            <MDBCol>
                                                <a><h5>{nameAndFamily}</h5></a>
                                            </MDBCol>

                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol>
                                                <Link to={"/Profile"}><a>مشاهده حساب کاربری</a></Link>
                                            </MDBCol>

                                        </MDBRow>

                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-cascadeOptionMainPage"}>
                            <MDBCol md={12} sm={12}>
                                <Link to={"/myAccommodation"}> <i className="fa fa-credit-card" />
                                    <a><p>اقامت گاه های من</p></a> </Link>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-cascadeOptionMainPage"}>
                            <MDBCol md={12} sm={12}>
                                <Link to={"/ProfileReservation2"}> <i className="fa fa-receipt" />
                                    <a><p>رزور های من</p></a> </Link>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus fv-userInfoButtonCascadeMobile"}>
                            <MDBCol md={12} sm={12}>
                                <Link to={"/ProfileReservation2"}> <i className="fa fa-laptop-house" />
                                    <a><p>میزبان شوید</p></a> </Link>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus"}>
                            <MDBCol md={12} sm={12}>
                                <a onClick={()=>{
                                    localStorage.clear()
                                    window.location.reload();
                                }}> <i className="fa fa-sign-out-alt" />
                                    <p>خروج از حساب کاربری</p></a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </MDBRow>

                <MDBRow className={this.state.onclickHandelMobileMenu && !localStorage.getItem("token") ? "fv-ProfilePageLeftBody fv-gustUsersMenuSearchPage fv-ProfilePageUserInfoBodySearchPage": "fv-hideMenuSearchPageMobile"}> {/* profile info for mobile            if gust*/}
                    <MDBCol md={3} className={""}>
                        <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                            <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                <Link to={'/login'}><p className={ window.location.href.match(/\blogin\b/) ? "fv-reservationActive" : ''}  ><i className="fa fa-door-open" />ورود</p></Link>
                                <Link to={'/login3'}> <p className={ window.location.href.match(/\blogin3\b/) ? "fv-transaction" : ''}  ><i className="fa fa-address-card" />ثبت نام</p> </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            </MDBContainer>

            <MDBRow className={'fv-footerMenuRibbon'}>
                <MDBCol md={1}>
                    <i className={localStorage.getItem("token") ? "" : "fa fa-user-alt"}/>
                    <a className={localStorage.getItem("token") ? "fv-hideButtonRegister" : ""}> <Link to={'/login'}>ورود</Link></a>
                </MDBCol>
                <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>
                    <input className={localStorage.getItem("token") ? ""  : "fv-hideButtonRegister"} type='button' value=' میزبان شوید' onClick={()=> this.props.history.push('/hostStep1')}/>
                </MDBCol>
                <MDBCol md={9}>
                    <img src={FotterpageLogo} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    }
}
export default HeaderLoginMenu