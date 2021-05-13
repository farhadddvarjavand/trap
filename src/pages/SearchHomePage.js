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

            test:[],


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
        const data ={
            orderBy:this.props.match.params.sort,
            page:this.props.match.params.id
        }
        this.postAndPushResultSearchPageVillas(data)   //   دیتای اولیه که با جدیدترین ست میکنیم توسط تابعی که در کامپوننت دیتاس میباشد

    }

    render() {
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
        console.log(searchPageVillas)
        console.log('this.state.test')

        return(
            <MDBContainer className={"fv-SearchHomePage"}>
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
                                <button><i className="fas fa-exchange-alt" /> جست و جو پیشرفته</button>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage fv-searchMainPageLeft'}>
                                <button><i className="fa fa-arrows-alt-v" /> مرتب سازی</button>
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
                                        if(setCostRange ===',' && setDateToGoAndDateToReturn === ',' ){
                                            alert(this.state.numberOfPeople)
                                            data = {
                                                passengers_count:this.state.numberOfPeople,
                                                bedroom:this.state.numberOfBedroom,
                                                type:setAccommodationGroupToString,
                                                discount:setDiscountAccommodation,
                                                disinfected:setDisinfectedAccommodation,
                                            }
                                        }
                                        if(setCostRange !== "," && setDateToGoAndDateToReturn === ',' ){
                                             data = {
                                                passengers_count:this.state.numberOfPeople,
                                                area:setAreaCity,
                                                bedroom:this.state.numberOfBedroom,
                                                costRange:setCostRange,                    /* agar vared nashavad az server error migirad */
                                                type:setAccommodationGroupToString,
                                                discount:setDiscountAccommodation,
                                                disinfected:setDisinfectedAccommodation,
                                            }
                                        }
                                        if(setCostRange === "," && setDateToGoAndDateToReturn !== ',' ){
                                            data = {
                                                passengers_count:this.state.numberOfPeople,
                                                area:setAreaCity,
                                                bedroom:this.state.numberOfBedroom,
                                                dateRange:setDateToGoAndDateToReturn,      /* agar vared nashavad az server error migirad */
                                                type:setAccommodationGroupToString,
                                                discount:setDiscountAccommodation,
                                                disinfected:setDisinfectedAccommodation,
                                            }
                                        }
                                        if(setCostRange !== "," && setDateToGoAndDateToReturn !== ',' ) {
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
                                        }
                                        this.postAndPushResultSearchPageVillas(data)
                                        this.setState({doSearch:true})
                                        this.props.history.push('/searchHomePage/doSearch/1')
                                    }}/>

                                </MDBRow>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md={8} className={"fv-searchMainPageBodyLeft"}>
                            <p>20 اقامتگاه یافت شد</p>
                            <MDBRow className={"fv-SortMenu"}>
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
                                <NavLink  to={this.props.match.params.sort === 'Nearest' ? `/searchHomePage/Nearest/${this.props.match.params.id}` : `/searchHomePage/Nearest/1`}
                                         name={'Nearest'} exact className={'fv-unSelected'} activeClassName="fv-selected"
                                         onClick={(event)=>{
                                             const data = {orderBy:'Nearest'}
                                             this.postAndPushResultSearchPageVillas(data)
                                             this.setState({sortedBy:event.target.name , doSearch:false})
                                }}>
                                    نزدیکترین
                                </NavLink>

                            </MDBRow>
                            <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                                {searchPageVillas.map(searchPageVilla=>{
                                    if(searchPageVilla.details){
                                        return(
                                            <MDBCol md={4} sm={7}
                                                    onClick={()=>this.props.history.push(`/displayPage/${searchPageVilla.id}`) }
                                            >  {/* میرستیم برای صفحه شخصی ویلا که displaypage هست با همان id */}

                                                <a>
                                                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                             rate="5.5/5"
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
                                                    <Product srcImage="https://www.w3schools.com/html/pic_trulli.jpg"
                                                             rate="5.5/5"
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
                                                     if(this.state.doSearch){
                                                         if(setCostRange ===',' && setDateToGoAndDateToReturn === ',' ){
                                                             data = {
                                                                 passengers_count:this.state.numberOfPeople,
                                                                 bedroom:this.state.numberOfBedroom,
                                                                 type:setAccommodationGroupToString,
                                                                 discount:setDiscountAccommodation,
                                                                 disinfected:setDisinfectedAccommodation,
                                                                 page:pagenumber,
                                                             }
                                                         }
                                                         if(setCostRange !== "," && setDateToGoAndDateToReturn === ',' ){
                                                             data = {
                                                                 passengers_count:this.state.numberOfPeople,
                                                                 area:setAreaCity,
                                                                 bedroom:this.state.numberOfBedroom,
                                                                 costRange:setCostRange,                    /* agar vared nashavad az server error migirad */
                                                                 type:setAccommodationGroupToString,
                                                                 discount:setDiscountAccommodation,
                                                                 disinfected:setDisinfectedAccommodation,
                                                                 page:pagenumber,
                                                             }
                                                         }
                                                         if(setCostRange === "," && setDateToGoAndDateToReturn !== ',' ){
                                                             data = {
                                                                 passengers_count:this.state.numberOfPeople,
                                                                 area:setAreaCity,
                                                                 bedroom:this.state.numberOfBedroom,
                                                                 dateRange:setDateToGoAndDateToReturn,      /* agar vared nashavad az server error migirad */
                                                                 type:setAccommodationGroupToString,
                                                                 discount:setDiscountAccommodation,
                                                                 disinfected:setDisinfectedAccommodation,
                                                                 page:pagenumber,
                                                             }
                                                         }
                                                         if(setCostRange !== "," && setDateToGoAndDateToReturn !== ',' ) {
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
                                                         } }
                                                     else {
                                                         data = {
                                                             page:pagenumber,
                                                             orderBy:this.props.match.params.sort}
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