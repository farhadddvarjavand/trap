import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePageReservation2.scss"
import "../style/ProfilePageReservation.scss"
import "../style/ProfilePageWallet.scss"
import "../style/ProfilePageGustComments2.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import {getUserVillaComments, replayComment, userVillas} from "../services/userService";
import {fas} from "@fortawesome/free-solid-svg-icons";
import ProfilePageGustComments2 from "../pages/PrfilePageGustComments2"
import PrfilePageGustComments from "../pages/PrfilePageGustComments";
import "../style/profilePageCommentsHandler.scss"
import {villaPrice} from "../services/villaService";

class ProfilePageCalendarHandle extends Component {
    constructor(props) {
        super(props);
        this.state={
            userVillas:[],
            villaId:'',
            comment:false,
            villaPrice:[],

        }
    }

    componentDidMount() {




        userVillas()
            .then(result=>{
                console.log(result.data.data)
                this.setState({userVillas:result.data.data} , ()=>{
                    if(this.state.userVillas){ /// agar villaeii vojod dasht
                        this.state.userVillas.map(userVilla => {
                            villaPrice(userVilla.id)
                                .then(res=>{
                                    console.log(Object.values(res.data).length)
                                   if( Object.values(res.data)[0] !== null){
                                       this.setState({villaPrice: Object.values(res.data) , villaId:userVilla.id } , () =>{
                                              this.props.history.push(`/profileCalender/${userVilla.id}`)
                                       })
                                    }
                                })
                                .catch(err=>console.log(err.response))  // this.props.history.push("/ProfilePageCalendarEmpty")
                        })
                    }else {
                        this.props.history.push("/ProfilePageCalendarEmpty")
                        // empty
                    }

                })
            })



    }

    render() {
     //   console.log(this.state.comments)
      //  console.log(this.state.villaId)


        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageReservation2 fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageGustComments2 fv-profilePageCommentsHandler"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch  {...this.props} />

                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
                        <MDBRow className={"fv-loaderComments"}>
                            <div className={ "cssload-wave" }>
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
                    )


    }
}
export default ProfilePageCalendarHandle