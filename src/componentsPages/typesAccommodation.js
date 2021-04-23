import React from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class typesAccommodation extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'fv-typesAccommodation fv-mobileProduct'}>
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" className={'fv-productImage fv-popularVillageImage fv-typesAccommodationImage'}/>
                <MDBRow>
                    <MDBCol size={11} className={'fv-popularVillageTitle fv-typesAccommodationTopic'}>
                        <div className={'test'}>
                        <a>{this.props.topic}</a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
export default typesAccommodation;