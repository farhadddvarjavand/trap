import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import Product from "../componentsPages/Product";
import Footer from "../componentsPages/footer"
import FotterpageLogo from "../images/Logo.png"
import LogoName from "../images/LogoName.png"
import MobileLogo from "../images/MobileLogo.png"
import MobileMenu from "../images/MobileMenu.png"
import {Link, Route, Switch,NavLink,BrowserRouter} from "react-router-dom"
import Datas from "../data/Datas";

import {doSearch} from "../services/searchService"
import {convertNeSwToNwSe} from "google-map-react";
/* import {doSearch} from "../services/searchService" */
import config from "../services/config.json";
import CalendarLinear from "../data/CalenddarLinear";
import CalenddarLinearToReturn from "../data/CalenddarLinearToReturn";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import HeaderLoginMenu from "../componentsPages/HeaderLoginMenu";




class SearchHomePage extends Datas {
    constructor(props) {
        super(props);
        this.state={
            ...this.props,
            ...this.state,
            sortedBy:'',
            pageNumber:'',
            setVillage:'',
            dateToGo:'',
            dateToReturn:'',
            numberOfPeople:'',
            numberOfBedroom:'',
            dateIn:'',
            dateOut:'',
            accommodationGroup:[],
            discountAccommodation:false,
            disinfectedAccommodation:false,
            doSearch:false,
            minCost:'',
            maxCost:'',
            mobileSortClass:"fv-searchMobileSearchPageHide",
            mobileSearchClass:"fv-searchMobileSearchPageHide2",

            test:[],
            onclickHandelMobileMenu:false,


        }

    }

    setAccommodationGroup =(event) =>{
        let repeat = false
        const setData= this.state.accommodationGroup
        if(event.target.checked === false){
            const index = setData.indexOf(event.target.name)
            if (index !== -1) {
                setData.splice(index, 1);
                this.setState({accommodationGroup:setData})
            }
        } else {
            setData.map(checked=>{
                if(checked === event.target.name){
                    repeat=true
                }
            })
            if(repeat === false){
                setData.push(event.target.name)
                this.setState({accommodationGroup:setData})
            }
        }
    }

    componentDidMount() {
        super.componentDidMount();
        if(!JSON.parse(localStorage.getItem("mainPageSearch"))){
            const data ={
                orderBy:this.props.match.params.sort,
                page:this.props.match.params.id
            }
            this.postAndPushResultSearchPageVillas(data)   //   دیتای اولیه که با جدیدترین ست میکنیم توسط تابعی که در کامپوننت دیتاس میباشد

        }


        let  mainPageSearchLocal = ""
        if(localStorage.getItem("mainPageSearch")){
            if(this.props.location && this.props.location.searchDatas){
                let splitSearchPageCity =""
                if (this.props.location.searchDatas.city){
                    splitSearchPageCity = this.props.location.searchDatas.city.split(" ")
                }

                this.setState({
                    setVillage:splitSearchPageCity[1],
                    dateToGo:this.props.location.searchDatas.dayToGo,
                    dateToReturn:this.props.location.searchDatas.dateToReturn,
                    numberOfPeople:this.props.location.searchDatas.capacity,
                })
            }
            mainPageSearchLocal= JSON.parse(localStorage.getItem("mainPageSearch"))

            if(mainPageSearchLocal.city){                      /*  */
                let splitSearchPageCity = mainPageSearchLocal.city.split(" ")
                this.setState({
                    setVillage:splitSearchPageCity[1],
                })
            }

            let data = ''
            data = {
                passengers_count:mainPageSearchLocal.numberOfPeople,
                area:mainPageSearchLocal.city,
                dateRange:`${mainPageSearchLocal.dateToGo},${mainPageSearchLocal.dateToReturn}`,      /* agar vared nashavad az server error migirad */
            }
            if(data.dateRange === ',' ){
                delete data.dateRange
            }
            if(mainPageSearchLocal.numberOfPeople === null || mainPageSearchLocal.numberOfPeople === "" || mainPageSearchLocal.numberOfPeople === undefined){
                delete data.passengers_count
            }
            if(mainPageSearchLocal.city === "C "){
                delete data.area
            }
            if(mainPageSearchLocal.city === "C " && mainPageSearchLocal.numberOfPeople === ""  && `${mainPageSearchLocal.dateToGo},${mainPageSearchLocal.dateToReturn}` === ','){ // اگر کاربر همه را خالی فرستاد
                this.props.history.push('/searchHomePage/Newest/1')
                localStorage.removeItem("mainPageSearch");
            }else {
                this.props.history.push('/searchHomePage/doSearch/1')
            }
            this.postAndPushResultSearchPageVillas(data)
            this.setState({doSearch:true})
            localStorage.removeItem("mainPageSearch");

        }

    }

