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
import {Link} from "react-router-dom";
import {productData} from "../data/testData"
import Datas from "../data/Datas";




class MainPage extends Datas {
    constructor(props) {
        super(props);
        this.state={
            ...this.props,
            ...this.state,
            buttonCommentActiveName:'',
            enterTheVillage:'',
            dateToGo:'',
            dateToReturn:'',
            numberOfPeople:'',
            productData:[
                {numberOfRoomProduct:'3',
                    NumberOfCapacityProduct:'3',
                    rateProduct:'3.5',
                    topicProduct:'باغ',
                    locationProduct:'مازندران',
                    priceProduct:'25000',},

                {numberOfRoomProduct:'2',
                    NumberOfCapacityProduct:'3',
                    rateProduct:'3.5',
                    topicProduct:'باغ',
                    locationProduct:'مازندران',
                    priceProduct:'25000',},

                {numberOfRoomProduct:'1',
                    NumberOfCapacityProduct:'3',
                    rateProduct:'3.5',
                    topicProduct:'باغ',
                    locationProduct:'مازندران',
                    priceProduct:'25000',},

                {numberOfRoomProduct:'4',
                    NumberOfCapacityProduct:'3',
                    rateProduct:'3.5',
                    topicProduct:'باغ',
                    locationProduct:'مازندران',
                    priceProduct:'25000',}

            ],

        }
    }

    componentDidMount() {
        super.componentDidMount();



    }

    render() {

        const popularVillage = this.state.popularVillas

        const bannersvillages = this.state.bannersVillage

        const bannersvillas = this.state.bannersvillas

        const bannersbigBanners = this.state.bannersbigBanners

        const discountedVillas = this.state.discountedVillas

        const economicVillas = this.state.economicVillas

        console.log(economicVillas)
        console.log('economicVillas')







        /* const a =this.getData('https://reqres.in/api/get/1')
         console.log(a.text)  */

        const pagination =[]
        const numbetOfComments = 20
        let NumberOfButtonComment = numbetOfComments/3
        if ((NumberOfButtonComment%3) > 0)
            NumberOfButtonComment++
        for (let i = 0 ; i < NumberOfButtonComment-1 ; i ++){
            pagination.push(i+1)
        }

        console.log(this.state.buttonCommentActiveName)
        const setdata = this.state.data.url
        console.log(setdata)

        const data = this.state.productData;

       const {enterTheVillage,dateToGo,dateToReturn,numberOfPeople} = this.state
        return(
            <div className={"main"}>
        <div className={'fv-footerMenu'}>
            <MDBRow className={'fv-footerMenuImage'}>
                <img src={FotterpageImage} alt="Trulli" />
            </MDBRow>
                    <MDBRow className={'fv-footerMenuRibbon'}>
                        <MDBCol md={1}>
                            <i className="fa fa-user-alt" />
                            <a> <Link to={'/login'}>ورود</Link></a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>
                            <input type='button' value=' میزبان شوید' onClick={()=> this.props.history.push('/login')}/>
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
                    <input type='text' placeholder={'شهر یا روستا را وارد کنید'} value={enterTheVillage} onChange={(event)=>this.setState({enterTheVillage:event.target.value})}/>
                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                            <input type='text' placeholder={'تاریخ رفت'} value={dateToGo} onChange={(event)=>this.setState({dateToGo:event.target.value})}/>
                        </MDBCol>
                        <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                        </MDBCol>
                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                            <input type='text' placeholder={'تاریخ برگشت'} value={dateToReturn} onChange={(event)=>this.setState({dateToReturn:event.target.value})}/>
                        </MDBCol>
                    <input type='text'  placeholder={'تعداد نفرات'} value={numberOfPeople} onChange={(event)=>this.setState({numberOfPeople:event.target.value})}/>
                    <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPageSearchButton'} onClick={()=>{
                        fetch('https://reqres.in/api/posts', {                     /* POST */
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({enterTheVillage,dateToGo,dateToReturn,numberOfPeople})
                        })
                            .then(response => response.json())
                            .then(data =>{
                                if(data){
                                    console.log(enterTheVillage,dateToGo)
                                    this.props.history.push('/searchHomePage/cheapest/1')
                                }
                            }) ;

                    }}/>
                    </MDBRow>
                </MDBRow>
        </div>

        <MDBContainer className={"fv-MainBody"}>
            <MDBRow className={"fv-topicFirstMainPage"}>
                <TopicsMainPage topic="اقامتگاه های پر بازدید"
                                linkToPage={"./searchHomePage/1"}/>
            </MDBRow>
            <MDBRow className={"fv-mainProduct fv-mainMobile"} >



