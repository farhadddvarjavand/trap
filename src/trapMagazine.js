import React from "react";
import {MDBCol, MDBRow} from "mdbreact";
import Product from "./Product";

class trapMagazine extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={'fv-product fv-popularVillage fv-trapMagazine'}>
                <img src={this.props.srcimmage} className={'fv-productImage fv-popularVillageImage fv-trapMagazineImage'}/>
                <MDBRow>
                    <MDBCol md={12} className={'fv-trapMagazineImageTitle'}>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.comment}</p>
                    </MDBCol>
                    <MDBCol md={12} className={'fv-trapMagazineImageReadMore'}>
                        <a>مطالعه بیشتر</a>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}
export default trapMagazine;