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
import {getUserVillaComments , replayComment} from "../services/userService";
import {fas} from "@fortawesome/free-solid-svg-icons";
import ProfilePageGustComments2 from "./PrfilePageGustComments2"
import PrfilePageGustComments from "./PrfilePageGustComments";

class ProfilePageCommentsHandle extends Component {
    constructor(props) {
        super(props);
        this.state={
            comments:[],

        }
    }

    componentDidMount() {
        getUserVillaComments(this.props.match.params.id)
            .then(res=>{
                if(res.data.data && res.data.data !== "Something went wrong!"){
                    this.setState({comments: Object.values(res.data.data)})
                    console.log(res.data.data)
                }else {
                    this.props.history.push("/profileGustComments") /// صفحه ای پیدا نشده است
                }


            })
    }

    render() {
        if(this.state.comments){
           return (<> {this.props.history.push("/profileGustComments2/24")}</> )
        }else {
            return   (<> {this.props.history.push("/profileGustComments")}</> )
        }

    }
}
export default ProfilePageCommentsHandle