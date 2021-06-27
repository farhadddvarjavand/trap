import React, {Component} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import CalendarLinear from "../data/CalenddarLinear";
import {setFinancialReports, userVillas} from "../services/userService";
import {waitingForCalculate} from "../componentsPages/WaitingLoad";

class ProfilePageWallet2 extends Component {
    constructor(props) {
        super(props);
        if (!JSON.parse(localStorage.getItem("info"))) {
            this.props.history.push('/login');
        }
        this.state = {
            sourceOfTransaction: 'title',
            transactionAmount: '',
            transactionDescription: '',
            villasUser: [],

            date: {
                day: 1400,
                month: '',
                year: ''
            },

            validTransactionAmount: false,
            waitingButton: false,

        }
    }

    componentWillMount() {
        userVillas()
            .then(res => {
                if (res.data.data)
                    this.setState({villasUser: res.data.data})
            })
    }

    selectDay = (date) => {                                    // set date to go
        if (date) {
            this.setState(prevstate => ({
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
        let tomanText = "تومان  "
        console.log(this.state.transactionAmount)
        return (
            <div
                className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2"}>

                <div className={"fv-ProfilePageLeftBody"}>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <p className={"h7"}>منبع تراکنش</p>

                        <select className={"fv-accommodationOption"} value={this.state.sourceOfTransaction}
                                onChange={(e) => {
                                    this.setState({sourceOfTransaction: e.target.value})
                                }}>
                            <option value='title' disabled>نام اقامت گاه</option>
                            {this.state.villasUser.map(vilauser => {
                                return <option value={vilauser.title}>{vilauser.title}</option>
                            })}
                        </select>

                        <p className={"h7"}>مبلغ تراکنش</p>
                        <input type="text"
                               style={{direction: 'initial', paddingLeft: '3%'}}
                               value={`${tomanText}${this.state.transactionAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                               onChange={(event) => {
                                   if (event.target.value !== 'تومان ') {

                                       let mystring = event.target.value.replace('تومان  ', '');
                                       let mystring2 = mystring.replace(/,/g, "");
                                       this.setState({transactionAmount: mystring2})
                                   }
                               }}/>
                        <p className={"h7"}>تاریخ تراکنش</p>

                        <div className={"fv-calendarInProfilePageWallet2"}><CalendarLinear dayToGo={this.selectDay}
                                                                                           text={'انتخاب روز'}/></div>
                        <p className={"h7"}>شرح تراکنش</p>
                        <MDBRow className={"fv-ProfilePageWallet2TextArea"}>
                            <MDBCol>
                                <textarea value={this.state.transactionDescription}
                                          onChange={(event) => {
                                              this.setState({transactionDescription: event.target.value})
                                          }}>
                                </textarea>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                {waitingForCalculate(this.state.waitingButton, "fv-waitingButtonWalletPage")}
                                <input type="button" value="ذخیره تراکنش"
                                       className={this.state.waitingButton ? "fv-hideForWaiting" : ""} onClick={() => {
                                    this.setState({waitingButton: true})
                                    const setDate = this.state.date.year + "/" + this.state.date.month + "/" + this.state.date.day
                                    let src = ""
                                    if (this.state.sourceOfTransaction !== "title") {
                                        src = this.state.sourceOfTransaction
                                    }
                                    const data = {
                                        date: setDate,
                                        src: src,
                                        description: this.state.transactionDescription,
                                        amount: this.state.transactionAmount,
                                    }
                                    console.log(data)
                                    setFinancialReports(data)
                                        .then(res => {
                                            if (res.status) {
                                                alert("تراکنش شما با موفقیت ثبت گردید")
                                                this.props.history.push('/MainProfilePages/ProfileWallet')
                                                this.setState({waitingButton: false})
                                            }
                                        })
                                        .catch(err => {
                                            this.setState({waitingButton: false})
                                            if (err.response.data) {
                                                if (err.response.data.errors)
                                                    if (err.response.data.errors.amount)
                                                        alert(err.response.data.errors.amount[0])
                                            }
                                            if (err.response.data) {
                                                if (err.response.data.errors)
                                                    if (err.response.data.errors.src)
                                                        alert(err.response.data.errors.src[0])
                                            }
                                            if (err.response.data) {
                                                if (err.response.data.errors)
                                                    if (err.response.data.errors.date)
                                                        alert(err.response.data.errors.date[0])
                                            }
                                            // console.log(err.response)
                                        })
                                }}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </div>


            </div>
        )
    }
}

export default ProfilePageWallet2