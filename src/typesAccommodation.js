import React from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class typesAccommodation extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <MDBContainer>
            <MDBRow className={'fv-typesAccommodation '}>
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" className={'fv-productImage fv-popularVillageImage fv-typesAccommodationImage'}/>
                <MDBRow>
                    <MDBCol md={11} className={'fv-popularVillageTitle fv-typesAccommodationTopic'}>
                        <div>
                        <a>{this.props.topic}</a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBRow>
            </MDBContainer>
        );
    }
}
export default typesAccommodation;