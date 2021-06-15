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
import UserImage from "../images/user.png"
import Image1 from "../images/image1.png"
import Image2 from "../images/image2.png"
import Image3 from "../images/image3.png"
import Image4 from "../images/image4.png"
import {Link} from "react-router-dom";
import {productData} from "../data/testData"
import Datas from "../data/Datas";
import config from "../services/config.json"
import CalendarLinear from "../data/CalenddarLinear";
import {getUserInformation} from "../services/userService";
import Footer from "../componentsPages/footer";
import HeadeerLoginMenu from "../componentsPages/HeaderLoginMenu"
import {Waiting} from "../componentsPages/WaitingLoad";

const commaNumber = require('comma-number')





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
            onclickButtonHandle:true,


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
        let popularVillaswaitingHandle = true
        let bannersvillageswaitingHandle  = true
        let bannersvillaswaitingHandle  = true
        let discountedVillaswaitingHandle  = true
        let economicVillaswaitingHandle =true
        if(this.state.popularVillas.length>0){
            popularVillaswaitingHandle =false
        }
        if(this.state.popularVillas.length>0){
            bannersvillageswaitingHandle =false
        }
        if(this.state.popularVillas.length>0){
            bannersvillaswaitingHandle =false
        }
        if(this.state.popularVillas.length>0){
            discountedVillaswaitingHandle =false
        }
        if(this.state.popularVillas.length>0){
            economicVillaswaitingHandle =false
        }
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }

        console.log(avatar)
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
        <div className={'fv-footerMenu MainPage'}>
            <MDBRow className={'fv-footerMenuImage'}>
                <img src={FotterpageImage} alt="Trulli" />
            </MDBRow>

                    <MDBRow className={'fv-footerMenuRibbon'}>

                        <MDBCol md={1}>
                            <i className={localStorage.getItem("token") ? "" : "fa fa-user-alt"}/>
                            <a className={localStorage.getItem("token") ? "fv-hideButtonRegister" : "fv-interTextMainPage"}> <Link to={'/login'}>ورود</Link></a>

                        </MDBCol>
                        <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>

                            <a className={localStorage.getItem("token") ? "fv-userInfoButtonCascade" : "fv-hideButtonRegister"}  onClick={()=>{ // agar login bod ba click roie dokme in karo kon
                                this.setState({onclickButtonHandle:!this.state.onclickButtonHandle})
                            }}> <img src={avatar ? `${config.webapi}/images/user/${avatar}` : UserImage} /> {nameAndFamily} </a>
                            <Link to={ "/hostStepBasicInformation"} ><input type='button' value=' میزبان شوید' onClick={()=>{
                                localStorage.removeItem("step1")
                                localStorage.removeItem("step2")
                                localStorage.removeItem("step2-2")
                                localStorage.removeItem("step3")
                                localStorage.removeItem("step4")
                                localStorage.removeItem("step5")
                                localStorage.removeItem("step5-2")
                                localStorage.removeItem("editCode")
                                // this.props.history.push('/hostStepBasicInformation')

                            } } className={localStorage.getItem("token") ? "fv-getHostButtonMainPage" : "fv-hideButtonRegister"}  /> </Link>
                        </MDBCol>
                        <MDBCol md={9}>
                            <img src={FotterpageLogo} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className={'fv-footerMenuRibbonMobile'}>
                        <MDBCol sm={8} className={localStorage.getItem("token") ? "fv-hideButtonRegister"  : "fv-userInfoButtonCascade" } >  {/* agar login nabod ino neshon bede */}
                            <img src={MobileMenu}  onClick={()=>{                                           // agar login nabod ba klick ro ax in kar ro bokon
                                this.setState({onclickButtonHandle:!this.state.onclickButtonHandle})
                            }}/>
                        </MDBCol>
                        <MDBCol sm={8} className={localStorage.getItem("token") ? "fv-userInfoButtonCascade" :" fv-hideButtonRegister" } >   {/* agar login bod ino neshon bede */}
                            <a className={localStorage.getItem("token") ? "fv-userInfoButtonCascade" : "fv-hideButtonRegister"}  onClick={()=>{   // agar login bod ba klick ro ax in kar ro bokon
                                    this.setState({onclickButtonHandle:!this.state.onclickButtonHandle})
                            }}> <img src={avatar ? `${config.webapi}/images/user/${avatar}` : UserImage} /></a>
                        </MDBCol>
                        <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                            <img src={LogoName} />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img src={MobileLogo} />
                        </MDBCol>
                    </MDBRow>

            <MDBContainer className={localStorage.getItem("token") && this.state.onclickButtonHandle===false ? `fv-containerOptionMainPageRowTop ` : "fv-containerOptionMainPageRowTop fv-displayNoneLogin "}>
                <MDBRow className={"fv-cascadeOptionMainPageRowTop"}>
                    <MDBCol md={12} sm={12}>
                        <MDBRow>
                            <MDBCol md={2} sm={2}>
                                <img src={avatar ? `${config.webapi}/images/user/${avatar}` : UserImage} />
                            </MDBCol>
                            <MDBCol className={"fv-textInToCascadeOptionMainPage"} md={12} sm={12}>
                                <MDBRow>
                                    <MDBCol>
                                        <a><h5>{nameAndFamily}</h5></a>
                                    </MDBCol>

                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <Link to={"/MainProfilePages/Profile"}><a>مشاهده حساب کاربری</a></Link>
                                    </MDBCol>

                                </MDBRow>

                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/MainProfilePages/myAccommodation"}> <i className="fa fa-credit-card" />
                            <a><p>اقامت گاه های من</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/MainProfilePages/ProfileMyReservation"}> <i className="fa fa-receipt" />
                            <a><p>رزور های من</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus fv-userInfoButtonCascadeMobile"}>
                    <MDBCol md={12} sm={12}>
                        <Link to={"/hostStepBasicInformation"}>
                            <a onClick={()=>{
                                localStorage.removeItem("step1")
                                localStorage.removeItem("step2")
                                localStorage.removeItem("step2-2")
                                localStorage.removeItem("step3")
                                localStorage.removeItem("step4")
                                localStorage.removeItem("step5")
                                localStorage.removeItem("step5-2")
                                localStorage.removeItem("editCode")
                            }}><i className="fa fa-laptop-house" />   <p>میزبان شوید</p></a> </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus"}>
                    <MDBCol md={12} sm={12}>
                        <a onClick={()=>{
                            localStorage.clear()
                            this.props.history.push("/")
                        }}> <i className="fa fa-sign-out-alt" />
                            <p>خروج از حساب کاربری</p></a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className={"fv-mobileMenuGustMainPage"}>
            <MDBRow className={!localStorage.getItem("token") &&  this.state.onclickButtonHandle===false ? "fv-ProfilePageLeftBody fv-gustUsersMenu"  : "fv-displayNoneLogin"}> {/* profile info for mobile            if gust*/}
                <MDBCol md={3} className={"fv-ProfilePageUserInfoBody"}>
                    <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                        <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                            <Link to={'/login'}><p className={ window.location.href.match(/\blogin\b/) ? "fv-reservationActive" : ''}  ><i className="fa fa-door-open" />ورود</p></Link>
                            <Link to={'/registration'}> <p className={ window.location.href.match(/\bregistration\b/) ? "fv-transaction" : ''}  ><i className="fa fa-address-card" />ثبت نام</p> </Link>
                        </MDBCol>
                    </MDBRow>
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

        <MDBContainer className={"fv-MainBody fv-mainProductsSimilar"}>
            <MDBRow className={"fv-topicFirstMainPage"}>
                <TopicsMainPage topic="اقامتگاه های پر بازدید"
                                linkToPage={"/searchHomePage/Popular/1"}/>
            </MDBRow>
            <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                {Waiting( popularVillaswaitingHandle , "fv-waitingLoadPublicFullScreen")}


                {popularVillage.map(productDetails=>{
                  //  console.log(productDetails)
                   //     if(productDetails.details){
                            return(
                                <MDBCol md={3} sm={7} onClick={()=>{
                                    this.props.history.push(`/displayPage/${productDetails.id}`)
                                }}>
                                   <a> <Product srcImage={`${config.webapi}/images/villas/main/${productDetails.main_img }`}
                                             rate={productDetails.score}
                                             topic={productDetails.title}
                                             location={productDetails.city}
                                             numberOfRoom={productDetails.details.bedroom}
                                             capacity={productDetails.details.max_capacity}
                                             price={commaNumber(productDetails.rules.normal_cost)}/> </a>

                                </MDBCol>
                            )
                     /*   }else {
                            return(
                                <MDBCol md={3} sm={7} onClick={()=>{
                                    this.props.history.push(`/displayPage/${productDetails.id}`)
                                }}>
                                    <a> <Product srcImage={`${config.webapi}/images/villas/main/${productDetails.main_img }`}
                                             rate={productDetails.score}
                                             topic={productDetails.title}
                                             location={productDetails.city}
                                             numberOfRoom={''}
                                             capacity={''}
                                                 price={''}/> </a>

                                </MDBCol>
                            )
                    }  */


                })}

            </MDBRow>
            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="روستاهای پر بازدید"
                                linkToPage={"/searchHomePage/Popular/1"}/>
            </MDBRow>
            <MDBRow className={"fv-mainMobileVillage"}>
                {Waiting( bannersvillageswaitingHandle , "fv-waitingLoadPublicFullScreen")}

                {bannersvillages.map(banners=>{
                   return( <MDBCol md={3} sm={7}>
                        <PopularVillage srcImage={banners.link}
                                        location={banners.title}
                                        capacity={banners.count}/>
                    </MDBCol>)
                })}
            </MDBRow>

            <MDBRow className={"fv-topicMainPage"}>
                <TopicsMainPage topic="انواع اقامتگاه ها"
                                linkToPage={"/searchHomePage/cheapest/1"}/>
            </MDBRow>
            <MDBRow className={'fv-mainMobileAccommodation'} >
                {Waiting( bannersvillaswaitingHandle , "fv-waitingLoadPublicFullScreen")}

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
                                linkToPage={"./searchHomePage/Discount/1"}/>
            </MDBRow>

            <MDBRow className={'fv-mainMobile fv-mainMobileDiscountedVillas'}>
                {Waiting( discountedVillaswaitingHandle , "fv-waitingLoadPublicFullScreen")}

                {discountedVillas.map(discountedVilla=>{
                    let discountPrice = ''
                    discountPrice = (discountedVilla.normal_cost * discountedVilla.weekly_discount) / 100
                    if(discountedVilla.details){
                        return(
                            <MDBCol md={3} sm={7} onClick={()=>{
                                this.props.history.push(`/displayPage/${discountedVilla.villa.id}`)
                            }}>
                                <a>   <DiscountedProduct discountedAmount={discountedVilla.weekly_discount+"%"}
                                                   srcImage={`${config.webapi}/images/villas/main/${discountedVilla.villa.main_img }`}
                                                   rate={discountedVilla.villa.score}
                                                   topic={discountedVilla.villa.title}
                                                   location={discountedVilla.villa.city}
                                                   numberOfRoom={discountedVilla.details.bedroom}
                                                   capacity={discountedVilla.details.max_capacity}
                                                   price={commaNumber(discountedVilla.normal_cost - discountPrice)}
                                                         PreventPrice={commaNumber(discountedVilla.normal_cost)}/> </a>

                            </MDBCol>
                        ) }else {
                        return (
                            <MDBCol md={3} sm={7} onClick={()=>{
                                this.props.history.push(`/displayPage/${discountedVilla.villa.id}`)
                            }}>
                                <a>   <DiscountedProduct discountedAmount={discountedVilla.weekly_discount+"%"}
                                                   srcImage={`${config.webapi}/images/villas/main/${discountedVilla.main_img }`}
                                                   rate={discountedVilla.villa.score}
                                                   topic={discountedVilla.villa.title}
                                                   location={discountedVilla.villa.city}
                                                   numberOfRoom={''}
                                                   capacity={''}
                                                   price={commaNumber(discountedVilla.normal_cost - discountPrice)}
                                                         PreventPrice={commaNumber(discountedVilla.normal_cost)}/> </a>

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
                                linkToPage={"/searchHomePage/Cheapest/1"}/>
            </MDBRow>
            <MDBRow className={'fv-mainMobile'}>
                {Waiting( economicVillaswaitingHandle , "fv-waitingLoadPublicFullScreen")}

                {economicVillas.map(economicVilla=>{
                    return(
                        <MDBCol md={3} sm={6} onClick={()=>{
                            this.props.history.push(`/displayPage/${economicVilla.id}`)
                        }}>
                          <a>  <Product srcImage={`${config.webapi}/images/villas/main/${economicVilla.main_img }`}
                                     rate={economicVilla.score}
                                     topic={economicVilla.title}
                                     location={economicVilla.state}
                                     numberOfRoom={economicVilla.details.bedroom}
                                     capacity={economicVilla.details.max_capacity}
                                     price={commaNumber(economicVilla.normal_cost)}/> </a>
                        </MDBCol>
                    )
                })}
            </MDBRow>
            <MDBRow className={"fv-aboutUs"}>
                <MDBCol md={6}>
                    <MDBRow className={'fv-aboutUsImage'}>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsFirstImage"} src={Image1} />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsSecondImage"} src={Image2} />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsThirdImage"} src={Image3} />
                        </MDBCol>
                        <MDBCol md={6} sm={1}>
                            <img className={"fv-aboutUsFourthImage"} src={Image4} />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md={6} sm={4}>
                    <h1>درباره ما</h1>
                    <p>
                        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماد
                        ه نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگر
                        دد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است ک
                        ه پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
                    </p>
                </MDBCol>
            </MDBRow>

            <MDBRow className={"fv-aboutUsMobile"}>
                <MDBCol sm={3} className={'fv-aboutUsImage'}>
                    <img className={"fv-aboutUsFirstImage"} src={Image1} />
                    <MDBRow>
                        <MDBCol>
                            <img className={"fv-aboutUsSecondImage"} src={Image2} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <img className={"fv-aboutUsThirdImage"} src={Image3} />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol sm={9}>
                    <h1>درباره ما</h1>
                    <p>
                        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماد
                        ه نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگر
                        دد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است ک
                        ه پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
                    </p>
                    <MDBRow>
                        <MDBCol sm={8}  className={"fv-aboutUsFourthImage"}>
                        <img className={"fv-aboutUsFourthImage"} src={Image4} />
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
                    <p> قالب سایت معمولا با این موضوع رو برو هستند که م</p>
                </MDBCol>
                <MDBCol md={5}>
                    <p> با این موضوع رو برو هستند که محتوای اصلی صفحات آم
                        اده نیست. در نتیجه طرح کلی دید درستی
                        به کار فرما نمیدهد. اگر طراح بخواهد
                        دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته
                        میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است</p>
                </MDBCol>

            </MDBRow>
            <div className={"fv-commentSvgLeft"}>
            </div>
            <div className={"fv-commentSvgRight"}>
            </div>
            <MDBRow className={"fv-gustComment"}>
                {pagination.slice(1,1)}
                <MDBCol md={6}  className={"fv-gustNameAndInfoLeft"}>
                    <img src={UserImage} width="50" height="50" />
                   نظرات مهمان ها
                </MDBCol>
                <MDBCol md={6}   className={"fv-gustNameAndInfoRight"}>
                    <img src={UserImage} width="50" height="50" />
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

                <MDBRow>
                    <Footer />
                </MDBRow>


            </div>
        )
    }

}

export default MainPage