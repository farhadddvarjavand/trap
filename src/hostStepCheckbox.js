import {MDBCol, MDBRow} from "mdbreact";
import React from "react";

const hostStepCheckbox = (props) =>{
    return(
        <MDBRow className={props.className}>
            <MDBCol md={parseInt(props.mdCheckbox)} sm={parseInt(props.smCheckbox)}>
                <input type="checkBox"/>
            </MDBCol>
            <MDBCol md={parseInt(props.mdCheckboxText)} sm={parseInt(props.smCheckboxText)}>
                <p>{props.text}</p>
            </MDBCol>
        </MDBRow>
    )
}

export default hostStepCheckbox
