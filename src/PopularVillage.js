import React from "react";
import {MDBCol, MDBRow} from "mdbreact";

class PopularVillage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MDBRow className={'fv-product fv-popularVillage'}>
                <img src={this.props.srcImage} className={'fv-productImage fv-popularVillageImage fv-popularVillageTitle'}/>

                        <h1>{this.props.location}</h1>
                        <h6>{this.props.capacity}خانه</h6>

            </MDBRow>
        )
    }
}
export default PopularVillage;