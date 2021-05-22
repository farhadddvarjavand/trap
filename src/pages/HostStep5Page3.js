import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep2Page2.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep5Page3.scss"
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import {Link} from "react-router-dom";
import {editVilla, SetImages, storeVilla} from "../services/userService";
import {villa} from "../services/villaService";

class HostStep5Page3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedMainPic:'',
            selectedFirstPic:'',
            selectedSecondPic:'',
            selectedThirdPic:'',
            selectedFourthPic:'',


            fileTest:'',
            test:''
        }

    }
componentDidMount() {
    villa(30)
        .then(res=>console.log(res))

    editVilla(30)
        .then(res=>console.log(res))
}

    fileSelectedHandler = (event) => {
        this.setState({fileTest: event.target.files})

        console.log(event.target.value)
        let files = event.target.files;
        let result = new FileReader()
        result.readAsDataURL(files[0]);
        result.onload=(e)=>{
            console.log(e.target.result)
            this.setState({test:e.target.result})
        }
        if((event.target.files[0].type === "image/jpg" || event.target.files[0].type === "image/png" || event.target.files[0].type ===  "image/bmp" || event.target.files[0].type ===  "image/jpeg") && event.target.files[0].size < 2000005 ){
            console.log(event.target.files[0]);
            this.setState({
                [event.target.name]: event.target.files[0]
            }, () => this.fileUploadHandler());
        }
        if(event.target.files[0].size > 2000005){
            alert("حجم فایل عکس باید حداکثر 2 مگابایت باشد")
        }
        if((event.target.files[0].type !== "image/jpg" && event.target.files[0].type !== "image/png" && event.target.files[0].type !==  "image/bmp" && event.target.files[0].type !==  "image/jpeg") ) {
            alert("لطفا فایل عکس انتخواب کنید")
        }
    };
    fileUploadHandler = () => {
        /* file upload triggered */
        console.log('file upload triggered');
    };
    render() {
        const sendToServerDatas={
        }


        const step1Info = JSON.parse(localStorage.getItem("step1"));
        const step2Info = JSON.parse(localStorage.getItem("step2"));
        const step22Info = JSON.parse(localStorage.getItem("step2-2"));
        const step3Info = JSON.parse(localStorage.getItem("step3"));
        const step4Info = JSON.parse(localStorage.getItem("step4"));
        const step5Info = JSON.parse(localStorage.getItem("step5"));
        const step52Info = JSON.parse(localStorage.getItem("step5-2"));


        const allData={

            phone_number: step1Info.phone_number,
            story: step1Info.story,
            title: step1Info.title,
            type: step1Info.type,

            address: step2Info.address,
            city: step2Info.city,
            state: step2Info.city,
            postal_code: step2Info.postal_code,
            village: step2Info.village,


            lat: step22Info.lat,
            long:  step22Info.long,

            area: step3Info.area,
            bedroom:  step3Info.bedroom,
            eu_toilet:  step3Info.eu_toilet,
            ir_toilet:  step3Info.ir_toilet,
            max_capacity:  step3Info.max_capacity,
            places:  step3Info.places,
            rent_type:  step3Info.rent_type,
            shared_bathroom:  step3Info.shared_bathroom,
            shower:  step3Info.shower,
            standard_capacity: step3Info.standard_capacity,
            view:  step3Info.view,
            disinfected:step3Info.disinfected,

            bodyguard: step4Info.bodyguard,
            catering: step4Info.catering,
            chef: step4Info.chef,
            general_fac: step4Info.general_fac,
            host: step4Info.host,
            kitchen_fac: step4Info.kitchen_fac,
            temp_fac: step4Info.temp_fac,
            tour_guide: step4Info.tour_guide,


            monthly_discount: step5Info.monthly_discount,
            normal_cost: step5Info.normal_cost,
            normal_extra_cost:  step5Info.normal_extra_cost,
            special_cost:  step5Info.special_cost,
            special_extra_cost: step5Info.special_extra_cost,
            weekly_discount:  step5Info.weekly_discount,


            arrival_time: step52Info.arrival_time,
            auth_rules: step52Info.auth_rules,
            exit_time: step52Info.exit_time,
            max_reserve: step52Info.max_reserve,
            min_reserve: step52Info.min_reserve,
            special_rules: step52Info.special_rules,
            suitable_for: step52Info.suitable_for,
        }

        if(allData.address === ""){
            delete allData.address
        }
        if(allData.area === ""){
            delete allData.area
        }
        if(allData.arrival_time === "title"){
            delete allData.arrival_time
        }
        if(allData.auth_rules === ""){
            delete allData.auth_rules
        }
        if(allData.bodyguard === ""){
            delete allData.bodyguard
        }
        if(allData.catering === ""){
            delete allData.catering
        }
        if(allData.chef === ""){
            delete allData.chef
        }
        if(allData.city === "title"){
            delete allData.city
        }
        if(allData.state === "title"){
            delete allData.city
        }
        if(allData.exit_time === "title"){
            delete allData.exit_time
        }
        if(allData.general_fac === ""){
            delete allData.general_fac
        }
        if(allData.host === ""){
            delete allData.host
        }
        if(allData.kitchen_fac === ""){
            delete allData.kitchen_fac
        }
        if(allData.max_reserve === ""){
            delete allData.max_reserve
        }
        if(allData.min_reserve === ""){
            delete allData.min_reserve
        }
        if(allData.monthly_discount === ""){
            delete allData.monthly_discount
        }
        if(allData.normal_cost === ""){
            delete allData.normal_cost
        }
        if(allData.normal_extra_cost === ""){
            delete allData.normal_extra_cost
        }
        if(allData.phone_number === ""){
            delete allData.phone_number
        }
        if(allData.places === ""){
            delete allData.places
        }
        if(allData.postal_code === ""){
            delete allData.postal_code
        }
        if(allData.rent_type === "title"){
            delete allData.rent_type
        }
        if(allData.special_cost === ""){
            delete allData.special_cost
        }
        if(allData.special_extra_cost === ""){
            delete allData.special_extra_cost
        }
        if(allData.special_rules === ""){
            delete allData.special_rules
        }
        if(allData.story === ""){
            delete allData.story
        }
        if(allData.suitable_for === ""){
            delete allData.suitable_for
        }
        if(allData.temp_fac === ""){
            delete allData.temp_fac
        }
        if(allData.title === ""){
            delete allData.title
        }
        if(allData.tour_guide === ""){
            delete allData.tour_guide
        }
        if(allData.type === "title"){
            delete allData.type
        }
        if(allData.view === ""){
            delete allData.view
        }
        if(allData.village === ""){
            delete allData.village
        }
        if(allData.weekly_discount === ""){
            delete allData.weekly_discount
        }
        console.log(allData)

            //console.log(JSON.parse(localStorage.getItem("step5")))
       // console.log(JSON.parse(localStorage.getItem("info")))

        return (
            <MDBContainer className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page fv-hostStep5Page fv-hostStep5Page2 fv-hostStep5Page3"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>
                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>تصویر اصلی</h5>
                            <p className={"fv-hostStep5P"}>مهمانان ابتدا این تصویر را میبینند،این تصویر معرف اقامت گاه شماست،پس تصویر با کیفیت و زیبا انتخاب کنید</p>

                            <MDBRow className={"fv-hostStep5Page3TopPicImage"}>
                                <MDBCol>
                                        <div>
                                            <label htmlFor="myInput">
                                                <img src={Logo}/>
                                                <p>تصویر خود را انتخاب کنید</p>
                                            </label>
                                            <input
                                                id="myInput"
                                                style={{display:'none'}}
                                                type={"file"}
                                                name={'selectedMainPic'}
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>
                                </MDBCol>
                            </MDBRow>

                        </MDBCol>


                        <MDBCol className={"fv-hostStepPage1Left"} sm={12} md={6}>
                            <MDBRow className={"fv-hostStepPage1LeftContentBody"}>
                                <p>طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                                    ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                                    ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                                    کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                                    ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.</p>
                                <img src={Logo} className={"fv-hostStepPage1LeftImage"}/>
                            </MDBRow>
                            <MDBRow className={"fv-hostStepPage2LeftButtonBody"}>
                                <Link to={""} > <input type="button" value="مرحله بعد"  className={"fv-hostStepPage1LeftButton"} onClick={()=>{


                                    console.log(allData)
                                    storeVilla(allData)
                                        .then(res=>{
                                            if(res.status===200){
                                                localStorage.removeItem("step1")
                                                localStorage.removeItem("step2")
                                                localStorage.removeItem("step2-2")
                                                localStorage.removeItem("step3")
                                                localStorage.removeItem("step4")
                                                localStorage.removeItem("step5")
                                                localStorage.removeItem("step5-2")
                                            }
                                        })
                                        .catch(err=>console.log(err.response))

                                    let fd = new FormData()
                                    fd.append("images", this.state.fileTest);
                                   const images={
                                       img_src:"test.png",
                                       img_title:"test"
                                    }
                                    SetImages(this.state.test,30)
                                        .then(res => console.log(res))
                                        .catch(err=>console.log(err.response))
                                }}/> </Link>
                                <Link to={"../../hostStep5-2"} > <input type="button" value="مرحله قبل"  className={"fv-hostStepPage2LeftButton fv-hostStepPage1LeftButton"}/> </Link>
                            </MDBRow>
                        </MDBCol>

                        {/*    <HostStepLeftBodyContent
                            text="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                            ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                            ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                            کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                            ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."
                            image={Logo}/> */}
                    </MDBRow>

                    <MDBContainer className={"fv-hostStep5Page3MultiImages"}>
                        <MDBRow className={"fv-hostStep5Page3MultiImagesMobileAnotherPicP"}>
                                <p>تصاویر قسمت های دیگر اقامت گاه خود را انتخاب کنید</p>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <div>
                                            <label htmlFor="myInput">
                                                <img src={Logo}/>
                                                <p>تصویر خود را انتخاب کنید</p>
                                            </label>
                                            <input
                                                id="myInput"
                                                style={{display:'none'}}
                                                type={"file"}
                                                name={'selectedFirstPic'}
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <div>
                                            <label htmlFor="myInput">
                                                <img src={Logo}/>
                                                <p>تصویر خود را انتخاب کنید</p>
                                            </label>
                                            <input
                                                id="myInput"
                                                style={{display:'none'}}
                                                type={"file"}
                                                name={'selectedSecondPic'}
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <div>
                                            <label htmlFor="myInput">
                                                <img src={Logo}/>
                                                <p>تصویر خود را انتخاب کنید</p>
                                            </label>
                                            <input
                                                id="myInput"
                                                style={{display:'none'}}
                                                type={"file"}
                                                name={'selectedThirdPic'}
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={3} sm={12}>
                                <MDBRow className={"fv-hostStep5Page3Images"}>
                                    <MDBCol>
                                        <div>
                                            <label htmlFor="myInput">
                                                <img src={Logo}/>
                                                <p>تصویر خود را انتخاب کنید</p>
                                            </label>
                                            <input
                                                id="myInput"
                                                style={{display:'none'}}
                                                type={"file"}
                                                name={'selectedForthPic'}
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md={12} sm={12} className={"fv-hostStep5Page3ImagesComment"}>
                                        <p>عنوان تصویر یا شرح کوتاه</p>
                                        <input type="text" value=""/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>


                    <MDBRow>
                        <Footer />
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        )
    }
}
export default HostStep5Page3