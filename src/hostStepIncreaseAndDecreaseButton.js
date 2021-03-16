import React from "react";
import {MDBCol, MDBRow} from "mdbreact";
import "./hostStepIncreaseAndDecreaseButton.scss"

const HostStepIncreaseAndDecreaseButton =(props)=>{
    return(
        <MDBRow className={"hostStepIncreaseAndDecreaseBody"}>
            <MDBCol md={3}  className={"hostStepIncreaseAndDecreaseText"}>
                <p>{props.text}</p>
            </MDBCol>
            <MDBCol md={2} className={"hostStepIncreaseAndDecreaseButtonRight"}>
                <input type="button" value="+"/>
            </MDBCol>
            <MDBCol md={1}  className={"hostStepIncreaseAndDecreaseNumber"}>
                <p>{props.number}</p>
            </MDBCol>
            <MDBCol md={2}  className={"hostStepIncreaseAndDecreaseButtonLeft"}>
                <input type="button" value="-"/>
            </MDBCol>
        </MDBRow>

    )
}
export default HostStepIncreaseAndDecreaseButton