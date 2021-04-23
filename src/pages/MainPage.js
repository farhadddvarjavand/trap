import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Product from "../componentsPages/Product";
import PopularVillage from "../componentsPages/PopularVillage";
import TypesAccommodation from "../componentsPages/typesAccommodation";
import DiscountedProduct from "../componentsPages/DiscountedProduct";
import TrapMagazine from "../componentsPages/trapMagazine"
import TopicsMainPage from "../componentsPages/topicsMainPage";
import FotterpageImage from "../images/footerMainImage.png"
import FotterpageLogo from "../images/Logo.png"
import LogoName from "../images/LogoName.png"
import MobileLogo from "../images/MobileLogo.png"
import MobileMenu from "../images/MobileMenu.png"


class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={"main"}>
        <div className={'fv-footerMenu'}>
            <MDBRow className={'fv-footerMenuImage'}>
                <img src={FotterpageImage} alt="Trulli" />
            </MDBRow>
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

            <MDBRow className={'fv-searchMainPageTopic'}>
                <MDBCol md={12}>
                    <p>اجاره خانه های روستایی</p>
                </MDBCol>
                <MDBCol md={12}>
                    <p>خانه های روستایی در رویایی ترین مناطق</p>
                </MDBCol>
            </MDBRow>

                <MDBRow>
                    <MDBRow className={'fv-searchMainPage'}>
                    <p>اقامتگاه رویایی خود را جست و جو کنید</p>
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
                    <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPageSearchButton'}/>
                    </MDBRow>
                </MDBRow>
        </div>

        <MDBContainer className={"fv-MainBody"}>
            <MDBRow className={"fv-topicFirstMainPage"}>
                <TopicsMainPage topic="اقامتگاه های پر بازدید"/>
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
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="روستاهای پر بازدید"/>
            </MDBRow>
            <MDBRow className={"fv-mainMobileVillage"}>
                <MDBCol md={3} sm={7}>
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"/>
            </MDBRow>
            <MDBRow className={'fv-mainMobileAccommodation'} >
                <MDBCol md={3} sm={7} >
                   <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol  md={3} sm={7}>
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol  md={3} sm={7}>
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"/>
            </MDBRow>

            <MDBRow className={'fv-mainMobile'}>
                <MDBCol md={3} sm={7}>
                    <DiscountedProduct discountedAmount="20%"
                        srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                        rate="5.5/5"
                        topic="کوچه باغ سبز"
                        location="مازندران"
                        numberOfRoom="2"
                        capacity="2"
                        price="20000"
                        PreventPrice="22000"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <DiscountedProduct discountedAmount="20%"
                                       srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                       rate="5.5/5"
                                       topic="کوچه باغ سبز"
                                       location="مازندران"
                                       numberOfRoom="2"
                                       capacity="2"
                                       price="20000"
                                       PreventPrice="22000"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <DiscountedProduct discountedAmount="20%"
                                       srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                       rate="5.5/5"
                                       topic="کوچه باغ سبز"
                                       location="مازندران"
                                       numberOfRoom="2"
                                       capacity="2"
                                       price="20000"
                                       PreventPrice="22000"/>
                </MDBCol>
                <MDBCol md={3} sm={7}>
                    <DiscountedProduct discountedAmount="20%"
                                       srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                       rate="5.5/5"
                                       topic="کوچه باغ سبز"
                                       location="مازندران"
                                       numberOfRoom="2"
                                       capacity="2"
                                       price="20000"
                                       PreventPrice="22000"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={'fv-centerImage'}>
                <MDBCol md={6} sm={12}>
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
                </MDBCol>
                <MDBCol md={6} sm={12}>
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" />
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="اقامتگاه های اقتصادی"/>
            </MDBRow>
            <MDBRow className={'fv-mainMobile'}>
                <MDBCol md={3} sm={6}>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol md={3} sm={6}>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol md={3} sm={6}>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol md={3} sm={6}>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-aboutUs"}>
                <MDBCol md={6}>
                    <MDBRow className={'fv-aboutUsImage'}>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsFirstImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsSecondImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsThirdImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsFourthImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md={6} sm={4}>
                    <h1>درباره ما</h1>
                   <p>
                       ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺪﻫاﻮﺨﺑ حاﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ.
                       ﻦﺘﻣ یور داﺮﻓا ﺪﻫاﻮﺧ‌ﯽﻤﻧ و دﻮﺷ ﺎﺴﻫﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                       ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺪﻫاﻮﺨﺑ حاﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ.
                       ﻦﺘﻣ یور داﺮﻓا ﺪﻫاﻮﺧ‌ﯽﻤﻧ و دﻮﺷ ﺎﺴﻫﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                       ﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                       ﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮ
                   </p>
                </MDBCol>
            </MDBRow>

            <MDBRow className={"fv-aboutUsMobile"}>
                <MDBCol sm={3} className={'fv-aboutUsImage'}>
                    <img className={"fv-aboutUsFirstImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                    <MDBRow>
                        <MDBCol>
                            <img className={"fv-aboutUsSecondImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <img className={"fv-aboutUsThirdImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol sm={9}>
                    <h1>درباره ما</h1>
                    <p>
                        ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺪﻫاﻮﺨﺑ حاﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ.
                        ﻦﺘﻣ یور داﺮﻓا ﺪﻫاﻮﺧ‌ﯽﻤﻧ و دﻮﺷ ﺎﺴﻫﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                        ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺪﻫاﻮﺨﺑ حاﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ.
                        ﻦﺘﻣ یور داﺮﻓا ﺪﻫاﻮﺧ‌ﯽﻤﻧ و دﻮﺷ ﺎﺴﻫﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                        ﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                        ﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮ
                    </p>
                    <MDBRow>
                        <MDBCol sm={8}  className={"fv-aboutUsFourthImage"}>
                        <img className={"fv-aboutUsFourthImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>

            <MDBRow className={"fv-commentsTitle"}>
                <MDBCol>
                    <h1>نظرات مهمان ها</h1>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-comment"}>
                <MDBCol md={5}  className={"fv-commentLeft"}>
                    <p> ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ</p>
                </MDBCol>
                <MDBCol md={5}>
                    <p> ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ
                        ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ ﯽﺣاﺮﻃ مﺎﮕﻨ</p>
                </MDBCol>

            </MDBRow>
            <div className={"fv-commentSvgLeft"}>
            </div>
            <div className={"fv-commentSvgRight"}>
            </div>
            <MDBRow className={"fv-gustComment"}>
                <MDBCol md={6}>
                    <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                   نظرات مهمان ها
                </MDBCol>
                <MDBCol md={6}>
                    <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                    نظرات مهمان ها
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-svgPagination"}>
                <MDBCol md={12}>
                    <div className="slider_pagination">
                        <button className="slider_pagination_btn slider_pagination_btn--sel" />
                        <button className="slider_pagination_btn" />
                        <button className="slider_pagination_btn" />
                    </div>
                </MDBCol>
            </MDBRow>
                <MDBRow className={"fv-topicMainPage"}>
                    <TopicsMainPage topic="مجله ترپ"/>
                </MDBRow>
                <MDBRow className={'fv-mainMobile fv-trapMagazine'}>
                    <MDBCol md={3} sm={6}>
                    <TrapMagazine
                    srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                    topic="مجله ترپ"
                    comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. مجله ترپمج
                    له ترپمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3} sm={6}>
                        <TrapMagazine
                            srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                            topic="مجله ترپ"
                            comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله. ترپمجله ترپ. مجله ترپمجله تر
                            پمجله ترپمجله ترپممجله ترپمجله ترپمجله. ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3} sm={6}>
                        <TrapMagazine
                            srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                            topic="مجله ترپ"
                            comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. م
                            جله ترپمجله ترپمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3} sm={6}>
                        <TrapMagazine
                            srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                            topic="مجله ترپ"
                            comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. مج
                            له ترپمجله ترپمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>

            <MDBRow className={"fv-footerMainPage"}>
                <MDBCol md={5}>
                    <img className={"fv-footerMainPageBigger"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                    <img className={"fv-footerMainPageBigger"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="50" height="50" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                    <img className={"fv-footerMainPageSmaller"} src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg" width="15" height="15" />
                </MDBCol>
                <MDBCol md={7}>
                    <a>قوق کاربران</a>
                    <a>قوانین ترپ</a>
                    <a>تماس با پشتیبانی</a>
                    <a>درباره ترپ</a>
                </MDBCol>
            </MDBRow>


            </div>
        )
    }

}

export default MainPage