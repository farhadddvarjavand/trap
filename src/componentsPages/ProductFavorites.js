import React from "react"
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {removeFromFavorite} from "../services/userService";


class ProductFavorites extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <MDBRow className={'fv-product fv-mobileProduct fv-productFavorites'}>
                <MDBRow className={"fv-trashFavorites"}>
                    <MDBCol>
                        <a><i className="fa fa-trash" aria-hidden="true" onClick={()=>{
                            const data ={
                                villa_id:this.props.id
                            }
                            removeFromFavorite(data)
                                .then(res => res.status===200 ?( alert('ویلای مورد نظر از علاقه مندی ها حذف شد') , window.location.reload()) : '')

                        }}/></a>
                    </MDBCol>
                </MDBRow>
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
                    </MDBCol>
                </MDBRow>

                <MDBRow className={'fv-productCapacityBoxFavorites'}>
                    <MDBCol md={2} sm={3} className={'fv-capacityBody'}>
                        <p> نفر </p><p> {this.props.capacity} </p>
                    </MDBCol>
                    <MDBCol md={5} sm={9} className={'fv-maximumNumber'}>
                        <a>حداکثر نفرات </a>
                        <i className="fa fa-user-friends" />
                    </MDBCol>

                    <MDBCol md={11} sm={4} className={''}>
                        <i className="fas fa-bed" />
                        <p>{this.props.numberOfRoom}</p><p>خوابه</p>
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
                            <a className={'fv-productPriceBoxPriceText'}>هرشب</a>
                            {this.props.price}
                        </MDBCol>
                    </MDBRow>

            </MDBRow>
        )
    }
}
export default ProductFavorites;