import React from "react";
import MobileLogo from "./images/MobileLogo.png";
import {MDBCol, MDBRow} from "mdbreact";

const hostStepLeftBodyContent=(props)=>{
    return(
        <MDBCol className={"fv-hostStepPage1Left"} sm={12} md={6}>
            <MDBRow className={"fv-hostStepPage1LeftContentBody"}>
                <p>{props.text}</p>
                <img src={props.image} className={"fv-hostStepPage1LeftImage"}/>
            </MDBRow>
            <MDBRow className={"fv-hostStepPage2LeftButtonBody"}>
                <input type="button" value="مرحله بعد"  className={"fv-hostStepPage1LeftButton"}/>
                <input type="button" value="مرحله قبل"  className={"fv-hostStepPage2LeftButton"}/>
            </MDBRow>
        </MDBCol>
    )
}
export default hostStepLeftBodyContent;