                {popularVillage.map(productDetails=>{
                        if(productDetails.details){
                            return(
                                <MDBCol md={3} sm={7}>
                                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                             rate={''}
                                             topic={productDetails.title}
                                             location={productDetails.city}
                                             numberOfRoom={productDetails.details.bedroom}
                                             capacity={productDetails.details.max_capacity}
                                             price={''}/>

                                </MDBCol>
                            )
                        }else {
                            return(
                                <MDBCol md={3} sm={7}>
                                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                             rate={''}
                                             topic={productDetails.title}
                                             location={productDetails.city}
                                             numberOfRoom={''}
                                             capacity={''}
                                             price={''}/>

                                </MDBCol>
                            )
                    }


                })}

            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="روستاهای پر بازدید"
                                linkToPage={"/searchHomePage/cheapest/1"}/>
            </MDBRow>
            <MDBRow className={"fv-mainMobileVillage"}>

                {bannersvillages.map(banners=>{
                   return( <MDBCol md={3} sm={7}>
                        <PopularVillage srcImage={banners.link}
                                        location={banners.title}
                                        capacity="2"/>
                    </MDBCol>)
                })}
            </MDBRow>

            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"
                                linkToPage={"/searchHomePage/cheapest/1"}/>
            </MDBRow>
            <MDBRow className={'fv-mainMobileAccommodation'} >
                {bannersvillas.map(bannersvila=>{
                  return  <MDBCol md={3} sm={7} >
                                 <TypesAccommodation
                                     topic={bannersvila.title}
                                     image={bannersvila.link}/>
                          </MDBCol>
                })}
            </MDBRow>

            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"
                                linkToPage={"./searchHomePage/1"}/>
            </MDBRow>

            <MDBRow className={'fv-mainMobile'}>
                {discountedVillas.map(discountedVilla=>{
                    let discountPrice = ''
                    discountPrice = (discountedVilla.normal_cost * discountedVilla.weekly_discount) / 100
                    if(discountedVilla.details){
                        return(
                            <MDBCol md={3} sm={7}>
                                <DiscountedProduct discountedAmount={discountedVilla.weekly_discount+"%"}
                                                   srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                   rate="5.5/5"
                                                   topic={discountedVilla.villa.title}
                                                   location={discountedVilla.villa.city}
                                                   numberOfRoom={discountedVilla.details.bedroom}
                                                   capacity={discountedVilla.details.max_capacity}
                                                   price={discountedVilla.normal_cost - discountPrice}
                                                   PreventPrice={discountedVilla.normal_cost}/>

                            </MDBCol>
                        ) }else {
                        return (
                            <MDBCol md={3} sm={7}>
                                <DiscountedProduct discountedAmount={discountedVilla.weekly_discount+"%"}
                                                   srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                   rate="5.5/5"
                                                   topic={discountedVilla.villa.title}
                                                   location={discountedVilla.villa.city}
                                                   numberOfRoom={''}
                                                   capacity={''}
                                                   price={discountedVilla.normal_cost - discountPrice}
                                                   PreventPrice={discountedVilla.normal_cost}/>

                            </MDBCol>
                        )
                    }
                })}
            </MDBRow>
            <MDBRow className={'fv-centerImage'}>
                {bannersbigBanners.map(bigBanners => {
                    return(
                        <MDBCol md={6} sm={12}>
                            <img src={bigBanners.link} />
                        </MDBCol>
                    )
                })}
            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="اقامتگاه های اقتصادی"
                                linkToPage={"./searchHomePage/1"}/>
            </MDBRow>
            <MDBRow className={'fv-mainMobile'}>
                {economicVillas.map(economicVilla=>{
                    return(
                        <MDBCol md={3} sm={6}>
                            <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                     rate="5.5/5"
                                     topic={economicVilla.title}
                                     location={economicVilla.state}
                                     numberOfRoom={economicVilla.details.bedroom}
                                     capacity={economicVilla.details.max_capacity}
                                     price={economicVilla.normal_cost}/>
                        </MDBCol>
                    )
                })}
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
                {pagination.slice(1,1)}
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
                    <div className="slider_pagination"> {/* ButtonComments */}
                        {pagination.map(pagination => {
                           return <button name={`btn${pagination}`} className={this.state.buttonCommentActiveName===`btn${pagination}` ? 'slider_pagination_btn active' :'slider_pagination_btn'} onClick={(event)=>this.setState({buttonCommentActiveName:event.target.name})}/>
                        })}
                    </div>
                </MDBCol>
            </MDBRow>
                <MDBRow className={"fv-topicMainPage"}>
                    <TopicsMainPage topic="مجله ترپ"
                                    linkToPage={"./searchHomePage/1"}/>
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
                    <a onClick={()=>{
                        const a = 'test'
                     this.postDataAndPush('https://reqres.in/api/posts',a,'/login2')
                    }}>قوق کاربران</a>
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