import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import Footer from "../componentsPages/footer"
import FotterpageLogo from "../images/Logo.png"
import LogoName from "../images/LogoName.png"
import MobileLogo from "../images/MobileLogo.png"
import MobileMenu from "../images/MobileMenu.png"
import Product from "../componentsPages/Product";
import TopicsMainPage from "../componentsPages/topicsMainPage";
import Calender from "../componentsPages/calender";
import HeaderSearch from "../componentsPages/HeaderSearch";
import SearchHomePage from "./SearchHomePage";
import Datas from "../data/Datas";
import config from "../services/config.json";
import CalendarDesktop from "../data/CalendarDesktop";
import Calendar from 'react-calendar'
import 'moment/locale/fa';   // new
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from "react-modern-calendar-datepicker";
import {MapTest} from "../data/MapTest";
import CalendarForMobile from "../data/CalendarForMobilejs";
import CalendarLinear from "../data/CalenddarLinear";
import {villa , villaComments , villaImages ,similarVillas , reservedDates , villaPrice} from "../services/villaService"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import * as moment from 'jalali-moment';
import {utils} from "../data/Calendar";
import {arrayBetweenDates , arrayBetweenDatesObject , priceOfPerMonth} from "../componentsPages/calculationsDate"
import Mapir from "mapir-react-component";
import {Link} from "react-router-dom";
import {
    addToFavorite,
    calculateCost,
    calculateExtraCost,
    calculateFacilitiesCost,
    reserveRequest
} from "../services/userService";
import "../style/extra.scss"
import axios from "axios";
import HeaderLoginMenu from "../componentsPages/HeaderLoginMenu";
import CalendarLinearLimitedDays from "../data/CalendarLinearLimitedDays";
import {Waiting, waitingForCalculate, waitingForCalculate2} from "../componentsPages/WaitingLoad";
const commaNumber = require('comma-number')

class DisplayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            ...this.state,
            dateToGo: {
                day:1400,
                month:'',
                year : ''
            },
            dateToReturn: {
                day:'انتخاب تاریخ',
                month:'',
                year : ''
            },
            facilitiesCheckbox:[],
            numberOfPeople:' ',
            displayButtonName:'',

            resultVilla:[],
            resultComments:[],
            resultRateComments:[],
            resultImages:[],
            resultSimilarVillas:[],
            resultReservedDates:[],
            villaPrice:[],
            selectedDays : '',
            error:'',
            morePics:false,
            addToFavorites:false,
            reservedPrice:'',
            reservedFacilitiesPrice:0,
            reservedTotalPrice:'',
            extraPeopleCost:'',
            onclickHandelMobileMenu:false,
            daysCostString:'',
            waitingForExtraPeople:false,


            date: new Date(),
            selectedPlace: '',
            lat:35.72,
            lon:51.42,
            errors:false,
            finallyPrice:[],
            alertErrors:false,
            innerValidationFacilitiesCost:false,


        }
    }


