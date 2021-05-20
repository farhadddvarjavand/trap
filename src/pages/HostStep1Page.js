import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HostStep1Page.scss"
import Footer from "../componentsPages/footer"
import MobileLogo from "../images/MobileLogo.png"
import HeaderSteps from "../componentsPages/HeaderSteps";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import {getUserInformation} from "../services/userService";


class HostStep1Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            accommodationTitle:'',
            accommodationKind:'title',
            number:'',
            accommodationHistory:'',
            nameAndFamily:'',
            avatar:'',


        }
    }
    componentDidMount() {
        getUserInformation()
            .then(res=> this.setState({
                nameAndFamily:res.data.fullname,
                avatar:res.data.avatar
            }))
            .catch(err=>console.log(err.response))
    }

    render() {
      const localStorageData={
          title:this.state.accommodationTitle,
          type:this.state.accommodationKind,
          phone_number:this.state.number,
          story:this.state.accommodationHistory,
      }

        return (
            <MDBContainer className={"fv-HostStep1Page"}>
                <HeaderSteps
                    nameAndFamily={this.state.nameAndFamily}
                    avatar={this.state.avatar}/>

                <MDBRow className={"fv-HostStep1PageBody"}>
                    <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <p  className={"fv-hostStep2Page2Hidden"}>عنوان اقامت گاه</p>
                            <input type="text" value={this.state.accommodationTitle} onChange={(event)=>this.setState({accommodationTitle:event.target.value})} className={"fv-hostStep2Page2Hidden"}/>
                            <p className={"fv-hostStep2Page2Hidden"}> نوع اقامت گاه</p>
                            <select value={this.state.accommodationKind} onChange={(event)=>this.setState({accommodationKind:event.target.value})}  className={"fv-hostStep2Page2Hidden"}>
                                <option value='title' disabled>نوع اقامت گاه</option>
                                <option value="ویلایی">ویلایی</option>
                                <option value="آپارتمانی">آپارتمانی</option>
                                <option value="مستقل">مستقل</option>
                                <option value="سازمانی">سازمانی</option>
                                <option value="سایر">سایر</option>
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
                    nextLink={'../../hostStep2'}
                    returnLink={'../../hostStep1'}
                    localStorageName={"step1"}
                    localStorageData={localStorageData}/>
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>
            </MDBContainer>
        )
    }
}
export default HostStep1Page
