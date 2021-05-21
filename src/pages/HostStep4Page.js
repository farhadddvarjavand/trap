import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/HeaderSteps.scss"
import "../style/HostStep2Page2.scss"
import "../style/HostStep1Page.scss"
import "../style/HostStep4Page.scss"
import HeaderSteps from "../componentsPages/HeaderSteps";
import Logo from "../images/Logo.png";
import Footer from "../componentsPages/footer";
import HostStepLeftBodyContent from "../componentsPages/hostStepLeftBodyContetnt"
import HostStep4PageRightBody from "../componentsPages/hostStep4PageRightBody"
import HostStepCheckbox from "../componentsPages/hostStepCheckbox";

class HostStep4Page extends Component {
    constructor(props) {
        super(props);
        this.state={
            generalFacilities:[],
            kitchenFacilities:[],
            coolingAndHeatingFacilities:[],
            specialFacilities:[],
            catering:[],
            chefDisableTextbox:true ,
            hostDisableTextbox:true ,
            tourLeaderDisableTextbox:true ,
            bodyguardDisableTextbox:true ,
            chef:'',
            host:'',
            tourLeader:'',
            bodyguard:'',
        }
    }

    componentDidMount() {

        if( JSON.parse(localStorage.getItem("step4"))){
            const prevGeneralFacilities = []
            const prevKitchenFacilities = []
            const prevCoolingAndHeatingFacilities = []
            const prevCatering = []

            const prevData =  JSON.parse(localStorage.getItem("step4"))
            if(prevData.general_fac){
                const GeneralFacilitiess = prevData.general_fac.split(",")
                for(let i = 0 ; i < GeneralFacilitiess.length ; i++){
                    prevGeneralFacilities.push(GeneralFacilitiess[i])
                }
            }
            if(prevData.kitchen_fac){
                const KitchenFacilitiess = prevData.kitchen_fac.split(",")
                for(let i = 0 ; i < KitchenFacilitiess.length ; i++){
                    prevKitchenFacilities.push(KitchenFacilitiess[i])
                }
            }
            if(prevData.temp_fac){
                const CoolingAndHeatingFacilitiess = prevData.temp_fac.split(",")
                for(let i = 0 ; i < CoolingAndHeatingFacilitiess.length ; i++){
                    prevCoolingAndHeatingFacilities.push(CoolingAndHeatingFacilitiess[i])
                }
            }
            if(prevData.catering){
                const catering = prevData.catering.split(",")
                for(let i = 0 ; i < catering.length ; i++){
                    prevCatering.push(catering[i])
                }
            }
            this.setState({
                generalFacilities:prevGeneralFacilities,
                kitchenFacilities:prevKitchenFacilities,
                coolingAndHeatingFacilities:prevCoolingAndHeatingFacilities,
                catering:prevCatering,
                chef:prevData.chef,
                host:prevData.host,
                tourLeader:prevData.tour_guide,
                bodyguard:prevData.bodyguard,
            })
        }
    }

    setCheckbox =(event,checkboxName) =>{
        let repeat = false
        const setData= this.state[checkboxName]
        if(event.target.checked === false){
            const index = setData.indexOf(event.target.name)
            if (index !== -1) {
                setData.splice(index, 1);
                this.setState({[checkboxName]:setData})
            }
        } else {
            setData.map(checked=>{
                if(checked === event.target.name){
                    repeat=true
                }
            })
            if(repeat === false){
                setData.push(event.target.name)
                this.setState({[checkboxName]:setData})
            }
        }
    }
    setCheckboxAndHandleTextBox =(event,checkboxName,handleTextBoxDisable) =>{
        let repeat = false
        const setData= this.state[checkboxName]
        if(event.target.checked === false){
            const index = setData.indexOf(event.target.name)
            if (index !== -1) {
                setData.splice(index, 1);
                this.setState({[checkboxName]:setData , [handleTextBoxDisable]:true , [event.target.name]:''})

            }
        } else {
            setData.map(checked=>{
                if(checked === event.target.name){
                    repeat=true
                }
            })
            if(repeat === false){
                setData.push(event.target.name)
                this.setState({[checkboxName]:setData , [handleTextBoxDisable]:false})
            }
        }
    }

