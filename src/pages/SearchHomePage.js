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
            addNumber:false,

            test:[],
            onclickHandelMobileMenu:false,
            paginationLimit: 4 ,     //   تعداد صفحات که نمایش داده شود را وارد میکنیم
            pagination : [],


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

        const paginationsShow = []
        for (let i = 0 ; i< this.state.paginationLimit ; i++){
            paginationsShow.push(i+1)
        }
        this.setState({pagination:paginationsShow})
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


       const getDataPagination= (pageNumberChange) =>{
                let data = ''
                data = {
                    page:pageNumberChange,
                    orderBy:this.props.match.params.sort,
                }
                return data
        }
        const getDataPaginationForewardAndBackwardForSearch = (pageNumber)=>{
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
                page:pageNumber,
                orderBy:this.props.match.params.sort,
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
            return data
        }



        // for test
        const resultSearchPageVillas = this.state.resultSearchPageVillas

        return(
            <MDBContainer className={"fv-SearchHomePage"}>

                <MDBContainer className={"fv-widthHeaderLoginMenuForSearchHomePage fv-footerMenu main"}>  {/* mobile menu */}
                    <HeaderLoginMenu  {...this.props}/>
                </MDBContainer>


                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage fv-searchHomePagePathTop'}>

                    <MDBRow className={"fv-DisplayPageRotePathMobile "}>
                        <MDBCol>
                            <Link to={"/mainPage"}> <p> صفحه اصلی </p> </Link>
                            <i className="fas fa-chevron-left" />
                            <p className={ "fv-DisplayPagePathNow"}> صفحه جستجو </p>  {/* اگر مقدار سوم وجود داشت کلاس رنگ سبز غیر فعال شود */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer className={'fv-SearchHomePageBodyMobile fv-footerMenu main'}>


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

                </MDBContainer>

                {/*                                   Desktop                                               */}

                <MDBContainer className={'fv-footerMenu fv-SearchHomePageBody'}>

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
                                             this.setState({sortedBy:event.target.name , doSearch:false , numberOfPeople:"" , numberOfBedroom:""}) // agar bad az search karbar in ra zad hame pak shavad ke tasir migozarad bar search
                                }}>
                                    جدیدترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Expensive' ? `/searchHomePage/Expensive/${this.props.match.params.id}` : `/searchHomePage/Expensive/1`}
                                          name={'Expensive'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Expensive'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false , numberOfPeople:"" , numberOfBedroom:"" })
                                }}>
                                    گران‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Cheapest' ? `/searchHomePage/Cheapest/${this.props.match.params.id}` : `/searchHomePage/Cheapest/1`}
                                          name={'Cheapest'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Cheapest'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false , numberOfPeople:"" , numberOfBedroom:""})
                                }}>
                                    ارزان‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Popular' ? `/searchHomePage/Popular/${this.props.match.params.id}` : `/searchHomePage/Popular/1`}
                                          name={'Popular'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Popular'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false , numberOfPeople:"" , numberOfBedroom:""})
                                }}>
                                    محبوب‌ترین
                                </NavLink>
                                <NavLink  to={this.props.match.params.sort === 'Discount' ? `/searchHomePage/Discount/${this.props.match.params.id}` : `/searchHomePage/Discount/1`}
                                          name={'Discount'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                          onClick={(event)=>{
                                              const data = {orderBy:'Discount'}
                                              this.postAndPushResultSearchPageVillas(data)
                                              this.setState({sortedBy:event.target.name , doSearch:false , numberOfPeople:"" , numberOfBedroom:""})
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
                                                    <Product srcImage={`${config.webapi}/images/villas/main/${searchPageVilla.main_img }`}
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
                                                    <Product srcImage={`${config.webapi}/images/villas/main/${searchPageVilla.main_img }`}
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


                                <button className={this.props.match.params.sort  === "doSearch" ? "fv-hideforwardAndBackwardButton" : 'fv-SearchHomePagePaginationDefault'} disabled={pages.length < this.state.paginationLimit ? true : false} onClick={()=>{  // agar tedad safahat kamtarz 2ta bod
                                    let newPagination = []
                                    for(let i = 0 ; i < this.state.pagination.length ; i ++){
                                        newPagination.push(i+1)
                                    }
                                    const datas = getDataPagination(1)
                                    this.postAndPushResultSearchPageVillas(datas)
                                    this.setState({ pagination:newPagination})

                                    this.props.history.push(`/searchHomePage/${this.props.match.params.sort}/1`)
                                }}><i className="fas fa-angle-double-right" /></button>



                                <button className={'fv-SearchHomePagePaginationDefault'} disabled={pages.length < this.state.paginationLimit ? true : false} onClick={()=>{  // agar tedad safahat kamtarz 2ta bod
                                   if(this.props.match.params.id>1){  // hadeaghal 2 bashad ke manfi nashavad

                                       if(Number(this.props.match.params.id) === Number(this.state.pagination[0])){
                                           let newPagination = []
                                           for (let i =0 ; i < this.state.pagination.length ; i ++){
                                               newPagination.push(this.state.pagination[i]-1)
                                           }
                                           this.setState({ pagination:newPagination })
                                       }

                                       if(this.props.match.params.sort  === "doSearch" ){ // اگر سرچ کرده بود و بعد زد فقط یکی اضهفه شود به آن

                                           const data =getDataPaginationForewardAndBackwardForSearch(Number(this.props.match.params.id)-1)
                                           console.log(data)
                                           this.postAndPushResultSearchPageVillas(data)

                                           this.setState({pageNumber:this.props.match.params.id+1 , pageNum:this.props.match.params.id-1})
                                           this.props.history.push(`/searchHomePage/doSearch/${Number(this.props.match.params.id)-1}`)
                                       }
                                       else {

                                           const datas = getDataPagination(Number(this.props.match.params.id)-1)
                                           this.postAndPushResultSearchPageVillas(datas)
                                           this.setState({ pageNum:Number(this.props.match.params.id)-1})

                                           this.props.history.push(`/searchHomePage/${this.props.match.params.sort}/${Number(this.props.match.params.id)-1}`)
                                       }


                                   }
                                }}><i className="fas fa-caret-right" /></button>



                                {pages.length<this.state.paginationLimit ? pages.map(pagenumber => {
                                    return(

                                        <NavLink to={`/searchHomePage/${this.props.match.params.sort}/${pagenumber}`} exact name={pagenumber}
                                                 className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected"
                                                 onClick={(event)=>{
                                                     const data =getDataPaginationForewardAndBackwardForSearch(pagenumber)
                                                     this.postAndPushResultSearchPageVillas(data)
                                                     this.setState({pageNumber:event.target.name , pageNum:pagenumber})
                                                 }}>
                                            {pagenumber}
                                        </NavLink>

                                    )
                                })
                                :
                                   this.state.pagination.map(paginations => {
                                       return(

                                           <NavLink to={`/searchHomePage/${this.props.match.params.sort}/${paginations}`} exact name={paginations}
                                                    className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected"
                                                    onClick={(event)=>{
                                                        const data =getDataPaginationForewardAndBackwardForSearch(paginations)
                                                        this.postAndPushResultSearchPageVillas(data)
                                                            this.setState({pageNumber:event.target.name , pageNum:paginations})
                                                    }}>
                                               { paginations}
                                           </NavLink>

                                       )
                                   })
                                }


                                <button className={'fv-SearchHomePagePaginationDefault'} disabled={pages.length<this.state.paginationLimit ? true : false} onClick={()=>{    // agar tedad safahat kamtarz 2ta bod
                                    if(this.props.match.params.id<pages.length){  // kamtarz kole safahat bashad ke agar ezafe shod balataraz safahat nashavad
                                        if(this.props.match.params.id >= this.state.pagination.length  && Number(this.props.match.params.id) === Number(this.state.pagination[this.state.pagination.length-1])){
                                            let newPagination = []
                                            for (let i =0 ; i < this.state.pagination.length ; i ++){
                                                newPagination.push(this.state.pagination[i]+1)
                                            }
                                            this.setState({ pagination:newPagination})
                                        }

                                        if(this.props.match.params.sort  === "doSearch" ){ // اگر سرچ کرده بود و بعد زد فقط یکی اضهفه شود به آن

                                           const data =getDataPaginationForewardAndBackwardForSearch(Number(this.props.match.params.id)+1)
                                            console.log(data)
                                            this.postAndPushResultSearchPageVillas(data)

                                            this.setState({pageNumber:this.props.match.params.id+1 , pageNum:this.props.match.params.id+1})
                                            this.props.history.push(`/searchHomePage/doSearch/${Number(this.props.match.params.id)+1}`)
                                        }
                                        else { // به صورت عای
                                            const datas = getDataPagination(Number(this.props.match.params.id)+1)
                                            this.postAndPushResultSearchPageVillas(datas)
                                            this.setState({ pageNum:Number(this.props.match.params.id)+1 , addNumber:true})

                                            this.props.history.push(`/searchHomePage/${this.props.match.params.sort}/${Number(this.props.match.params.id)+1}`)
                                        }




                                    }
                                }}><i className="fas fa-caret-left" /></button>

                                <button className={this.props.match.params.sort  === "doSearch" ? "fv-hideforwardAndBackwardButton" : 'fv-SearchHomePagePaginationDefault'} disabled={pages.length<this.state.paginationLimit ? true : false} onClick={()=>{  // agar tedad safahat kamtarz 2ta bod
                                    let newPagination = []
                                    let endNumberOfPagesLimit = this.state.lastPageOfSearchPage  // akharin khane + 1
                                    let j = 1
                                    for(let i = (endNumberOfPagesLimit - this.state.pagination.length) ; i < endNumberOfPagesLimit ; i ++){
                                        newPagination.push((endNumberOfPagesLimit - this.state.pagination.length) + j)
                                        j = j +1
                                    }
                                    const datas = getDataPagination(endNumberOfPagesLimit)
                                    this.postAndPushResultSearchPageVillas(datas)
                                    this.setState({ pagination:newPagination})

                                    this.props.history.push(`/searchHomePage/${this.props.match.params.sort}/${endNumberOfPagesLimit}`)
                                }}><i className="fas fa-angle-double-left" /></button>

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