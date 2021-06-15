import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../componentsPages/footer"
import Logo from "../images/Logo.png";
import "../style/FactorPage.scss"
import HeaderSearch from "../componentsPages/HeaderSearch";
import {factor, requestPay} from "../services/payService";
import {calculateCost} from "../services/userService";
import {arrayBetweenDates} from "../componentsPages/calculationsDate";
import {extendMoment} from "moment-range";
import Moment from "moment";
import {Link} from "react-router-dom";
import config from "../services/config.json";
const commaNumber = require('comma-number')

class FactorPage extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('/login');
        }
        this.state={
            factorInfo:[] ,
            villaInfo:[],

        }
    }
    componentDidMount() {
        this.factor()
    }

    factor =()=>{
        factor(this.props.match.params.id)
            .then(res=>{
                console.log(res)
                this.setState({factorInfo:res.data.data , villaInfo:res.data.data.villa})
            })
            .catch(err=>console.log(err.response))
    }


    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-FactorPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                                   thisPageName = "فاکتور" />
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody desktop"}>

                    <MDBCol md={3} className={"fv-factorPageRightInfo"}>
                        <h4 className={"fv-factorPageRightInfoRightPaddingTitle"}>{this.state.villaInfo.title}</h4>
                        <MDBRow>
                            <MDBCol md={6}>
                                <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>{this.state.villaInfo.city}</h5>
                            </MDBCol>
                            {this.state.villaInfo.score ?
                                <MDBCol md={3} className={"fv-factorPageRightRate"}>
                                    <i className="fas fa-star fv-factorPageRightRateStar" /> <p>{this.state.villaInfo.score }</p> <p className={"fv-factorPageRightRateNumber"}>/۵</p>
                                </MDBCol>
                            :
                            ''}
                        </MDBRow>
                        <img src={this.state.villaInfo && this.state.villaInfo.main_img ? `${config.webapi}/images/villas/main/${this.state.villaInfo.main_img}` : Logo}/>
                        <MDBRow>
                            <MDBCol md={3}>
                                <p className={"fv-factorPageRightInfoRightPadding"}>کد آگهی</p>
                            </MDBCol>
                            <MDBCol md={3}>
                                <h5>{this.state.villaInfo.id}</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                            <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                <p><i className="fas fa-home"/>{this.state.villaInfo.rent_type}</p>
                                <p><i className="fa fa-user-friends" />ظرفیت استاندارد {this.state.villaInfo.standard_capacity} نفر+{this.state.villaInfo.max_capacity ? Number(this.state.villaInfo.max_capacity - this.state.villaInfo.standard_capacity) : ''} نفر اضافه</p>
                                <p><i className='fas fa-boxes' />{this.state.villaInfo.bedroom} اتاق خواب+{this.state.villaInfo.shower} حمام+{this.state.villaInfo.ir_toilet} دست شویی ایرانی+{this.state.villaInfo.eu_toilet} دست شویی فرنگی</p>
                                <p><i className="fas fa-bed" />{this.state.villaInfo.bed_count} تخت یک نفره+{this.state.villaInfo.mattress_count} تشک معمولی</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <MDBRow className={"fv-factorPageRightInfoLeftTop"}>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> {this.state.factorInfo.id} </h5><p> : کد رزرو</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> {this.state.factorInfo.issue_date} </h5><p> : تاریخ صدور</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton"}>
                                <input type="button" value={"در انتظار پرداخت"}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBContainer className={"fv-factorPageRightInfoLeftBody"}>
                            <MDBRow className={"fv-factorPageRightInfoLeftTopInnerSecond"}>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                    <h5> {this.state.factorInfo.entry_date} </h5><p>تاریخ رفت</p><i className="fas fa-calendar-alt" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                    <h5> {this.state.factorInfo.exit_date} </h5><p>تاریخ برگشت</p><i className="fas fa-calendar-alt" />
                                </MDBCol>
                                {/*   <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton fv-factorPageRightInfoLeftInnerChangeCalender"}>
                                    <p><i className="fas fa-chevron-left" />تغییر تاریخ</p>
                                </MDBCol> */}
                            </MDBRow>
                            <MDBRow className={"fv-factorPageRightInfoLeftBodyInner"}>
                                <MDBCol md={6}>
                                    <p>کد تخفیف</p>
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
                                    <h5>اطلاعات صورت حساب</h5>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyInnerLeftInner"}>
                                        <MDBCol md={4} className={"fv-factorPageRightInfoLeftBodyInnerLeftP"}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>{this.state.factorInfo.length_stay} روز </h5>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                             <h5>{this.state.factorInfo.cost ? commaNumber(Number(this.state.factorInfo.cost - this.state.factorInfo.extra_cost - this.state.factorInfo.facilities_cost)) : ''}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyInnerLeftInner"}>
                                        <MDBCol md={4} className={"fv-factorPageRightInfoLeftBodyInnerLeftP"}>
                                            <p>نفرات اضافه</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>{this.state.factorInfo.extra_people} نفر</h5>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>{commaNumber(this.state.factorInfo.extra_cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderLastColumn"}>

                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyInnerLeftInner"}>
                                        <MDBCol md={4} className={"fv-factorPageRightInfoLeftBodyInnerLeftP"}>
                                            <p>جمع کل</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>{commaNumber(this.state.factorInfo.cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyInnerLeftInner"}>
                                        <MDBCol md={4} className={"fv-factorPageRightInfoLeftBodyInnerLeftP"}>
                                            <p>تخفیف ها</p>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>----</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderThatPay fv-factorPageRightInfoLeftBodyInnerLeftInner"}>
                                        <MDBCol md={5}>
                                            <p>مبلغ قابل پرداخت</p>
                                        </MDBCol>
                                        <MDBCol md={3}>
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <h5>{commaNumber(this.state.factorInfo.cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                            <input type="button" value="پرداخت" onClick={()=>{
                                                const data ={
                                                    amount : Number(this.state.factorInfo.cost)*10,
                                                    reservation_id : this.state.factorInfo.id,
                                                    villa_id :this.state.villaInfo.id,
                                                }
                                                console.log(data)
                                                requestPay(data)
                                                    .then(res=>{
                                                        if(res.data.status === 0){
                                                            alert(res.data.data)
                                                        }
                                                        else  {
                                                            console.log(res)
                                                            window.location.replace(res.data.payment_url);
                                                        }
                                                    })
                                                    .catch(err=>console.log(err.response))
                                            }}/>
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
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> {this.state.factorInfo.id} </h5><p> : کد رزرو</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3}>
                                <h5> {this.state.factorInfo.issue_date} </h5><p> : تاریخ صدور</p>
                            </MDBCol>
                            <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton1"} >
                                <input type="button" value={"در انتظار پذیرش میزبان"}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBContainer className={"fv-factorPageRightInfoLeftBody"}>
                            <MDBRow className={"fv-factorPageRightInfoLeftTopInnerSecond"}>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop"} md={3} sm={5}>
                                    <div><p className={"fv-factorPageRightInfoLeftInnerTopReserveCodeMobileP"}>تاریخ رفت</p> <h5> {this.state.factorInfo.entry_date} </h5></div><i className="fas fa-calendar-alt fv-factorPageRightInfoLeftInnerTopReserveCodeMobileIcon" />
                                </MDBCol>
                                <MDBCol className={"fv-factorPageRightInfoLeftInnerTop fv-factorPageRightInfoLeftInnerTop2Mobile"} md={3} sm={5}>
                                    <div><p className={"fv-factorPageRightInfoLeftInnerTopReserveCodeMobileP"}>تاریخ برگشت</p> <h5> {this.state.factorInfo.exit_date} </h5></div><i className="fas fa-calendar-alt fv-factorPageRightInfoLeftInnerTopReserveCodeMobileIcon" />
                                </MDBCol>
                                {/*  <MDBCol className={"fv-factorPageRightInfoLeftInnerTopButton fv-factorPageRightInfoLeftInnerChangeCalender"}>
                                    <p><i className="fa fa-chevron-left" />تغییر تاریخ</p>
                                </MDBCol> */}
                            </MDBRow>
                            <MDBRow>

                                <MDBCol md={3} className={"fv-factorPageRightInfo"}>
                                    <MDBRow className={"fv-factorPageRightInfoTitleMobile"}>
                                        <MDBCol md={3} sm={4} className={"fv-factorPageRightRate"}>
                                            <img src={this.state.villaInfo && this.state.villaInfo.main_img ? `${config.webapi}/images/villas/main/${this.state.villaInfo.main_img}` : Logo}/>
                                        </MDBCol>
                                        <MDBCol md={6} sm={6}>
                                            <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>{this.state.villaInfo.title}</h5>
                                        </MDBCol>
                                    </MDBRow>
                                    <h5 className={"fv-factorPageRightInfoRightPaddingTitle2"}>{this.state.villaInfo.city}</h5>

                                    <MDBRow className={"fv-factorPageRightInfoRightCodeTitleMobile"}>
                                        <MDBCol md={3} sm={2}>
                                            <p className={"fv-factorPageRightInfoRightPadding"}>کد آگهی</p>
                                        </MDBCol>
                                        <MDBCol md={3} sm={3}>
                                            <h5>{this.state.villaInfo.id}</h5>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                        <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                            <p><i className="fas fa-home"/>{this.state.villaInfo.rent_type}</p>
                                            <p><i className="fa fa-user-friends" />ظرفیت استاندارد {this.state.villaInfo.standard_capacity} نفر+{this.state.villaInfo.max_capacity ? Number(this.state.villaInfo.max_capacity - this.state.villaInfo.standard_capacity) : ''} نفر اضافه</p>
                                            <p><i className='fas fa-boxes' />{this.state.villaInfo.bedroom} اتاق خواب+{this.state.villaInfo.shower} حمام+{this.state.villaInfo.ir_toilet} دست شویی ایرانی+{this.state.villaInfo.eu_toilet} دست شویی فرنگیی</p>
                                            <p><i className="fas fa-bed" />{this.state.villaInfo.bed_count} تخت یک نفره+{this.state.villaInfo.mattress_count} تشک معمولی</p>
                                            {/* <p className={"fv-FactorPageIconGreenColorMobile"}><i className="fas fa-chevron-left fv-FactorPageIconSeeDetailsMobile" />مشاهده مجدد جزییات</p> */}
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-factorPageRightInfoLeftBodyInner fv-factorPageRightInfoLeftBodyInnerMobile"}>

                                <MDBCol md={6} className={"fv-factorPageRightInfoLeftBodyInnerLeft"}>
                                    <h5>اطلاعات صورت حساب</h5>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>مدت کل اقامت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                            <h5>{this.state.factorInfo.length_stay} روز </h5>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>{this.state.factorInfo.cost ? commaNumber(Number(this.state.factorInfo.cost - this.state.factorInfo.extra_cost - this.state.factorInfo.facilities_cost)) : ''}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>نفرات اضافه</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                            <h5>{this.state.factorInfo.extra_people} نفر</h5>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>{commaNumber(this.state.factorInfo.extra_cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderLastColumn"}>

                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>جمع کل</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>{commaNumber(this.state.factorInfo.cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md={4} sm={5}>
                                            <p>تخفیف ها</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4}>
                                            <h5>----</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"} >تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"fv-factorPageRightInfoLeftBodyOrderThatPay"}>
                                        <MDBCol md={4} sm={5} className={"fv-factorPageRightInfoLeftBodyOrderThatPayTitleMobile"}>
                                            <p>مبلغ قابل پرداخت</p>
                                        </MDBCol>
                                        <MDBCol md={4} sm={3}>
                                        </MDBCol>
                                        <MDBCol md={4} sm={4} className={"fv-factorPageRightInfoLeftBodyOrderThatPayPriceMobile"}>
                                            <h5>{commaNumber(this.state.factorInfo.cost)}</h5><p className={"fv-factorPageRightInfoLeftBodyOrderThatPayToman"}>تومان</p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={6}>
                                    <p>کد تخفیف</p>
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
                                            <input type="button" value="پرداخت"/>
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