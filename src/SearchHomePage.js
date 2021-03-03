import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import Product from "./Product";
import PopularVillage from "./PopularVillage";
import TypesAccommodation from "./typesAccommodation";
import DiscountedProduct from "./DiscountedProduct";
import TrapMagazine from "./trapMagazine"
import TopicsMainPage from "./topicsMainPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import FotterpageImage from "./images/footerMainImage.png"
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
import MobileMenu from "./images/MobileMenu.png"


class SearchHomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage"}>
                <MDBContainer className={'fv-SearchHomePageBodyMobile fv-footerMenu main'}>
                    <MDBRow className={'fv-footerMenuRibbonMobile'}>
                        <MDBCol sm={8}>
                            <img src={MobileMenu} />
                        </MDBCol>
                        <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                            <img src={LogoName} />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img src={MobileLogo} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage'}>
                                <button> <i className="fa fa-user-alt" /> جست و جو پیشرفته</button>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage'}>
                                <button> <i className="fa fa-user-alt" /> مرتب سازی</button>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBRow className={"fv-SearchHomePageMobileProduct"} >
                            <MDBCol md={4} sm={7} >
                                <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                         rate="5.5/5"
                                         topic="کوچه باغ سبز"
                                         location="مازندران"
                                         numberOfRoom="2"
                                         capacity="2"
                                         price="20000"/>
                            </MDBCol>
                            <MDBCol md={4} sm={7} >
                                <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                         rate="5.5/5"
                                         topic="کوچه باغ سبز"
                                         location="مازندران"
                                         numberOfRoom="2"
                                         capacity="2"
                                         price="20000"/>
                            </MDBCol>
                            <MDBCol md={4} sm={7} >
                                <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                         rate="5.5/5"
                                         topic="کوچه باغ سبز"
                                         location="مازندران"
                                         numberOfRoom="2"
                                         capacity="2"
                                         price="20000"/>
                            </MDBCol>
                        </MDBRow>
                        </MDBRow>
                </MDBContainer>


                <MDBContainer className={'fv-footerMenu fv-SearchHomePageBody'}>
                    <MDBRow className={'fv-footerMenuRibbon'}>
                        <MDBCol md={1}>
                            <i className="fa fa-user-alt" />
                            <a> ورود</a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>
                            <input type='button' value=' میزبان شوید'/>
                        </MDBCol>
                        <MDBCol md={9}>
                            <img src={FotterpageLogo} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-searchMainPageBody"}>
                            <MDBCol md={4}>
                                <MDBRow>
                                    <MDBRow className={'fv-searchMainPage'}>
                                        <MDBRow className={'fv-searchMainPagePrice'}>
                                                <input type='text' value='شهر یا روستا را وارد کنید'/>
                                                    <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                                        <input type='text' value='تاریخ رفت'/>
                                                    </MDBCol>
                                                    <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                                    </MDBCol>
                                                    <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                                        <input type='text' value='تاریخ برگشت'/>
                                                    </MDBCol>
                                                <input type='text' value='تعداد نفرات'/>
                                                <input type='text' value='شهر یا روستا را وارد کنید'/>
                                        </MDBRow>
                                        <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                                <p>قیمت</p>
                                                    <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                                        <input type='text' value='تاریخ رفت'/>
                                                    </MDBCol>
                                                    <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                                    </MDBCol>
                                                    <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                                        <input type='text' value='تاریخ برگشت'/>
                                                    </MDBCol>
                                        </MDBRow>
                                        <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                            <p>دسته بندی اقامتگاه</p>
                                                <MDBCol md={12}>
                                                    <input type="checkbox" value="استخردار"/> استخردار
                                                </MDBCol>
                                                <MDBCol md={12}>
                                                    <input type="checkbox" value="ساحلی"/> ساحلی
                                                </MDBCol>
                                                <MDBCol md={12}>
                                                    <input type="checkbox" value="ییلاقی"/> ییلاقی
                                                </MDBCol>
                                                <MDBCol md={12}>
                                                    <input type="checkbox" value=" کلبه جنگلی"/>  کلبه جنگلی
                                                </MDBCol>
                                                <MDBCol md={12}>
                                                    <input type="checkbox" value="خانه قدیمی"/> خانه قدیمی
                                                </MDBCol>
                                        </MDBRow>
                                        <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                            <MDBCol md={12}>
                                                <input type="checkbox" value="اقامت گاه های دارای تخفیف"/> اقامت گاه های دارای تخفیف
                                            </MDBCol>
                                            <MDBCol md={12}>
                                                <input type="checkbox" value="اقامت گاه های ضدعفونی شده"/> اقامت گاه های ضدعفونی شده
                                            </MDBCol>
                                        </MDBRow>
                                        <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPagesSearchButton'}/>

                                    </MDBRow>
                                </MDBRow>
                            </MDBCol>

                            <MDBCol md={8} className={"fv-searchMainPageBodyLeft"}>
                                <p>20 اقامتگاه یافت شد</p>
                                <MDBRow className={"fv-SortMenu"}>
                                    <p>مرتب سازی بر اساس:</p>
                                    <input type='button' value='جدیدترین'/>
                                    <input type='button' value='گران‌ترین'/>
                                    <input type='button' value='ارزان‌ترین'/>
                                    <input type='button' value='محبوب‌ترین'/>
                                    <input type='button' value='نزدیکترین'/>
                                </MDBRow>
                                <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>

                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                    <MDBCol md={4} sm={7} >
                                        <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                 rate="5.5/5"
                                                 topic="کوچه باغ سبز"
                                                 location="مازندران"
                                                 numberOfRoom="2"
                                                 capacity="2"
                                                 price="20000"/>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-SearchHomePagePagination"}>
                                    <input type='button' value='1'/>
                                    <input type='button' value='2'/>
                                </MDBRow>
                            </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        )}
}
export default SearchHomePage