    selectDayToGo = (date) =>{                                    // set date to go
        console.log(date)
        if(date) {
            this.setState({dateToGo:`${date.year}/${date.month}/${date.day}`})
        }
    }
    selectDayToReturn = (date) =>{                                    // set date to go
        console.log(date)
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


        const discountAccommodation = this.state.discountAccommodation
        const disinfectedAccommodation = this.state.disinfectedAccommodation
        const searchPageVillas = this.state.searchPageVillas      // دیتا هایی که از کامپوننت دیتاس گرفته شده و برای همه سورت ها و کلیک جستجو آپدیت میشود



        const accommodationGroup = this.state.accommodationGroup
        const setAccommodationGroupToString = accommodationGroup.toLocaleString()
        const setAreaCity = 'C ' + this.state.setVillage
        const setAreaVillage = 'V ' + this.state.setVillage
        const setDateToGo = this.state.dateToGo
        const setDateToReturn = this.state.dateToReturn
        const setDateToGoAndDateToReturn = setDateToGo + ',' + setDateToReturn
        const setMinCost = this.state.minCost
        const setMaxCost = this.state.maxCost
        const setCostRange = `${setMinCost},${setMaxCost}`

        let setDiscountAccommodation = 0
        let setDisinfectedAccommodation = 0

        if (discountAccommodation) {setDiscountAccommodation=1}else {
            setDiscountAccommodation=0
        }
        if (disinfectedAccommodation) {setDisinfectedAccommodation=1}else {
            setDisinfectedAccommodation=0
        }

        const lastNumberPage = this.state.lastPageOfSearchPage
        const pages = []
        for(let i = 0 ; i < lastNumberPage ; i ++)
        {
            pages.push(i+1)
        }





        // for test
        const resultSearchPageVillas = this.state.resultSearchPageVillas

        return(
            <MDBContainer className={"fv-SearchHomePage"}>

                <MDBContainer className={"fv-widthHeaderLoginMenuForSearchHomePage fv-footerMenu main"}>  {/* mobile menu */}
                    <HeaderLoginMenu  {...this.props}/>
                </MDBContainer>

                <MDBContainer className={'fv-SearchHomePageBodyMobile fv-footerMenu main'}>

                    {/* <MDBRow>
                        <MDBRow className={'fv-searchMainPage fv-searchMainPageForMobile'}>
                            <MDBRow className={'fv-searchMainPagePrice'}>
                                <input type='text' placeholder={'شهر یا روستا را وارد کنید'} value={this.state.setVillage} onChange={(event)=>{this.setState({setVillage:event.target.value})}}/>
                                <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                    <input type='text' placeholder='تاریخ رفت' value={this.state.dateToGo} onChange={(event)=>{this.setState({dateToGo:event.target.value})}}/>
                                </MDBCol>
                                <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                </MDBCol>
                                <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                    <input type='text' placeholder='تاریخ برگشت' value={this.state.dateToReturn} onChange={(event)=>{this.setState({dateToReturn:event.target.value})}}/>
                                </MDBCol>
                                <input type='text' placeholder='تعداد نفرات' value={this.state.numberOfPeople} onChange={(event)=>{this.setState({numberOfPeople:event.target.value})}}/>
                                <input type='text' placeholder='تعداد خواب' value={this.state.numberOfBedroom} onChange={(event)=>{this.setState({numberOfBedroom:event.target.value})}}/>
                            </MDBRow>
                            <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                <p>قیمت</p>
                                <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                    <input type='text' placeholder='از' value={this.state.dateIn} onChange={(event)=>{this.setState({dateIn:event.target.value})}}/>
                                </MDBCol>
                                <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                </MDBCol>
                                <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                    <input type='text' placeholder='تا' value={this.state.dateOut} onChange={(event)=>{this.setState({dateOut:event.target.value})}}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                <p>دسته بندی اقامتگاه</p>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="استخردار" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>استخردار</p>
                                </MDBCol>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="ساحلی" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>ساحلی</p>
                                </MDBCol>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="ییلاقی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p>ییلاقی</p>
                                </MDBCol>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="کلبه جنگلی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p> کلبه جنگلی</p>
                                </MDBCol>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="خانه قدیمی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p>خانه قدیمی</p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="اقامت گاه های دارای تخفیف"
                                           onChange={()=>{ this.setState({discountAccommodation: !discountAccommodation})}}/> <p>اقامت گاه های دارای تخفیف</p>
                                </MDBCol>
                                <MDBCol md={12}>
                                    <input type="checkbox" name="اقامت گاه های ضدعفونی شده"
                                           onChange={()=>{ this.setState({disinfectedAccommodation: !disinfectedAccommodation})}}/> <p>اقامت گاه های ضدعفونی شده</p>
                                </MDBCol>
                            </MDBRow>
                            <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPagesSearchButton'} onClick={()=>{

                                const data = {
                                    passengers_count:this.state.numberOfPeople,
                                    area:setAreaCity,
                                    bedroom:this.state.numberOfBedroom,
                                    dateRange:setDateToGoAndDateToReturn,    // agar vared nashavad az server error migirad
                                    costRange:setCostRange,                   // agar vared nashavad az server error migirad
                                    type:setAccommodationGroupToString,
                                    discount:setDiscountAccommodation,
                                    disinfected:setDisinfectedAccommodation,
                                }
                                return this.postAndPushResultSearchPageVillas(data)
                            }}/>

                        </MDBRow>
                    </MDBRow> */}
                    {/*
                    <MDBRow className={'fv-footerMenuRibbonMobile'}>   {/ mobile menu /}
                        <MDBCol sm={8} className={'fv-footerMenuImageMobile'}>
                            <img src={avatar ? `${config.webapi}/images/villas/main/${this.props.avatar}` : MobileMenu} onClick={()=>{
                                this.setState({onclickHandelMobileMenu:!this.state.onclickHandelMobileMenu})
                            }}/>
                        </MDBCol>
                        <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                            <img src={LogoName} />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img src={MobileLogo} />
                        </MDBCol>
                    </MDBRow>

                    <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage"}>     {/ mobile menu  gust or host  display menu/}

                        <MDBRow className={this.state.onclickHandelMobileMenu && localStorage.getItem("token") ?  "fv-ProfilePageLeftBody fv-hostUsersMenuSearchPage" : "fv-hideMenuSearchPageMobile"}> {/ profile info for mobile             if user/}

                            <MDBContainer className={ `fv-containerOptionMainPageRowTop `}>
                                <MDBRow className={"fv-cascadeOptionMainPageRowTop"}>
                                    <MDBCol md={12} sm={12}>
                                        <MDBRow>
                                            <MDBCol md={2} sm={2}>
                                                <img src={avatar ? `${config.webapi}/images/villas/main/${avatar}` : MobileLogo} />
                                            </MDBCol>
                                            <MDBCol className={"fv-textInToCascadeOptionMainPage"} md={12} sm={12}>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <a><h5>{nameAndFamily}</h5></a>
                                                    </MDBCol>

                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <Link to={"/Profile"}><a>مشاهده حساب کاربری</a></Link>
                                                    </MDBCol>

                                                </MDBRow>

                                            </MDBCol>
                                        </MDBRow>
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
                                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus fv-userInfoButtonCascadeMobile"}>
                                    <MDBCol md={12} sm={12}>
                                        <Link to={"/ProfileReservation2"}> <i className="fa fa-laptop-house" />
                                            <a><p>میزبان شوید</p></a> </Link>
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

                        </MDBRow>

                        <MDBRow className={this.state.onclickHandelMobileMenu && !localStorage.getItem("token") ? "fv-ProfilePageLeftBody fv-gustUsersMenuSearchPage fv-ProfilePageUserInfoBodySearchPage": "fv-hideMenuSearchPageMobile"}> {/ profile info for mobile            if gust/}
                            <MDBCol md={3} className={""}>
                                <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                    <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                        <Link to={'/login'}><p className={ window.location.href.match(/\blogin\b/) ? "fv-reservationActive" : ''}  ><i className="fa fa-door-open" />ورود</p></Link>
                                        <Link to={'/login3'}> <p className={ window.location.href.match(/\blogin3\b/) ? "fv-transaction" : ''}  ><i className="fa fa-address-card" />ثبت نام</p> </Link>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
*/}





                    <MDBRow>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage'}>
                                <button onClick={()=>{this.state.mobileSearchClass === "fv-searchMobileSearchPageHide2" ? this.setState({mobileSearchClass:""}) : this.setState({mobileSearchClass:"fv-searchMobileSearchPageHide2"})}}><i className="fas fa-exchange-alt" /> جست و جو پیشرفته</button>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage fv-searchMainPageLeft'}>
                                <button onClick={()=>{this.state.mobileSortClass === "fv-searchMobileSearchPageHide" ? this.setState({mobileSortClass:""}) : this.setState({mobileSortClass:"fv-searchMobileSearchPageHide"})}}><i className="fa fa-arrows-alt-v" /> مرتب سازی</button>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    {/* <MDBRow>
                        <MDBRow className={"fv-SearchHomePageMobileProduct"} >
                            {searchPageVillas.slice( (this.state.pageNum - 1) * this.state.villasInPerPage , this.state.pageNum * this.state.villasInPerPage ).map(searchPageVilla=>{
                                if(searchPageVilla.details){
                                    return(
                                        <MDBCol md={4} sm={7} >
                                            <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                     rate="5.5/5"
                                                     topic={searchPageVilla.title}
                                                     location={searchPageVilla.state}
                                                     numberOfRoom={searchPageVilla.details.bedroom}
                                                     capacity={searchPageVilla.details.max_capacity}
                                                     price={searchPageVilla.normal_cost}/>
                                        </MDBCol>
                                    )
                                }else {
                                    return(
                                        <MDBCol md={4} sm={7} >
                                            <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                     rate="5.5/5"
                                                     topic={searchPageVilla.title}
                                                     location={searchPageVilla.state}
                                                     numberOfRoom="2"
                                                     capacity="2"
                                                     price={searchPageVilla.normal_cost}/>
                                        </MDBCol>
                                    )
                                }
                            })}
                        </MDBRow>
                    </MDBRow> */}
                </MDBContainer>

                {/*                                   Desktop                                               */}

                <MDBContainer className={'fv-footerMenu fv-SearchHomePageBody'}>
                    {/*
                    <MDBRow className={'fv-footerMenuRibbon'}>
                        <MDBCol md={1}>
                            <i className={localStorage.getItem("token") ? "" : "fa fa-user-alt"}/>
                            <a className={localStorage.getItem("token") ? "fv-hideButtonRegister" : ""}> <Link to={'/login'}>ورود</Link></a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>
                            <input className={localStorage.getItem("token") ? ""  : "fv-hideButtonRegister"} type='button' value=' میزبان شوید' onClick={()=> this.props.history.push('/hostStep1')}/>
                        </MDBCol>
                        <MDBCol md={9}>
                            <img src={FotterpageLogo} />
                        </MDBCol>
                    </MDBRow>
                    */}
                    <MDBRow >

                        <MDBCol md={4} className={`${this.state.mobileSearchClass} fv-searchMainPageBody`}>
                            <MDBRow>
                                <MDBRow className={'fv-searchMainPage'}>
                                    <MDBRow className={'fv-searchMainPagePrice'}>
                                        <input type='text' placeholder={'شهر یا روستا را وارد کنید'} value={this.state.setVillage} onChange={(event)=>{this.setState({setVillage:event.target.value})}}/>
                                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                            <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalendarLinear dayToGo={this.selectDayToGo} searchData={this.props.location.searchDatas} text={'تاریخ رفت'}/> </div>
                                        </MDBCol>
                                        <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                        </MDBCol>
                                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                            <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalenddarLinearToReturn dayToReturn={this.selectDayToReturn} searchData={this.props.location.searchDatas} text={'تاریخ برگشت'}/> </div>
                                        </MDBCol>
                                        <input type='text' placeholder='تعداد نفرات' value={this.state.numberOfPeople} onChange={(event)=>{this.setState({numberOfPeople:event.target.value})}}/>
                                        <input type='text' placeholder='تعداد خواب' value={this.state.numberOfBedroom} onChange={(event)=>{this.setState({numberOfBedroom:event.target.value})}}/>
                                    </MDBRow>
                                    <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                        <p>قیمت</p>
                                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateOut'}>
                                            <input type='text' placeholder='از' value={this.state.minCost} onChange={(event)=>{this.setState({minCost:event.target.value})}}/>
                                        </MDBCol>
                                        <MDBCol md={1} sm={1} className={'fv-searchMainPageBetweenDate'}>

                                        </MDBCol>
                                        <MDBCol md={5} sm={4} className={'fv-searchMainPage fv-searchMainPageDateReturn'}>
                                            <input type='text' placeholder='تا' value={this.state.maxCost} onChange={(event)=>{this.setState({maxCost:event.target.value})}}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                        <p>دسته بندی اقامتگاه</p>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="استخردار" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>استخردار</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="ساحلی" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>ساحلی</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="ییلاقی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p>ییلاقی</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="کلبه جنگلی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p> کلبه جنگلی</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="خانه قدیمی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p>خانه قدیمی</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="اقامت گاه های دارای تخفیف"
                                                   onChange={()=>{ this.setState({discountAccommodation: !discountAccommodation})}}/> <p>اقامت گاه های دارای تخفیف</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="اقامت گاه های ضدعفونی شده"
                                                   onChange={()=>{ this.setState({disinfectedAccommodation: !disinfectedAccommodation})}}/> <p>اقامت گاه های ضدعفونی شده</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPagesSearchButton'} onClick={()=>{
                                        let data = ''
                                        data = {
                                            passengers_count:this.state.numberOfPeople,
                                            area:setAreaCity,
                                            bedroom:this.state.numberOfBedroom,
                                            dateRange:setDateToGoAndDateToReturn,      /* agar vared nashavad az server error migirad */
                                            costRange:setCostRange,                    /* agar vared nashavad az server error migirad */
                                            type:setAccommodationGroupToString,
                                            discount:setDiscountAccommodation,
                                            disinfected:setDisinfectedAccommodation,
                                        }

                                        if(setCostRange ===','){
                                           delete data.costRange
                                        }
                                        if(setDateToGoAndDateToReturn === ',' ){
                                            delete data.dateRange
                                        }
                                        if(data.passengers_count === null || data.passengers_count === "" || data.passengers_count === undefined){
                                            delete data.passengers_count
                                        }
                                        if(data.area === "C "){
                                            delete data.area
                                        }
                                        if(data.bedroom === null || data.bedroom === "" || data.bedroom === undefined){
                                            delete data.bedroom
                                        }
                                        if(data.type === null || data.type === "" || data.type === undefined){
                                            delete data.type
                                        }
                                        if(setDiscountAccommodation===0){
                                            delete data.discount
                                        }
                                        if(setDisinfectedAccommodation===0){
                                            delete data.disinfected
                                        }

                                        this.postAndPushResultSearchPageVillas(data)
                                        this.setState({doSearch:true})
                                        this.props.history.push('/searchHomePage/doSearch/1')
                                    }}/>

