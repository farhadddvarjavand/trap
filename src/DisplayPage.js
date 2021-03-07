import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./SearchHomePage.css"
import "./DisplayPage.css"
import Footer from "./footer"
import FotterpageLogo from "./images/Logo.png"
import LogoName from "./images/LogoName.png"
import MobileLogo from "./images/MobileLogo.png"
import MobileMenu from "./images/MobileMenu.png"
import Product from "./Product";


class SearchHomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage"}>

                <MDBContainer className={'fv-footerMenu fv-SearchHomePageBody'}>
                    <MDBRow className={'fv-footerMenuRibbon'}>
                        <MDBCol md={2}>
                            <i className="fa fa-user-alt" />
                            <a> حساب کاربری</a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                            <input type='searchBbox' value=' جستجو'/>
                        </MDBCol>
                        <MDBCol  md={2} className={"fv-DisplayPageSearchIcon"} >
                            <a><i className="fa fa-search" /></a>
                        </MDBCol>
                        <MDBCol md={6}>
                            <img src={LogoName} className={"fv-DisplayPageSearchName"}/>
                            <img src={MobileLogo} className={"fv-DisplayPageSearchLogo"}/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className={"fv-DisplayPageTitle"}>
                    <MDBRow >
                        <MDBCol md={1}>
                        <p>باغ سبز</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchName"}>
                        <MDBCol md={2}>
                            <p><i className="fa fa-user-alt" /> باغ سبز باغ سبز</p>
                        </MDBCol>
                        <MDBCol md={2}>
                            <p><i className="fa fa-user-alt" /> باغ سبز</p>
                        </MDBCol>
                        <MDBCol md={6}>
                            <p> اضافه به علاقه مندی ها <i className="fa fa-user-alt" /></p>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageTitleShare"}>
                            <p> به اشتراک گذاری <i className="fa fa-user-alt" /></p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchProductImage"}>
                        <MDBCol md={8}>
                            <img className={"fv-aboutUsThirdImageRight"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                        </MDBCol>
                        <MDBCol md={4}>
                            <MDBRow>
                                <img className={"fv-aboutUsThirdImageLeftFirst"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                            </MDBRow>
                            <MDBRow>
                                <img className={"fv-aboutUsThirdImageLeftSecond"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </div>
                <MDBRow className={"fv-DisplayPageDisplayMoreImage"}>
                    <MDBCol>
                        <a> مشاهده تصویر بیشتر <i className="fas fa-angle-left" /></a>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageMenu"}>
                    <MDBCol md={1}>
                        <a>    تصاویر    </a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>امکانات</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>آدرس</a>
                        <MDBRow>
                            <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={2}>
                        <a>قوانین اقامتگاه</a>
                        <MDBRow>
                            <button className="slider_pagination_btn" />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1}>
                        <a>نظرات</a>
                        <MDBRow>
                                <button className="slider_pagination_btn slider_pagination_btn_Unselected" />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetails"}>
                    <MDBCol md={8}>
                        <img className={"fv-aboutUsThirdImageLeftSecond"} src="https://www.w3schools.com/html/pic_trulli.jpg" />
                    </MDBCol>
                    <MDBCol md={4} className={"fv-DisplayPageDetailsLeftBody"}>
                        <MDBRow>
                            <p>قیمت از شبی ۲۰۰۰۰ تومان</p>
                        </MDBRow>
                        <MDBRow>
                            <p>  <i className="fa fa-user-alt" /> اولین تاریخ خالی این اقامت گاه ۱۸ اردیبهشت میباشد </p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyDate"}>
                            <MDBRow>
                                <input type='searchBbox' value=' تاریخ ورود' className={"fv-DisplayPageDetailsLeftBodyDateOnText"} />
                                <input type='searchBbox' value=' تاریخ خروج' className={"fv-DisplayPageDetailsLeftBodyDateOutText"} />
                            </MDBRow>
                            <MDBRow>
                                <input type='searchBbox' value=' تاریخ ورود' className={"fv-DisplayPageDetailsLeftBodyDateOnInput"} />
                                <input type='searchBbox' value=' تاریخ خروج' className={"fv-DisplayPageDetailsLeftBodyDateOutInput"} />
                            </MDBRow>
                        </MDBRow>
                        <MDBRow>
                            <input type='text' value=' تعداد نفرات'/>
                        </MDBRow>
                        <MDBRow>
                            <select value={"Apple"}>
                                <option value="A">Apple</option>
                                <option value="B">Banana</option>
                                <option value="C">Cranberry</option>
                            </select>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <input type="button" value="درخواست رزرو"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default SearchHomePage