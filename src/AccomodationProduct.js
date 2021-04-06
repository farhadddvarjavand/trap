import {MDBCol, MDBRow} from "mdbreact";
import React from "react";

const AccommmodationProduct =(props) =>{
    return(
                <MDBCol md={4}>
                    <MDBRow className={'fv-product fv-mobileProduct'}>
                        <MDBRow className={"fv-ProfilePageReservation2ImageProductContentTopOne"}>
                            <MDBCol md={props.md}>
                                <p>{props.title}</p>
                                <input type="text"/>
                            </MDBCol>
                        </MDBRow>
                        <img src={"https://www.w3schools.com/html/pic_trulli.jpg"} className={'fv-productImage'}/>

                        <MDBRow>
                            <MDBCol className={'fv-productTopic'}>
                                کلبه باغ سبز
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={'fv-ProfilePageReservation2ProductLocaton'}>
                            <MDBCol md={12} sm={10}>
                                <a>مازندران -محمود آباد </a>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-borderButton"}>

                        </MDBRow>

                        <MDBRow className={"fv-profilePaeReservation2PayButton fv-myAccommodationPageCol6Button"}>
                            <MDBCol md={6} className={"fv-myAccommodationPagePaddingRightButton"}>
                                <input type="button" value="پاسخ به نظرات" className={props.classNameActiveTopRight}/>
                            </MDBCol>
                            <MDBCol md={6} className={"fv-myAccommodationPagePaddingLeftButton"}>
                                <input type="button" value="تقویم اقامت گاه" className={props.classNameActiveTopLeft} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-profilePaeReservation2PayButton fv-myAccommodationPageCol6Button"}>
                            <MDBCol md={6} className={"fv-myAccommodationPagePaddingRightButton"}>
                                <input type="button" value="پرداخت" className={props.classNameActiveBottonRight}/>
                            </MDBCol>
                            <MDBCol md={6} className={"fv-myAccommodationPagePaddingLeftButton"}>
                                <input type="button" value="پرداخت" className={props.classNameActiveBottonLeft}/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-profilePaeReservation2PayButton"}>
                            <input type="button" value="پرداخت" className={props.classNameActiveButton}/>
                        </MDBRow>
                    </MDBRow>
                </MDBCol>
    )
}
export default AccommmodationProduct