import React, {Component} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Product from "./Product";
import PopularVillage from "./PopularVillage";
import TypesAccommodation from "./typesAccommodation";
import DiscountedProduct from "./DiscountedProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import TopicsMainPage from "./topicsMainPage";
import FotterpageImage from "./images/footerMainImage.png"
import FotterpageLogo from "./images/Logo.png"
import TrapMagazine from "./trapMagazine"

class Main extends Component {
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
                        <MDBCol md={5} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                            <input type='text' value='تاریخ رفت'/>
                        </MDBCol>
                        <MDBCol md={1} className={'fv-searchMainPageBetweenDate'}>

                        </MDBCol>
                        <MDBCol md={5} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                            <input type='text' value='تاریخ برگشت'/>
                        </MDBCol>
                    <input type='text' value='تعداد نفرات'/>
                    <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPageSearchButton'}/>
                    </MDBRow>
                </MDBRow>
        </div>

        <MDBContainer>
            <MDBRow className={"fv-topicFirstMainPage"}>
                <TopicsMainPage topic="اقامتگاه های پر بازدید"/>
            </MDBRow>
            <MDBRow className={"fv-mainProduct"} md={3} sm={6}>
                <MDBCol>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                    rate="5.5/5"
                    topic="کوچه باغ سبز"
                    location="مازندران"
                    numberOfRoom="2"
                    capacity="2"
                    price="20000"/>
                </MDBCol>
                <MDBCol>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="20"
                             price="20000"/>
                </MDBCol>
                <MDBCol>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol>
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
            <MDBRow md={3} sm={6}>
                <MDBCol >
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol >
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol >
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
                <MDBCol >
                    <PopularVillage srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                    location="مازندران"
                                    capacity="2"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"/>
            </MDBRow>
            <MDBRow md={3} sm={6}>
                <MDBCol >
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol >
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol >
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
                <MDBCol >
                    <TypesAccommodation topic="استخردار"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"/>
            </MDBRow>

            <MDBRow md={3} sm={6}>
                <MDBCol >
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
                <MDBCol >
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
                <MDBCol >
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
                <MDBCol >
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
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="اقامتگاه های اقتصادی"/>
            </MDBRow>
            <MDBRow md={3} sm={6}>
                <MDBCol>
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol >
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol >
                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                             rate="5.5/5"
                             topic="کوچه باغ سبز"
                             location="مازندران"
                             numberOfRoom="2"
                             capacity="2"
                             price="20000"/>
                </MDBCol>
                <MDBCol >
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
                    <MDBRow>
                        <MDBCol md={12}>
                            <img className={"fv-aboutUsFirstImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                            <img className={"fv-aboutUsSecondImage"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={12}>
                            <img className={"fv-aboutUsThirdImage"} src="https://www.w3schools.com/html/pic_trulli.jpg"  />
                            <img className={"fv-aboutUsFourthImage"} src="https://www.w3schools.com/html/pic_trulli.jpg"  />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md={6}>
                    <h1>درباره ما</h1>
                   <p>
                       ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺎﺒﻧد ﻪﺑ حاﺮﻃ ﻦﯿﻨﭽﻤﻫ .دﻮﺑ ﺪﻫاﻮﺧ ﺮ نﺎﻣز رﺎﮑﻨﯾا و دﻮﺸﯿﻣ ﻪﺘﺷادﺮﺑ ﯽﻠﺻا رﺎﮐ یور زا شﺰﮐﺮﻤﺗ ددﺮﮕﺑ ﻂﺒﺗﺮﻣ یﺎﻫ ﻦﺘﻣ لﺎﺒﻧد ﺪﻫاﻮﺨﺑ حاﺮﻃ ﺮﮔا .ﺪﻫﺪﯿﻤﻧ ﺎﻣﺮﻓ رﺎﮐ ﻪﺑ ﯽﺘﺳرد ﺪﯾد ﯽﻠﮐ حﺮﻃ ﻪﺠﯿﺘﻧ رد .ﺖﺴﯿﻧ هدﺎﻣآ تﺎﺤﻔﺻ ﯽﻠﺻا یاﻮﺘﺤﻣ ﻪﮐ ﺪﻨﺘﺴﻫ وﺮﺑ ور عﻮﺿﻮﻣ ﻦﯾا ﺎﺑ ﺎﻟﻮﻤﻌﻣ ﺖﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ.
                       ﻦﺘﻣ یور داﺮﻓا ﺪﻫاﻮﺧ‌ﯽﻤﻧ و دﻮﺷ ﺎﯾﻮﺟ ﯽﺣاﺮﻃ درﻮﻣ رد ار ناﺮﮕﯾد ﺮﻈﻧ رﺎﮐ ﻪﯾارا زا ﺲﭘ ﻪﮐ ﺖﺳا ﻦﯾا لﺎﺒﻧد ﻪﺑ حاﺮﻃ ﻦﯿﻨﭽﻤﻫ .دﻮﺑ ﺪﻫاﻮﺧ ﺮ نﺎﻣز رﺎﮑﻨﯾا و دﻮﺸﯿﻣ ﻪﺘﺷادﺮﺑ ﯽﻠﺻا رﺎﮐ یور زا شﺰﮐﺮﻤﺗ ددﺮﮕﺑ ﻂﺒﺗﺮﻣ یﺎﻫ ﻦﺘﻣ لﺎﺒﻧد ﺪﻫاﻮﺨﺑ حاﺮﻃ ﺮﮔا .ﺪﻫﺪﯿﻤﻧ ﺎﻣﺮﻓ رﺎﮐ ﻪﺑ ﯽﺘﺳرد ﺪﯾد ﯽﻠﮐ حﺮﻃ ﻪﺠﯿﺘﻧ رد .ﺖﺴﯿﻧ هدﺎﻣآ تﺎﺤﻔﺻ ﯽﻠﺻا یاﻮﺘﺤﻣ ﻪﮐ ﺪﻨﺘﺴﻫ وﺮﺑ ور عﻮﺿﻮﻣ ﻦﯾا ﺎﺑ ﺎﻟﻮﻤﻌﻣ ﺖﯾﺎﺳ ﺐﻟﺎﻗ ﯽﺣاﺮﻃ مﺎﮕﻨﻫ ﺖﯾﺎﺳ نﺎﺣاﺮﻃ
                   </p>
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
                <MDBRow>
                    <MDBCol md={3}>
                    <TrapMagazine
                    srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                    topic="مجله ترپ"
                    comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. مجله ترپمج
                    له ترپمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3}>
                        <TrapMagazine
                            srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                            topic="مجله ترپ"
                            comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. مجله ترپمجله تر
                            پمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3}>
                        <TrapMagazine
                            srcimmage="https://www.w3schools.com/html/pic_trulli.jpg"
                            topic="مجله ترپ"
                            comment="مجله ترپمجله ترپمجله ترپمجله ترپمجله ترپمجله ترپ. م
                            جله ترپمجله ترپمجله ترپمجله ترپممجله ترپمجله ترپمجله ترپجله ترپ"/>
                    </MDBCol>
                    <MDBCol md={3}>
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

export default Main