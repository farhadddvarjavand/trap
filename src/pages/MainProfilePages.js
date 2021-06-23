import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import Footer from "../componentsPages/footer"
import {getUserStock, userReserves} from "../services/userService";
import config from "../services/config.json"
import UserImage from "../images/user.png";
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";
import ProfilePageCommentsHandle from "../emptyAndHandlePage/ProfilePageCommentsHandle";
import ProfilePageCalendarHandle from "../emptyAndHandlePage/ProfilePageCalendarHandle";
import ProfilePage from "./ProfilePage";
import ProfileFavoritesPage from "./profileFavoritesPage";
import ProfilePageWallet3 from "./ProfilePageWallet3";
import ProfilePageCalender from "./ProfilePageCalender";
import ProfilePageWallet from "./ProfilePageWallet";
import AnotherPagesEmpty from "../emptyAndHandlePage/anotherPagesEmpty";
import ProfilePageReservation2 from "./ProfilePageReservation2";
import ProfilePageReservationEmpty from "../emptyAndHandlePage/ProfilePageReservationEmpty";
import ProfilePageTransaction2 from "./ProfilePageTransaction2";
import ProfilePageTransactionEmpty from "../emptyAndHandlePage/ProfilePageTransactionEmpty";
import MyAccommodationPage from "./MyAccommodationPage";
import ProfilePageReservationsRequested from "./ProfilePageReservationsRequested";
import ProfilePageGustComments2 from "./PrfilePageGustComments2";
import PrfilePageGustComments from "./PrfilePageGustComments";
import {CookiesProvider} from "react-cookie";
import ProfilePageCalendarEmpty from "../emptyAndHandlePage/ProfilePageCalendarEmpty";
import ProfilePageWallet2 from "./ProfilePageWallet2";
import ScrollToTop from "../componentsPages/ScrollToTop";
import MobileLogo from "../images/MobileLogo.png";
import LogoName from "../images/LogoName.png";
import ProfilePageChargeWallet from "./ProfilePageChargeWallet";

const commaNumber = require('comma-number')


class MainProfilePages extends Component {
    constructor(props) {
        super(props);
        if (!JSON.parse(localStorage.getItem("info"))) {
            this.props.history.push('/login');
        }
        this.state = {
            ...props,
            ...this.state,
            ...this.props,
            activeClassChevron: true,
            activeClass: '',
            stock: "",
            onclickHandel: false,
            nameAndFamily: '',
            AvatarSrc: '',

            ProfilePageReservationHandlePageSwitch: '',
        }

    }

    componentDidMount() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily = ""
        let avatar = ""
        if (info) {
            nameAndFamily = info.userInfo.fullname
            avatar = info.userInfo.avatar
        }
        this.setState({nameAndFamily: nameAndFamily, AvatarSrc: avatar})