componentDidMount() {



    villa(this.props.match.params.id)
        .then(res => {
           if(res.data.status === 404){
               this.props.history.push('/notFound');
           }
            this.setState({resultVilla: res.data.data});
        })
        .catch(error =>{
            console.log(error)
        })

    villaImages(this.props.match.params.id)
        .then(res => {
            this.setState({resultImages: res.data.data});
        })
        .catch(error =>{
        })

    villaComments(this.props.match.params.id)
        .then(res => {
            // console.log( res)
            // console.log( 'resultcomments-hadi')
            if(res.data.data)
                this.setState({resultComments: Object.values(res.data.data) , resultRateComments: res.data});
            // else
            //     console.log(res.data.data);
        })
        .catch(error =>{

        })

    similarVillas(this.props.match.params.id)
        .then(res => {
            if(res.data.data)
                this.setState({resultSimilarVillas: res.data.data});
        })
        .catch(error =>{

        })

    reservedDates(this.props.match.params.id)
        .then(res => {
            if(res.data.data)
                console.log(Object.values(res.data.data))
                this.setState({resultReservedDates: Object.values(res.data.data)});
        })
        .catch(error =>{

        })

    villaPrice(this.props.match.params.id)
        .then(res=>{
            if(res.data){
                this.setState({villaPrice:res.data} , ()=>{
                    this.villaReservedDates()
                })
            }
        })
        .catch(err=>console.log(err.response))


}
    villaReservedDates = ()=>{
        reservedDates(this.props.match.params.id)
            .then(res => {
                this.setState({resultReservedDates: Object.values(res.data.data)} , () =>{
                    this.calculatePricesWithString()
                });
            })
            .catch(error =>{
            })
    }
    calculatePricesWithString = ()=>{
        const priceDaysUpdates = []  /// مورد نظر
        let priceArrayOneMonth ={
            daysPrice: [] ,
            month: '',
            year: ''
        }
        if(this.state.villaPrice[0]){
            priceArrayOneMonth.daysPrice = priceOfPerMonth(this.state.villaPrice[0].year , this.state.villaPrice[0].month , this.state.villaPrice[0].daysPrice)
            priceArrayOneMonth.month=this.state.villaPrice[0].month
            priceArrayOneMonth.year=this.state.villaPrice[0].year
        }
        for(let i = 0 ; i<this.state.villaPrice.length ; i++){
            if(i===0){
                priceDaysUpdates.push(priceArrayOneMonth)
            }
            else {
                priceDaysUpdates.push(this.state.villaPrice[i])
            }
        }

       // console.log(priceDaysUpdates) // araye gheimat ha 30 ta 30 ta ie mah
        // this.state.resultReservedDates // rozhaie gheire faal
      //  console.log(this.state.resultReservedDates)

        let finalCost=[]
        let finalCostArrays = []
        let finalCostMonth = []
        let finalCostYear = []
        let isset = false

        for (let i = 0 ; i < priceDaysUpdates.length ; i++){ // 2 ta
            for (let j = 0 ; j < priceDaysUpdates[i].daysPrice.length ; j++){ // 30 ta  => dar majmo in halghe 60 bar
                for (let k = 0 ; k < this.state.resultReservedDates.length ; k ++){ // agar in halat bod gheire faal
                    let sspliteReservedDays =  this.state.resultReservedDates[k].start_date.split("/")
                    if ( j+1 === Number(sspliteReservedDays[2]) &&  priceDaysUpdates[i].month === Number(sspliteReservedDays[1]) &&  priceDaysUpdates[i].year === Number(sspliteReservedDays[0])){
                        finalCostArrays.push("غیر فعال")
                        isset = true
                    }
                }
                if(isset === false){
                    finalCostArrays.push(priceDaysUpdates[i].daysPrice[j])
                }
                if(isset === true){
                    isset = false
                }

                if(priceDaysUpdates[i].daysPrice.length === j+1){
                    finalCost.push(finalCostArrays)
                    finalCostArrays=[]
                    console.log(finalCost)
                }

            }
        }

      //  console.log(finalCost)

        let finalCosts=[]

        for (let i = 0 ; i < this.state.villaPrice.length ; i++){
            let finalCostObject= {
                daysPrice:'',
                month: '',
                year: ''
            }
            finalCostObject.daysPrice=finalCost[i]
            finalCostObject.month=priceDaysUpdates[i].month
            finalCostObject.year=priceDaysUpdates[i].year
            console.log(finalCostObject)
            console.log('ssssssssssssssssssss')
            finalCosts.push(finalCostObject)
        }
       // console.log(finalCosts)
        this.setState({finallyPrice:finalCosts})

    }

    /*weekdayshort = moment.weekdaysShort();
    weekmonthshort = moment.monthsShort();
     weekdayshortname = this.weekdayshort.map(day => {
        return (
            <th key={day} className="week-day">
                {day}
            </th>
        );
    });
    weekdayshortnamemonth = this.weekmonthshort.map(month => {
        return (
            <th key={month} className="week-day">
                {month}
            </th>
        );
    });
    onChange = date => this.setState({ date });

    static defaultProps = {
        center: {
            lat: 41.5,
            lng: 54.6
        },
        zoom: 30
    };
    static mapStyles = {
        width: '100%',
        height: '100%'
    }; */
  /*  onDayClick = (e, day) => {
        alert(day);
    }
    onMarkerClick = (e) => {
        this.setState({selectedPlace: e.Name});
    } */
    setFacilitiesCheckbox =(event) =>{
        let repeat = false
        const setData= this.state.facilitiesCheckbox
        if(event.target.checked === false){
            const index = setData.indexOf(event.target.name)
            if (index !== -1) {
                setData.splice(index, 1);
                this.setState({facilitiesCheckbox:setData})
            }
        } else {
            setData.map(checked=>{
                if(checked === event.target.name){
                    repeat=true
                }
            })
            if(repeat === false){
                setData.push(event.target.name)
                this.setState({facilitiesCheckbox:setData})
            }
        }
    }

    selectDayToGo = (date) =>{                                    // set date to go
        if(date) {this.setState(prevstate =>({
            dateToGo: {
                ...prevstate.day,
                ...prevstate.month,
                ...prevstate.year,
                day: date.day,
                month: date.month,
                year: date.year
            }
            , alertErrors:false
        }))
         }
    }
    selectDayToReturn = (date) =>{                               // set date to return
        if(date) {this.setState(prevState => ({
            dateToReturn:{
                ...prevState.day ,
                ...prevState.month ,
                ...prevState.year ,
                day: date.day,
                month: date.month,
                year: date.year
            }
            , alertErrors:false
        }))}
    }

    setDateFormat=(year,month,day)=>{
        return year+'/'+month+'/'+day
    }

    getSelectedDays = (selectedDay)=>{

        if(selectedDay && selectedDay !== this.state.selectedDays){
            if(selectedDay.from && selectedDay.to){ // agar 2 meghdar vared shode bod

                 //   this.selectDayToGo(selectedDay.from)
                  //  this.selectDayToReturn(selectedDay.from)
                    console.log(selectedDay)

                this.setState({selectedDays:selectedDay })
            }
        }
    }
    getSelectedDaysCalendar = (data) =>{
            //   this.selectDayToGo(data.from)
           //   this.selectDayToReturn(data.to)
        }


    reservedHandle = (minimumDate ,maximumDate , allDaysReservedConcat ,  daysCostString ,resultVillaArray ,  rangeBetween ,  reservedFacilitiesPrice , chef , host , tour_guide , bodyguard , className , waitingCalculate)=>{
        let waitingCalculates = waitingCalculate
        return(
            <MDBCol md={4} className={className}>
                <MDBRow>
                    <p>قیمت از شبی {this.state.resultVilla.rules ? commaNumber(this.state.resultVilla.rules.normal_cost) : ''} تومان</p>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftEmptyMobile"}>
                    <p><i className="fa fa-calendar" aria-hidden="true" /> اولین تاریخ خالی این اقامت گاه {`${minimumDate.year}/${minimumDate.month}/${minimumDate.day}`} میباشد </p>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftBodyDate"}>
                    <MDBRow className={"fv-DisplayPageDetailsLeftSelectedDate"}>
                        <input type='text' value=' تاریخ ورود' className={"fv-DisplayPageDetailsLeftBodyDateOnText"} />
                        <input type='text' value=' تاریخ خروج' className={"fv-DisplayPageDetailsLeftBodyDateOutText"} />
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageDetailsLeftTextDate"}>
                        <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalendarLinearLimitedDays minimumDate={minimumDate} maximumDate={maximumDate} dayToGo={this.selectDayToGo} text={'انتخاب روز'}  daysReserved={allDaysReservedConcat}/> </div>
                        <div  className={"fv-DisplayPageDetailsLeftBodyDateOutInput"} >  <CalendarLinearLimitedDays  minimumDate={minimumDate} maximumDate={maximumDate} dayToReturn={this.selectDayToReturn} text={'انتخاب روز'}  daysReserved={allDaysReservedConcat}/> </div>
                    </MDBRow>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityText"}>
                    <input type='text' value=' تعداد نفرات'/>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityOption"}>
                    <select value={this.state.numberOfPeople} onChange={(event)=>{
                        this.setState({numberOfPeople:event.target.value })
                        if(Number(this.state.reservedPrice)){
                            this.setState({ waitingForExtraPeople:true})
                            const data = {
                                dates:daysCostString,
                                extra_people:Number(event.target.value)
                            }
                            calculateExtraCost(data,this.props.match.params.id)
                                .then(res =>{
                                    waitingCalculates = false
                                    this.setState({extraPeopleCost: res.data  , waitingForExtraPeople:false})
                                }  )
                                .catch(err=>console.log(err.response))
                        }else {
                            this.setState({numberOfPeople:' '})
                            alert("لطفا ابتدا تاریخ را اننتخاب کنید")
                        }
                    }}>
                        <option value=' ' disabled>تعداد نفرات</option>
                        { resultVillaArray.map(extraCapacity =>{
                            let numberPeople = []
                            let options = []
                            console.log(extraCapacity)
                            if(extraCapacity.details){
                                for (let i = 0 ; i < extraCapacity.details.max_capacity - extraCapacity.details.standard_capacity ; i++){
                                    numberPeople.push(i+1)
                                }
                            }
                            return <>
                                {
                                    numberPeople.map(num => <option value={num}>{num}</option>)
                                }
                            </>
                        }) }

                    </select>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftFactor"}>
                    <MDBCol md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                        <p>{rangeBetween} روز </p>
                    </MDBCol>
                    <MDBCol  md={6}  sm={6} >
                        <p>{this.state.reservedPrice ? commaNumber(this.state.reservedPrice) : ''} تومان</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftFactor fv-DisplayPageDetailsLeftFactorBorderLine"}>
                    <MDBCol  md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                        <p>{this.state.numberOfPeople} نفر اضافه </p>
                    </MDBCol>
                    <MDBCol  md={6}  sm={6} >
                        <p>{Number(this.state.extraPeopleCost) ? commaNumber(Number(this.state.extraPeopleCost)) : ' ' } تومان</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow className={"fv-DisplayPageDetailsLeftFactor"}>
                    <MDBCol  md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                        <p>جمع کل</p>
                    </MDBCol>
                    <MDBCol  md={6}  sm={6} >
                        <p>{Number(this.state.reservedPrice) ? (Number(this.state.extraPeopleCost) ? commaNumber(Number(this.state.extraPeopleCost)+Number(this.state.reservedPrice)+Number(reservedFacilitiesPrice))  :  commaNumber(this.state.reservedPrice+reservedFacilitiesPrice )) : '' } تومان</p> {/* agar meghdare kol ba afrade ezafe vojod dasht ono dar nazar migirim dar gheire in sorat bedone jame bedone afrade ezafe ro dar nazar migirim */}
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetailsLeftButton"}>
                    <MDBCol>
                        {/*  Waiting   waitingForCalculate2*/}
                        {waitingForCalculate2(waitingCalculates || this.state.waitingForExtraPeople , "fv-waitingLoadPublicFullScreen fv-computingReservedDetails" )}

                        {waitingCalculates  || this.state.waitingForExtraPeople ? '' :
                            <input type="button" value="درخواست رزرو" onClick={() => {
                                if (localStorage.getItem("token")) {
                                    if (Number(this.state.reservedPrice)) {
                                        let cost = this.state.reservedPrice + Number(reservedFacilitiesPrice)
                                        if (Number(this.state.extraPeopleCost) && Number(this.state.reservedPrice)) {
                                            cost = Number(this.state.extraPeopleCost) + Number(this.state.reservedPrice) + Number(reservedFacilitiesPrice)
                                        }
                                        let extraCost = 0
                                        if (Number(this.state.extraPeopleCost)) {
                                            extraCost = Number(this.state.extraPeopleCost)
                                        }
                                        let extraPeople = 0
                                        if (this.state.numberOfPeople && Number(this.state.extraPeopleCost)) {
                                            extraPeople = this.state.numberOfPeople
                                        }
                                        const data = {
                                            villa_title: this.state.resultVilla.title,
                                            state: this.state.resultVilla.state,
                                            city: this.state.resultVilla.city,
                                            entry_date: this.state.dateToGo.year + "/" + this.state.dateToGo.month + "/" + this.state.dateToGo.day,
                                            exit_date: this.state.dateToReturn.year + "/" + this.state.dateToReturn.month + "/" + this.state.dateToReturn.day,
                                            cost: cost,
                                            villa_id: this.state.resultVilla.id,
                                            passengers_number: this.state.resultVilla.details.standard_capacity,
                                            extra_people: extraPeople,   //this.state.resultVilla.details.max_capacity-this.state.resultVilla.details.standard_capacity ,
                                            length_stay: rangeBetween,
                                            extra_cost: extraCost,
                                            facilities_cost: reservedFacilitiesPrice,
                                            chef: chef,
                                            host: host,
                                            tour_guide: tour_guide,
                                            bodyguard: bodyguard,
                                        }
                                        console.log(data)
                                        reserveRequest(data)
                                            .then(res => {
                                                console.log(res)
                                                if (res.status === 200) {
                                                    /*    const dataSave = {                       /// ezafe kardann be reserve ha dar taghvim
                                                            end_date: data.exit_date ,
                                                            start_date: data.exit_date,
                                                        }
                                                        localStorage.setItem("reservedDatas",dataSave); */

                                                    this.props.history.push("/ProfileMyReservation")
                                                } else {
                                                    alert("اطلاعات را به درستی وارد نمایید")
                                                }
                                            })
                                            .catch(err => console.log(err.response))
                                    } else {
                                        alert("اطلاعات را به درستی وارد نمایید")
                                    }

                                } else {
                                    alert("شما ابتدا باید وارد شوید")
                                    this.props.history.push("/")
                                }

                            }}/>
                        }
                    </MDBCol>
                </MDBRow>
            </MDBCol>

        )
        }





    render() {
        let LoadingPagewaitingHandle = true
       if(this.state.villaPrice.length>0){
            LoadingPagewaitingHandle = false
        }
        let waitingCalculate = false



        let reservedFacilitiesPrice = 0 //      ///////////////////// facilities price computing                   //
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }

        const resultVillaArray = []
        resultVillaArray.push(this.state.resultVilla)
        const resultVilla = this.state.resultVilla
        console.log(resultVilla)


        console.log(priceOfPerMonth(1400 , 2 , [1,2,3,4,"",6,7]))   // price days
        const moment = extendMoment(Moment);
        const start = new Date(this.state.dateToGo.year, this.state.dateToGo.month, this.state.dateToGo.day);
        const end   = new Date(this.state.dateToReturn.year, this.state.dateToReturn.month, this.state.dateToReturn.day);
        const range = moment.range(start, end);



        let rangeBetween = ' '

        if(range.diff('days')){
            if(range.diff('days')<0)
            {
                if(this.state.reservedPrice){
                    this.setState({reservedPrice:"" , extraPeopleCost:""})

                }
                rangeBetween=' '
            }
            else {
                rangeBetween = range.diff('days') + 1;

            }
        }
        if(range.diff('days') === 0){
            rangeBetween=1
        }


        const daytogoGeneralFormat = this.setDateFormat(this.state.dateToGo.year+"/"+ this.state.dateToGo.month+"/"+ this.state.dateToGo.day)
        const daytoreturnGeneralFormat = this.setDateFormat(this.state.dateToReturn.year+"/"+ this.state.dateToReturn.month+"/"+ this.state.dateToReturn.day)

        const daysSelected = arrayBetweenDates(daytogoGeneralFormat,daytoreturnGeneralFormat,rangeBetween)
            console.log(arrayBetweenDates(daytogoGeneralFormat,daytoreturnGeneralFormat,rangeBetween)) // date general   return =>   1400/01/01
            console.log('arrayBetweenDates(start,end,rangeBetween)')

        console.log(arrayBetweenDatesObject(daytogoGeneralFormat,daytoreturnGeneralFormat,rangeBetween)) // date object   return =>   [{ year:1400 , month: 01 , day:01  }]
        console.log('arrayBetweenDates(start,end,rangeBetween)')



        console.log(this.state.reservedTotalPrice)
        console.log(this.state.extraPeopleCost)
        let chef = ''
        let host = ''
        let tour_guide = ''
        let bodyguard = ''
        if(this.state.facilitiesCheckbox.includes("chef")){
            if(this.state.resultVilla.info){
                if(this.state.resultVilla.info.chef){
                    chef=this.state.resultVilla.info.chef
                }else {
                    chef = 0
                }
            }else {
                chef = 0
            }
        }
        if(this.state.facilitiesCheckbox.includes("host")){
            if(this.state.resultVilla.info){
                if(this.state.resultVilla.info.host){
                    host=this.state.resultVilla.info.host
                }else {
                    host = 0
                }
            }else {
                host = 0
            }
        }
        if(this.state.facilitiesCheckbox.includes("tour_guide")){
            if(this.state.resultVilla.info){
                if(this.state.resultVilla.info.tour_guide){
                    tour_guide=this.state.resultVilla.info.tour_guide
                }else {
                    tour_guide = 0
                }
            }else {
                tour_guide = 0
            }
        }
        if(this.state.facilitiesCheckbox.includes("bodyguard")){
            if(this.state.resultVilla.info){
                if(this.state.resultVilla.info.bodyguard){
                    bodyguard=this.state.resultVilla.info.bodyguard
                }else {
                    bodyguard = 0
                }
            }else {
                bodyguard = 0
            }
        }

        let daysCostString = ""
        if(daysSelected.length>0){
            for(let i = 0 ; i < daysSelected.length ; i++){
                if(i===0){
                    daysCostString =daysSelected[i];
                }else {
                    daysCostString =`${daysCostString},${daysSelected[i]}` ;
                }
            }
           // console.log(daysCostString)
             /* axios.post(`https://mahoorapps.ir/api/v1/villa/calculateCost/${this.props.match.params.id}`,
                { dates:daysCostString })
                .then(response => console.log(response)) */


            // محاسبه facilities
          /*  if((chef ||  host || tour_guide || bodyguard) && this.state.alertErrors === false ){
                console.log(daysCostString)
               if(!chef)
                   chef=0
                if(!host)
                    host=0
                if(!tour_guide)
                    tour_guide=0
                if(!bodyguard)
                    bodyguard=0
                console.log(Number(chef))
                console.log(Number(host))
                console.log(Number(tour_guide))
                console.log(Number(bodyguard))
                calculateFacilitiesCost({dates: daysCostString , chef:Number(chef) , host:Number(host) ,tour_guide:Number(tour_guide) , bodyguard:Number(bodyguard) })
                    .then(res=>{
                        if(res.status === 200 && this.state.reservedFacilitiesPrice !== res.data ){
                            this.setState({reservedFacilitiesPrice:res.data , innerValidationFacilitiesCost : true}) // innerValidationFacilitiesCost true mishavad baraie halati ke akharin tik checkbox mikhahad bardashte shavaad => yani vojod darad kkonal checkboxi va amaliate facilities anjam shode kolan dar poroje
                        }
                    })
                    .catch(err=>{
                        this.setState({reservedPrice: '', numberOfPeople: ' ', extraPeopleCost: '' , alertErrors:true})
                       // alert("تاریخ را مجددا وارد نمایید")
                       // this.selectDayToGo() // اولین روز خالی
                       // this.selectDayToReturn()
                        console.log(err.response)
                    })

            }
            if(!chef &&  !host && !tour_guide && !bodyguard && this.state.innerValidationFacilitiesCost === true){ // dar halati ke karbar entekhab karde bod va khast bad az gheimat gerentan an facilities ra hazf konad (akharin facilities) => baraie akharin facilities ke gheire faal mishavad => hichkodam vojd nadarand va ghabli on ro faal mikonad
                this.setState({reservedFacilitiesPrice:0,innerValidationFacilitiesCost:false })
            }*/

            if(this.state.daysCostString !== daysCostString){
                 waitingCalculate = true

                calculateCost({dates: daysCostString},this.props.match.params.id )
                    .then(res=>{
                        console.log(res)
                        {/*   if(res.data.data === "Reservation failed" && !this.state.alertErrors ){ //
                            rangeBetween = ' '
                            alert('در این بازه انتخابی شما قبلا رزرو انجام شده لطفا تاریخ خود را عوض نمایید')
                            this.setState({alertErrors:true})
                        } */}
                        if(res.data.data !== "Reservation failed" && res.status === 200){

                            if(res.status === 200 && this.state.reservedPrice !== res.data){
                                /*
                                if(this.state.extraPeopleCost){
                                    const data = {
                                        finalCost:this.state.reservedTotalPrice, // قیمت کل بدون در نظر گرفتن افراد اضافه
                                        dates:daysCostString,
                                        extra_people:this.state.numberOfPeople
                                    }
                                    calculateExtraCost(data,this.props.match.params.id)
                                        .then(res =>{
                                            console.log(res.data)
                                            this.setState({extraPeopleCost: res.data})
                                        }  )
                                        .catch(err=>console.log(err.response))
                                } */
                                waitingCalculate = false
                                 reservedFacilitiesPrice = 0
                                this.setState({reservedPrice:res.data , numberOfPeople: ' ', extraPeopleCost: '' , daysCostString:daysCostString  , reservedFacilitiesPrice:0 , alertErrors:false})  // لقیمت روز های رزرو شده فقط
                            }
                        }else {
                            waitingCalculate = false
                            if(this.state.reservedPrice || this.state.numberOfPeople !== ' ' || this.state.extraPeopleCost){
                                alert("تاریخ انتخاب شده معتبر نمیباشد - شما قبلا در این تاریخ رزرو داشته اید")
                                reservedFacilitiesPrice = 0
                                this.setState({reservedPrice:'' , numberOfPeople:' ' , extraPeopleCost:'' , reservedFacilitiesPrice:0  , daysCostString:daysCostString})
                            }
                        }

                    })
                    .catch(err=>{
                        if(this.state.reservedPrice || this.state.numberOfPeople !== ' ' || this.state.extraPeopleCost) {
                            alert("تاریخ انتخاب شده معتبر نمیباشد ")
                            waitingCalculate = false
                            reservedFacilitiesPrice = 0
                            this.setState({reservedPrice: '', numberOfPeople: ' ', extraPeopleCost: ''  , reservedFacilitiesPrice:0})
                        }
                    })

            }


        }else { //  daysCostString // اگر خالی باشد (ممکن است کاربر  تاریخ قبل وارد کرده باشد)
            if(this.state.daysCostString !== daysCostString){
                alert("تاریخ انتخابی شما اشتباه میباشد لطفا بازه تاریخ را درست وارد نمایید")
                reservedFacilitiesPrice = 0
                this.setState({reservedPrice: '', numberOfPeople: ' ', extraPeopleCost: ''  , reservedFacilitiesPrice:0 , daysCostString:''})
            }
        }
        let daysBetweenReserved = ''
        let allDaysReservedConcat = ''

       // console.log(this.state.resultReservedDates)
        if(this.state.resultReservedDates){
            let startReservedDatearray =''
            let endReservedDatearray   = ''
            let startReservedDate =  ''
            let endReservedDate   = ''

            let allReservedDatesVillas = []     // خانه های رزرو شده را به ترتیب میدهد
            for (let i = 0 ; i < this.state.resultReservedDates.length ; i++ ){   // ممکن است چد استارت دیتا و اند دیتا فرستاده شود که باید تمام تاریخ های بین آن را بگیریم
                startReservedDatearray = this.state.resultReservedDates[i].start_date.split("/")

                if(startReservedDatearray[2].length===1){
                    startReservedDatearray[2] = `0${startReservedDatearray[2]}`
                }
                startReservedDate=new Date(startReservedDatearray[0], startReservedDatearray[1], startReservedDatearray[2]);
                endReservedDatearray = this.state.resultReservedDates[i].end_date.split("/")
                if(endReservedDatearray[2].length===1){
                    endReservedDatearray[2] = `0${endReservedDatearray[2]}`
                }
                endReservedDate=new Date(endReservedDatearray[0], endReservedDatearray[1], endReservedDatearray[2]);
                const rangeReservedDate = moment.range(startReservedDate, endReservedDate);
                let rangeBetweenDate = rangeReservedDate.diff('days');
                //console.log(rangeBetweenDate)
                if(rangeReservedDate.diff('days') === 0){
                    rangeBetweenDate=1
                }

                 if(rangeBetweenDate>0){

                     daysBetweenReserved = arrayBetweenDatesObject(this.state.resultReservedDates[i].start_date,this.state.resultReservedDates[i].end_date,rangeBetweenDate)
                 }


                allReservedDatesVillas.push(daysBetweenReserved.daysList)
            }


            if(allReservedDatesVillas){
                for(let i = 0 ; i < allReservedDatesVillas.length ; i ++){
                    if(i===0){
                        allDaysReservedConcat = allReservedDatesVillas[i]
                    } else {
                        allDaysReservedConcat = allDaysReservedConcat.concat(allReservedDatesVillas[i]);
                    }
                }
            }
             // console.log(allReservedDatesVillas[0])   // خانه های رزرو شده را به ترتیب میدهد
        }
        console.log(this.state.resultReservedDates)




        const priceDaysUpdates = []  /// مورد نظر
        let priceArrayOneMonth ={
            daysPrice: [] ,
            month: '',
            year: ''
        }
        if(this.state.villaPrice[0]){
            priceArrayOneMonth.daysPrice = priceOfPerMonth(this.state.villaPrice[0].year , this.state.villaPrice[0].month , this.state.villaPrice[0].daysPrice)
            priceArrayOneMonth.month=this.state.villaPrice[0].month
            priceArrayOneMonth.year=this.state.villaPrice[0].year
        }
        for(let i = 0 ; i<this.state.villaPrice.length ; i++){
            if(i===0){
                priceDaysUpdates.push(priceArrayOneMonth)
            }
            else {
                priceDaysUpdates.push(this.state.villaPrice[i])
            }
        }
         // mohasebe avalin roze faal va akharin roze faal
        let indexOfMinimumDay = ""
        let indexOfMinimumMonth = ""
        let indexOfMinimumYear = ""
        let minimumDayFixed = false

        let indexOfMaxDay = ""
        let indexOfMaxMonth = ""
        let indexOfMaxYear = ""
        if(this.state.finallyPrice.length > 0){        // چندمین خونه از آرایه قیمت ها پر هست که میشود اولین روز که باید فعال باشد
            for (let i = 0 ; i < 31 ; i++){   // بگرد و اولین روزی که عدد وارد شده بود رو برگردون
                if(Number(this.state.finallyPrice[0].daysPrice[i]) && !minimumDayFixed){
                    indexOfMinimumDay = i+1
                    indexOfMinimumMonth = this.state.finallyPrice[0].month
                    indexOfMinimumYear= this.state.finallyPrice[0].year
                    minimumDayFixed = true
                }
            }
            if(indexOfMinimumDay === ""  && !minimumDayFixed){               // اگر در آخر ماه قبلی روز ها غیر فعال ثبت شده بود و تایپ آن استرینگ بود در ماه بعد باید بگردیم دنبال روز فعال
                for (let i = 0 ; i < 31 ; i++){
                    console.log(this.state.finallyPrice[1].daysPrice[i])
                    if(Number(this.state.finallyPrice[1].daysPrice[i])  && !minimumDayFixed){
                        indexOfMinimumDay = i+1
                        indexOfMinimumMonth = this.state.finallyPrice[1].month
                        indexOfMinimumYear= this.state.finallyPrice[1].year
                        minimumDayFixed = true
                    }
                }
            }
            if(indexOfMinimumDay === ""  && !minimumDayFixed){               // اگر در آخر ماه قبلی روز ها غیر فعال ثبت شده بود و تایپ آن استرینگ بود در ماه بعد باید بگردیم دنبال روز فعال
                for (let i = 0 ; i < 31 ; i++){
                    console.log(this.state.finallyPrice[2].daysPrice[i])
                    if(Number(this.state.finallyPrice[2].daysPrice[i])  && !minimumDayFixed){
                        indexOfMinimumDay = i+1
                        indexOfMinimumMonth = this.state.finallyPrice[2].month
                        indexOfMinimumYear= this.state.finallyPrice[2].year
                        minimumDayFixed = true
                    }
                }
            }


            indexOfMaxDay = this.state.finallyPrice[this.state.finallyPrice.length-1].daysPrice.length   //  mohasebe akharin roz ke meghdar vared karde
            indexOfMaxMonth =  this.state.finallyPrice[this.state.finallyPrice.length-1].month
            indexOfMaxYear =  this.state.finallyPrice[this.state.finallyPrice.length-1].year

        }
        const minimumDate ={     // اولین روز فعال که به قبل آن باید غیر فعال شود
            day:indexOfMinimumDay ,
            month : indexOfMinimumMonth,
            year: indexOfMinimumYear,
        }
        const maximumDate ={     // اولین روز فعال که به قبل آن باید غیر فعال شود
            day:indexOfMaxDay ,
            month : indexOfMaxMonth,
            year: indexOfMaxYear,
        }
       // console.log(minimumDate)  // avalin roze faal
        // console.log(maximumDate)   // akharin roze faal


      /*  let enddate=""
        let startdate=""
        if(this.state.resultReservedDates[0]){
            enddate = this.state.resultReservedDates[0].end_date
            startdate = this.state.resultReservedDates[0].start_date
        }

        const setstartdate = startdate.split("/")
        const setenddate = enddate.split("/");

        const startDay={
            year:setstartdate[0],
            month:setstartdate[1],
            day:5,
        }
        const endDay={
            year:setenddate[0],
            month:2,
            day:10,
        }

        const test =[]
        const date1 = new Date('7/13/2010');
        const date2 = new Date('12/15/2010');

        const day = new Date('1400,06,31');
        const nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        console.log(nextDay.setDate(day.getDate() + 1))
        console.log(nextDay)
        console.log('nextconsole.log(nextDay)Day')

        function getDifferenceInDays(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60 * 60 * 24);
        }
        if(endDay.month - startDay.month < 0 ){
            if(startDay.month===12){
                for(let j = 0 ; j<= endDay.month -1 ; j++){
                    if(j===0 ){
                        for(let i = startDay.day ; i<= endDay.day ; i++){
                            test.push(i)
                        }
                    }
                    if(j===0 && endDay.month - startDay.month !== 0){
                        for(let i = startDay.day ; i<= 30 ; i++){
                            test.push(i)
                        }
                        if( 6 >= startDay.month+j+1 >=0){
                            test.push(31)
                        }
                    }
                    if(j > 0){
                        if(j < endDay.month - startDay.month){
                            for(let i = 1 ; i<= 30 ; i++){
                                test.push(i)
                            }
                            if(  startDay.month+j <= 6){
                                test.push(31)
                            }
                        }
                        if(j === endDay.month - startDay.month){
                            for(let i = 1 ; i<= endDay.day ; i++){
                                test.push(i)
                            }
                        }
                    }
                    //  getDifferenceInDays(date1, date2)
                }
            }
            if(startDay.month===11){

            }

        }else {
            for(let j = 0 ; j<= endDay.month - startDay.month ; j++){
                if(j===0 && endDay.month - startDay.month === 0){
                    for(let i = startDay.day ; i<= endDay.day ; i++){
                        test.push(i)
                    }
                }
                if(j===0 && endDay.month - startDay.month !== 0){
                    for(let i = startDay.day ; i<= 30 ; i++){
                        test.push(i)
                    }
                    if( 6 >= startDay.month+j+1 >=0){
                        test.push(31)
                    }
                }
                if(j > 0){
                    if(j < endDay.month - startDay.month){
                        for(let i = 1 ; i<= 30 ; i++){
                            test.push(i)
                        }
                        if(  startDay.month+j <= 6){
                            test.push(31)
                        }
                    }
                    if(j === endDay.month - startDay.month){
                        for(let i = 1 ; i<= endDay.day ; i++){
                            test.push(i)
                        }
                    }
                }
                //  getDifferenceInDays(date1, date2)
            }
        }  */

      /* **** ////////////////////////////////////////////////  //computing facilities //////////////////////////////////// ** */
        if(!chef)
            chef=0
        if(!host)
            host=0
        if(!tour_guide)
            tour_guide=0
        if(!bodyguard)
            bodyguard=0
        if(rangeBetween){
            reservedFacilitiesPrice = (Number(chef) + Number(host) + Number(tour_guide) + Number(bodyguard)) * Number(rangeBetween)
        }else {
            reservedFacilitiesPrice = 0
        }

        // console.log(reservedFacilitiesPrice)



        let aboutVillaCheckbox = ''
        let rentType = ''
        let standardCapacity = ''
        let maxCapacity = ''
        let bedroom=''
        let irToilet=''
        let euToilet=''
        let shower=''
        let sharedBathroom=''

        let normalCostRules=''
        let specialCostRules=''
        let normalExtraCostRules=''
        let specialExtraCostRules=''
        let weeklyDiscountRules=''
        let monthlyDiscountRules=''
        let specialRules=''

        let chefPrice = ''
        let hostPrice = ''
        let tourGuidePrice = ''
        let bodyguardPrice = ''
        let generalFacilities=''

        let address = this.state.resultVilla.address
        let phoneNumber = this.state.resultVilla.phone_number
        let story = this.state.resultVilla.story

        let cleaningRate = ''
        let adComplianceRate = ''
        let hospitalityRate = ''
        let hostingQualityRate = ''

        let resultComments = []


        if(this.state.resultVilla.details){
            aboutVillaCheckbox = this.state.resultVilla.details.view
            rentType = this.state.resultVilla.details.rent_type
            standardCapacity = this.state.resultVilla.details.standard_capacity
            maxCapacity = this.state.resultVilla.details.max_capacity
            bedroom = this.state.resultVilla.details.bedroom
            irToilet = this.state.resultVilla.details.ir_toilet
            euToilet = this.state.resultVilla.details.eu_toilet
            shower = this.state.resultVilla.details.shower
            sharedBathroom = this.state.resultVilla.details.shared_bathroom
        }
        if(this.state.resultVilla.rules){
            normalCostRules = this.state.resultVilla.rules.normal_cost
            specialCostRules = this.state.resultVilla.rules.special_cost
            normalExtraCostRules= this.state.resultVilla.rules.normal_extra_cost
            specialExtraCostRules= this.state.resultVilla.rules.special_extra_cost
            weeklyDiscountRules= this.state.resultVilla.rules.weekly_discount
            monthlyDiscountRules= this.state.resultVilla.rules.monthly_discount
            specialRules=this.state.resultVilla.rules.special_rules

        }
        if(this.state.resultVilla.info){
            chefPrice=this.state.resultVilla.info.chef
            hostPrice=this.state.resultVilla.info.host
            tourGuidePrice=this.state.resultVilla.info.tour_guide
            bodyguardPrice=this.state.resultVilla.info.bodyguard
            generalFacilities=this.state.resultVilla.info.fac
        }
        if(this.state.resultRateComments.scores){
            cleaningRate=this.state.resultRateComments.scores[0].Cleaning
            adComplianceRate =this.state.resultRateComments.scores[0].Ad_compliance
            hospitalityRate =this.state.resultRateComments.scores[0].Hospitality
            hostingQualityRate =this.state.resultRateComments.scores[0].Hosting_quality
        }


        const Map = Mapir.setToken({
            //factory parameters
           // hash:true,
           // logoPosition:"top-left",
            maxZoom:[15],
            transformRequest: (url) => {
                return {
                    url: url,
                    headers: {
                        'x-api-key':
                            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY1ZDU3NTg4MDA3MjQ1MGM2ZjJkMWYyNWYzNjZlMDJhMGVmNGEzYWE5NjZlYjc3YzI4MTkwZWE3Y2RjYmU2MWYzYjQ3NjdmZjNkNDAxNDU0In0.eyJhdWQiOiIxMzk2MiIsImp0aSI6ImY1ZDU3NTg4MDA3MjQ1MGM2ZjJkMWYyNWYzNjZlMDJhMGVmNGEzYWE5NjZlYjc3YzI4MTkwZWE3Y2RjYmU2MWYzYjQ3NjdmZjNkNDAxNDU0IiwiaWF0IjoxNjIwOTEwNDA2LCJuYmYiOjE2MjA5MTA0MDYsImV4cCI6MTYyMzUwMjQwNiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.JURJHCjC_7gcpLXnXJaNjp1l9O6z4t4rqais2S8FE9GApwpdo1amHqdMMlk87m_08GLnxG8E_ADOavM9sZjJMikekrTOzc7IDBn1DN7RC75IF-lA5x8uyZs7EdSzEB7fTdVtgs0z6frjO4KYciznkPP0eSHyueV84Scsi-M1q95vQ7DU_2w216yH2sdc3aXUs_emNqNyGOuQ4q9qFmjR5nMOIGy1AP9Bb5NqFTnvFZzJ022bX7_atlxysLPQ5h1r1LwzRpHBlIT2KG3bJo1SjSiOVNxK-cUSF1yG8YKvZAwfzZHFFJ1wnViH6KnR_yPSczGi14xUUA7wCKCwqKkcVQ', //Mapir api key
                        'Mapir-SDK': 'reactjs'
                    },
                }
            }
        });





      /*  console.log(this.weekdayshortname)
        console.log(this.weekdayshortnamemonth) */
        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage"}>

                <MDBContainer className={this.state.morePics === true ? "fv-MadeDisplayNoneForPics"    : ""}>

                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    {/*  <div className="App">
                        <Mapir
                            center={[51.420470, 35.729054]}
                            Map={Map}
                            zoom_level={[25]}


                        >
                            <Mapir.Layer
                                type="symbol"
                                layout={{ "icon-image": "harbor-15" }}>
                            </Mapir.Layer>
                            <Mapir.Popup
                                coordinates={[51.42, 35.71]}
                                offset={{
                                    'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                                }}>
                                <i className="fa fa-map-marker" aria-hidden="true" />
                            </Mapir.Popup>

                        </Mapir>
                    </div >
                     */}



                    {/*  <DatePicker
                        shouldHighlightWeekends
                        locale="fa" // add this
                    />
                    <div style={{ height: '50vh', width: '40%' }}>
                         <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>

                        </GoogleMapReact> */}

                        {/*  <Map
                            google={this.props.google}
                            style={{width: '20vw', height: '45vh', 'top': '1.5rem'}}
                            containerStyle={{width: '20vw', height: '30vh'}}
                            initialCenter={{
                                lat: this.props.lat,
                                lng: this.props.lng
                            }}
                            zoom={15}>
                            {this.props.markers && // Rendering single marker for supplier details map
                            <Marker onClick={this.onMarkerClick}
                                    name={this.state.selectedPlace} />
                            }
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <h4>{this.state.selectedPlace}</h4>
                            </InfoWindow>
                        </Map>
                         */}
                    {/* <Calendar
                        view={this.state.date}
                        returnValue={this.state.date}
                        locale={'fa'}
                        onChange={this.onChange}
                        value={this.state.date}
                        tileClassName="content"
                    /> */}



                    {/*
                    <HeaderSearch avatar={avatar}  {...this.props}/>
                     console.log(priceDaysUpdates) gheimat haie 30 roz 30 roz dar araye


                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <Link to={ "/"} ><p> صفحه اصلی </p></Link>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> نمایش اقامتگاه </p>
                        </MDBCol>
                    </MDBRow>
                    */}
                    <MDBContainer className={"fv-widthHeaderLoginMenuForDisplayPage"}>  {/* menu */}
                        <HeaderLoginMenu
                            {...this.props}/>
                    </MDBContainer>

                    <MDBContainer className={'fv-footerMenu fv-footerDisplayPage fv-searchHomePagePathTop fv-displayPath'}>

                        <MDBRow className={"fv-DisplayPageRotePathMobile "}>
                            <MDBCol>
                                <Link to={"/"}> <p> صفحه اصلی </p> </Link>
                                <i className="fas fa-chevron-left" />
                                <Link to={"/searchHomePage/Newest/1"}><p> صفحه جستجو </p> </Link> {/* اگر مقدار سوم وجود داشت کلاس رنگ سبز غیر فعال شود */}
                                <i className="fas fa-chevron-left" />
                                <p className={ "fv-DisplayPagePathNow"}> صفحه نمایش </p>
                                {/* <i className={this.props.thisPageName ? "fas fa-chevron-left" : ""} />
                                <p className={this.props.thisPageName ? "fv-DisplayPagePathNow" : ""}> {this.props.thisPageName} </p>  */}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    {/*

                    <MDBContainer className={'fv-footerMenu fv-SearchHomePageBody'}>
                        <MDBRow className={'fv-footerMenuRibbon'}>
                            <MDBCol md={1}>
                                <i className={localStorage.getItem("token") ? "" : "fa fa-user-alt"}/>
                                <a className={localStorage.getItem("token") ? "fv-hideButtonRegister" : ""}> <Link to={'/login'}>ورود</Link></a>
                            </MDBCol>
                            <MDBCol md={2} className={"fv-footerMenuRibbonButton"}>
                                <input className={localStorage.getItem("token") ? ""  : "fv-hideButtonRegister"} type='button' value=' میزبان شوید' onClick={()=> this.props.history.push('/hostStep1')}/>
                            </MDBCol>
                            <MDBCol md={9}>
                                <img src={FotterpageLogo} />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBRow className={'fv-footerMenuRibbonMobile'}>   {/ mobile menu /}
                        <MDBCol sm={8} className={'fv-footerMenuImageMobile'}>
                            <img src={avatar ? `${config.webapi}/images/user//${this.props.avatar}` : MobileMenu} onClick={()=>{
                                this.setState({onclickHandelMobileMenu:!this.state.onclickHandelMobileMenu})
                            }}/>
                        </MDBCol>
                        <MDBCol sm={2} className={"fv-footerMenuRibbonButton"}>
                            <img src={LogoName} />
                        </MDBCol>
                        <MDBCol sm={2}>
                            <img src={MobileLogo} />
                        </MDBCol>
                    </MDBRow>

                        <MDBRow className={this.state.onclickHandelMobileMenu && localStorage.getItem("token") ?  "fv-ProfilePageLeftBody fv-hostUsersMenuSearchPage" : "fv-displayDeActive"}> {/ profile info for mobile             if user/}

                            <MDBContainer className={ `fv-containerOptionMainPageRowTop `}>
                                <MDBRow className={"fv-cascadeOptionMainPageRowTop"}>
                                    <MDBCol md={12} sm={12}>
                                        <MDBRow>
                                            <MDBCol md={2} sm={2}>
                                                <img src={avatar ? `${config.webapi}/images/villas/main/${avatar}` : MobileLogo} />
                                            </MDBCol>
                                            <MDBCol className={"fv-textInToCascadeOptionMainPage"} md={12} sm={12}>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <a><h5>{nameAndFamily}</h5></a>
                                                    </MDBCol>

                                                </MDBRow>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <Link to={"/Profile"}><a>مشاهده حساب کاربری</a></Link>
                                                    </MDBCol>

                                                </MDBRow>

                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-cascadeOptionMainPage"}>
                                    <MDBCol md={12} sm={12}>
                                        <Link to={"/myAccommodation"}> <i className="fa fa-credit-card" />
                                            <a><p>اقامت گاه های من</p></a> </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-cascadeOptionMainPage"}>
                                    <MDBCol md={12} sm={12}>
                                        <Link to={"/ProfileMyReservation"}> <i className="fa fa-receipt" />
                                            <a><p>رزور های من</p></a> </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus fv-userInfoButtonCascadeMobile"}>
                                    <MDBCol md={12} sm={12}>
                                        <Link to={"/ProfileMyReservation"}> <i className="fa fa-laptop-house" />
                                            <a><p>میزبان شوید</p></a> </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-cascadeOptionMainPage fv-cascadeOptionMainPageEndRadus"}>
                                    <MDBCol md={12} sm={12}>
                                        <a onClick={()=>{
                                            localStorage.clear()
                                            window.location.reload();
                                        }}> <i className="fa fa-sign-out-alt" />
                                            <p>خروج از حساب کاربری</p></a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>

                        </MDBRow>



                    <MDBRow className={this.state.onclickHandelMobileMenu && !localStorage.getItem("token") ? "fv-ProfilePageLeftBody fv-gustUsersMenuSearchPage fv-ProfilePageUserInfoBodySearchPage": "fv-hideMenuSearchPageMobile"}> {/ profile info for mobile            if gust/}
                        <MDBCol md={3} className={""}>
                            <MDBRow className={"fv-ProfilePageUserInfoDetailsBody"}>
                                <MDBCol className={"fv-ProfilePageUserInfoDetailsBodyColumn"}>
                                    <Link to={'/login'}><p className={ window.location.href.match(/\blogin\b/) ? "fv-reservationActive" : ''}  ><i className="fa fa-door-open" />ورود</p></Link>
                                    <Link to={'/registration'}> <p className={ window.location.href.match(/\bregistration\b/) ? "fv-transaction" : ''}  ><i className="fa fa-address-card" />ثبت نام</p> </Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
 */}

                </MDBContainer>
                <div className={"fv-DisplayPageTitle"}>
                    <MDBRow className={"fv-DisplayPageTitleTopic"}>
                        <MDBCol md={2}>
                        <p> {this.state.resultVilla.title} </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className={"fv-DisplayPageSearchName"}>
                        <MDBCol md={2}>
                            <p><i className="fa fa-map-marker-alt" /> {this.state.resultVilla.state} </p>
                        </MDBCol>
                        <MDBCol md={2}>
                        {this.state.resultVilla.score ?
                              <div>
                                <p className={"fv-DisplayPageDetailsRating  fv-DisplayPageDetailsRatingTop"}> 5 </p>
                                <p className={"fv-DisplayPageDetailsRate fv-DisplayPageDetailsRateTop"}>  /{this.state.resultVilla.score}<i className="fa fa-star" /> </p>
                              </div>
                        :
                        ''}
                        </MDBCol>

                        <MDBCol md={8} className={"fv-DisplayPageLike"}>
                                <a className={this.state.addToFavorites ?"addToFavoritesTextHide" : ""} onClick={()=>{
                                    this.setState({addToFavorites: true})
                                   const data ={
                                       villa_id:this.props.match.params.id
                                    }
                                    addToFavorite(data)
                                        .then(res=>res.status===200 ?
                                        (
                                            this.setState({addToFavorites: false}) ,
                                                alert('ویلا به علاقه مندی های شما اضافه شد'))
                                        :'')
                                }}><p> اضافه به علاقه مندی ها <i className="fas fa-heart"/></p></a>
                            <div className={this.state.addToFavorites ? "cssload-wave" : ""}>
                                <span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </MDBCol>

                        {/* <MDBCol md={2} className={"fv-DisplayPageTitleShare"}>
                            <a onClick={()=>this.postData('rl','data')}>
                            </a>
                        </MDBCol>  */}
                    </MDBRow>


                   <div> { /* className={this.state.displayButtonName === 'pictures' ? 'fv-displayActive' :  'fv-displayDeActive'} */ }                              {/*        fv-Pictures     */}

                    <MDBRow className={"fv-DisplayPageSearchProductImage"}>
                        <MDBCol md={8} sm={12}>
                            <img className={this.state.resultImages[0] ? "fv-aboutUsThirdImageRight" : "fv-aboutUsThirdImageDesktopNone"} src={this.state.resultImages[0] ? `${config.webapi}/images/villas/main/${this.state.resultImages[0].img_src }`: ''} />
                        </MDBCol>
                        <MDBCol md={4}>
                            <MDBRow>
                                <img className={this.state.resultImages[1] ? "fv-aboutUsThirdImageLeftFirst" : "fv-aboutUsThirdImageDesktopNone"} src={this.state.resultImages[1] ? `${config.webapi}/images/villas/main/${this.state.resultImages[1].img_src }` : ''} />
                            </MDBRow>
                            <MDBRow>
                                <img className={this.state.resultImages[2] ? "fv-aboutUsThirdImageLeftSecond" : "fv-aboutUsThirdImageDesktopNone"} src={this.state.resultImages[2] ? `${config.webapi}/images/villas/main/${this.state.resultImages[2].img_src }`:''}/>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>



                    <MDBRow className={"efv-svgPagination fv-displayPageImagePaginationMobil"}>

                             <MDBCol md={12}>
                                <div className="slider_pagination">
                                    <AwesomeSlider animation="cubeAnimation">
                                        {this.state.resultImages.map(resultImage => {
                                       return <div data-src={`${config.webapi}/images/villas/main/${resultImage.img_src }`} />
                                        })}
                                    </AwesomeSlider>
                                </div>
                            </MDBCol>

                    </MDBRow>
                </div>
                <MDBRow className={"fv-DisplayPageDisplayMoreImage"}>
                    <MDBCol>
                        <a onClick={()=> this.setState({morePics:true})}> مشاهده تصویر بیشتر <i className="fas fa-angle-left" /></a>
                    </MDBCol>
                </MDBRow>


                </div>                                              {/*        fv-Pictures     */}


                <MDBRow className={"fv-DisplayPageMenu"}>
                    {/*  <MDBCol md={1} sm={2}>
                        <a name={'pictures'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}> تصاویر</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'pictures' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>     */}
                    <MDBCol md={1} sm={2}>
                        <a href="#facilities" name={'facilities'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>امکانات</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'facilities' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a href="#Address" name={'Address'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>آدرس</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Address' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={2} className={"fv-DisplayPageMenuRows"} >
                        <a href="#Roles"  name={'Roles'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>قوانین اقامتگاه</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Roles' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm={2} className={"fv-DisplayPageMenuRowsMobile"}>
                        <a  href="#Roles" name={'Roles'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}> قوانین</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Roles' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a href="#Comments" name={'Comments'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>نظرات</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Comments' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>

                    <MDBRow className={"fv-DisplayPageDetails"}>
                    <MDBCol md={8} className={"fv-DisplayPageDetailsRightBody"}>
                        <MDBRow>
                            <MDBCol md={2} sm={2}>
                                <img src={avatar ? `${config.webapi}/images/user//${avatar}` : MobileLogo} />
                            </MDBCol>
                            <MDBCol sm={10} className={"fv-DisplayPageDetailsPersonInformation fv-DisplayPageDetailsPersonInfo"}>
                                <MDBRow>
                                    <MDBCol md={1} sm={4}>
                                         <p>{nameAndFamily ?"میزبان" : "میهمان" }</p>
                                    </MDBCol>
                                    <MDBCol sm={6}>
                                        <h5>{nameAndFamily}</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol md={2} sm={5}>
                                        <p>کد آگهی</p>
                                    </MDBCol>
                                    <MDBCol  md={10} sm={3}>
                                        <h5>{this.state.resultVilla.id}</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>




                        <MDBCol md={4} className={LoadingPagewaitingHandle ? "fv-DisplayPageDetailsLeftBodyMobileReservation fv-DisplayPageLoaderWaiting" : " fv-hideLoader"}>
                            {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}
                        </MDBCol>
                        <div className={"fv-DisplayPageDetailsLeftBodyMobile"}>                             {/*     Reservation For Mobile     */}
                            {LoadingPagewaitingHandle ? '' : this.reservedHandle(minimumDate,maximumDate,allDaysReservedConcat,daysCostString,resultVillaArray,rangeBetween,reservedFacilitiesPrice,chef,host,tour_guide,bodyguard , "fv-DisplayPageDetailsLeftBodyMobileReservation" , waitingCalculate)}
                        </div>



                        <div id="facilities" className={''}>                                            {/*    fv-facilities      */}
                            <MDBRow className={"fv-DisplayPageDetailsRightHomeImage pMobile"}>
                                <p><i className="fas fa-home" /> {rentType} </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p> <i className="fa fa-users" />  ظرفیت استاندارد {standardCapacity }  نفر+{maxCapacity} نفر اضافه </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-building" /> {bedroom} اتاق خواب+{shower} حمام+{irToilet} دست شویی ایرانی{Number(euToilet) !== 0 ? `+${euToilet} دستشویی فرنگی`  : ''}</p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-bed" aria-hidden="true" /> {this.state.resultVilla.details?this.state.resultVilla.details.bed_count:''} تخت یک نفره + {this.state.resultVilla.details?this.state.resultVilla.details.mattress_count:''} تشک معمولی </p>
                            </MDBRow>
                        <MDBRow className={"h4Mobile"}>
                            <h4>درباره اقامت گاه</h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightParagraph pMobile"}>
                            <p>{story}</p>
                        </MDBRow>

                             <MDBRow className={"pMobile"}>
                                     <p> <i className="fas fa-check-square" /> {aboutVillaCheckbox} </p>
                              </MDBRow>
                            {this.state.resultVilla.details ? this.state.resultVilla.details.places.map(facilitie=>{
                                return <MDBRow className={"pMobile"}>
                                    <p> <i className="fas fa-check-square" /> {facilitie} </p>
                                </MDBRow>
                            }) : ''}


                        <MDBRow className={"fv-DisplayPageDetailsRightStayInHome"}>
                            {this.state.resultVilla.rules && this.state.resultVilla.rules.min_reserve?
                                <MDBCol md={5} sm={11}>
                                    <h4> حداقل تعداد روز اقامت </h4>
                                    <p>{this.state.resultVilla.rules.min_reserve} روز </p>
                                </MDBCol>
                             :
                            ''}
                            {this.state.resultVilla.rules && this.state.resultVilla.rules.max_reserve ?
                            <MDBCol md={7} sm={11}>
                                <h4> حداکثر تعداد روز اقامت </h4>
                                <p>{this.state.resultVilla.rules.max_reserve} روز </p>
                            </MDBCol>
                                :
                                ''}
                            <h4> امکانات </h4>
                        </MDBRow>

                            <div>
                                <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                                    <MDBCol md={4} sm={6} className={generalFacilities.includes('جارو برقی')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p> <i className="fa fa-broom" /> جارو برقی </p>
                                    </MDBCol>
                                    <MDBCol md={8} sm={6} className={generalFacilities.includes('اینترنت رایگان')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p> <i className="fas fa-wifi" /> اینترنت رایگان </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                                    <MDBCol md={4} sm={6} className={generalFacilities.includes('تلفن')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p> <i className="fas fa-phone" /> تلفن </p>
                                    </MDBCol>
                                    <MDBCol md={8} sm={6} className={generalFacilities.includes('جعبه کمک های اولیه')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p><i className="fas fa-box" />  جعبه کمک های اولیه </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                                    <MDBCol md={4} sm={6} className={generalFacilities.includes('مهر و جانماز')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p> <i className="fas fa-pray" /> مهر و جانماز </p>
                                    </MDBCol>
                                    <MDBCol md={8} sm={6} className={generalFacilities.includes('تلوزیون')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p><i className="fas fa-tv" /> تلوزیون </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                                    <MDBCol md={4} sm={6} className={generalFacilities.includes('یخچال')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p><i className="fa fa-door-closed" /> یخچال </p>
                                    </MDBCol>
                                    <MDBCol md={8} sm={6} className={generalFacilities.includes('اجاق گاز')?'fv-facilitiesAvailable': 'fv-facilitiesUnavailable'}>
                                        <p><i className="fa fa-calendar-minus" /> اجاق گاز </p>
                                    </MDBCol>
                                </MDBRow>
                            </div>

                            {chefPrice || hostPrice || tourGuidePrice || bodyguardPrice ?
                                <div>
                                    <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                                        {/*<p>مشاهده امکانات بیشتر</p>  */}
                                    </MDBRow>
                                    <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                                        <h4>امکانات ویژه</h4>
                                    </MDBRow>
                                    <MDBRow className={"fv-DisplayPageDetailsRightParagraph"}>
                                        <h5>هر کدام از امکانات زیر که دوست دارید انتخاب کنید تا به شما در سفر حس بهتری بدهد </h5>
                                    </MDBRow>
                                </div>
                                : ''}
                            <MDBRow className={"fv-DisplayPageDetailsّFacilities fv-DisplayPageTomanTitle"}>
                            {chefPrice ?
                                <MDBCol sm={12} md={12}>
                                    <MDBRow>
                                        <MDBCol md={1} sm={1}>
                                            <input type="checkbox"  name={"chef"} onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                        </MDBCol>
                                        <MDBCol  md={3} sm={5}>
                                            <p>آشپز</p>
                                        </MDBCol>
                                        <MDBCol  md={2} sm={2}>
                                            <p> {commaNumber(chefPrice)} </p>
                                        </MDBCol>
                                        <MDBCol  md={4} sm={2}>
                                            <p> ریال </p>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                : ''}

                            {hostPrice ?
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name={"host"} onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={5}>
                                        <p>مهماندار</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {commaNumber(hostPrice)}  </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={2}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                                : ''}
                            {tourGuidePrice ?
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name={"tour_guide"} onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={5}>
                                        <p>راهنمای سفر</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {commaNumber(tourGuidePrice)} </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={2}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                                : ''}
                            {bodyguardPrice ?
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name={"bodyguard"} onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={5}>
                                        <p>بادیگارد</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {commaNumber(bodyguardPrice)} </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={2}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                                : ''}

                        </MDBRow>
                        <MDBRow>
                            <h4> اجاره بها </h4>
                        </MDBRow>

                            <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                                <MDBCol md={1} sm={1}>
                                    <MDBRow>
                                        <button className="slider_pagination_btn" />
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={11} sm={11}>
                                    <p>ایام عادی : </p> <h5> {commaNumber(normalCostRules)} </h5>
                                </MDBCol>
                            </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p> هزینه هر نفر اضافه به ازای هر شب :  </p> <h5>{commaNumber(normalExtraCostRules)}</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p>ایام پیک : </p> <h5> {commaNumber(specialCostRules)} </h5>
                            </MDBCol>
                        </MDBRow>
                            <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                                <MDBCol md={1} sm={1}>
                                    <MDBRow>
                                        <button className="slider_pagination_btn" />
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={11} sm={11}>
                                    <p>نفر اضافه در ایام پیک : </p> <h5> {commaNumber(specialExtraCostRules)} </h5>
                                </MDBCol>
                            </MDBRow>
                            {Number(weeklyDiscountRules) !== 0 ?
                                <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                                    <MDBCol md={1} sm={1}>
                                        <MDBRow>
                                            <button className="slider_pagination_btn" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol md={11} sm={11}>
                                        <p>تخفیف هفتگی :  </p> <h5> {weeklyDiscountRules} درصد </h5>
                                    </MDBCol>
                                </MDBRow>
                            : ''}
                            {Number(monthlyDiscountRules)!==0 ?
                                <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                                    <MDBCol md={1} sm={1}>
                                        <MDBRow>
                                            <button className="slider_pagination_btn" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol md={11} sm={11}>
                                        <p>تخفیف ماهانه : </p> <h5> {monthlyDiscountRules} درصد </h5>
                                    </MDBCol>
                                </MDBRow>
                            : ''}


                            <MDBRow className={"fv-DisplayPageCalender fv-DisplayPageCalenderForDesktop"}>                  {/*    calender-calendar     */}
                                {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}

                                {LoadingPagewaitingHandle ? '' :
                                    <CalendarDesktop
                                        minimumDate={minimumDate}
                                        maximumDate={maximumDate}
                                        villaPrice={priceDaysUpdates}
                                        getSelectedDay={this.getSelectedDays}
                                        daysReserved={allDaysReservedConcat}
                                        getSelectedDaysCalendar={this.getSelectedDaysCalendar}/>

                                }

                                {/* <MDBCol md={6}>
                                    <Calender />
                                </MDBCol>
                                <MDBCol md={6} className={"fv-calenderDisplayNonMobile"}>
                                    <Calender />
                                </MDBCol>  */}
                            </MDBRow>
                            <MDBRow className={'fv-DisplayPageCalenderForMobile'}>                  {/*    calender-calendar     */}
                                {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}
                                {LoadingPagewaitingHandle ? '' :
                                    <MDBCol>
                                        <CalendarForMobile
                                            minimumDate={minimumDate}
                                            maximumDate={maximumDate}
                                            villaPrice={priceDaysUpdates}
                                            getSelectedDay={this.getSelectedDays}
                                            daysReserved={allDaysReservedConcat}
                                            getSelectedDaysCalendar={this.getSelectedDaysCalendar}/>
                                    </MDBCol>
                                }
                            </MDBRow>
                        </div>                                                             {/*         fv-facilities          */}





                        <div  id="Roles">                                      {/*        fv-Roles     */}


                        <MDBRow>
                            <h4> قوانین </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            {this.state.resultVilla.rules && this.state.resultVilla.rules.arrival_time ?
                                <MDBCol md={4} sm={12}>
                                    <p> <i className="fas fa-clock" /> ساعت ورود : {this.state.resultVilla.rules ? this.state.resultVilla.rules.arrival_time : ""}</p>
                                </MDBCol>
                            : ''
                            }
                            {this.state.resultVilla.rules && this.state.resultVilla.rules.exit_time ?
                                <MDBCol md={8} sm={12}>
                                    <p>  <i className="fas fa-clock" /> ساعت خروج : {this.state.resultVilla.rules ? this.state.resultVilla.rules.exit_time : ""} </p>
                                </MDBCol>
                            :
                            ''}

                        </MDBRow>

                            {this.state.resultVilla.rules ? this.state.resultVilla.rules.auth_rules.map(authRule =>{
                                return(
                                    <MDBRow>
                                       <p>{authRule}</p>
                                    </MDBRow>
                                )
                            }) : ''}

                             <MDBRow>
                                   <p>{specialRules}</p>
                             </MDBRow>


                        </div>                                                             {/*        fv-Roles     */}


                        <div id="Address">                                        {/*        fv-Address     */}

                        <MDBRow>
                            <h4> آدرس </h4>
                            {console.log(this.state.resultVilla)}
                        </MDBRow>
                        <MDBRow>
                            <h5> {address} </h5>
                        </MDBRow>
                         <MDBRow>
                             <h5> {phoneNumber} </h5>
                         </MDBRow>

                            {Number(this.state.resultVilla.long) !== 51.42 && Number(this.state.resultVilla.lat) !== 35.72 && this.state.resultVilla.long !== undefined && this.state.resultVilla.lat !== undefined && this.state.resultVilla.long  && this.state.resultVilla.lat ? // agar lat and long vojod dasht
                        <MDBRow className={"fv-displayPageMap"}>
                            {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}
                                <MDBCol md={8}>


                                    {LoadingPagewaitingHandle ? '' :
                                        <Mapir
                                            width="636"
                                            center={[this.state.resultVilla.long ? Number(this.state.resultVilla.long) : 51.526770, this.state.resultVilla.lat ? Number(this.state.resultVilla.lat) : 35.724254]}
                                            Map={Map}
                                        >
                                            <Mapir.Layer
                                                type="symbol"
                                                layout={{"icon-image": "harbor-15"}}>
                                            </Mapir.Layer>
                                            <Mapir.Marker
                                                coordinates={[this.state.resultVilla.long ? Number(this.state.resultVilla.long) : 51.526770, this.state.resultVilla.lat ? Number(this.state.resultVilla.lat) : 35.724254]}
                                                anchor="bottom">
                                            </Mapir.Marker>
                                        </Mapir>
                                    }
                                </MDBCol>
                        </MDBRow>
                                : ''}

                        </div>                                                              {/*        fv-Address     */}


                        <div id="Comments">                                  {/*        fv-Comments     */}

                        <MDBRow className={"fv-DisplayPageDetailsRightingComment"}>
                            <MDBCol md={9}>
                                <h4> نظرات </h4>
                            </MDBCol>
                            <MDBCol md={2}>
                                <Link to={`/addComments/${this.props.match.params.id}`}><h4> نوشتن نظر<i className="fas fa-chevron-left" /> </h4></Link>
                            </MDBCol>
                        </MDBRow>
                            {cleaningRate || adComplianceRate || hospitalityRate || hostingQualityRate ?
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <p className={"fv-DisplayPageDetailsRating"}> 5 </p>
                                    </MDBCol>
                                    <MDBCol md={2} sm={3}>
                                        <p className={"fv-DisplayPageDetailsRate"}>  /{(cleaningRate+adComplianceRate+hospitalityRate+hostingQualityRate)/5} <i className="fa fa-star" /> </p>
                                    </MDBCol >
                                    <MDBCol md={2} sm={4} className={"fv-DisplayPageDetailsRateNumberPerson"}>
                                        <p> ({this.state.resultComments.length} نظر) </p>
                                    </MDBCol>
                                </MDBRow>
                                :
                                ''
                            }

                        <MDBRow className={"fv-DisplayPageDetailsScore"}>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> نظافت </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                       <input type="button" style={{
                                           padding: 0,
                                           position: "absolute" ,
                                           width: `${cleaningRate*20}%` ,
                                           background: "#15BE29"}}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1}  className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> {cleaningRate} </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> تطابق با آکهی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" style={{
                                            padding: 0,
                                            position: "absolute" ,
                                            width: `${adComplianceRate*20}%` ,
                                            background: "#15BE29"}}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> {adComplianceRate} </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> مهمان نوازی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" style={{
                                            padding: 0,
                                            position: "absolute" ,
                                            width: `${hospitalityRate*20}%` ,
                                            background: "#15BE29"}}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> {hospitalityRate} </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={5} sm={12}>
                                <MDBRow className={"fv-DisplayPageDetailsScoreBody"}>
                                    <MDBCol md={3} sm={3}>
                                        <p> کیفیت میزبانی </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4} className={"fv-DisplayPageDetailsScoreButton"}>
                                        <input type="button" className={"fv-DisplayPageDetailsScoreButtonFirst"}/>
                                    </MDBCol >
                                    <MDBCol  md={4} sm={4}>
                                        <input type="button" style={{
                                            padding: 0,
                                            position: "absolute" ,
                                            width: `${hostingQualityRate*20}%` ,
                                            background: "#15BE29"}}/>
                                    </MDBCol >
                                    <MDBCol md={1} sm={1} className={"fv-DisplayPageDetailsScoreRateText"}>
                                        <p> {hostingQualityRate} </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                     <div className={"fv-displayPageCommentOne"}>
                         {this.state.resultComments.map(resultComment=>{
                             if(resultComment.answer === null){
                                     return (
                                         <div className={"fv-displayPageCommentOneInner"} >
                                             <MDBRow className={"fv-displayPageCommentPerson"}>
                                                 <MDBCol md={2} sm={2}>
                                                     <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                                                 </MDBCol>
                                                 <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                                     <MDBRow>
                                                         <MDBCol sm={10}>
                                                             <h5> {resultComment.user_name}</h5>
                                                         </MDBCol>
                                                     </MDBRow>
                                                     <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                                         <MDBCol sm={10}>
                                                             <p>{resultComment.created_at}</p>
                                                         </MDBCol>
                                                     </MDBRow>
                                                 </MDBCol>
                                             </MDBRow>
                                             <MDBRow>
                                                 <p>{resultComment.text}</p>
                                             </MDBRow>
                                         </div>
                                     )}
                                    else {
                                         return (
                                             <div  className={"fv-displayPageCommentOneInner"}>
                                                 <MDBRow className={"fv-displayPageCommentPerson"}>
                                                     <MDBCol md={2} sm={2}>
                                                         <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                                                     </MDBCol>
                                                     <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                                         <MDBRow>
                                                             <MDBCol sm={10}>
                                                                 <h5> {resultComment.user_name}</h5>
                                                             </MDBCol>
                                                         </MDBRow>
                                                         <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                                             <MDBCol sm={10}>
                                                                 <p>{resultComment.created_at}</p>
                                                             </MDBCol>
                                                         </MDBRow>
                                                     </MDBCol>
                                                 </MDBRow>
                                                 <MDBRow>
                                                     <p>{resultComment.text}</p>
                                                 </MDBRow>
                                                 <MDBRow className={"fv-displayPageComments"}>
                                                     <MDBCol>
                                                         <MDBRow className={"fv-displayPageCommentsDate"}>
                                                             <p>{resultComment.answer.created_at}</p>
                                                         </MDBRow>
                                                         <MDBRow className={"fv-displayPageCommentsTitle"}>
                                                             <p> {resultComment.user_name} </p>
                                                         </MDBRow>
                                                         <MDBRow>
                                                             <p>{resultComment.answer.text}</p>
                                                         </MDBRow>
                                                     </MDBCol>
                                                 </MDBRow>
                                             </div>
                                         )
                                     }
                                 })
                         }
                         {/*   {this.state.resultComments.map(resultComment=>{
                                 return (
                                     <div >
                                         <MDBRow className={"fv-displayPageCommentPerson"}>
                                             <MDBCol md={2} sm={2}>
                                                 <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                                             </MDBCol>
                                             <MDBCol className={"fv-DisplayPageDetailsPersonInformation"}>
                                                 <MDBRow>
                                                     <MDBCol sm={10}>
                                                         <h5> {resultComment.user_name}</h5>
                                                     </MDBCol>
                                                 </MDBRow>
                                                 <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                                     <MDBCol sm={10}>
                                                         <p>{resultComment.created_at}</p>
                                                     </MDBCol>
                                                 </MDBRow>
                                             </MDBCol>
                                         </MDBRow>
                                         <MDBRow>
                                             <p>{resultComment.text}</p>
                                         </MDBRow>
                                     </div>
                                 )
                              if(resultComments.answer){
                                 return (
                                     <div  className={"fv-displayPageCommentOne"}>
                                         <MDBRow className={"fv-displayPageComments"}>
                                             <MDBCol>
                                                 <MDBRow className={"fv-displayPageCommentsDate"}>
                                                     <p>{resultComment.answer.created_at}</p>
                                                 </MDBRow>
                                                 <MDBRow className={"fv-displayPageCommentsTitle"}>
                                                     <p> {resultComment.user_name} </p>
                                                 </MDBRow>
                                                 <MDBRow>
                                                     <p>{resultComment.answer.text}</p>
                                                 </MDBRow>
                                             </MDBCol>
                                         </MDBRow>
                                     </div>
                                 )
                             }
                         })}  */}
                     </div>
                            { /* <MDBRow className={"fv-SearchHomePagePagination fv-displayPageCommentPagination"}>             pagination for mobile comments
                                    <input type='button' value='1'/>
                                    <input type='button' value='2'/>
                                 </MDBRow>
                        */}

                        </div>                                                              {/*        fv-Comments     */}

                    </MDBCol>

                        <MDBCol md={4} className={LoadingPagewaitingHandle ? "fv-DisplayPageDetailsLeftBody fv-DisplayPageLoaderWaiting" : " fv-hideLoader"}>
                        {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}
                        </MDBCol>
                        {LoadingPagewaitingHandle ? '' : this.reservedHandle(minimumDate,maximumDate,allDaysReservedConcat,daysCostString,resultVillaArray,rangeBetween,reservedFacilitiesPrice,chef,host,tour_guide,bodyguard , "fv-DisplayPageDetailsLeftBody" , waitingCalculate)}

                </MDBRow>

                <MDBRow className={"fv-topicMainPage fv-displayPageTopicMainPage"}>
                    <TopicsMainPage topic="اقامتگاه های مشابه"
                                    linkToPage={"/searchHomePage/Newest/1"}/>
                </MDBRow>
                <MDBRow className={"fv-mainProduct fv-mainMobile fv-displayPageSimillarProducts"} >
                    {Waiting(LoadingPagewaitingHandle , "fv-waitingLoadPublicFullScreen" )}

                    {this.state.resultSimilarVillas.map(resultSimilarVilla =>{
                        console.log(this.state.resultSimilarVillas)
                        return(
                            <MDBCol md={3} sm={7} onClick={()=>{
                                window.location.replace(`/displayPage/${resultSimilarVilla.id}`)
                            }}>
                              <a>  <Product srcImage={`${config.webapi}/images/villas/main/${resultSimilarVilla.main_img }`}
                                         rate={resultSimilarVilla.score}
                                         topic={resultSimilarVilla.title}
                                         location={resultSimilarVilla.city}
                                         numberOfRoom={resultSimilarVilla.details ? resultSimilarVilla.details.bedroom : "0"}
                                         capacity={resultSimilarVilla.details ? resultSimilarVilla.details.max_capacity : "0"}
                                         price={commaNumber(resultSimilarVilla.rules.normal_cost)}/> </a>
                            </MDBCol>
                        )
                    })}
                </MDBRow>
                </MDBContainer>

                <MDBContainer className={this.state.morePics === true ? "fv-sliderMorePics" : "fv-MadeDisplayNoneForPics"}>
                    <MDBRow >
                        <MDBCol md={7}>
                            <div className="slider_pagination">
                                <a onClick={()=>{
                                    this.setState({morePics:false})
                                }}><i className="fa fa-times" aria-hidden="true" /></a>
                                <AwesomeSlider animation="cubeAnimation">
                                    {this.state.resultImages.map(resultImage => {
                                        return <div data-src={`${config.webapi}/images/villas/main/${resultImage.img_src }`} />
                                    })}
                                </AwesomeSlider>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


                <div className={this.state.morePics === true ? "fv-MadeDisplayNoneForPics" : "" }>
                    <MDBRow  >
                        <Footer />
                    </MDBRow>
                </div>


            </MDBContainer>
        )}
}
export default DisplayPage