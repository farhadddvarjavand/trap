import React from "react"
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
class Product extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <MDBRow className={'fv-product fv-mobileProduct'}>
                <img src={this.props.srcImage} className={'fv-productImage'}/>
                <MDBRow  >
                    <MDBCol md={4} sm={5} className={'fv-productRateBox'}>
                        <i className="fa fa-star" aria-hidden="true" />
                        {this.props.rate}
                    </MDBCol>
                </MDBRow>
               <MDBRow>
               <MDBCol className={'fv-productTopic'}>
                        {this.props.topic}
               </MDBCol>
               </MDBRow>
                <MDBRow className={'fv-productLocation'}>
                    <MDBCol md={9} sm={10}>
                        <a>{this.props.location} </a>
                        <i className="fa fa-map-marker-alt" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className={'fv-productCapacityBox'}>
                    <MDBCol md={2} sm={2}>
                      نفر{this.props.capacity}
                    </MDBCol>
                    <MDBCol md={5} sm={9}>
                       <a>حداکثر نفرات </a>
                        <i className="fa fa-user-friends" />
                    </MDBCol>
                    <MDBCol md={5} sm={11}>
                       <a>{this.props.numberOfRoom}خوابه </a>
                        <i className="fas fa-bed" />
                    </MDBCol>
                </MDBRow>

               <MDBRow className={'fv-productPreventPrice'}>
                   <MDBCol md={10}>
                       {this.props.PreventPrice}
                   </MDBCol>
               </MDBRow>
               <MDBRow className={'fv-productPriceBoxToman'}>
                   <MDBCol>
                   <a>تومان</a>
                   </MDBCol>
               </MDBRow>
                <MDBRow className={'fv-productPriceBox'}>
                    <MDBCol md={10}>
                        <a className={'fv-productPriceBoxPriceText'}>قیمت از شبی</a>
                        {this.props.price}
                    </MDBCol>
                </MDBRow>
           </MDBRow>
        )
    }
}
export default Product;