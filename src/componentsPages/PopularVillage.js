import React from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class PopularVillage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MDBContainer className={'fv-product fv-popularVillage fv-mobileProduct'}>
                <img src={this.props.srcImage} className={'fv-productImage fv-popularVillageImage fv-popularVillageTitle'}/>

                        <h3>{this.props.location}</h3>
                        <h6> {this.props.capacity}<p>خانه</p> </h6>

            </MDBContainer>
        )
    }
}
export default PopularVillage;