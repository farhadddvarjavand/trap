import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import ReservationProduct from "../componentsPages/ReservatioonProduct";
import CalendarLinear from "../data/CalenddarLinear";
import {getUserInformation, reservationsSearch, userReserves} from "../services/userService";
import {Link} from "react-router-dom";


class ProfilePageReservation2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            city:'title',
            dateToGo: {
                day:'',
                month:'',
                year : ''
            },
            dateToReturn: {
                day:'',
                month:'',
                year : ''
            },
            reservesData:[],
        }

    }

    componentDidMount() {
        userReserves()
            .then(res=>res.status===200 ? this.setState({reservesData:res.data.data}) : '')
    }

    selectDayToGo = (date) =>{                                    // set date to go
        if(date) {this.setState(prevstate =>({
            dateToGo: {
                ...prevstate.day,
                ...prevstate.month,
                ...prevstate.year,
                day: date.day,
                month: date.month,
                year: date.year
            }
        }))}
    }
    selectDayToReturn = (date) =>{                               // set date to return
        if(date) {this.setState(prevState => ({
            dateToReturn:{
                ...prevState.day ,
                ...prevState.month ,
                ...prevState.year ,
                day: date.day,
                month: date.month,
                year: date.year
            }
        }))}
    }


    render() {


        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch
                        {...this.props}/>
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <Link to={"./mainPage"} ><p> صفحه اصلی </p> </Link>
                            <i className="fas fa-chevron-left" />
                            <Link to={"./Profile"} ><p> پنل کاربری </p></Link>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> رزروهای من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>رزورو های من</h5>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>
                            <MDBCol md={4} sm={12} className={""}>
                                    <select value={this.state.city} onChange={(event)=>this.setState({city:event.target.value})}>
                                        <option value='title' disabled>شهر یا روستا را انتخاب کنید</option>
                                        <option value="تهران">تهران</option>
                                        <option value="مشهد">مشهد</option>
                                        <option value="اصفهان">اصفهان</option>
                                        <option value="کرج">کرج</option>
                                        <option value="شیراز">شیراز</option>
                                        <option value="تبریز">	تبریز</option>
                                        <option value="قم">قم</option>
                                        <option value="اهواز">اهواز</option>
                                        <option value="کرمانشاه">کرمانشاه</option>
                                        <option value="ارومیه">ارومیه</option>
                                        <option value="رشت">رشت</option>
                                        <option value="زاهدان">زاهدان</option>
                                        <option value="همدان">همدان</option>
                                        <option value="کرمان">کرمان</option>
                                        <option value="یزد">یزد</option>
                                        <option value="اردبیل">اردبیل</option>
                                        <option value="اراک">اراک</option>
                                        <option value="بندرعباس">بندرعباس</option>
                                        <option value="زنجان">زنجان</option>
                                        <option value="سنندج">سنندج</option>
                                        <option value="قزوین">قزوین</option>
                                        <option value="خرم‌آباد">خرم‌آباد</option>
                                        <option value="گرگان">گرگان</option>
                                        <option value="ساری">ساری</option>
                                        <option value="بابل">بابل</option>
                                        <option value="سبزوار">سبزوار</option>
                                        <option value="گلستان">گلستان</option>
                                        <option value="آمل">آمل</option>
                                    </select>
                            </MDBCol>

                            <MDBCol md={2} sm={5} className={""}>
                                <CalendarLinear dayToReturn={this.selectDayToGo} text={'از تاریخ'}/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <CalendarLinear dayToReturn={this.selectDayToReturn} text={'تا تاریخ'} />
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو " onClick={()=>{
                                    let setCity = ''
                                    let setDateToGo = ''
                                    let setDateToreturn = ''
                                    if(this.state.city === "title" ){
                                        setCity = ''
                                    }else {
                                        setCity =this.state.city
                                    }

                                    if(this.state.dateToGo.year){
                                        setDateToGo =  this.state.dateToGo.year+"/"+this.state.dateToGo.month+"/"+this.state.dateToGo.day
                                    }else {
                                        setDateToGo = ''
                                    }

                                    if(this.state.dateToReturn.year){
                                        setDateToreturn =  this.state.dateToReturn.year+"/"+this.state.dateToReturn.month+"/"+this.state.dateToReturn.day
                                    }else {
                                        setDateToreturn = ''
                                    }
                                    const data={
                                        city : setCity ,
                                        start_date : setDateToGo ,
                                        end_date : setDateToreturn ,
                                    }
                                    console.log(data)
                                    reservationsSearch(data)
                                        .then(res =>{
                                            console.log(res.data.data)
                                            this.setState({reservesData:res.data.data})
                                        })
                                        .catch(err=>console.log(err.response))
                                }}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            {this.state.reservesData.map(reserve=>{
                                let className =''
                                let md = ''
                                let text = ""
                                if(reserve.pay_status === "1"){   // در اتظار پرداخت
                                    className = "fv-profilePaeReservation2PayButtonSet"
                                    md="5"
                                    text = "در اتظار پرداخت"
                                }
                                if(reserve.pay_status === "2"){   // پرداخت شد
                                    className = "fv-profilePaeReservation2PayButton"
                                    md="4"
                                    text= "پرداخت شد"
                                }
                                if(reserve.pay_status === "0"){  // در انتظار پذیرش مشتری
                                    className = "fv-profilePaeReservation2PayButton"
                                    md="7"
                                    text="در انتظار پذیرش مییزبان"
                                }


                                console.log(reserve)
                                return(
                                    <MDBCol md={4}>
                                        <MDBRow className={'fv-product fv-mobileProduct'}>
                                            <MDBRow className={"fv-ProfilePageReservation2ImageProductContentTopOne"}>
                                                <MDBCol md={md}>
                                                    <p>{text}</p>
                                                    <input type="text"/>
                                                </MDBCol>
                                            </MDBRow>
                                            <img src={"https://www.w3schools.com/html/pic_trulli.jpg"} className={'fv-productImage'}/>

                                            <MDBRow>
                                                <MDBCol className={'fv-productTopic'}>
                                                    {reserve.villa_title}
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className={'fv-ProfilePageReservation2ProductLocaton'}>
                                                <MDBCol md={12} sm={10}>
                                                    <a>{reserve.state}</a>
                                                    <i className="fa fa-map-marker-alt" />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow className={'fv-productCapacityBox'}>
                                                <MDBCol md={12} sm={9} className={"fv-ProfilePageReservation2ProductDate"}>
                                                    <i className="fa fa-calendar" />
                                                    <a> {reserve.entry_date}  تا {reserve.exit_date} </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className={"fv-borderButton"}>

                                            </MDBRow>
                                            <MDBRow className={"fv-profilePaeReservation2PriceBox"}>
                                                <MDBCol md={2} sm={2}>
                                                    <p>تومان</p>
                                                </MDBCol>
                                                <MDBCol md={3} sm={3}>
                                                    <h5>{reserve.cost}</h5>
                                                </MDBCol>
                                                <MDBCol md={7} sm={7}>
                                                    <h5>مبلغ قابل پرداخت</h5>
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow className={className}>
                                                {className === "fv-profilePaeReservation2PayButton" ?
                                                    <input type="button" value="پرداخت"/> :

                                                    <input type="button" value="پرداخت2" onClick={()=> {
                                                        this.props.history.push(`/factor/${reserve.id}`);
                                                    }}/>
                                                }

                                            </MDBRow>
                                        </MDBRow>
                                    </MDBCol>
                                  /*  <ReservationProduct
                                        md={md}
                                        classnameButton={className}
                                        payStatus={reserve.pay_status}
                                        villaTitle={}
                                        state={}
                                        entryDay={}
                                        exitDate={}
                                        cost={}
                                    />*/
                                )
                            })}

                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageReservation2