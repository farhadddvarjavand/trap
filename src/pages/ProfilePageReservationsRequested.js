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
import {allReservationsRequested} from "../services/userService";

class ProfilePageReservationsRequested extends Component {
    constructor(props) {
        super(props);
        this.state={
            allReservationsRequested:[]
        }
    }
    componentDidMount() {
        this.allReservationsRequested()

    }

    allReservationsRequested = () =>{
        allReservationsRequested()
            .then(res=>this.setState({allReservationsRequested:res.data.data}))
            .catch(err=>console.log(err.response))
    }
    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageReservationsRequested"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p> پنل کاربری </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> تراکنش های من </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} style={{height: `${35+5*this.state.allReservationsRequested.length}vw`}} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>تراکنش های من</h5>
                        <p className={"fv-ProfilePageReservationsRequestedPTitle"}>جهت تایید یا عدم تایید رزرو مهمان هر سطر را انتخاب کنید و تایید یا عدم تایید کنید</p>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>

                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="از تاریخ"/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <input type="text" value="تا تاریخ"/>
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageReservationRequestedAccommodation"}>
                                <input type="text" value="نام اقامت گاه"/>
                            </MDBCol>
                            <MDBCol md={3} sm={10} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جست و جو"/>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th className={"fv-tableTitleRightOne"}>نام اقامت گاه</th>
                                <th className={"fv-tableTitleRightSecond"}>نام مهمان</th>
                                <th>تعداد نفرات</th>
                                <th>از تاریخ</th>
                                <th className={"fv-tableTitleContent"}>تا تاریخ</th>
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
                               return <tr>
                                    <td>{allReservationsRequest.title}</td>
                                    <td>{allReservationsRequest.guest_name}</td>
                                    <td>{allReservationsRequest.passengers_number}</td>
                                    <td>{allReservationsRequest.start_date}</td>
                                    <td>{allReservationsRequest.end_date}</td>
                                    <td className={allReservationsRequest.satus === "2" ? "fv-reservedColor" : ""}>{state}</td>
                                </tr>
                            })}
                        </table>

                        <MDBRow className={"fv-ProfilePageReservationSetInfo fv-ProfilePageReservationsRequestedButton"}>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageUserSetInfoButtonRight"}>
                               <a> <input type="button" value="جستجو"/></a>
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton "}>
                               <a> <input type="button" value="جستجو"/></a>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
                {/*  <MDBRow>
                    <Footer />
                </MDBRow>
                */}
            </MDBContainer>
        )}
}
export default ProfilePageReservationsRequested