    render() {

        let generalFacilities=""
        for (let j = 0 ; j<this.state.generalFacilities.length ; j++){
            if(j===0){
                generalFacilities=this.state.generalFacilities[j]
            }else {
                generalFacilities=`${generalFacilities},${this.state.generalFacilities[j]}`
            }
        }

        let kitchenFacilities=""
        for (let j = 0 ; j<this.state.kitchenFacilities.length ; j++){
            if(j===0){
                kitchenFacilities=this.state.kitchenFacilities[j]
            }else {
                kitchenFacilities=`${kitchenFacilities},${this.state.kitchenFacilities[j]}`
            }
        }
        let coolingAndHeatingFacilities=""
        for (let j = 0 ; j<this.state.coolingAndHeatingFacilities.length ; j++){
            if(j===0){
                coolingAndHeatingFacilities=this.state.coolingAndHeatingFacilities[j]
            }else {
                coolingAndHeatingFacilities=`${coolingAndHeatingFacilities},${this.state.coolingAndHeatingFacilities[j]}`
            }
        }
        let catering=""
        for (let j = 0 ; j<this.state.catering.length ; j++){
            if(j===0){
                catering=this.state.catering[j]
            }else {
                catering=`${catering},${this.state.catering[j]}`
            }
        }




        console.log(catering)
        const localStorageData={
            general_fac:generalFacilities,
            kitchen_fac:kitchenFacilities,
            temp_fac:coolingAndHeatingFacilities,
            chef:this.state.chef,
            host:this.state.host,
            tour_guide:this.state.tourLeader,
            bodyguard:this.state.bodyguard,
            catering:catering,


        }
        // console.log(JSON.parse(localStorage.getItem("step3")))
        return (
            <div className={" fv-HostStep2Page fv-hostStep2Page2 fv-hostStep3Page fv-hostStep4Page"}>
                <MDBContainer className={"fv-HostStep1Page"}>
                    <MDBRow>
                        <HeaderSteps />
                    </MDBRow>

                    <MDBRow className={"fv-HostStep1PageBody"}>


                        <MDBCol className={"fv-hostStepPage1Right"} sm={12} md={6}>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile"}>امکانات کلی</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text=" جارو برقی"
                                        name='جارو برقی'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text=" اینترنت رایگان"
                                        name='اینترنت رایگان'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="تلفن"
                                        name={'تلفن'}
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="جعبه کمک های اولیه"
                                        name='جعبه کمک های اولیه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="مهر و جانماز"
                                        name='مهر و جانماز'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="تلوزیون"
                                        name='تلوزیون'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="یخچال"
                                        name='یخچال'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="اجاق گاز"
                                        name='اجاق گاز'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.generalFacilities}
                                        nameOfPart={'generalFacilities'}/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات آشپرخانه</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="بشقاب"
                                        name='بشقاب'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قاشق-چنگال"
                                        name='قاشق-چنگال'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="لیوان"
                                        name='لیوان'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="سماور"
                                        name='سماور'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کتری"
                                        name='کتری'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="استکان"
                                        name='استکان'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قابلمه"
                                        name='قابلمه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="قوری"
                                        name='قوری'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="ماهیتابه"
                                        name='ماهیتابه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.kitchenFacilities}
                                        nameOfPart={'kitchenFacilities'}/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات سرمایشی و گرمایشی اتاق را مشخص کنید</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کولر"
                                        name='کولر'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="پنکه"
                                        name='پنکه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کولر گازی"
                                        name='کولر گازی'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="پکیج"
                                        name='پکیج'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="کرسی"
                                        name='کرسی'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="شومینه"
                                        name='شومینه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol md={6} sm={5}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="بخاری گازی"
                                        name='بخاری گازی'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                                <MDBCol  md={6} sm={7} className={"fv-hostStep4CheckBoxGroupInColumnOne"}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="هیتر"
                                        name='هیتر'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.coolingAndHeatingFacilities}
                                        nameOfPart={'coolingAndHeatingFacilities'}/>
                                </MDBCol>
                            </MDBRow>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>امکانات ویژه</h5>
                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>هر کدام از امکانات زیر را ارائه میدهید انتخاب کنید و مبلغ آن را ذکر کنید</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>

                                <MDBCol md={6} sm={7}>

