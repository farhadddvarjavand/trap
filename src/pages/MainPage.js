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
import config from "../services/config.json"
import CalendarLinear from "../data/CalenddarLinear";
import {getUserInformation} from "../services/userService";




class MainPage extends Datas {
    constructor(props) {
        super(props);
        this.state={
            ...this.props,
            ...this.state,
            buttonCommentActiveName:'',
            city:'',
            dateToGo:'',
            dateToReturn:'',
            numberOfPeople:'',
            hideButtonLogin:true,


        }
    }



    selectDayToGo = (date) =>{                                    // set date to go
        if(date) {
            this.setState({dateToGo:`${date.year}/${date.month}/${date.day}`})
        }
    }
    selectDayToReturn = (date) =>{                                    // set date to go
        if(date) {
            this.setState({dateToReturn:`${date.year}/${date.month}/${date.day}`})
        }
    }


    render() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }

        const popularVillage = this.state.popularVillas

        const bannersvillages = this.state.bannersVillage

        const bannersvillas = this.state.bannersvillas

        const bannersbigBanners = this.state.bannersbigBanners

        const discountedVillas = this.state.discountedVillas

        const economicVillas = this.state.economicVillas








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

       // const setdata = this.state.data.url

        // const data = this.state.productData;

       const {city,dateToGo,dateToReturn,numberOfPeople} = this.state
        return(
            <div className={"main"}>
        <div className={'fv-footerMenu'}>
            <MDBRow className={'fv-footerMenuImage'}>
                <img src={FotterpageImage} alt="Trulli" />
            </MDBRow>
                    <MDBRow className={'fv-footerMenuRibbon'}>

                        <MDBCol md={1}>
                            <i className={localStorage.getItem("token") ? "" : "fa fa-user-alt"}/>
                            <a className={localStorage.getItem("token") ? "fv-hideButtonRegister" : "fv-interTextMainPage"}> <Link to={'/login'}>ورود</Link></a>

                        </MDBCol>
                        <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>

                            <a className={localStorage.getItem("token") ? "fv-userInfoButtonCascade" : "fv-hideButtonRegister"}  onClick={()=>{
                                this.setState({hideButtonLogin:!this.state.hideButtonLogin})
                            }}> <img src={avatar ? `${config.webapi}/images/villas/thum/${avatar}` : MobileLogo} /> {nameAndFamily} </a>
                            <Link to={ "/hostStep1"} ><input type='button' value=' میزبان شوید' onClick={()=> this.props.history.push('/login3')} className={localStorage.getItem("token") ? "fv-getHostButtonMainPage" : "fv-hideButtonRegister"}  /> </Link>
                        </MDBCol>
                        <MDBCol md={9}>
                            <img src={FotterpageLogo} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={'fv-footerMenuRibbonMobile'}>
                        <MDBCol sm={8}>
                            <img src={MobileMenu}  onClick={()=>{
                                if(localStorage.getItem("token")){
                                    this.setState({hideButtonLogin:!this.state.hideButtonLogin})
                                }else {
                                    this.props.history.push("/login")
                                }

                            }}/>
                        </MDBCol>
                        <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                            <img src={LogoName} />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img src={MobileLogo} />
                        </MDBCol>
                    </MDBRow>

            <MDBContainer className={localStorage.getItem("token") ? `fv-containerOptionMainPageRowTop ${this.state.hideButtonLogin ? "fv-displayNoneLogin" : ""}` : "fv-containerOptionMainPageRowTop fv-displayNoneLogin "}>
                <MDBRow className={"fv-cascadeOptionMainPageRowTop"}>
                    <MDBCol md={12} sm={12}>
                        <MDBRow>
                            <MDBCol md={2} sm={2}>
                                <img src={avatar ? `${config.webapi}/images/villas/thum/${avatar}` : MobileLogo} />
                            </MDBCol>
                            <MDBCol className={"fv-textInToCascadeOptionMainPage"} md={7} sm={8}>
                                <MDBRow>
                                    <a><h5>{nameAndFamily}</h5></a>
                                </MDBRow>
                                <MDBRow>
                                    <Link to={"/Profile"}><a>مشاهده حساب کاربری</a></Link>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/Profile"}> <i  className={"fa fa-chart-line"} />
                            <a><p>داشبورد من</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/myAccommodation"}> <i className="fa fa-credit-card" />
                            <a><p>اقامت گاه های من</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/ProfileReservation2"}> <i className="fa fa-receipt" />
                            <a><p>رزور های من</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus"}>
                    <MDBCol md={12} sm={12}>
                        <a onClick={()=>{
                            localStorage.clear()
                            window.location.reload();
                        }}> <i className="fa fa-sign-out-alt" />
                            <p>خروج از حساب کاربری</p></a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>





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
                    <input type='text' placeholder={'شهر یا روستا را وارد کنید'} value={city} onChange={(event)=>this.setState({city:event.target.value})}/>
                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                            <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalendarLinear dayToGo={this.selectDayToGo} text={'تاریخ رفت'}/> </div>
                        </MDBCol>
                        <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                        </MDBCol>
                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                            <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalendarLinear dayToGo={this.selectDayToReturn} text={'تاریخ برگشت'}/> </div>
                        </MDBCol>
                    <input type='text'  placeholder={'تعداد نفرات'} value={numberOfPeople} onChange={(event)=>this.setState({numberOfPeople:event.target.value})}/>
                        <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPageSearchButton'} onClick={()=>{
                        const mainPageSearch = {
                            city:`C ${this.state.city}`,
                            numberOfPeople: this.state.numberOfPeople,
                            dateToGo:this.state.dateToGo,
                            dateToReturn:this.state.dateToReturn,
                        }
                        localStorage.setItem("mainPageSearch"  , JSON.stringify(mainPageSearch));
                        this.props.history.push({pathname:"/searchHomePage/doSearch/1",searchDatas: {city: this.state.city, dayToGo: mainPageSearch.dateToGo , dateToReturn:mainPageSearch.dateToReturn , capacity:mainPageSearch.numberOfPeople}})
                      /*  fetch('https://reqres.in/api/posts', {                     // POST
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({city,dateToGo,dateToReturn,numberOfPeople})
                        })
                            .then(response => response.json())
                            .then(data =>{
                                if(data){
                                    console.log(city,dateToGo)
                                    this.props.history.push('/searchHomePage/cheapest/1')
                                }
                            }) ; */

                        }}/>
                    </MDBRow>
                </MDBRow>
        </div>

        <MDBContainer className={"fv-MainBody"}>
            <MDBRow className={"fv-topicFirstMainPage"}>
                <TopicsMainPage topic="اقامتگاه های پر بازدید"
                                linkToPage={"/searchHomePage/Newest/1"}/>
            </MDBRow>
            <MDBRow className={"fv-mainProduct fv-mainMobile"} >



                {popularVillage.map(productDetails=>{
                        if(productDetails.details){
                            return(
                                <MDBCol md={3} sm={7}>
                                    <Product srcImage={`${config.webapi}/images/villas/thum/${productDetails.main_img }`}
                                             rate={productDetails.score}
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
                                    <Product srcImage={`${config.webapi}/images/villas/thum/${productDetails.main_img }`}
                                             rate={productDetails.score}
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
                                linkToPage={"/searchHomePage/Newest/1"}/>
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
                <TopicsMainPage topic="اقامت گاه های تخفیف دار"
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
                                                   srcImage={`${config.webapi}/images/villas/thum/${discountedVilla.main_img }`}
                                                   rate={discountedVilla.villa.score}
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
                                                   srcImage={`${config.webapi}/images/villas/thum/${discountedVilla.main_img }`}
                                                   rate={discountedVilla.villa.score}
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
                                linkToPage={"/searchHomePage/Newest/1"}/>
            </MDBRow>
            <MDBRow className={'fv-mainMobile'}>
                {economicVillas.map(economicVilla=>{
                    return(
                        <MDBCol md={3} sm={6}>
                            <Product srcImage={`${config.webapi}/images/villas/thum/${economicVillas.main_img }`}
                                     rate={economicVilla.score}
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
                                    linkToPage={"/searchHomePage/Newest/1"}/>
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