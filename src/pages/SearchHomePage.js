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



class SearchHomePage extends Datas {
    constructor(props) {
        super(props);
        this.state={
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

    render() {
        console.log(this.state.accommodationGroup)

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
                                <button><i className="fas fa-exchange-alt" /> جست و جو پیشرفته</button>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow className={'fv-searchMainPage fv-searchMainPageLeft'}>
                                <button><i className="fa fa-arrows-alt-v" /> مرتب سازی</button>
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
                                            <input type="checkbox" name=" کلبه جنگلی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p> کلبه جنگلی</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="خانه قدیمی" onChange={(event)=>this.setAccommodationGroup(event)}/>  <p>خانه قدیمی</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={'fv-searchMainPagePrice fv-searchMainPagePriceSecond'}>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="اقامت گاه های دارای تخفیف" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>اقامت گاه های دارای تخفیف</p>
                                        </MDBCol>
                                        <MDBCol md={12}>
                                            <input type="checkbox" name="اقامت گاه های ضدعفونی شده" onChange={(event)=>this.setAccommodationGroup(event)}/> <p>اقامت گاه های ضدعفونی شده</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <input type='button' value='جستجو اقامتگاه' className={'fv-searchMainPagesSearchButton'} onClick={()=>{
                                        this.postDataAndPush('https://reqres.in/api/posts','data','../../displayPage')
                                    }}/>

                                </MDBRow>
                            </MDBRow>
                        </MDBCol>

                        <MDBCol md={8} className={"fv-searchMainPageBodyLeft"}>
                            <p>20 اقامتگاه یافت شد</p>
                            <MDBRow className={"fv-SortMenu"}>
                                <p>مرتب سازی بر اساس:</p>

                                <NavLink to={`/searchHomePage/newest/${this.props.match.params.id}`}  exact name={'newest'} className={'fv-unSelected'} activeClassName="fv-selected"  onClick={(event)=>{
                                    this.setState({sortedBy:event.target.name})
                                }}>
                                    جدیدترین
                                </NavLink>
                                <NavLink  to={`/searchHomePage/expensive/${this.props.match.params.id}`}  name={'expensive'} exact className={'fv-unSelected'} activeClassName="fv-selected" onClick={(event)=>{
                                    this.setState({sortedBy:event.target.name})
                                }}>
                                    گران‌ترین
                                </NavLink>
                                <NavLink  to={`/searchHomePage/cheapest/${this.props.match.params.id}`}  name={'cheapest'} exact className={'fv-unSelected'} activeClassName="fv-selected" onClick={(event)=>{
                                    this.setState({sortedBy:event.target.name})
                                }}>
                                    ارزان‌ترین
                                </NavLink>
                                <NavLink  to={`/searchHomePage/popular/${this.props.match.params.id}`}  name={'popular'} exact className={'fv-unSelected'} activeClassName="fv-selected" onClick={(event)=>{
                                    this.setState({sortedBy:event.target.name})
                                }}>
                                    محبوب‌ترین
                                </NavLink>
                                <NavLink to={`/searchHomePage/closest/${this.props.match.params.id}`} name={'closest'} exact className={'fv-unSelected'} activeClassName="fv-selected" onClick={(event)=>{
                                    this.setState({sortedBy:event.target.name})
                                }}>
                                    نزدیکترین
                                </NavLink>

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
                                <NavLink to={`/searchHomePage/${this.props.match.params.sort}/1`} exact name={1} className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected" onClick={(event)=>{
                                    this.setState({pageNumber:event.target.name})
                                }}>
                                    1
                                </NavLink>
                                <NavLink to={`/searchHomePage/${this.props.match.params.sort}/2`} exact name={2} className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected" onClick={(event)=>{
                                    this.setState({pageNumber:event.target.name})
                                }}>
                                    2
                                </NavLink>

                                <NavLink to={`/searchHomePage/${this.props.match.params.sort}/3`} exact name={3} className={'fv-SearchHomePagePaginationDefault'} activeClassName="fv-SearchHomePagePaginationSelected" onClick={(event)=>{
                                    this.setState({pageNumber:event.target.name})
                                }}>
                                    3
                                </NavLink>
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