import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../componentsPages/footer"
import Logo from "../images/Logo.png";
import "../style/FactorPage.scss"
import HeaderSearch from "../componentsPages/HeaderSearch";

class FactorPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-FactorPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> پنل کاربری </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody desktop"}>

                    <MDBCol md={3} className={"fv-factorPageRightInfo"}>
                        <h4 className={"fv-factorPageRightInfoRightPaddingTitle"}>کلبه باغ سبز</h4>
                        <MDBRow>
                            <MDBCol md={6}>
                                <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>اردبیل-خلخال</h5>
                            </MDBCol>
                            <MDBCol md={3} className={"fv-factorPageRightRate"}>
                                <i className="fas fa-star fv-factorPageRightRateStar" /> <p>۴.۸</p> <p className={"fv-factorPageRightRateNumber"}>/۵</p>
                            </MDBCol>
                        </MDBRow>
                        <img src={Logo}/>
                        <MDBRow>
                            <MDBCol md={3}>
                                <p className={"fv-factorPageRightInfoRightPadding"}>کد آگهی</p>
                            </MDBCol>
                            <MDBCol md={3}>
                                <h5>123654</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                            <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                <p><i className="fas fa-home"/>خانه دربست</p>
                                <p><i className="fa fa-user-friends" />ظرفیت استاندار 4 نفر+4 نفر اضافه</p>
                                <p><i className='fas fa-boxes' />2 اتاق خواب+یک حمام+یک دست شویی</p>
                                <p><i className="fas fa-bed" />1 تخت یک نفره+8 تشک معمولی</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <MDBRow className={"fv-factorPageRightInfoLeftTop"}>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> 123654 </h5><p> : کد رزرو</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> 123654 </h5><p> : تاریخ صدور</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton"}>
                                <input type="button" value={"در انتظار پذیرش میزبان"}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBContainer className={"fv-factorPageRightInfoLeftBody"}>
                            <MDBRow className={"fv-factorPageRightInfoLeftTopInnerSecond"}>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                    <h5> 123654 </h5><p> کد رزرو</p><i className="fas fa-calendar-alt" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                    <h5> 123654 </h5><p> کد رزرو</p><i className="fas fa-calendar-alt" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton fv-factorPageRightInfoLeftInnerChangeCalender"}>
                                    <p><i className="fas fa-chevron-left" />تغییر تاریخ</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-factorPageRightInfoLeftBodyInner"}>
                                <MDBCol md={6}>
                                    <h5>اطلاعات کاربری</h5>
                                    <p>نام و نام خانوادگی</p>
                                    <MDBRow>
                                        <MDBCol md={6}>
                                            <input type="text" value=""/>
                                        </MDBCol>
                                        <MDBCol md={6} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                            <input type="button" value="ذخیره"/>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                                <MDBCol md={6} className={"fv-factorPageRightInfoLeftBodyInnerLeft"}>
                                    <h5>اطلاعات کاربری</h5>
                                    <MDBRow>
                                        <MDBCol md={4}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>3 شب</h5>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                             <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md={4}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>3 شب</h5>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderLastColumn"}>

                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderThatPay"}>
                                        <MDBCol md={4}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                            <input type="button" value="ذخیره"/>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>

                {/**//**//**//*9*//**//**//**//**//**/         /* Mobile */        /**//**/ /**//**//**//**/}


                <MDBRow className={"fv-ProfilePageLeftBody fv-FactorPageForMobile"}>


                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <MDBRow className={"fv-factorPageRightInfoLeftTop"}>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3} sm={12}>
                                <h5> 123654 </h5><p> : کد رزرو</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3} sm={12}>
                                <h5> 123654 </h5><p> : تاریخ صدور</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton1"} >
                                <input type="button" value={"در انتظار پذیرش میزبان"}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBContainer className={"fv-factorPageRightInfoLeftBody"}>
                            <MDBRow className={"fv-factorPageRightInfoLeftTopInnerSecond"}>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3} sm={5}>
                                    <div><p className={"fv-factorPageRightInfoLeftInnerTopReserveCodeMobileP"}>کد رزرو</p> <h5> 123654 </h5></div><i className="fas fa-calendar-alt fv-factorPageRightInfoLeftInnerTopReserveCodeMobileIcon" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop fv-factorPageRightInfoLeftInnerTop2Mobile"} md={3} sm={5}>
                                    <div><p className={"fv-factorPageRightInfoLeftInnerTopReserveCodeMobileP"}>کد رزرو</p> <h5> 123654 </h5></div><i className="fas fa-calendar-alt fv-factorPageRightInfoLeftInnerTopReserveCodeMobileIcon" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton fv-factorPageRightInfoLeftInnerChangeCalender"}>
                                    <p><i className="fa fa-user-friends" />تغییر تاریخ</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>

                                <MDBCol md={3} className={"fv-factorPageRightInfo"}>
                                    <MDBRow className={"fv-factorPageRightInfoTitleMobile"}>
                                        <MDBCol md={3} sm={4} className={"fv-factorPageRightRate"}>
                                            <img src={Logo}/>
                                        </MDBCol>
                                        <MDBCol md={6} sm={6}>
                                            <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>اردبیل-خلخال</h5>
                                        </MDBCol>
                                    </MDBRow>
                                    <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>اردبیل-خلخال</h5>

                                    <MDBRow className={"fv-factorPageRightInfoRightCodeTitleMobile"}>
                                        <MDBCol md={3} sm={2}>
                                            <p className={"fv-factorPageRightInfoRightPadding"}>کد آگهی</p>
                                        </MDBCol>
                                        <MDBCol md={3} sm={3}>
                                            <h5>123654</h5>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                        <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                            <p><i className="fas fa-home"/>خانه دربست</p>
                                            <p><i className="fa fa-user-friends" />ظرفیت استاندار 4 نفر+4 نفر اضافه</p>
                                            <p><i className='fas fa-boxes' />2 اتاق خواب+یک حمام+یک دست شویی</p>
                                            <p><i className="fas fa-bed" />1 تخت یک نفره+8 تشک معمولی</p>
                                            <p className={"fv-FactorPageIconGreenColorMobile"}><i className="fas fa-chevron-left fv-FactorPageIconSeeDetailsMobile" />مشاهده مجدد جزییات</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-factorPageRightInfoLeftBodyInner fv-factorPageRightInfoLeftBodyInnerMobile"}>

                                <MDBCol md={6} className={"fv-factorPageRightInfoLeftBodyInnerLeft"}>
                                    <h5>اطلاعات کاربری</h5>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                            <h5>3 شب</h5>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                            <h5>3 شب</h5>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderLastColumn"}>

                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"} >تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderThatPay"}>
                                        <MDBCol md={4} sm={5} className={"fv-factorPageRightInfoLeftBodyOrderThatPayTitleMobile"}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4} className={"fv-factorPageRightInfoLeftBodyOrderThatPayPriceMobile"}>
                                            <h5>36000</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={6}>
                                    <h5>اطلاعات کاربری</h5>
                                    <p>نام و نام خانوادگی</p>
                                    <MDBRow>
                                        <MDBCol md={6} sm={9}>
                                            <input type="text" value=""/>
                                        </MDBCol>
                                        <MDBCol md={6} sm={3} className={"fv-ProfilePageUserSetInfoButton"}>
                                            <input type="button" value="ذخیره"/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-FactorPageButtonMobile"}>
                                        <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                            <input type="button" value="ذخیره"/>
                                        </MDBCol>
                                    </MDBRow>
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
export default FactorPage