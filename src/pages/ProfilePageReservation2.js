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
import {getUserInformation, userReserves} from "../services/userService";


class ProfilePageReservation2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            city:'title',
            dateToGo: {
                day:'انتخاب تاریخ',
                month:'',
                year : ''
            },
            dateToReturn: {
                day:'انتخاب تاریخ',
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
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
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
                                        <option value="1">تهران</option>
                                        <option value="2">یزد</option>
                                        <option value="3">شیراز</option>
                                        <option value="4">مراغه</option>
                                        <option value="5">مازندران</option>
                                        <option value="6">ساری</option>
                                    </select>
                            </MDBCol>

                            <MDBCol md={2} sm={5} className={""}>
                                <CalendarLinear dayToReturn={this.selectDayToGo} text={'تاریخ رفت'}/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <CalendarLinear dayToReturn={this.selectDayToReturn} text={'تاریخ برگشت'} />
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو " onClick={()=>{
                                    console.log(this.state.reservesData)
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
                                                        this.props.history.push("/ProfileTransaction2");
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