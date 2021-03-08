import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import Footer from "./footer"
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
import MobileMenu from "./images/MobileMenu.png"
import Product from "./Product";
import TopicsMainPage from "./topicsMainPage";
import Calender from "./calender";

class SearchHomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage"}>

                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <MDBRow className={' fv-footerDisplayPageBody'}>
                        <MDBCol md={2}>
                            <i className="fa fa-user-alt" />
                            <a> حساب کاربری</a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                            <input type='searchBbox' value=' جستجو'/>
                        </MDBCol>
                        <MDBCol  md={2} className={"fv-DisplayPageSearchIcon"} >
                            <a><i className="fa fa-search" /></a>
                        </MDBCol>
                        <MDBCol md={6} className={"menuMobile"}>
                            <img src={LogoName} className={"fv-DisplayPageSearchName"}/>
                            <img src={MobileLogo} className={"fv-DisplayPageSearchLogo"}/>
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
                        <MDBCol md={6}>
                            <p> اضافه به علاقه مندی ها <i className="fas fa-heart" /></p>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageTitleShare"}>
                            <p> به اشتراک گذاری <i className="fa fa-share-alt" aria-hidden="true" /></p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchProductImage"}>
                        <MDBCol md={8}>
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
                </div>
                <MDBRow className={"fv-DisplayPageDisplayMoreImage"}>
                    <MDBCol>
                        <a> مشاهده تصویر بیشتر <i className="fas fa-angle-left" /></a>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageMenu"}>
                    <MDBCol md={1}>
                        <a>    تصاویر    </a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>امکانات</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>آدرس</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={2}>
                        <a>قوانین اقامتگاه</a>
                        <MDBRow>
                            <button className="slider_pagination_btn" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>نظرات</a>
                        <MDBRow>
                                <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetails"}>
                    <MDBCol md={8} className={"fv-DisplayPageDetailsRightBody"}>
                        <MDBRow>
                            <MDBCol md={2}>
                               <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol className={"fv-DisplayPageDetailsPersonInformation fv-DisplayPageDetailsPersonInfo"}>
                                <MDBRow>
                                    <MDBCol md={1}>
                                         <p>میزبان</p>
                                    </MDBCol>
                                    <MDBCol>
                                        <h5> لیدا بابایی</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol md={2}>
                                        <p>کد آگهی</p>
                                    </MDBCol>
                                    <MDBCol  md={10}>
                                        <h5>22344</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightHomeImage"}>
                            <p><i className="fas fa-home" /> خانه دربست </p>
                        </MDBRow>
                        <MDBRow>
                            <p> <i className="fa fa-users" />  ظرفیت استاندار 4 نفر+4 نفر اضافه </p>
                        </MDBRow>
                        <MDBRow>
                            <p><i className="fa fa-building" /> 2 اتاق خواب+یک حمام+یک دست شویی </p>
                        </MDBRow>
                        <MDBRow>
                            <p><i className="fa fa-bed" aria-hidden="true" /> 1 تخت یک نفره+8 تشک معمولی </p>
                        </MDBRow>
                        <MDBRow>
                            <h4>درباره اقامت گاه</h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightParagraph"}>
                            <p> این خانه بومی در میان باغی بزرگ و سرسبز با مساحت 4000 متر قرار دارد. باغ
                                ویلای ثامن با فضایی دلباز و روح نواز شامل 6 سوئیت یک
                                خوابه،دو خوابه و سه خوابه است. تمامی سوئیت ها دارای آشپزخا
                                نه مجهز با تمامی امکانات و لوازم مورد نیاز آشپزی، یخچال، تلویزیون،
                                سرویس بهداشتی ( توالت ایرانی و فرنگی ) و حمام اختصاصی، رخت و خواب نو و سنتی می باشند</p>
                        </MDBRow>
                        <MDBRow>
                            <p> <i className="fas fa-check-square" /> مناسب برای معلولین </p>
                        </MDBRow>
                        <MDBRow>
                            <p>  <i className="fas fa-check-square" /> ویوی رو به دریا </p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightStayInHome"}>
                            <MDBCol>
                                <h4> حداقل تعداد روز اقامت </h4>
                            </MDBCol>
                            <MDBCol>
                                <h4> حداکثر تعداد روز اقامت </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <h4> امکانات </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <p> <i className="fa fa-broom" /> جارو برقی </p>
                            </MDBCol>
                            <MDBCol>
                                <p> <i className="fas fa-wifi" /> اینترنت رایگان </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <p> <i className="fas fa-phone" /> تلفن </p>
                            </MDBCol>
                            <MDBCol>
                                <p><i className="fas fa-box" />  جعبه کمک های اولیه </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <p> <i className="fas fa-pray" /> مهر و جانماز </p>
                            </MDBCol>
                            <MDBCol>
                                <p><i className="fas fa-tv" /> تلوزیون </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <p><i className="fa fa-door-closed" /> یخچال </p>
                            </MDBCol>
                            <MDBCol>
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
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol md={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3}>
                                        <p>آشپز</p>
                                    </MDBCol>
                                    <MDBCol  md={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3}>
                                        <p>مهماندار</p>
                                    </MDBCol>
                                    <MDBCol  md={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3}>
                                        <p>راهنمای سفر</p>
                                    </MDBCol>
                                    <MDBCol  md={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={1}>
                                        <input type="checkbox"/>
                                    </MDBCol>
                                    <MDBCol  md={3}>
                                        <p>بادیگارد</p>
                                    </MDBCol>
                                    <MDBCol  md={2}>
                                        <p> ۲٫۰۰۰٫۰۰۰ </p>
                                    </MDBCol>
                                    <MDBCol  md={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>
                            <h4> اجاره بها </h4>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11}>
                                <p>زینه هر نفر اضافه به ازای هر شب:  </p> <h5>50000</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11}>
                                <p>ومان تخفیف هفتگی   </p> <h5></h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11}>
                                <p>تخفیف برای اقامت‌های بالای  </p> <h5> 7 شب تخفیف ماهانه:</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11}>
                                <p>تخفیف برای اقامت‌های بالای </p> <h5>30 شب</h5>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageCalender"}>
                            <MDBCol md={6}>
                                <Calender />
                            </MDBCol>
                            <MDBCol md={6}>
                                <Calender />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <h4> اجاره ها </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol>
                                <p> <i className="fas fa-clock" /> ساعت ورود </p>
                            </MDBCol>
                            <MDBCol md={8}>
                                <p>  <i className="fas fa-clock" /> ساعت خروج </p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageDetailsّFacilitiesRow"}>

                            <MDBRow>
                                <h5>امکان ورود حیوان خانگی: </h5><p>بیرون ساختمان ورود </p>
                            </MDBRow>
                            <MDBRow>
                                <p>حیوانات به داخل اقامتگاه کاملا ممنوع است</p>
                            </MDBRow>
                            <MDBRow>
                                <h5>امکان برگزاری مراسم:</h5><p>مجاز است، نیازمند هماهنگی قبلی تعداد</p>
                            </MDBRow>

                        </MDBRow>
                        <MDBRow>
                            <h4> آدرس </h4>
                        </MDBRow>
                        <MDBRow>
                            <h5> اردبیل-خلخال </h5>
                        </MDBRow>

                        <MDBRow>
                            <h1> Map</h1>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageDetailsRightingComment"}>
                            <MDBCol md={10}>
                                <h4> نظرات </h4>
                            </MDBCol>
                            <MDBCol md={2}>
                                <h4> نوشتن نظر<i className="fa fa-user-alt" /> </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md={1}>
                                <p className={"fv-DisplayPageDetailsRating"}> 5 </p>
                            </MDBCol>
                            <MDBCol md={2}>
                            <p className={"fv-DisplayPageDetailsRate"}>  /4.5 <i className="fa fa-star" /> </p>
                            </MDBCol>
                            <MDBCol md={2} className={"fv-DisplayPageDetailsRateNumberPerson"}>
                                <p> (۲۰ نظر) </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsScore"}>
                            <MDBCol md={5}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3}>
                                        <p> نظافت </p>
                                    </MDBCol>
                                    <MDBCol  md={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4}>
                                       <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3}>
                                        <p> تطابق با آکهی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3}>
                                        <p> مهمان نوازی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3}>
                                        <p> کیفیت میزبانی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonSecond"}/>
                                    </MDBCol >
                                    <MDBCol md={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> 4.5 </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                     <div className={"fv-displayPageCommentOne"}>
                        <MDBRow className={"fv-displayPageCommentPerson"}>
                            <MDBCol md={2}>
                                <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                <MDBRow>
                                    <MDBCol>
                                        <h5> بهار</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol>
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
                            <MDBCol md={2}>
                                <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                <MDBRow>
                                    <MDBCol>
                                        <h5> بهار</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol>
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
                                <input type='searchBbox' value=' انتخاب تاریخ' className={"fv-DisplayPageDetailsLeftBodyDateOnInput"} />
                                <input type='searchBbox' value='انتخاب تاریخ' className={"fv-DisplayPageDetailsLeftBodyDateOutInput"} />
                            </MDBRow>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityText"}>
                            <input type='text' value=' تعداد نفرات'/>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityOption"}>
                            <select value={"Apple"}>
                                <option value="A">Apple</option>
                                <option value="B">Banana</option>
                                <option value="C">Cranberry</option>
                            </select>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftButton"}>
                            <MDBCol>
                                <input type="button" value="درخواست رزرو"/>
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
export default SearchHomePage