                                </MDBRow>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md={8} className={"fv-searchMainPageBodyLeft"}>
                            <p>{this.state.totalVillas} اقامتگاه یافت شد</p>
                            <MDBRow  className={`${this.state.mobileSortClass} fv-SortMenu`} >
                                <p>مرتب سازی بر اساس:</p>

                                <NavLink to={this.props.match.params.sort === 'Newest' ? `/searchHomePage/Newest/${this.props.match.params.id}` : `/searchHomePage/Newest/1`}  exact
                                         name={'Newest'} className={'fv-unSelected'} activeClassName="fv-selected"
                                         onClick={(event)=>{
                                             const data = {orderBy:'Newest'}
                                             this.postAndPushResultSearchPageVillas(data)
                                             this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    جدیدترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Expensive' ? `/searchHomePage/Expensive/${this.props.match.params.id}` : `/searchHomePage/Expensive/1`}
                                          name={'Expensive'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Expensive'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    گران‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Cheapest' ? `/searchHomePage/Cheapest/${this.props.match.params.id}` : `/searchHomePage/Cheapest/1`}
                                          name={'Cheapest'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Cheapest'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    ارزان‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Popular' ? `/searchHomePage/Popular/${this.props.match.params.id}` : `/searchHomePage/Popular/1`}
                                          name={'Popular'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Popular'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    محبوب‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Discount' ? `/searchHomePage/Discount/${this.props.match.params.id}` : `/searchHomePage/Discount/1`}
                                          name={'Discount'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Discount'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false})
                                          }}>
                                    پرتخفیف ها
                                </NavLink>
                                {/* <NavLink  to={this.props.match.params.sort === 'Nearest' ? `/searchHomePage/Nearest/${this.props.match.params.id}` : `/searchHomePage/Nearest/1`}
                                         name={'Nearest'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                         onClick={(event)=>{
                                             const data = {orderBy:'Nearest'}
                                             this.postAndPushResultSearchPageVillas(data)
                                             this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    نزدیکترین
                                </NavLink>  */}

                            </MDBRow>
                            <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                                {searchPageVillas.map(searchPageVilla=>{
                                    // console.log(searchPageVilla)
                                    if(searchPageVilla.details){
                                        return(
                                            <MDBCol md={4} sm={7}
                                                    onClick={()=>this.props.history.push(`/displayPage/${searchPageVilla.id}`) }
                                            >  {/* میرستیم برای صفحه شخصی ویلا که displaypage هست با همان id */}

                                                <a>
                                                    <Product srcImage={`${config.webapi}/images/villas/thum/${searchPageVilla.main_img }`}
                                                             rate={searchPageVilla.score}
                                                             topic={searchPageVilla.title}
                                                             location={searchPageVilla.state}
                                                             numberOfRoom={searchPageVilla.details.bedroom}
                                                             capacity={searchPageVilla.details.max_capacity}
                                                             price={searchPageVilla.normal_cost}
                                                    />
                                                </a>
                                            </MDBCol>
                                        )
                                    }else {
                                        return(
                                            <MDBCol md={4} sm={7}
                                                    onClick={()=>this.props.history.push(`/displayPage/${searchPageVilla.id}`) }>
                                                <a>
                                                    <Product srcImage={`${config.webapi}/images/villas/thum/${searchPageVilla.main_img }`}
                                                             rate={searchPageVilla.score}
                                                             topic={searchPageVilla.title}
                                                             location={searchPageVilla.state}
                                                             numberOfRoom="2"
                                                             capacity="2"
                                                             price={searchPageVilla.normal_cost}/>
                                                </a>
                                            </MDBCol>
                                        )
                                    }
                                })}

                            </MDBRow>
                            <MDBRow className={"fv-SearchHomePagePagination"}>
                                {pages.map(pagenumber => {
                                    return(

                                        <NavLink to={`/searchHomePage/${this.props.match.params.sort}/${pagenumber}`} exact name={pagenumber}
                                                 className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected"
                                                 onClick={(event)=>{

                                                     let data = ''
                                                     data = {
                                                         passengers_count:this.state.numberOfPeople,
                                                         area:setAreaCity,
                                                         bedroom:this.state.numberOfBedroom,
                                                         dateRange:setDateToGoAndDateToReturn,      /* agar vared nashavad az server error migirad */
                                                         costRange:setCostRange,                    /* agar vared nashavad az server error migirad */
                                                         type:setAccommodationGroupToString,
                                                         discount:setDiscountAccommodation,
                                                         disinfected:setDisinfectedAccommodation,
                                                         page:pagenumber,
                                                     }

                                                     if(setCostRange ===','){
                                                         delete data.costRange
                                                     }
                                                     if(setDateToGoAndDateToReturn === ',' ){
                                                         delete data.dateRange
                                                     }
                                                     if(data.passengers_count === null || data.passengers_count === "" || data.passengers_count === undefined){
                                                         delete data.passengers_count
                                                     }
                                                     if(data.area === "C "){
                                                         delete data.area
                                                     }
                                                     if(data.bedroom === null || data.bedroom === "" || data.bedroom === undefined){
                                                         delete data.bedroom
                                                     }
                                                     if(data.type === null || data.type === "" || data.type === undefined){
                                                         delete data.type
                                                     }
                                                     if(setDiscountAccommodation===0){
                                                         delete data.discount
                                                     }
                                                     if(setDisinfectedAccommodation===0){
                                                         delete data.disinfected
                                                     }


                                                     this.postAndPushResultSearchPageVillas(data)
                                                     this.setState({pageNumber:event.target.name , pageNum:pagenumber})
                                                 }}>
                                            {pagenumber}
                                        </NavLink>

                                    )
                                })}


                            </MDBRow>
                        </MDBCol>



                    </MDBRow>

                </MDBContainer>

                <MDBRow>
                  <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default SearchHomePage