        getUserStock()
            .then(res => {
                this.setState({stock: res.data.data})
            })
            .catch(err => console.log(err.response))
    }


    ChangeUserNameAndFamily = (nameAndFamily) => {
        this.setState({nameAndFamily: nameAndFamily})
    }
    ChangeUserAvatarSrc = (avatarSrc) => {
        this.setState({AvatarSrc: avatarSrc})
    }
    ChangeAmountPrice = () => {
        getUserStock()
            .then(res => {
                this.setState({stock: res.data.data})
            })
            .catch(err => console.log(err.response))
    }


    swetchPages = (page) => {
        this.setState({ProfilePageReservationHandlePageSwitch: page})
    }

    checkPage = () => {

        userReserves()
            .then(res => {
                console.log(res)
                if (res.data.data.length > 0) {
                    this.props.history.push("/MainProfilePages/TestProfilePages2")
                } else {
                    this.props.history.push("/ProfilePageReservationEmpty")
                    return ''
                }
            })
    }

    render() {


        return (


            <React.StrictMode>
                <BrowserRouter>

                    <CookiesProvider>

                        <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>
                            <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>

                                {/*   <HeaderSearch {...this.props} /> */}

                                {/*             **************************** header *****************                     */}


                                <div
                                    className={"fv-footerMenu fv-footerDisplayPage fv-DisplayPage fv-profilePageUserInfo"}>
                                    <MDBRow className={' fv-footerDisplayPageBody'}>
                                        <MDBCol md={2}>
                                            <Link to={'/MainProfilePages/profile'}> <i className="fa fa-user-alt"/>
                                                <a> حساب کاربری</a> </Link>
                                        </MDBCol>
                                        <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                                            <input type='searchBbox' placeholder=' جستجو شهر مورد نظر'
                                                   onChange={(e) => this.setState({searchResult: e.target.value})}/>
                                        </MDBCol>
                                        <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                                            <a onClick={() => {
                                                const mainPageSearch = {
                                                    city: `C ${this.state.searchResult}`,
                                                    numberOfPeople: '',
                                                    dateToGo: '',
                                                    dateToReturn: '',
                                                }
                                                localStorage.setItem("mainPageSearch", JSON.stringify(mainPageSearch));
                                                this.props.history.push({
                                                    pathname: "/searchHomePage/doSearch/1",
                                                    searchDatas: {
                                                        city: this.state.city,
                                                        dayToGo: mainPageSearch.dateToGo,
                                                        dateToReturn: mainPageSearch.dateToReturn,
                                                        capacity: mainPageSearch.numberOfPeople
                                                    }
                                                })

                                            }}><i className="fa fa-search"/></a>
                                        </MDBCol>

                                        <MDBCol sm={2} sm={2} className={"fv-DisplayPageLoginImageMobile"}>
                                            <img
                                                src={this.state.AvatarSrc ? `${config.webapi}/images/user//${this.state.AvatarSrc}` : MobileLogo}
                                                onClick={() => {
                                                    this.setState({onclickHandel: !this.state.onclickHandel})
                                                }}/>
                                        </MDBCol>
                                        <MDBCol sm={1}
                                                className={this.state.onclickHandel ? "fv-DisplayPageLoginSignMobile" : "fv-hideMenu"}>
                                            <i className="fas fa-caret-up" onClick={() => {
                                                this.setState({onclickHandel: !this.state.onclickHandel})
                                            }}/>
                                        </MDBCol>
                                        <MDBCol sm={1}
                                                className={this.state.onclickHandel ? "fv-hideMenu" : "fv-DisplayPageLoginSignMobile"}>
                                            <i className="fas fa-caret-left" onClick={() => {
                                                this.setState({onclickHandel: !this.state.onclickHandel})
                                            }}/>
                                        </MDBCol>
                                        <MDBCol md={6} sm={9} className={"menuMobile"}>
                                            <img src={LogoName} className={"fv-DisplayPageSearchName"}/>
                                            <img src={MobileLogo} className={"fv-DisplayPageSearchLogo"}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>


                                        <MDBRow
                                            className={this.state.onclickHandel && !localStorage.getItem("token") ? "fv-ProfilePageLeftBody fv-gustUsersMenu" : "fv-hideMenu"}> {/* profile info for mobile            if gust*/}
                                            <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
                                                <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                                    <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                                        <Link to={'/login'}><p
                                                            className={window.location.href.match(/\blogin\b/) ? "fv-reservationActive" : ''}>
                                                            <i className="fa fa-door-open"/>ورود</p></Link>
                                                        {/* <Link to={'/registration'}> <p className={ window.location.href.match(/\bregistration\b/) ? "fv-transaction" : ''}  ><i className="fa fa-address-card" />ثبت نام</p> </Link>  */}
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>

                                            <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                                                <MDBCol>
                                                    <a onClick={() => window.location.replace("/")}><p> صفحه اصلی </p>
                                                    </a>
                                                    <i className="fas fa-chevron-left"/>
                                                    <Link to={"/MainProfilePages/Profile"}><p
                                                        className={this.props.thisPageName ? "" : "fv-DisplayPagePathNow"}> پنل
                                                        کاربری </p>
                                                    </Link> {/* اگر مقدار سوم وجود داشت کلاس رنگ سبز غیر فعال شود */}
                                                    <i className={this.props.thisPageName ? "fas fa-chevron-left" : ""}/> {/* اگر مقدار سوم وجود داشت کلاس فعال شود */}
                                                    <p className={this.props.thisPageName ? "fv-DisplayPagePathNow" : ""}> {this.props.thisPageName} </p>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </MDBContainer>
                                </div>
                                {/*             **************************** header *****************                     */}

                            </MDBContainer>

                            <MDBRow className={"fv-ProfilePageLeftBody"}>

                                {/*           for mobile          */}
                                {this.state.onclickHandel ?
                                    <MDBCol md={3} className={"fv-ProfilePageUserInfoBody fv-HideDesktopForMobile"}>
                                        <img
                                            src={this.state.AvatarSrc ? `${config.webapi}/images/user/${this.state.AvatarSrc}` : UserImage}/>
                                        <h5 style={{
                                            marginTop: '7%',
                                            marginBottom: '10%'
                                        }}>{this.state.nameAndFamily}</h5>
                                        <MDBRow className={"fv-ProfilePageUserHoldingInfo"}>
                                            <MDBCol md={12}>
                                                <p>موجودی حساب شما</p>
                                                <h6>{commaNumber(this.state.stock)} تومان </h6>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                            <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                                <NavLink exact to={'/MainProfilePages/ProfileMyReservation'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-book"/>رزرو های من</p></NavLink>
                                                <NavLink to={'/MainProfilePages/ProfileMyTransaction'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-chart-bar"/>تراکنش های من</p></NavLink>
                                                <MDBRow className={"fv-ProfilePageFacilitiesMobile"}>
                                                    <MDBCol md={8} sm={8}>
                                                        <a onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}><i
                                                            className="fa fa-file-invoice"/>امکانات میزبان</a>
                                                    </MDBCol>
                                                    <MDBCol md={4} sm={4}
                                                            className={this.state.activeClassChevron ? '' : "fv-chevronHide"}>  {/*  activeClassChevron === true    ">"   */}
                                                        <a><i className="fas fa-chevron-left"
                                                              onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                                    </MDBCol>
                                                    <MDBCol md={4} sm={4}
                                                            className={this.state.activeClassChevron ? "fv-chevronHide" : ''}>    {/*  activeClassChevron === true    "v"   */}
                                                        <a><i className="fas fa-chevron-up"
                                                              onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                                    </MDBCol>
                                                </MDBRow>
                                                {this.state.activeClassChevron ? '' :
                                                    <div>
                                                        <NavLink to={'/MainProfilePages/myAccommodation'}
                                                                 activeClassName={"fv-reservationActive"}><p
                                                            className={'fv-ProfilePageUserInfoDetailsOption'}
                                                            onClick={() => this.setState({onclickHandel: false})}>اقامت
                                                            گاه های من</p></NavLink>
                                                        <NavLink to={'/MainProfilePages/profileReservations'}
                                                                 activeClassName={"fv-reservationActive"}><p
                                                            className='fv-ProfilePageUserInfoDetailsOption'
                                                            onClick={() => this.setState({onclickHandel: false})}>رزرو
                                                            های درخواستی</p></NavLink>
                                                        <NavLink to={'/MainProfilePages/ProfilePageCommentsHandle'}
                                                                 activeClassName={"fv-reservationActive"}><p
                                                            className={'fv-ProfilePageUserInfoDetailsOption'}
                                                            onClick={() => this.setState({onclickHandel: false})}> نظرات
                                                            مهمان ها</p></NavLink>
                                                        <NavLink to={'/MainProfilePages/ProfilePageCalendarHandle'}
                                                                 activeClassName={"fv-reservationActive"}><p
                                                            className={'fv-ProfilePageUserInfoDetailsOption'}
                                                            onClick={() => this.setState({onclickHandel: false})}>تقویم
                                                            من</p></NavLink>
                                                    </div>
                                                }
                                                <NavLink to={'/MainProfilePages/ProfileWallet'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-wallet"/>مدیریت مالی ویلاها</p></NavLink>
                                                <NavLink to={'/MainProfilePages/ProfilePageChargeWallet'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-wallet"/>شارژ کیف پول</p></NavLink>
                                                <NavLink to={'/MainProfilePages/profileWalletRequestWithdraw'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-chart-bar"/>درخواست برداشت</p></NavLink>
                                                <NavLink to={'/MainProfilePages/Profile'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fas fa-user"/>ویرایش پروفایل</p></NavLink>
                                                <NavLink to={'/MainProfilePages/profileFavoritesPage'}
                                                         activeClassName={"fv-reservationActive"}><p
                                                    onClick={() => this.setState({onclickHandel: false})}><i
                                                    className="fa fa-heart"/>علاقه مندی ها</p></NavLink>
                                                <NavLink to={'/'}><p><i className="fas fa-sign-out-alt"/>خروج</p>
                                                </NavLink>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol> : ''
                                }


                                {/*           for desktop          */}
                                <MDBCol md={3} className={"fv-ProfilePageUserInfoBody fv-hideMobileForDesktop"}>
                                    <img
                                        src={this.state.AvatarSrc ? `${config.webapi}/images/user/${this.state.AvatarSrc}` : UserImage}/>
                                    <h5 style={{marginTop: '7%', marginBottom: '10%'}}>{this.state.nameAndFamily}</h5>
                                    <MDBRow className={"fv-ProfilePageUserHoldingInfo"}>
                                        <MDBCol md={12}>
                                            <p>موجودی حساب شما</p>
                                            <h6>{commaNumber(this.state.stock)} تومان </h6>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                        <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                            <NavLink exact to={'/MainProfilePages/ProfileMyReservation'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-book"/>رزرو های من</p></NavLink>
                                            <NavLink to={'/MainProfilePages/ProfileMyTransaction'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-chart-bar"/>تراکنش های من</p></NavLink>
                                            <MDBRow className={"fv-ProfilePageFacilitiesMobile"}>
                                                <MDBCol md={8} sm={8}>
                                                    <a onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}><i
                                                        className="fa fa-file-invoice"/>امکانات میزبان</a>
                                                </MDBCol>
                                                <MDBCol md={4} sm={4}
                                                        className={this.state.activeClassChevron ? '' : "fv-chevronHide"}>  {/*  activeClassChevron === true    ">"   */}
                                                    <a><i className="fas fa-chevron-left"
                                                          onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                                </MDBCol>
                                                <MDBCol md={4} sm={4}
                                                        className={this.state.activeClassChevron ? "fv-chevronHide" : ''}>    {/*  activeClassChevron === true    "v"   */}
                                                    <a><i className="fas fa-chevron-up"
                                                          onClick={() => this.setState({activeClassChevron: !this.state.activeClassChevron})}/></a>
                                                </MDBCol>
                                            </MDBRow>
                                            {this.state.activeClassChevron ? '' :
                                                <div>
                                                    <NavLink to={'/MainProfilePages/myAccommodation'}
                                                             activeClassName={"fv-reservationActive"}><p
                                                        className={'fv-ProfilePageUserInfoDetailsOption'}>اقامت گاه های
                                                        من</p></NavLink>
                                                    <NavLink to={'/MainProfilePages/profileReservations'}
                                                             activeClassName={"fv-reservationActive"}><p
                                                        className='fv-ProfilePageUserInfoDetailsOption'>رزرو های
                                                        درخواستی</p></NavLink>
                                                    <NavLink to={'/MainProfilePages/ProfilePageCommentsHandle'}
                                                             activeClassName={"fv-reservationActive"}><p
                                                        className={'fv-ProfilePageUserInfoDetailsOption'}> نظرات مهمان
                                                        ها</p></NavLink>
                                                    <NavLink to={'/MainProfilePages/ProfilePageCalendarHandle'}
                                                             activeClassName={"fv-reservationActive"}><p
                                                        className={'fv-ProfilePageUserInfoDetailsOption'}>تقویم من</p>
                                                    </NavLink>
                                                </div>
                                            }
                                            <NavLink to={'/MainProfilePages/ProfileWallet'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-wallet"/>مدیریت مالی ویلاها</p></NavLink>
                                            <NavLink to={'/MainProfilePages/ProfilePageChargeWallet'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-wallet"/>شارژ کیف پول</p></NavLink>
                                            <NavLink to={'/MainProfilePages/profileWalletRequestWithdraw'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-chart-bar"/>درخواست برداشت</p></NavLink>
                                            <NavLink to={'/MainProfilePages/Profile'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fas fa-user"/>ویرایش پروفایل</p></NavLink>
                                            <NavLink to={'/MainProfilePages/profileFavoritesPage'}
                                                     activeClassName={"fv-reservationActive"}><p><i
                                                className="fa fa-heart"/>علاقه مندی ها</p></NavLink>
                                            <a onClick={() => {
                                                window.location.replace(`/`);
                                            }}><p><i className="fas fa-sign-out-alt"/>خروج</p></a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>


                                <ScrollToTop/> {/*  scroll to top page */}

                                {!this.state.onclickHandel ?
                                    <>
                                        <Route exact path={'/MainProfilePages/ProfileMyReservation'}
                                               component={ProfilePageReservation2}/>


                                        <Route exact path={'/MainProfilePages/ProfileMyTransaction'}
                                               component={ProfilePageTransaction2}/>
                                        <Route exact path={'/MainProfilePages/ProfilePageTransactionEmpty'}
                                               component={ProfilePageTransactionEmpty}/>

                                        <Route exact path={'/MainProfilePages/myAccommodation'}
                                               component={MyAccommodationPage}/>
                                        <Route exact path={'/MainProfilePages/AnotherPagesEmpty'}
                                               component={AnotherPagesEmpty}/>

                                        <Route exact path={'/MainProfilePages/profileReservations'}
                                               component={ProfilePageReservationsRequested}/>
                                        <Route exact path={'/MainProfilePages/ProfilePageReservationEmpty'}
                                               component={ProfilePageReservationEmpty}/>

                                        <Route exact path={'/MainProfilePages/ProfilePageCommentsHandle'}
                                               component={ProfilePageCommentsHandle}/>
                                        <Route path={'/MainProfilePages/profileShowGuestComments/:id'}
                                               component={ProfilePageGustComments2}/> {/* profileGustComments2 */}
                                        <Route exact path={'/MainProfilePages/profileGuestComments'}
                                               component={PrfilePageGustComments}/> {/* profileGustComments */}

                                        <Route exact path={'/MainProfilePages/ProfilePageCalendarHandle'}
                                               component={ProfilePageCalendarHandle}/>
                                        <Route exact path={'/MainProfilePages/profileCalender/:id'}
                                               component={ProfilePageCalender}/>
                                        <Route exact path={'/MainProfilePages/ProfilePageCalendarEmpty'}
                                               component={ProfilePageCalendarEmpty}/>

                                        <Route exact path={'/MainProfilePages/ProfileWallet'}
                                               component={ProfilePageWallet}/>
                                        <Route exact path={'/MainProfilePages/ProfileWalletTransactionRegistration'}
                                               component={ProfilePageWallet2}/>

                                        <Route exact path={'/MainProfilePages/profileWalletRequestWithdraw'}
                                               render={(props) => (
                                                   <ProfilePageWallet3 ChangeAmountPrice={this.ChangeAmountPrice}
                                                   />
                                               )}/>

                                        <Route exact path={'/MainProfilePages/ProfilePageChargeWallet'}
                                               component={ProfilePageChargeWallet}/>

                                        <Route exact path={'/MainProfilePages/profile'} render={(props) => (
                                            <ProfilePage ChangeUserNameAndFamily={this.ChangeUserNameAndFamily}
                                                         ChangeUserAvatarSrc={this.ChangeUserAvatarSrc}
                                            />
                                        )}/>

                                        <Route exact path={'/MainProfilePages/profileFavoritesPage'}
                                               component={ProfileFavoritesPage}/>


                                    </>
                                    :
                                    ''
                                }

                            </MDBRow>

                            <MDBRow>
                                <Footer/>
                            </MDBRow>

                        </MDBContainer>
                    </CookiesProvider>
                </BrowserRouter>
            </React.StrictMode>

        )
    }
}

export default MainProfilePages