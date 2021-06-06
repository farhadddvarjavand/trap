import {MDBCol, MDBRow} from "mdbreact";
import Logo from "../images/Logo.png";
import React from "react";

export const EmptyImagesPage=(props)=>{
    return <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo fv-ProfilePageReservationUserInfo"}>
        <h5>{props.title}</h5>

        <MDBRow className={"fv-ProfilePageReservationImage"}>
            <MDBCol md={12}>
                <p>{props.text}</p>
                <img src={props.image}/>
            </MDBCol>
        </MDBRow>
    </MDBCol>
}