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
            accommodationTitle:'',
            accommodationKind:'title',
            number:'',
            accommodationHistory:''
        }

    }

    render() {
        return (
            <MDBContainer className={"fv-HostStep2Page"}>
                <MDBRow>
                    <MDBContainer className={"fv-HostStep1Page"}>
                        <HeaderSteps />

                        <MDBRow className={"fv-HostStep1PageBody"}>
                            <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                                <p  className={"fv-hostStep2Page2Hidden"}>عنوان اقامت گاه</p>
                                <input type="text" value={this.state.accommodationTitle} onChange={(event)=>this.setState({accommodationTitle:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}> نوع اقامت گاه</p>
                                <select value={this.state.accommodationKind} onChange={(event)=>this.setState({accommodationKind:event.target.value})}  className={"fv-hostStep2Page2Hidden"}>
                                    <option value='title' disabled>نوع اقامت گاه</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <p className={"fv-hostStep2Page2Hidden"}>شماره ضروری</p>
                                <input type="text" value={this.state.number} onChange={(event)=>this.setState({number:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                                <p className={"fv-hostStep2Page2Hidden"}> داستان اقامت گاه شما</p>
                                <textarea value={this.state.accommodationHistory} onChange={(event)=>this.setState({accommodationHistory:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
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
                                returnLink={'../../hostStep1'}/>
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