                                    <MDBRow className={'fv-hostStep4PaddingTop'}>
                                        <MDBCol md={1} sm={2}>
                                            <input type="checkBox" name='chef'
                                                   onChange={(event)=>this.setCheckboxAndHandleTextBox(event,'specialFacilities','chefDisableTextbox')}/>
                                        </MDBCol>
                                        <MDBCol md={10} sm={9}>
                                            <p>آشپز</p>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" name={'chef'} placeholder="تومان" disabled={this.state.chefDisableTextbox} value={this.state.chef}
                                           onChange={(e)=>this.setState({chef:e.target.value})}/>
                                </MDBCol>

                            </MDBRow>

                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>

                                    <MDBRow className={'fv-hostStep4PaddingTop'}>
                                        <MDBCol md={1} sm={2}>
                                            <input type="checkBox" name='host'
                                                   onChange={(event)=>this.setCheckboxAndHandleTextBox(event,'specialFacilities','hostDisableTextbox')}/>
                                        </MDBCol>
                                        <MDBCol md={10} sm={9}>
                                            <p>مهماندار</p>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" placeholder="تومان" name={'host'} disabled={this.state.hostDisableTextbox} value={this.state.host}
                                           onChange={(e)=>this.setState({host:e.target.value})}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>

                                    <MDBRow className={'fv-hostStep4PaddingTop'}>
                                        <MDBCol md={1} sm={2}>
                                            <input type="checkBox" name='tourLeader'
                                                   onChange={(event)=>this.setCheckboxAndHandleTextBox(event,'specialFacilities','tourLeaderDisableTextbox')}/>
                                        </MDBCol>
                                        <MDBCol md={10} sm={9}>
                                            <p>راهنمای</p>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" placeholder="تومان" name={'tourLeader'} disabled={this.state.tourLeaderDisableTextbox} value={this.state.tourLeader}
                                           onChange={(e)=>this.setState({tourLeader:e.target.value})}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={7}>

                                    <MDBRow className={'fv-hostStep4PaddingTop'}>
                                        <MDBCol md={1} sm={2}>
                                            <input type="checkBox" name='bodyguard'
                                                   onChange={(event)=>this.setCheckboxAndHandleTextBox(event,'specialFacilities','bodyguardDisableTextbox')}/>
                                        </MDBCol>
                                        <MDBCol md={10} sm={9}>
                                            <p>بادیگارد</p>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3AddPlace"}>
                                <MDBCol sm={10} className={"fv-marginRight fv-hostStep3InputText"} md={6}>
                                    <input type="text" placeholder="تومان" name={'bodyguard'} disabled={this.state.bodyguardDisableTextbox} value={this.state.bodyguard}
                                           onChange={(e)=>this.setState({bodyguard:e.target.value})}/>
                                </MDBCol>
                            </MDBRow>

                            <h5 className={"fv-hostStep3NumberOfCapacityMobile‌"}>پذیرایی</h5>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="صبحانه"
                                        name='صبحانه'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.catering}
                                        nameOfPart={'catering'}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="نهار"
                                        name='نهار'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.catering}
                                        nameOfPart={'catering'}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={"fv-hostStep3CheckBox fv-hostStep3CheckBoxGroupInLine"}>
                                <MDBCol md={6} sm={6}>
                                    <HostStepCheckbox
                                        className="fv-hostStep4PaddingTop"
                                        mdCheckbox = "1"
                                        smCheckbox="2"
                                        mdCheckboxText="10"
                                        smCheckboxText="9"
                                        text="شام"
                                        name='شام'
                                        setCheckbox = {this.setCheckbox}
                                        setCheckedPrev = {this.state.catering}
                                        nameOfPart={'catering'}/>
                                </MDBCol>
                            </MDBRow>


                        </MDBCol>


                        <HostStepLeftBodyContent
                            text="طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند ک
                            ه محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگ
                            ر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و این
                            کار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگرا
                            ن را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."
                            image={Logo}
                            nextLink={'../../hostStep5'}
                            returnLink={'../../hostStep3'}
                            localStorageName={"step4"}
                            localStorageData={localStorageData}/>
                    </MDBRow>
                    <MDBRow>
                        <Footer />
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default HostStep4Page