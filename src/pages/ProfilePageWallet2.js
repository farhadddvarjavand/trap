import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import CalendarLinear from "../data/CalenddarLinear";
import {setFinancialReports} from "../services/userService";

class ProfilePageWallet2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            sourceOfTransaction:'',
            transactionAmount:'',
            transactionDescription:'',
            date: {
                day:1400,
                month:'',
                year : ''
            },

            validTransactionAmount:false,

        }
    }
    selectDay = (date) =>{                                    // set date to go
        if(date) {this.setState(prevstate =>({
            date: {
                ...prevstate.day,
                ...prevstate.month,
                ...prevstate.year,
                day: date.day,
                month: date.month,
                year: date.year
            }
        }))
        }
    }
    render() {
        console.log(this.state.date)
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props}
                              thisPageName = "گزارش مالی" />
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <p>منبع تراکنش</p>
                        <input type="text"  value={this.state.sourceOfTransaction}
                               onChange={(event)=>{this.setState({sourceOfTransaction:event.target.value})}}/>
                        <p>مبلغ تراکنش</p>
                        <input type="text"  value={this.state.transactionAmount}
                               onChange={(event)=>{this.setState({transactionAmount:event.target.value})}}/>
                        <p>تاریخ تراکنش</p>

                        <div className={"fv-calendarInProfilePageWallet2"}> <CalendarLinear dayToGo={this.selectDay} text={'انتخاب روز'} /></div>
                        <p>شرح تراکنش</p>
                        <MDBRow className={"fv-ProfilePageWallet2TextArea"}>
                            <MDBCol>
                                <textarea value={this.state.transactionDescription}
                                            onChange={(event)=>{this.setState({transactionDescription:event.target.value})}}>
                                </textarea>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ذخیره تراکنش" onClick={()=>{
                                    const setDate = this.state.date.year+"/"+this.state.date.month+"/"+this.state.date.day
                                    const data = {
                                        date : setDate ,
                                        src : this.state.sourceOfTransaction ,
                                        description : this.state.transactionDescription ,
                                        amount : this.state.transactionAmount,
                                    }
                                    setFinancialReports(data)
                                        .then(res=>{
                                            if(res.status){
                                                this.props.history.push('/ProfileWallet')
                                            }
                                        })
                                        .catch(err=>alert("لطفا اطلاعات را به درستی وارد کنید"))
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
export default ProfilePageWallet2