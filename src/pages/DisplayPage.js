import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import Footer from "../componentsPages/footer"
import FotterpageLogo from "../images/Logo.png"
import LogoName from "../images/LogoName.png"
import MobileLogo from "../images/MobileLogo.png"
import MobileMenu from "../images/MobileMenu.png"
import Product from "../componentsPages/Product";
import TopicsMainPage from "../componentsPages/topicsMainPage";
import Calender from "../componentsPages/calender";
import HeaderSearch from "../componentsPages/HeaderSearch";
import SearchHomePage from "./SearchHomePage";
import Datas from "../data/Datas";

import CalendarTest from "../data/CalendarTest";
import Calendar from 'react-calendar'
import moment from 'moment'; // new
import 'moment/locale/fa';   // new
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from "react-modern-calendar-datepicker";
import {MapTest} from "../data/MapTest";


class DisplayPage extends Datas {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            ...this.state,
            dateToGo:'',
            dateToReturn:'',
            numberOfPeople:'title',
            date: new Date(),
            selectedPlace: ''
        }
    }
    weekdayshort = moment.weekdaysShort();
    weekmonthshort = moment.monthsShort();
     weekdayshortname = this.weekdayshort.map(day => {
        return (
            <th key={day} className="week-day">
                {day}
            </th>
        );
    });
    weekdayshortnamemonth = this.weekmonthshort.map(month => {
        return (
            <th key={month} className="week-day">
                {month}
            </th>
        );
    });
    onChange = date => this.setState({ date });

    static defaultProps = {
        center: {
            lat: 41.5,
            lng: 54.6
        },
        zoom: 30
    };
    static mapStyles = {
        width: '100%',
        height: '100%'
    };

    onDayClick = (e, day) => {
        alert(day);
    }
    onMarkerClick = (e) => {
        this.setState({selectedPlace: e.Name});
    }

    render() {

        console.log(this.weekdayshortname)
        console.log(this.weekdayshortnamemonth)
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>

                    <DatePicker        /* calendar 1 => delete*/
                        shouldHighlightWeekends
                        locale="fa" // add this
                    />

                    <div style={{ height: '50vh', width: '40%' }}>
                        {/* <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>

                        </GoogleMapReact> */}

                         <Map
                            google={this.props.google}
                            style={{width: '20vw', height: '45vh', 'top': '1.5rem'}}
                            containerStyle={{width: '20vw', height: '30vh'}}
                            initialCenter={{
                                lat: this.props.lat,
                                lng: this.props.lng
                            }}
                            zoom={15}>


                            {this.props.markers && // Rendering single marker for supplier details map
                            <Marker onClick={this.onMarkerClick}
                                    name={this.state.selectedPlace} />
                            }

                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <h4>{this.state.selectedPlace}</h4>
                            </InfoWindow>
                        </Map>

                        <MapTest
                            lat='35.728270'
                            lng='51.548488'/>
                    </div>

                    <div className="App">  {/* Main Calendar */}
                        <CalendarTest  />
                    </div>
                    <Calendar      /* calendar 2 => delete  */
                        view={this.state.date}
                        returnValue={this.state.date}
                        locale={'fa'}
                        onChange={this.onChange}
                        value={this.state.date}
                        tileClassName="content"
                    />


                    <HeaderSearch />

                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> نمایش اقامتگاه </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className={"fv-DisplayPageTitle"}>
                    <MDBRow className={"fv-DisplayPageTitleTopic"}>
                        <MDBCol md={2}>
                        <p>باغ سبز</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchName"}>
                        <MDBCol md={2}>
                            <p><i className="fa fa-map-marker-alt" /> باغ سبز باغ سبز</p>
                        </MDBCol>
                        <MDBCol md={2}>
                                <p className={"fv-DisplayPageDetailsRating  fv-DisplayPageDetailsRatingTop"}> 5 </p>
                                <p className={"fv-DisplayPageDetailsRate fv-DisplayPageDetailsRateTop"}>  /4.5 <i className="fa fa-star" /> </p>
                        </MDBCol>
                        <MDBCol md={6} className={"fv-DisplayPageLike"}>
                            <a onClick={()=>this.postData('rl','data')}>
                                <p> اضافه به علاقه مندی ها <i className="fas fa-heart"/></p>
                            </a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageTitleShare"}>
                            <a onClick={()=>this.postData('rl','data')}>
                            <p> به اشتراک گذاری <i className="fa fa-share-alt" aria-hidden="true" /></p>
                            </a>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchProductImage"}>
                        <MDBCol md={8} sm={12}>
                            <img className={"fv-aboutUsThirdImageRight"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={4}>
                            <MDBRow>
                                <img className={"fv-aboutUsThirdImageLeftFirst"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                            </MDBRow>
                            <MDBRow>
                                <img className={"fv-aboutUsThirdImageLeftSecond"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"efv-svgPagination fv-displayPageImagePaginationMobil"}>
                        <MDBCol md={12}>
                            <div className="slider_pagination">
                                <button className="slider_pagination_btn slider_pagination_btn--sel" />
                                <button className="slider_pagination_btn" />
                                <button className="slider_pagination_btn" />
                                <button className="slider_pagination_btn" />
                                <button className="slider_pagination_btn" />
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
                <MDBRow className={"fv-DisplayPageDisplayMoreImage"}>
                    <MDBCol>
                        <a> مشاهده تصویر بیشتر <i className="fas fa-angle-left" /></a>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageMenu"}>
                    <MDBCol md={1} sm={2}>
                        <a>    تصاویر    </a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a>امکانات</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a>آدرس</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={2} className={"fv-DisplayPageMenuRows"} >
                        <a>قوانین اقامتگاه</a>
                        <MDBRow>
                            <button className="slider_pagination_btn" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm={2} className={"fv-DisplayPageMenuRowsMobile"}>
                        <a> قوانین</a>
                        <MDBRow>
                            <button className="slider_pagination_btn" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a>نظرات</a>
                        <MDBRow>
                                <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetails"}>
                    <MDBCol md={8} className={"fv-DisplayPageDetailsRightBody"}>
                        <MDBRow>
                            <MDBCol md={2} sm={2}>
                               <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol sm={10} className={"fv-DisplayPageDetailsPersonInformation fv-DisplayPageDetailsPersonInfo"}>
                                <MDBRow>
                                    <MDBCol md={1} sm={4}>
                                         <p>میزبان</p>
                                    </MDBCol>
                                    <MDBCol sm={6}>
                                        <h5> لیدا بابایی</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol md={2} sm={5}>
                                        <p>کد آگهی</p>
                                    </MDBCol>
                                    <MDBCol  md={10} sm={3}>
                                        <h5>22344</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <div className={'facilities'}>
                            <MDBRow className={"fv-DisplayPageDetailsRightHomeImage pMobile"}>
                                <p><i className="fas fa-home" /> خانه دربست </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p> <i className="fa fa-users" />  ظرفیت استاندار 4 نفر+4 نفر اضافه </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-building" /> 2 اتاق خواب+یک حمام+یک دست شویی </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-bed" aria-hidden="true" /> 1 تخت یک نفره+8 تشک معمولی </p>
                            </MDBRow>
                        </div>

                        <MDBRow className={"h4Mobile"}>
                            <h4>درباره اقامت گاه</h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightParagraph pMobile"}>
                            <p> این خانه بومی در میان باغی بزرگ و سرسبز با مساحت 4000 متر قرار دارد. باغ
                                ویلای ثامن با فضایی دلباز و روح نواز شامل 6 سوئیت یک
                                خوابه،دو خوابه و سه خوابه است. تمامی سوئیت ها دارای آشپزخا
                                نه مجهز با تمامی امکانات و لوازم مورد نیاز آشپزی، یخچال، تلویزیون،
                                سرویس بهداشتی ( توالت ایرانی و فرنگی ) و حمام اختصاصی، رخت و خواب نو و سنتی می باشند</p>
                        </MDBRow>
                        <MDBRow className={"pMobile"}>
                            <p> <i className="fas fa-check-square" /> مناسب برای معلولین </p>
                        </MDBRow>
                        <MDBRow className={"pMobile"}>
                            <p>  <i className="fas fa-check-square" /> ویوی رو به دریا </p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightStayInHome"}>
                            <MDBCol md={5} sm={11}>
                                <h4> حداقل تعداد روز اقامت </h4>
                            </MDBCol>
                            <MDBCol md={7} sm={11}>
                                <h4> حداکثر تعداد روز اقامت </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <h4> امکانات </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={6}>
                                <p> <i className="fa fa-broom" /> جارو برقی </p>
                            </MDBCol>
                            <MDBCol md={8} sm={6}>
                                <p> <i className="fas fa-wifi" /> اینترنت رایگان </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={6}>
                                <p> <i className="fas fa-phone" /> تلفن </p>
                            </MDBCol>
                            <MDBCol md={8} sm={6}>
                                <p><i className="fas fa-box" />  جعبه کمک های اولیه </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={6}>
                                <p> <i className="fas fa-pray" /> مهر و جانماز </p>
                            </MDBCol>
                            <MDBCol md={8} sm={6}>
                                <p><i className="fas fa-tv" /> تلوزیون </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={6}>
                                <p><i className="fa fa-door-closed" /> یخچال </p>
                            </MDBCol>
                            <MDBCol md={8} sm={6}>
                                <p><i className="fa fa-calendar-minus" /> اجاق گاز </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                            <p>مشاهده امکانات بیشتر</p>
                        </MDBRow>
                        <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                            <h4>امکانات ویژه</h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightParagraph"}>
                            <h5>هر کدام از امکانات زیر که دوست دارید انتخاب کنید تا به شما در سفر حس بهتری بدهد </h5>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities fv-DisplayPageTomanTitle"}>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>آشپز</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>مهماندار</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>راهنمای سفر</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>بادیگارد</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>
                            <h4> اجاره بها </h4>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p> هزینه هر نفر اضافه به ازای هر شب:  </p> <h5>50000</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p>ایام پیک: </p> <h5></h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p>تخفیف هفتگی:  </p> <h5>5 درصد</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p>تخفیف ماهانه </p> <h5>5 درصد</h5>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageCalender"}>
                            <MDBCol md={6}>
                                <Calender />
                            </MDBCol>
                            <MDBCol md={6} className={"fv-calenderDisplayNonMobile"}>
                                <Calender />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <h4> قوانین </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={12}>
                                <p> <i className="fas fa-clock" /> ساعت ورود </p>
                            </MDBCol>
                            <MDBCol md={8} sm={12}>
                                <p>  <i className="fas fa-clock" /> ساعت خروج </p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <h5>امکان ورود حیوان خانگی: </h5><p>بیرون ساختمان ورود </p>
                        </MDBRow>
                        <MDBRow>
                            <p>حیوانات به داخل اقامتگاه کاملا ممنوع است</p>
                        </MDBRow>
                        <MDBRow>
                            <h5>امکان برگزاری مراسم </h5><p>مجاز است،</p>
                        </MDBRow>

                        <MDBRow>
                            <h4> آدرس </h4>
                        </MDBRow>
                        <MDBRow>
                            <h5> اردبیل-خلخال </h5>
                        </MDBRow>

                        <MDBRow className={"fv-displayPageMap"}>
                            <img src="https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314"/>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageDetailsRightingComment"}>
                            <MDBCol md={9}>
                                <h4> نظرات </h4>
                            </MDBCol>
                            <MDBCol md={2}>
                                <h4> نوشتن نظر<i className="fas fa-chevron-left" /> </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md={1} sm={1}>
                                <p className={"fv-DisplayPageDetailsRating"}> 5 </p>
                            </MDBCol>
                            <MDBCol md={2} sm={3}>
                            <p className={"fv-DisplayPageDetailsRate"}>  /4.5 <i className="fa fa-star" /> </p>
                            </MDBCol >
                            <MDBCol md={2} sm={4} className={"fv-DisplayPageDetailsRateNumberPerson"}>
                                <p> (۲۰ نظر) </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsScore"}>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> نظافت </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                       <input type="button" style={{
                                           position: "absolute" ,
                                           width: `${4.5*20}%` ,
                                           background: "#15BE29"}}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> تطابق با آکهی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> مهمان نوازی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> کیفیت میزبانی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                     <div className={"fv-displayPageCommentOne"}>
                        <MDBRow className={"fv-displayPageCommentPerson"}>
                            <MDBCol md={2} sm={2}>
                                <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                <MDBRow>
                                    <MDBCol sm={10}>
                                        <h5> بهار</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol sm={10}>
                                        <p> مهر ماه ۹۸ ۸ ۱۲</p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <p>.نﺎﺑﺰﯿﻣ درﻮﺧﺮﺑ و رﺎﺘﻓر ﺎﺻﻮﺼﺨﻣ،دﻮﺑ ﯽﻟﺎﻋ ﯽﻠﯿﺧ</p>
                        </MDBRow>
                        <MDBRow className={"fv-displayPageComments"}>
                            <MDBCol>
                                <MDBRow className={"fv-displayPageCommentsDate"}>
                                    <p>۳۱ مهرماه ۸۹۳۱</p>
                                </MDBRow>
                                <MDBRow className={"fv-displayPageCommentsTitle"}>
                                    <p> میزبان کلبه سبز </p>
                                </MDBRow>
                                <MDBRow>
                                    <p> با تشکر از نظر شما </p>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                     </div>
                     <div className={"fv-displayPageCommentTwo"}>
                        <MDBRow className={"fv-displayPageCommentPerson"}>
                            <MDBCol md={2} sm={2}>
                                <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                <MDBRow>
                                    <MDBCol sm={10}>
                                        <h5> بهار</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol sm={10}>
                                        <p> مهر ماه ۹۸ ۸ ۱۲</p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <p>.نﺎﺑﺰﯿﻣ درﻮﺧﺮﺑ و رﺎﺘﻓر ﺎﺻﻮﺼﺨﻣ،دﻮﺑ ﯽﻟﺎﻋ ﯽﻠﯿﺧ</p>
                        </MDBRow>
                        <MDBRow className={"fv-displayPageComments"}>
                            <MDBCol>
                                <MDBRow className={"fv-displayPageCommentsDate"}>
                                    <p>۳۱ مهرماه ۸۹۳۱</p>
                                </MDBRow>
                                <MDBRow className={"fv-displayPageCommentsTitle"}>
                                    <p> میزبان کلبه سبز </p>
                                </MDBRow>
                                <MDBRow>
                                    <p> با تشکر از نظر شما </p>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                     </div>
                        <MDBRow className={"fv-SearchHomePagePagination fv-displayPageCommentPagination"}>
                            <input type='button' value='1'/>
                            <input type='button' value='2'/>
                        </MDBRow>

                    </MDBCol>
                    <MDBCol md={4} className={"fv-DisplayPageDetailsLeftBody"}>
                        <MDBRow>
                            <p>قیمت از شبی ۲۰۰۰۰ تومان</p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftEmptyMobile"}>
                            <p><i className="fa fa-calendar" aria-hidden="true" /> اولین تاریخ خالی این اقامت گاه ۱۸ اردیبهشت میباشد </p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyDate"}>
                            <MDBRow className={"fv-DisplayPageDetailsLeftSelectedDate"}>
                                <input type='text' value=' تاریخ ورود' className={"fv-DisplayPageDetailsLeftBodyDateOnText"} />
                                <input type='text' value=' تاریخ خروج' className={"fv-DisplayPageDetailsLeftBodyDateOutText"} />
                            </MDBRow>
                            <MDBRow className={"fv-DisplayPageDetailsLeftTextDate"}>
                                <input type='searchBbox' placeholder=' انتخاب تاریخ' className={"fv-DisplayPageDetailsLeftBodyDateOnInput"} value={this.state.dateToGo} onChange={(event)=>this.setState({dateToGo:event.target.value})}  />
                                <input type='searchBbox' placeholder='انتخاب تاریخ' className={"fv-DisplayPageDetailsLeftBodyDateOutInput"} value={this.state.dateToReturn} onChange={(event)=>this.setState({dateToReturn:event.target.value})}  />
                            </MDBRow>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityText"}>
                            <input type='text' value=' تعداد نفرات'/>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityOption"}>
                            <select value={this.state.numberOfPeople} onChange={(event)=>this.setState({numberOfPeople:event.target.value})}>
                                <option value='title' disabled>تعداد نررات</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftButton"}>
                            <MDBCol>
                                <input type="button" value="درخواست رزرو" onClick={()=>this.postData('','')}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>


                </MDBRow>

                <MDBRow className={"fv-topicMainPage fv-displayPageTopicMainPage"}>
                    <TopicsMainPage topic="اقامتگاه های مشابه"/>
                </MDBRow>
                <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                    <MDBCol md={3} sm={7} >
                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                 rate="5.5/5"
                                 topic="کوچه باغ سبز"
                                 location="مازندران"
                                 numberOfRoom="2"
                                 capacity="2"
                                 price="20000"/>
                    </MDBCol>
                    <MDBCol md={3} sm={7} >
                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                 rate="5.5/5"
                                 topic="کوچه باغ سبز"
                                 location="مازندران"
                                 numberOfRoom="2"
                                 capacity="20"
                                 price="20000"/>
                    </MDBCol>
                    <MDBCol md={3} sm={7} >
                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                 rate="5.5/5"
                                 topic="کوچه باغ سبز"
                                 location="مازندران"
                                 numberOfRoom="2"
                                 capacity="2"
                                 price="20000"/>
                    </MDBCol>
                    <MDBCol md={3} sm={7} >
                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                 rate="5.5/5"
                                 topic="کوچه باغ سبز"
                                 location="مازندران"
                                 numberOfRoom="2"
                                 capacity="2"
                                 price="20000"/>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default DisplayPage