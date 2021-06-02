import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageReservation.scss"
import "../style/ProfilePageWallet.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {financialReportsSearch, getFinancialReports, userVillas, villaIncome} from "../services/userService";
import axios from "axios";
import config from "../services/config.json";
import CalendarLinear from "../data/CalenddarLinear";

class ProfilePageWallet extends Component {
    constructor(props) {
        super(props);
        this.state={
            getFinancialReportsTopPage:[],
            getFinancialReports:[],
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
        }
    }
    componentDidMount() {
        this.getFinancialReports()
     //   this.villaIncome()
        userVillas()
            .then(res=>{
                if(res.data.data)
                this.setState({villasUser:res.data.data})
            })

    }

    getFinancialReports = ()=>{
        getFinancialReports()
            .then(res=>{
                let getFinancialReportsTop = []
                getFinancialReportsTop.push(res.data.income)
                console.log(res)
                this.setState({getFinancialReports : res.data.data , getFinancialReportsTopPage:getFinancialReportsTop})
            })
            .catch(err=>console.log(err.response))
    }
    villaIncome = ()  =>{
        villaIncome(24)
            .then(res=>console.log(res))
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
    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}/>
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

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo"}>
                            <MDBCol md={4} sm={12} className={""}>
                                <select value={this.state.villasUsertitle} onChange={(e)=>{
                                    this.setState({villasUsertitle:e.target.value})
                                }}>
                                    <option value='title' disabled>نام اقامتگاه را وارد کنید</option>
                                    {this.state.villasUser.map(vilauser=>{
                                        return  <option value={vilauser.title}>{vilauser.title}</option>
                                    })}

                                </select>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}>
                                <CalendarLinear dayToReturn={this.selectDayToGo} text={'از تاریخ'}/>
                            </MDBCol>
                            <MDBCol md={2} sm={5} className={""}> <CalendarLinear dayToReturn={this.selectDayToReturn} text={'تا تاریخ'} />
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو" onClick={()=>{
                                    let setTitle = ''
                                    let setDateToGo = ''
                                    let setDateToreturn = ''
                                    if(this.state.villasUsertitle === "title" ){
                                        setTitle = ''
                                    }else {
                                        setTitle =this.state.villasUsertitle
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
                                    const data ={
                                        villa_title :setTitle,
                                        start_date : setDateToGo ,
                                        end_date : setDateToreturn ,
                                    }
                                    console.log(data)
                                    financialReportsSearch(data)
                                        .then(res=>{
                                            console.log(res)
                                            let getFinancialReportsTop = []
                                            getFinancialReportsTop.push(res.data.income)
                                            this.setState({getFinancialReports : res.data.data , getFinancialReportsTopPage:getFinancialReportsTop})
                                        })
                                }}/>
                            </MDBCol>
                        </MDBRow>


                            { this.state.getFinancialReportsTopPage.map(getFinancialReportsTopPages=>{
                              return  <MDBRow className={"fv-ProfilePageWalletWalletImage"}>
                                    <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                        <MDBRow className={"fv-ProfilePageWalletWalletImageP"}>
                                            <MDBCol md={12}>
                                                <p>در آمد شما از ترپ</p>
                                            </MDBCol>
                                            <MDBCol md={12}>
                                                <p>{getFinancialReportsTopPages.trappIncome} تومان</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <img src={MobileLogo} />
                                    </MDBCol>
                                    <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                        <MDBRow className={"fv-ProfilePageWalletWalletImageP"}>
                                            <MDBCol md={12} className={"fv-ProfilePageWalletWalletImagePWhiteColor"}>
                                                <p>در آمد شما از سایر منابع</p>
                                            </MDBCol>
                                            <MDBCol md={12}>
                                                <p>{getFinancialReportsTopPages.otherIncome} تومان</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <img src={MobileLogo} />
                                    </MDBCol>
                                    <MDBCol md={4} sm={4} className={"fv-ProfilePageWalletWalletImageMobile"}>
                                        <MDBRow className={"fv-ProfilePageWalletWalletImageP fv-ProfilePageWalletWalletImagePWhiteColor"}>
                                            <MDBCol md={12}>
                                                <p>کل درآمد شما از اجاره ویلا</p>
                                            </MDBCol>
                                            <MDBCol md={12}>
                                                <p>{getFinancialReportsTopPages.totalIncome} تومان</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <img src={MobileLogo} />
                                    </MDBCol>
                                </MDBRow>
                            })}


                        <MDBRow>
                            <MDBCol>
                                <h5>ریز گزارشات مالی</h5>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th>تاریخ تراکنش</th>
                                <th>منبع تراکنش</th>
                                <th className={"fv-tableDiscriptions"}>شرح تراکنش</th>
                                <th>مبلغ</th>
                            </tr>
                            {this.state.getFinancialReports.map(getFinancialReport=>{
                                return      <tr>
                                                <td>{getFinancialReport.date}</td>
                                                <td>{getFinancialReport.src}</td>
                                                <td>{getFinancialReport.description}</td>
                                                <td>{getFinancialReport.amount}</td>
                                            </tr>
                            })}

                        </table>
                        <MDBRow className={"fv-ProfilePageWalletWalletButton"}>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton fv-ProfilePageWalletWalletButtonWith"}>
                                <input type="button" value="ثبت تراکنش جدید" onClick={()=>{

                                    this.props.history.push('/ProfileWallet2')
                                }}/>
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
export default ProfilePageWallet