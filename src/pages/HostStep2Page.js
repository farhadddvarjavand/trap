import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep2Page.scss"
import HostStep1Page from "./HostStep1Page";
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt";
import MobileLogo from "../images/MobileLogo.png";
import Footer from "../componentsPages/footer";

class HostStep2Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            city:'title',
            village:'',
            postCode:'',
            address:''
        }

    }
    componentDidMount() {
        if( JSON.parse(localStorage.getItem("step2"))){
            const prevData =  JSON.parse(localStorage.getItem("step2"))
            this.setState({
                city:prevData.city,
                village:prevData.village,
                postCode:prevData.postal_code,
                address:prevData.address,
            })
        }
    }

    render() {
        // console.log(JSON.parse(localStorage.getItem("step1")))
        const localStorageData={
            city:this.state.city,
            village:this.state.village,
            postal_code:this.state.postCode,
            address:this.state.address,
        }

        return (
            <MDBContainer className={"fv-HostStep2Page"}>
                <MDBRow>
                    <MDBContainer className={"fv-HostStep1Page"}>
                        <HeaderSteps/>

                        <MDBRow className={"fv-HostStep1PageBody"}>
                            <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                                <p  className={"fv-hostStep2Page2Hidden"}>شهر/استان</p>
                                <select value={this.state.city} onChange={(event)=>this.setState({city:event.target.value})}  className={"fv-hostStep2Page2Hidden"}>
                                    <option value='title' disabled>نام شهر خود را وارد کنید</option>
                                    <option value="تهران">تهران</option>
                                    <option value="مشهد">مشهد</option>
                                    <option value="اصفهان">اصفهان</option>
                                    <option value="کرج">کرج</option>
                                    <option value="شیراز">شیراز</option>
                                    <option value="تبریز">	تبریز</option>
                                    <option value="قم">قم</option>
                                    <option value="اهواز">اهواز</option>
                                    <option value="کرمانشاه">کرمانشاه</option>
                                    <option value="ارومیه">ارومیه</option>
                                    <option value="رشت">رشت</option>
                                    <option value="زاهدان">زاهدان</option>
                                    <option value="همدان">همدان</option>
                                    <option value="کرمان">کرمان</option>
                                    <option value="یزد">یزد</option>
                                    <option value="اردبیل">اردبیل</option>
                                    <option value="اراک">اراک</option>
                                    <option value="بندرعباس">بندرعباس</option>
                                    <option value="زنجان">زنجان</option>
                                    <option value="سنندج">سنندج</option>
                                    <option value="قزوین">قزوین</option>
                                    <option value="خرم‌آباد">خرم‌آباد</option>
                                    <option value="گرگان">گرگان</option>
                                    <option value="ساری">ساری</option>
                                    <option value="بابل">بابل</option>
                                    <option value="سبزوار">سبزوار</option>
                                    <option value="گلستان">گلستان</option>
                                    <option value="آمل">آمل</option>
                                </select>
                                <p className={"fv-hostStep2Page2Hidden"}>روستا/محله</p>
                                <input type="text" value={this.state.village} onChange={(event)=>this.setState({village:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}>کدپستی</p>
                                <input type="text" value={this.state.postCode} onChange={(event)=>this.setState({postCode:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}>آدرس دقیق</p>
                                <textarea value={this.state.address} onChange={(event)=>this.setState({address:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                            </MDBCol>

                            <HostStepLeftBodyContent
                                text=" طراحان سایت هنگام طراحی قالب سایت معمولا ب
                    ا این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح
                    کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                    بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بو
                    د. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را
                    در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند"
                                image={MobileLogo}
                                nextLink={'../../hostStep2-2'}
                                returnLink={'../../hostStep1'}
                                localStorageName={"step2"}
                                localStorageData={localStorageData}/>
                        </MDBRow>

                        <MDBRow>
                            <Footer />
                        </MDBRow>
                    </MDBContainer>
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep2Page