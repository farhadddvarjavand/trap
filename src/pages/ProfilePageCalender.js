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
import CalenderProfileMobile from "../data/CalenderProfileMobile";
import {changeDatesCost, changeDatesStatus, villaDates} from "../services/userService";
import {villaPrice} from "../services/villaService";
import {getToday, priceOfPerMonth} from "../componentsPages/calculationsDate";

class ProfilePageCalender extends Component {
    constructor(props) {
        super(props);
        this.state={
            changeStatusSelectedDays:'title',
            price:'',
            villaPrice:[],
            selectedDays : '',
            selectedDaysMobile : '',

            selectedDaysAll : ''

        }

    }

    componentDidMount() {
        villaPrice(this.props.match.params.id)
            .then(res=>this.setState(res.data ? {villaPrice:res.data} : ''))
    }

    getSelectedDays = (selectedDay)=>{
        if(selectedDay && selectedDay !== this.state.selectedDays){
            this.setState({selectedDays:selectedDay})  // فقط برای چک کردن و تکراری نشدن
            this.setState({selectedDaysAll:selectedDay}) // روز های انتخاب شده برای دسکتاپ
        }
    }
    getSelectedDaysmobile = (selectedDay)=>{
        if(selectedDay && selectedDay !== this.state.selectedDaysMobile){
            this.setState({selectedDaysMobile:selectedDay})   // فقط برای چک کردن و تکراری نشدن
            this.setState({selectedDaysAll:selectedDay})// روز های انتخاب شده برای موبایل selectedDay جدید در خود کامپوننت مخصوص تقویم ایجاد میشود همراه با قبلی هایش
        }
    }
    render() {
        const priceDaysUpdates = []  /// مورد نظر
        let priceArrayOneMonth ={
            daysPrice: [] ,
            month: '',
            year: ''
        }
        if(this.state.villaPrice[0]){
             priceArrayOneMonth.daysPrice = priceOfPerMonth(this.state.villaPrice[0].year , this.state.villaPrice[0].month , this.state.villaPrice[0].daysPrice)
            priceArrayOneMonth.month=this.state.villaPrice[0].month
            priceArrayOneMonth.year=this.state.villaPrice[0].year
        }
        for(let i = 0 ; i<this.state.villaPrice.length ; i++){
            if(i===0){
                priceDaysUpdates.push(priceArrayOneMonth)
            }
            else {
                priceDaysUpdates.push(this.state.villaPrice[i])
            }
        }
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

                            <MDBRow className={"fv-ProfilePageCalenderDayName"}>


                                <CalendarForProfile
                                 villaPrice={priceDaysUpdates}
                                getSelectedDay={this.getSelectedDays} />
                            </MDBRow>

                            <MDBRow className={"fv-ProfilePageCalenderDayReserve"}>
                                <MDBCol md={4}>
                                    <MDBRow>
                                        <p>تغییر وضعیت روزهای انتخاب شده</p>
                                    </MDBRow>
                                    <MDBRow>
                                        <select value={this.state.changeStatusSelectedDays} onChange={(event)=>this.setState({changeStatusSelectedDays:event.target.value})}>
                                            <option value='title' disabled>وضعیت</option>
                                            <option value="0">قابل رزرو (فعال)</option>
                                            <option value="1">غیر قابل رزرو(تکمیل)</option>
                                            <option value="2">تعطیل</option>
                                        </select>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={7}>
                                    <MDBRow>
                                        <p>تغییر قیمت روزهای انتخاب شده</p>
                                    </MDBRow>
                                    <MDBRow>
                                      <input type="text" placeholder={"تومان"} value={this.state.price}
                                      onChange={(e)=>this.setState({price:e.target.value})}/>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                                <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input className={"fv-changePriceCalendar"} type="button" value="ذخیره قیمت" onClick={()=>{
                                        const setDatesArray = []
                                        let setDatesString = ''
                                        for(let i = 0 ; i < this.state.selectedDaysAll.length ; i++){
                                            setDatesArray.push(`${this.state.selectedDaysAll[i].year}/${this.state.selectedDaysAll[i].month}/${this.state.selectedDaysAll[i].day}`)
                                        }
                                        for(let j = 0 ; j < setDatesArray.length ; j ++){
                                            if(j===0){
                                                setDatesString= `${setDatesArray[j]}`
                                            }
                                            else {
                                                setDatesString= `${setDatesString},${setDatesArray[j]}`
                                            }
                                        }
                                        const datasForPrice = {             // برای تغییر دادن قیمت میباشد
                                            dates : setDatesString ,
                                            special_price : this.state.price
                                        }

                                        if(this.state.price){                                         // برای تغییر دادن قیمت میباشد
                                            changeDatesCost(datasForPrice , this.props.match.params.id)
                                                .then(res => res.status === 200 ?  window.location.reload() : '')
                                        }


                                    }}/>
                                    <input  className={"fv-changeStateCalendar"} type="button" value="ذخیره وضعیت" onClick={()=>{
                                        const setDatesArray = []
                                        let setDatesString = ''
                                        for(let i = 0 ; i < this.state.selectedDaysAll.length ; i++){
                                            setDatesArray.push(`${this.state.selectedDaysAll[i].year}/${this.state.selectedDaysAll[i].month}/${this.state.selectedDaysAll[i].day}`)
                                        }
                                        for(let j = 0 ; j < setDatesArray.length ; j ++){
                                            if(j===0){
                                                setDatesString= `${setDatesArray[j]}`
                                            }
                                            else {
                                                setDatesString= `${setDatesString},${setDatesArray[j]}`
                                            }
                                        }

                                        const datasForStatus = {             // برای تغییر دادن status میباشد
                                            dates : setDatesString ,
                                            status : this.state.changeStatusSelectedDays
                                        }

                                        if(this.state.changeStatusSelectedDays !== 'title'){           // برای تغییر دادن status میباشد
                                            changeDatesStatus(datasForStatus ,  this.props.match.params.id)
                                                .then(res => res.status === 200 ?  window.location.reload() : '')
                                        }

                                    }}/>
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


                            <MDBRow className={'fv-profilePageCalenderForMobile'}>                  {/*    calender-calendar     */}
                                <MDBCol>
                                    <CalenderProfileMobile
                                        villaPrice={priceDaysUpdates}
                                        getSelectedDay={this.getSelectedDaysmobile} />
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
                                                <option value='title' disabled>وضعیت</option>
                                                <option value="0">قابل رزرو (فعال)</option>
                                                <option value="1">غیر قابل رزرو(تکمیل)</option>
                                                <option value="2">تعطیل</option>
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
                                            <input type="text" placeholder={"تومان"} value={this.state.price}
                                                   onChange={(e)=>this.setState({price:e.target.value})}/>
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
                                <MDBCol md={3} sm={6} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input className={"fv-changePriceCalendar"} type="button" value="ذخیره قیمت" onClick={()=>{
                                        const setDatesArray = []
                                        let setDatesString = ''
                                        for(let i = 0 ; i < this.state.selectedDaysAll.length ; i++){
                                            setDatesArray.push(`${this.state.selectedDaysAll[i].year}/${this.state.selectedDaysAll[i].month}/${this.state.selectedDaysAll[i].day}`)
                                        }
                                        for(let j = 0 ; j < setDatesArray.length ; j ++){
                                            if(j===0){
                                                setDatesString= `${setDatesArray[j]}`
                                            }
                                            else {
                                                setDatesString= `${setDatesString},${setDatesArray[j]}`
                                            }
                                        }
                                        const datasForPrice = {             // برای تغییر دادن قیمت میباشد
                                            dates : setDatesString ,
                                            special_price : this.state.price
                                        }

                                        if(this.state.price){                                         // برای تغییر دادن قیمت میباشد
                                            changeDatesCost(datasForPrice , this.props.match.params.id)
                                                .then(res => res.status === 200 ?  window.location.reload() : '')
                                        }


                                    }}/>
                                </MDBCol>
                                <MDBCol md={3} sm={6} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                    <input  className={"fv-changeStateCalendar"} type="button" value="ذخیره وضعیت" onClick={()=>{
                                        const setDatesArray = []
                                        let setDatesString = ''
                                        for(let i = 0 ; i < this.state.selectedDaysAll.length ; i++){
                                            setDatesArray.push(`${this.state.selectedDaysAll[i].year}/${this.state.selectedDaysAll[i].month}/${this.state.selectedDaysAll[i].day}`)
                                        }
                                        for(let j = 0 ; j < setDatesArray.length ; j ++){
                                            if(j===0){
                                                setDatesString= `${setDatesArray[j]}`
                                            }
                                            else {
                                                setDatesString= `${setDatesString},${setDatesArray[j]}`
                                            }
                                        }

                                        const datasForStatus = {             // برای تغییر دادن status میباشد
                                            dates : setDatesString ,
                                            status : this.state.changeStatusSelectedDays
                                        }

                                        if(this.state.changeStatusSelectedDays !== 'title'){           // برای تغییر دادن status میباشد
                                            changeDatesStatus(datasForStatus ,  this.props.match.params.id)
                                                .then(res => res.status === 200 ?  window.location.reload() : '')
                                        }

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