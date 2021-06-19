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
import ProfilePageReservation2 from "../pages/ProfilePageReservation2";
import ProfilePageReservationEmpty from "./ProfilePageReservationEmpty";
import {WaitingLoadingProfilePage} from "../componentsPages/WaitingLoad";

class ProfilePageCommentsHandle extends Component {
    constructor(props) {
        super(props);
        this.state={
            userVillas:[],
            villaId:'',
            comment:false,
            pushPage:'',
            villaIdFullComments:''

        }
    }

    componentDidMount() {




        userVillas()
            .then(result=>{
                if(result.data.data.length>0){
                    console.log(result)
                    this.setState({userVillas:result.data.data} , ()=>{
                        if(this.state.userVillas){ /// agar villaeii vojod dasht
                            this.state.userVillas.map(userVilla => {
                                getUserVillaComments(userVilla.id)    // برای هر ویلا که طرف دارد چک کن
                                    .then(res=>{    // اگر ویلایی کامنت داشت برو داخل
                                        console.log(res)  // آی دی ویلایی که کامنت دارد را باید پاس بدهیم به مرحله بعد
                                        if(res.data.data && res.data.data !== "Something went wrong!"){
                                            // avalin vilaie por
                                            if(Object.values(res.data.data).length !== 0){ /// agar vojod dasht commenti baraie villa haie sabt shode
                                                console.log(Object.values(res.data.data))

                                              //  this.setState({comments: Object.values(res.data.data) , villaId:userVilla.id } , () =>{

                                                /*

                                                 {res.data.data.map(res=>{
                                                if(Object.values(res.answer)){ /// agar vojod dasht commenti baraie villa haie sabt shode



                                                    //  this.setState({comments: Object.values(res.data.data) , villaId:userVilla.id } , () =>{

                                                    this.props.history.push(`/MainProfilePages/profileShowGuestComments/${userVilla.id}`)
                                                    //this.setState({villaIdFullComments:userVilla.id})

                                                    // bayad ie state gozashte shavad ke agar true shod yani vojod dashte va  agar false shod yani nabode va beravad be safhe yaft nashod
                                                    //    })
                                                }else {
                                                    // this.props.history.push("/MainProfilePages/profileGuestComments")
                                                }
                                            })}
                                                * */

                                                    this.props.history.push(`/MainProfilePages/profileShowGuestComments/${userVilla.id}`)
                                                    //this.setState({villaIdFullComments:userVilla.id})

                                            //    })
                                            }else {
                                               // this.props.history.push("/MainProfilePages/profileGuestComments")
                                            }

                                            // console.log(res.data.data)
                                        }else {
                                            // this.setState({villaIdFullComments:"guest"})
                                           // this.props.history.push("/MainProfilePages/profileGuestComments")
                                            // this.props.history.push("/profileGuestComments") /// صفحه ای پیدا نشده است
                                        }
                                    })
                                    .catch(err=>{
                                      //  this.props.history.push("/MainProfilePages/profileGuestComments")
                                    } ) //.catch(err=>this.props.history.push("/profileGuestComments"))

                            })
                        }else {
                            // this.props.history.push("/ProfilePageCommentsEmpty")
                            // empty
                             this.props.history.push("/MainProfilePages/profileGuestComments")
                            // this.setState({villaIdFullComments:"guest"})
                        }

                    })

                }else {
                    this.props.history.push("/MainProfilePages/profileGuestComments")
                }

            })
            .catch(err=>{
              //  this.props.history.push("/MainProfilePages/profileGuestComments")
            } )



    }

    render() {
        console.log(this.state.comments)
        console.log(this.state.villaId)


        return(
            <>
                {WaitingLoadingProfilePage(true , "fv-waitingLoadPublicFullScreen")}
            </>



        )


    }
}
export default ProfilePageCommentsHandle