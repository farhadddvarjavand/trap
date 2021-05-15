import {MDBCol, MDBRow} from "mdbreact";
import React from "react";
import {Link, Route, withRouter} from 'react-router-dom';
import ProfilePageCalender from "../pages/ProfilePageCalender";


const AccommmodationProduct =(props) =>{
    return(
                <MDBCol md={4}>
                    <MDBRow className={'fv-product fv-mobileProduct'}>
                        <MDBRow className={"fv-ProfilePageReservation2ImageProductContentTopOne"}>
                            <MDBCol md={props.md}>
                                <p>{props.status}</p>
                                <input type="text"/>
                            </MDBCol>
                        </MDBRow>
                        <img src={props.mainImg} className={'fv-productImage'}/>

                        <MDBRow>
                            <MDBCol className={'fv-productTopic'}>
                                {props.title}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={'fv-ProfilePageReservation2ProductLocaton'}>
                            <MDBCol md={12} sm={10}>
                                <a>کد آگهی : {props.code}</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-borderButton"}>

                        </MDBRow>

                        <MDBRow className={"fv-profilePaeReservation2PayButton fv-myAccommodationPageCol6Button"}>
                            <MDBCol md={6} sm={6} className={"fv-myAccommodationPagePaddingRightButton"}>
                                {props.classNameActiveTopRight ?
                                    <Link to={"/profileCalender"}><input type="button" value="تقویم اقامت گاه" className={props.classNameActiveTopRight} /></Link> :
                                    <input type="button" value="تقویم اقامت گاه" className={props.classNameActiveTopRight} />
                                }
                            </MDBCol>
                            <MDBCol md={6} sm={6} className={"fv-myAccommodationPagePaddingLeftButton"}>
                                {props.classNameActiveTopLeft ?
                                    <Link to={`/profileGustComments2/${props.code}`}><input type="button" value="پاسخ به نظرات" className={props.classNameActiveTopLeft} /></Link> :
                                    <input type="button" value="پاسخ به نظرات" className={props.classNameActiveTopLeft} />
                                }
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-profilePaeReservation2PayButton fv-myAccommodationPageCol6Button"}>
                            <MDBCol md={6} sm={6} className={"fv-myAccommodationPagePaddingRightButton"}>
                                {props.classNameActiveBottonRight ?
                                    <Link to={"/profileCalender"}><input type="button" value="ویرایش اقامت گاه" className={props.classNameActiveBottonRight} /></Link> :
                                    <input type="button" value="ویرایش اقامت گاه" className={props.classNameActiveBottonRight} />
                                }
                            </MDBCol>
                            <MDBCol md={6} sm={6} className={"fv-myAccommodationPagePaddingLeftButton"}>
                                {props.classNameActiveBottonLeft ?
                                    <Link to={"/ProfileReservation2"}><input type="button" value="مشاهده رزروها" className={props.classNameActiveBottonLeft} /></Link> :
                                    <input type="button" value="مشاهده رزروها" className={props.classNameActiveBottonLeft} />
                                }
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-profilePaeReservation2PayButton fv-myAccommodationPageFinanceButton"}>
                            <MDBCol>
                                {props.classNameActiveButton ?
                                    <Link to={"/ProfileWallet"}><input type="button" value="گزارشات مالی ویلا" className={props.classNameActiveButton} /></Link> :
                                    <input type="button" value="گزارشات مالی ویلا" className={props.classNameActiveButton} />
                                }
                            </MDBCol>

                        </MDBRow>
                    </MDBRow>
                </MDBCol>
    )
}
export default AccommmodationProduct