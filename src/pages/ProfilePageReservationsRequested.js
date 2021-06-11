import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageTransaction2.scss"
import "../style/ProfilePageReservationsRequested.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import config from "../services/config.json";

import {
    allReservationsRequested,
    changeReserveStatus,
    requestedReservationsSearch,
    userVillas
} from "../services/userService";
import "../style/scroolBodyProfilePages.scss"
import CalendarLinear from "../data/CalenddarLinear";

class ProfilePageReservationsRequested extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('login');
        }
        this.state={
            allReservationsRequested:[],
            villasUser:[],
            villasUsertitle:'title',
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
            reservationsIdSelected : [],

        }
    }

    componentDidMount() {
        this.allReservationsRequested()

        userVillas()
            .then(res=>{
                if(res.data.data)
                    this.setState({villasUser:res.data.data})
            })
    }

    allReservationsRequested = () =>{
        allReservationsRequested()
            .then(res=>{
                console.log(res)
                this.setState({allReservationsRequested:res.data.data})
            })
            .catch(err=>console.log(err.response))
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
    selectedRow =(reservationsId) =>{

        const prevId =  this.state.reservationsIdSelected
        let add = ""
        if( this.state.reservationsIdSelected.indexOf(reservationsId) === -1){
            add = true
        }else {
            add = false
        }

        if(add &&  this.state.reservationsIdSelected.indexOf(reservationsId) === -1){   // یعنی انتخاب کرده است
            prevId.push(reservationsId)
            this.setState({reservationsIdSelected:prevId })
        }
        if(add === false && this.state.reservationsIdSelected.indexOf(reservationsId) !== -1){  // nnot selected this part
                const index = prevId.indexOf(reservationsId)
                if (index !== -1) {
                    prevId.splice(index, 1);
                    this.setState({reservationsIdSelected:prevId })
                }

        }
    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageReservationsRequested"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                                   thisPageName = "رزروهای درخواستی"/>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>رزروهای درخواستی</h5>
                        <p className={"fv-ProfilePageReservationsRequestedPTitle"}>جهت تایید یا عدم تایید رزرو مهمان هر سطر را انتخاب کنید و تایید یا عدم تایید کنید</p>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>


                            <MDBCol md={3} sm={12} className={"fv-ProfilePageReservationRequestedAccommodation"}>
                                <select value={this.state.villasUsertitle} onChange={(e)=>{  // villasUsertitle == همان آی دی ویلا میباشد
                                    this.setState({villasUsertitle:e.target.value})
                                }}>
                                    <option value='title' disabled>نام اقامت گاه</option>
                                    {this.state.villasUser.map(vilauser=>{
                                        return  <option value={vilauser.id}>{vilauser.title}</option>
                                    })}

                                </select>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={"fv-ProfilePageReservationRightCalendar"}>
                                <CalendarLinear dayToReturn={this.selectDayToGo} text={'از تاریخ'}/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={"fv-ProfilePageReservationLeftCalendar"}>
                                <CalendarLinear dayToReturn={this.selectDayToReturn} text={'تا تاریخ'} />
                            </MDBCol>

                            <MDBCol md={3} sm={10} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جست و جو" onClick={()=>{
                                    let villaId = ""
                                    let setDateToGo = ''
                                    let setDateToreturn = ''

                                    if(this.state.villasUsertitle === "title"){
                                        villaId = ""
                                    }else {
                                        villaId = this.state.villasUsertitle
                                    }

                                    if(this.state.dateToGo.year){
                                        setDateToGo =  this.state.dateToGo.year+"/"+this.state.dateToGo.month+"/"+this.state.dateToGo.day
                                    }else {
                                        setDateToGo = ""
                                    }

                                    if(this.state.dateToReturn.year){
                                        setDateToreturn =  this.state.dateToReturn.year+"/"+this.state.dateToReturn.month+"/"+this.state.dateToReturn.day
                                    }else {
                                        setDateToreturn = ""
                                    }
                                    let datas ={
                                        villa_id : villaId ,
                                        start_date : setDateToGo ,
                                        end_date : setDateToreturn ,
                                    }


                                    console.log(datas)
                                    requestedReservationsSearch(datas)
                                        .then(res=>{
                                            console.log(res)
                                            this.setState({allReservationsRequested:res.data.data})
                                        })
                                        .catch(err=>console.log(err.response))
                                }}/>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th className={"fv-tableTitleRightOne"}>نام اقامت گاه</th>
                                <th className={"fv-tableTitleRightSecond"}>نام مهمان</th>
                                <th>تعداد نفرات</th>
                                <th>از تاریخ</th>
                                <th className={"fv-tableTitleContents"}>تا تاریخ</th>
                                <th className={"fv-tableTitleLeftOne"}>وضعیت</th>
                            </tr>
                            {this.state.allReservationsRequested.map(allReservationsRequest=>{
                                let state = ""
                                if(allReservationsRequest.satus === "0"){
                                    state="در انتظار تایید توسط مالک ویلا"
                                }
                                if(allReservationsRequest.satus === "1"){
                                    state="در انتظار پرداخت"
                                }
                                if(allReservationsRequest.satus === "2"){
                                    state="پرداخت شده"
                                }
                               return <tr onClick={()=>this.selectedRow(allReservationsRequest.id)} className={ this.state.reservationsIdSelected.indexOf(allReservationsRequest.id) !== -1   ? "fv-selected" : ""} >
                                   <td> <a >{allReservationsRequest.title}</a></td>
                                   <td><a >{allReservationsRequest.guest_name}</a></td>
                                   <td> <a >{allReservationsRequest.passengers_number}</a></td>
                                   <td><a >{allReservationsRequest.start_date}</a></td>
                                   <td><a>{allReservationsRequest.end_date}</a></td>
                                   <td className={allReservationsRequest.satus === "2" ? "fv-reservedColor" : ""}><a >{state}</a></td>
                                </tr>
                            })}
                        </table>

                        <MDBRow className={"fv-ProfilePageReservationSetInfo fv-ProfilePageReservationsRequestedButton"}>
                            <MDBCol md={3} sm={6} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageUserSetInfoButtonRight"}>
                               <a> <input type="button" value="عدم تایید رزرو" onClick={()=>{
                                   if(this.state.reservationsIdSelected.length === 0){
                                       alert("لطفا سطر مورد نظر خود را انتخاب کنید")
                                   }else {
                                       const data={
                                           ids:this.state.reservationsIdSelected,
                                           status:0 ,
                                       }

                                       console.log(data)
                                       changeReserveStatus(data)
                                           .then(res=>{
                                               window.location.reload()
                                           })
                                           .catch(err=>alert("لطفا سطر مورد نظر خود را انتخاب کنید"))
                                   }

                               }}/></a>
                            </MDBCol>
                            <MDBCol md={3} sm={6} className={"fv-ProfilePageUserSetInfoButton "}>
                               <a> <input type="button" value="تایید رزرو" onClick={()=>{

                                   if(this.state.reservationsIdSelected.length === 0){
                                       alert("لطفا سطر مورد نظر خود را انتخاب کنید")
                                   }else {
                                       const data={
                                           ids:this.state.reservationsIdSelected,
                                           status:1 ,
                                       }

                                       console.log(data)
                                       changeReserveStatus(data)
                                           .then(res=>{
                                               window.location.reload()
                                           })
                                           .catch(err=>alert("لطفا سطر مورد نظر خود را انتخاب کنید"))
                                   }
                               }}/></a>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageReservationsRequested