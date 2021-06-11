import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageTransaction2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {transactionsSearch, userTransactions} from "../services/userService";
import "../style/scroolBodyProfilePages.scss"
import CalendarLinear from "../data/CalenddarLinear";
const commaNumber = require('comma-number')

class ProfilePageTransaction2 extends Component {
    constructor(props) {
        super(props);
        if(!JSON.parse(localStorage.getItem("info"))){
            this.props.history.push('login');
        }
        this.state={
            transactionDatas:[],
            transactionPrice:'',
            date: {
                day:'',
                month:'',
                year : ''
            },
        }

    }
    componentDidMount() {
        this.transactionDatas()

    }
    transactionDatas = () =>{
        userTransactions()
            .then(res=>{
                if (res.status===200){
                    this.setState({transactionDatas:res.data.data})
                }
            })
    }

    selectDay = (date) =>{                               // set date to return
        if(date) {this.setState(prevState => ({
            date:{
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
        console.log(this.state.transactionDatas)
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction fv-ProfilePageTransaction2"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                                   thisPageName = "تراکنش های من"/>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <h5>تراکنش های من</h5>
                        <MDBRow className={"fv-ProfilePageReservationSetInfo fv-ProfilePageTransaction2HeaderForMobile"}>


                            <MDBCol md={3} sm={12} className={""}>
                                <input type="text" placeholder="مبلغ تراکنش" onChange={(e)=>this.setState({transactionPrice:e.target.value})}/>
                            </MDBCol>
                            <MDBCol md={2} sm={12} className={"fv-ProfilePageReservationRightCalendar"}>
                                <CalendarLinear dayToReturn={this.selectDay} text={'تاریخ تراکنش'} />
                            </MDBCol>
                            <MDBCol md={3} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="جستجو" onClick={()=>{
                                    let date = ''
                                    if(this.state.date.year){
                                        date =  this.state.date.year+"/"+this.state.date.month+"/"+this.state.date.day
                                    }else {
                                        date = ''
                                    }
                                    const data={
                                        transaction_date : date ,
                                        transaction_cost : this.state.transactionPrice ,
                                    }
                                    console.log(data)
                                    transactionsSearch(data)
                                        .then(res =>{
                                            console.log(res.data.data)
                                            this.setState({transactionDatas:res.data.data})
                                        })
                                        .catch(err=>console.log(err.response))
                                }}/>
                            </MDBCol>
                        </MDBRow>


                        <table>
                            <tr className={"fv-tableTitle"}>
                                <th className={"fv-tableTitleRightOne"}>نوع تراکنش</th>
                                <th>تاریخ تراکنش</th>
                                <th>مبلغ</th>
                                <th className={"fv-tableTitleContents"}>شرح تراکنش</th>
                                <th className={"fv-tableTitleLeftOne"}>وضعیت</th>
                            </tr>
                            {this.state.transactionDatas.map(transactionData=>{
                                return(
                                    <tr>
                                        <td>{transactionData.type}</td>
                                        <td>{transactionData.date}</td>
                                        <td>{commaNumber(transactionData.amount)}</td>
                                        <td>{transactionData.description}</td>
                                        <td className={transactionData.status === "پرداخت شد"  ? "fv-test" :''}>{transactionData.status}</td>
                                    </tr>
                                )
                            })}

                        </table>

                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default ProfilePageTransaction2