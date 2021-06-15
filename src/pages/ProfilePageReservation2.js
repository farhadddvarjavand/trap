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
import config from "../services/config.json";
import {WaitingLoadingProfilePage} from "../componentsPages/WaitingLoad";


class ProfilePageReservation2 extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('/login');
        }
        this.state={
            city:'',
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
            waitingForLoad:true,
        }

    }

    componentDidMount() {
        userReserves()
            .then(res=>{
                if(res.status===200 && res.data.data.length>0){
                    this.setState({reservesData:res.data.data , waitingForLoad:false})
                }else {
                    this.props.history.push("/MainProfilePages/ProfilePageReservationEmpty")
                }
            })
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
            <>

                {this.state.waitingForLoad ?   WaitingLoadingProfilePage(this.state.waitingForLoad , "fv-waitingLoadPublicFullScreen")
                :
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2"}>

                <div className={"fv-ProfilePageLeftBody"}>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>رزرو های من</h5>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo fv-profileMyReservationSearchBox"}>
                            <MDBCol md={4} sm={12} className={""}>
                                <input type={"text"} placeholder={"شهر یا روستا را انتخاب کنید"} value={this.state.city} onChange={(e)=> this.setState({city:e.target.value})}/>
                            </MDBCol>

                            <MDBCol md={2} sm={5} className={"fv-ProfilePageReservationRightCalendar"}>
                                <CalendarLinear dayToReturn={this.selectDayToGo} text={'از تاریخ'}/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={"fv-ProfilePageReservationLeftCalendar"}>
                                <CalendarLinear dayToReturn={this.selectDayToReturn} text={'تا تاریخ'} />
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو " onClick={()=>{
                                    let setCity = ''
                                    let setDateToGo = ''
                                    let setDateToreturn = ''
                                    if(this.state.city === "" ){
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
                                if(reserve.pay_status === "1"){   // در انتظار پرداخت
                                    className = "fv-profilePaeReservation2PayButtonSet"
                                    md="5"
                                    text = "در انتظار پرداخت"
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
                                            <img src={`${config.webapi}/images/villas/main/${reserve.img_src }`} className={'fv-productImage'}/>

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

                                                    <input type="button" value="پرداخت" onClick={()=> {
                                                        window.location.replace(`/factor/${reserve.id}`);
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
                </div>


            </MDBContainer>
                }
                </>
        )}
}
export default ProfilePageReservation2