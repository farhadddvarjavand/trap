import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageReservation.scss"
import "../style/ProfilePageWallet.scss"
import "../style/ProfilePageCalender.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import Calender from "../componentsPages/calender";
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import CalendarForProfile from "../data/CalendarForProfile";
import {villaDates} from "../services/userService";

class ProfilePageCalender extends Component {
    constructor(props) {
        super(props);
        this.state={
            changeStatusSelectedDays:'title',
            PriceChangeStatusSelectedDays:'',
        }

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageGustComments2 fv-ProfilePageCalender"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> تراکنش های من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo fv-ProfilePageCalenderBody"}>

                        <MDBRow className={"fv-ProfilePageCalenderImageAndContent"}>
                            <MDBCol md={2} sm={3}>
                                <img src={MobileLogo}/>
                            </MDBCol>
                            <MDBCol md={7} sm={7}>
                                <MDBRow>
                                    <h5>بهار</h5>
                                </MDBRow>
                                <MDBRow>
                                    <p>۳۱ مهرماه ۸۹۳۱</p>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-ProfilePageCalenderSelectContentMobile"}>
                            <MDBCol>
                                <h5 className={"fv-ProfilePageCalenderChoseCommentsText"}>با انتخاب روزهای مورد نظر تغییر مورد نظر خود را اعمال کنید</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBContainer className={"fv-profilePageCalenderInnerMobile"}>

                            {/*
                            <MDBRow className={"fv-ProfilePageCalenderMonthName"}>
                                <MDBCol md={1}>
                                    <p><i className="fa fa-file-invoice" /></p>
                                </MDBCol>
                                <MDBCol  md={8}>
                                    <h5>اسفند </h5>
                                </MDBCol>
                                <MDBCol  md={1}>
                                    <p><i className="fa fa-file-invoice" /></p>
                                </MDBCol>
                            </MDBRow>


                                <MDBCol md={1}>
                                    <p>ش</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>ی</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>د</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>س</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>چ</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>پ</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <p>ج</p>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageCalenderDayPart"}>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1} className={"fv-ProfilePageCalenderHoliday"}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageCalenderDayPart"}>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1} className={"fv-ProfilePageCalenderHoliday"}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageCalenderDayPart"}>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1} className={"fv-ProfilePageCalenderHoliday"}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageCalenderDayPart"}>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1} className={"fv-ProfilePageCalenderHoliday"}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageCalenderDayPart fv-ProfilePageCalenderDayPartEnd"}>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                                <MDBCol md={1} className={"fv-ProfilePageCalenderHoliday"}>
                                    <input type="Checkbox"/>
                                    <p className={"fv-ProfilePageCalenderDay"}>1</p>
                                    <p>200000</p>
                                </MDBCol>
                            </MDBRow>
                            */}
                            <MDBRow className={"fv-ProfilePageCalenderDayName"}>
                                <CalendarForProfile />
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageCalenderDayReserve"}>
                                <MDBCol md={4}>
                                    <MDBRow>
                                        <p>تغییر وضعیت روزهای انتخاب شده</p>
                                    </MDBRow>
                                    <MDBRow>
                                        <select value={this.state.changeStatusSelectedDays} onChange={(event)=>this.setState({changeStatusSelectedDays:event.target.value})}>
                                            <option value='title' disabled>وضعیت</option>
                                            <option value="1">تعطیل</option>
                                            <option value="2">تکمیل</option>
                                            <option value="3">غیر قابل رزرو</option>
                                        </select>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={7}>
                                    <MDBRow>
                                        <p>تغییر قیمت روزهای انتخاب شده</p>
                                    </MDBRow>
                                    <MDBRow>
                                      <input type="text" placeholder={"تومان"} value={this.state.PriceChangeStatusSelectedDays}
                                      onChange={(e)=>this.setState({PriceChangeStatusSelectedDays:e.target.value})}/>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                                <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input type="button" value="ذخیره پیام"/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        <MDBContainer className={"fv-ProfilePageCalenderMobile"}>
                            <h5 className={"fv-ProfilePageCalenderTextMobile"}>تقویم من</h5>

                            <MDBRow className={"fv-ProfilePageReservationSetInfo"}>
                                <MDBCol md={4} sm={12} className={""}>
                                    <select>
                                        <option>
                                            نام اقامت گاه
                                        </option>
                                    </select>
                                </MDBCol>
                                <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                    <input type="button" value="جستجو"/>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageCalenderImageAndContentMobile"}>
                                <MDBCol md={2} sm={2}>
                                    <img src={MobileLogo}/>
                                </MDBCol>
                                <MDBCol md={7} sm={7}>
                                        <h5>بهار</h5>

                                        <p>۳۱ مهرماه ۸۹۳۱</p>
                                </MDBCol>
                            </MDBRow>


                            <MDBRow className={"fv-DisplayPageDetails"}>
                                    <MDBCol md={8} className={"fv-DisplayPageDetailsRightBody"}>
                                        <MDBRow className={"fv-DisplayPageCalender fv-ProfilePageCalenderBodyMobile "}>
                                            <MDBCol md={6}>
                                                <Calender />
                                            </MDBCol>
                                            <MDBCol md={6} className={"fv-calenderDisplayNonMobile"}>
                                                <Calender />
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageCalenderDayReserve"}>
                                <MDBCol sm={12}>
                                    <MDBRow>
                                        <MDBCol>
                                            <p>تغییر وضعیت روزهای انتخاب شده</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            <select value={this.state.changeStatusSelectedDays} onChange={(event)=>this.setState({changeStatusSelectedDays:event.target.value})}>
                                                <option value='title' disabled>تغییر روز</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol sm={12}>
                                    <MDBRow>
                                        <MDBCol>
                                            <p>تغییر وضعیت روزهای انتخاب شده</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            <input type="text" placeholder={"تومان"} value={this.state.PriceChangeStatusSelectedDays}
                                                   onChange={(e)=>this.setState({PriceChangeStatusSelectedDays:e.target.value})}/>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol sm={12}>
                                    <MDBRow>
                                        <MDBCol>
                                            <p>تغییر وضعیت روزهای انتخاب شده</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-profilePageCalenderTextareaMobile"}>
                                        <MDBCol>
                                            <input type="textarea" placeholder={'تغییر وضعیت روزهای انتخاب شده'}/>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                                <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input type="button" value="ذخیره پیام" onClick={()=>{
                                        alert(1)
                                        villaDates(24)
                                            .then(res=>console.log(res))
                                            .catch(err=>console.log(err.response))
                                    }}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                    </MDBCol>

                </MDBRow>



                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageCalender