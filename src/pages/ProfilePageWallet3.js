import React, {Component} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import "../style/ProfilePageWallet3.scss"
import {withdrawal} from "../services/userService";
import {waitingForCalculate} from "../componentsPages/WaitingLoad";

class ProfilePageWallet3 extends Component {
    constructor(props) {
        super(props);
        if (!JSON.parse(localStorage.getItem("info"))) {
            this.props.history.push('/login');
        }
        this.state = {
            amountRequested: '',
            waitingButton: false,
        }

    }

    render() {
        let tomanText = "تومان  "
        return (
            <div
                className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2 fv-ProfilePageWallet3"}>

                <div className={"fv-ProfilePageLeftBody"}>

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <h5 style={{marginBottom: '4%', marginTop: '3%'}}>درخواست برداشت</h5>
                        <p className={"h7"}>میزان مبلغ درخواستی خود را بنوسید</p>
                        <input type="text" placeholder="تومان"
                               value={`${tomanText}${this.state.amountRequested.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                               onChange={(event) => {
                                   let mystring = event.target.value.replace('تومان  ', '');
                                   let mystring2 = mystring.replace(/,/g, "");
                                   this.setState({amountRequested: mystring2})
                               }}/>


                        <MDBRow>
                            <MDBCol md={12} sm={12}
                                    className={this.state.waitingButton ? "fv-hideForWaiting" : "fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ارسال درخواست"
                                       className={this.state.waitingButton ? "fv-hideForWaiting" : ""} onClick={() => {
                                    this.setState({waitingButton: true})

                                    const withdrow = {
                                        requested_amount: this.state.amountRequested
                                    }
                                    withdrawal(withdrow)
                                        .then(res => {
                                            if (res.data.status === 1) {
                                                alert("درخواست بررداشت با موفقیت ثبت شد")
                                                this.props.ChangeAmountPrice()
                                                this.props.history.push(`/MainProfilePages/ProfileMyTransaction`)
                                                console.log(res)  //s درخواست بررداشت باید فرستاده بشود  // "Withdrawal request created"
                                            } else {
                                                alert(res.data.data)
                                            }

                                            this.setState({waitingButton: false})
                                        })
                                        .catch(err => {
                                            if (err.response) {
                                                alert('مقدار نامعتبر میباشد')
                                            }

                                            this.setState({waitingButton: false})
                                        })
                                }}/>

                            </MDBCol>
                            <MDBCol md={12} sm={12}>
                                {waitingForCalculate(this.state.waitingButton, "fv-waitingButtonWalletPage3")}
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </div>


            </div>
        )
    }
}

export default ProfilePageWallet3