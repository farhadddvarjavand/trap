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
            numberOfPeople:'title',
            displayButtonName:'',

            resultVilla:[],
            resultComments:[],
            resultRateComments:[],
            resultImages:[],
            resultSimilarVillas:[],
            resultReservedDates:[],
            error:'',

            date: new Date(),
            selectedPlace: '',
            lat:35.72,
            lon:51.42
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
        .then(res=>console.log(res))

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
        }))
            console.log(date)
            console.log('date')}
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
        }))}
    }

    setDateFormat=(year,month,day)=>{
        return year+'/'+month+'/'+day
    }



    render() {
        console.log(priceOfPerMonth(1400 , 2 , [1,2,3,4,"",6,7]))   // price days
        const moment = extendMoment(Moment);
        const start = new Date(this.state.dateToGo.year, this.state.dateToGo.month, this.state.dateToGo.day);
        const end   = new Date(this.state.dateToReturn.year, this.state.dateToReturn.month, this.state.dateToReturn.day);
        const range = moment.range(start, end);

        let rangeBetween = ' ---- '

        if(range.diff('days')){
            if(range.diff('days')<0)
            {
                rangeBetween='---'
            }
            else {
                rangeBetween = range.diff('days');
            }
        }


        const daytogoGeneralFormat = this.setDateFormat(this.state.dateToGo.year+"/"+ this.state.dateToGo.month+"/"+ this.state.dateToGo.day)
        const daytoreturnGeneralFormat = this.setDateFormat(this.state.dateToReturn.year+"/"+ this.state.dateToReturn.month+"/"+ this.state.dateToReturn.day)

            console.log(arrayBetweenDates(daytogoGeneralFormat,daytoreturnGeneralFormat,rangeBetween)) // date general   return =>   1400/01/01
            console.log('arrayBetweenDates(start,end,rangeBetween)')

        console.log(arrayBetweenDatesObject(daytogoGeneralFormat,daytoreturnGeneralFormat,rangeBetween)) // date object   return =>   [{ year:1400 , month: 01 , day:01  }]
        console.log('arrayBetweenDates(start,end,rangeBetween)')



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
            hash:true,
            logoPosition:"top-left",
            maxZoom:[16],
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


                    <div className="App">
                        <Mapir
                            center={[35.728270, 51.548488]}
                            Map={Map}

                        >
                            <Mapir.Layer
                                type="symbol"
                                layout={{ "icon-image": "harbor-15" }}>
                            </Mapir.Layer>
                            <Mapir.Marker
                                coordinates={[35.728270, 51.548488]}
                                anchor="bottom">
                            </Mapir.Marker>
                        </Mapir>
                    </div >
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
                        <MapTest
                            lat='35.728270'
                            lng='51.548488'/>

                    <div className="App">  {/* Main Calendar */}
                        <CalendarDesktop  />
                    </div>
                    <CalendarForMobile />



                    <HeaderSearch />

                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p> صفحه اصلی </p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}> نمایش اقامتگاه </p>
                        </MDBCol>
                    </MDBRow>
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
                                <p className={"fv-DisplayPageDetailsRating  fv-DisplayPageDetailsRatingTop"}> 5 </p>
                                <p className={"fv-DisplayPageDetailsRate fv-DisplayPageDetailsRateTop"}>  /4.5 <i className="fa fa-star" /> </p>
                        </MDBCol>
                        <MDBCol md={6} className={"fv-DisplayPageLike"}>
                            <a onClick={()=>this.postData('rl','data')}>
                                <p> اضافه به علاقه مندی ها <i className="fas fa-heart"/></p>
                            </a>
                        </MDBCol>
                        <MDBCol md={2} className={"fv-DisplayPageTitleShare"}>
                            <a onClick={()=>this.postData('rl','data')}>
                            <p> به اشتراک گذاری <i className="fa fa-share-alt" aria-hidden="true" /></p>
                            </a>
                        </MDBCol>
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
                        <a> مشاهده تصویر بیشتر <i className="fas fa-angle-left" /></a>
                    </MDBCol>
                </MDBRow>

                </div>                                              {/*        fv-Pictures     */}


                <MDBRow className={"fv-DisplayPageMenu"}>
                    <MDBCol md={1} sm={2}>
                        <a name={'pictures'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}> تصاویر</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'pictures' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a name={'facilities'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>امکانات</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'facilities' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a name={'Address'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>آدرس</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Address' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={2} className={"fv-DisplayPageMenuRows"} >
                        <a  name={'Roles'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>قوانین اقامتگاه</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Roles' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm={2} className={"fv-DisplayPageMenuRowsMobile"}>
                        <a name={'Roles'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}> قوانین</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Roles' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md={1} sm={2}>
                        <a name={'Comments'} onClick={(e)=>this.setState({displayButtonName:e.target.name})}>نظرات</a>
                        <MDBRow>
                            <button className={this.state.displayButtonName === 'Comments' ? "slider_pagination_btn" : "slider_pagination_btn slider_pagination_btn_Unselected"}/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className={"fv-DisplayPageDetails"}>
                    <MDBCol md={8} className={"fv-DisplayPageDetailsRightBody"}>
                        <MDBRow>
                            <MDBCol md={2} sm={2}>
                               <img src="http://5download.ir/wp-content/uploads/2021/01/IMG_20201013_213222_490.jpg"/>
                            </MDBCol>
                            <MDBCol sm={10} className={"fv-DisplayPageDetailsPersonInformation fv-DisplayPageDetailsPersonInfo"}>
                                <MDBRow>
                                    <MDBCol md={1} sm={4}>
                                         <p>میزبان</p>
                                    </MDBCol>
                                    <MDBCol sm={6}>
                                        <h5> لیدا بابایی</h5>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className={"fv-DisplayPageDetailsCode"}>
                                    <MDBCol md={2} sm={5}>
                                        <p>کد آگهی</p>
                                    </MDBCol>
                                    <MDBCol  md={10} sm={3}>
                                        <h5>22344</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>

                        <div  className={this.state.displayButtonName === 'facilities' ? 'fv-displayActive' :  'fv-displayDeActive'}>                                            {/*    fv-facilities      */}
                            <MDBRow className={"fv-DisplayPageDetailsRightHomeImage pMobile"}>
                                <p><i className="fas fa-home" /> {rentType} </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p> <i className="fa fa-users" />  ظرفیت استاندارد {standardCapacity }  نفر+{maxCapacity} نفر اضافه </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-building" /> {bedroom} اتاق خواب+{shower} حمام+{irToilet} دست شویی ایرانی + {euToilet} دستشویی فرنگی </p>
                            </MDBRow>
                            <MDBRow className={"pMobile"}>
                                <p><i className="fa fa-bed" aria-hidden="true" /> ???? تخت یک نفره + ????? تشک معمولی </p>
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
                            <MDBCol md={5} sm={11}>
                                <h4> حداقل تعداد روز اقامت </h4>
                            </MDBCol>
                            <MDBCol md={7} sm={11}>
                                <h4> حداکثر تعداد روز اقامت </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
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

                        <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                            <p>مشاهده امکانات بیشتر</p>
                        </MDBRow>
                        <MDBRow  className={"fv-DisplayPageّMoreFacilities"}>
                            <h4>امکانات ویژه</h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsRightParagraph"}>
                            <h5>هر کدام از امکانات زیر که دوست دارید انتخاب کنید تا به شما در سفر حس بهتری بدهد </h5>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities fv-DisplayPageTomanTitle"}>
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name="chef" onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>آشپز</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {chefPrice} </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name="host" onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>مهماندار</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {hostPrice}  </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name="tour_guide" onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>راهنمای سفر</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {tourGuidePrice} </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol sm={12} md={12}>
                                <MDBRow>
                                    <MDBCol md={1} sm={1}>
                                        <input type="checkbox"  name="bodyguard" onChange={(event)=>this.setFacilitiesCheckbox(event)}/>
                                    </MDBCol>
                                    <MDBCol  md={3} sm={3}>
                                        <p>بادیگارد</p>
                                    </MDBCol>
                                    <MDBCol  md={2} sm={2}>
                                        <p> {bodyguardPrice} </p>
                                    </MDBCol>
                                    <MDBCol  md={4} sm={4}>
                                        <p> ریال </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>

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
                                    <p>ایام عادی : </p> <h5> {normalCostRules} </h5>
                                </MDBCol>
                            </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p> هزینه هر نفر اضافه به ازای هر شب :  </p> <h5>{normalExtraCostRules}</h5>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                            <MDBCol md={1} sm={1}>
                                <MDBRow>
                                    <button className="slider_pagination_btn" />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md={11} sm={11}>
                                <p>ایام پیک : </p> <h5> {specialCostRules} </h5>
                            </MDBCol>
                        </MDBRow>
                            <MDBRow className={"fv-DisplayPageMenu fv-DisplayPageRent"}>
                                <MDBCol md={1} sm={1}>
                                    <MDBRow>
                                        <button className="slider_pagination_btn" />
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol md={11} sm={11}>
                                    <p>نفر اضافه در ایام پیک : </p> <h5> {specialExtraCostRules} </h5>
                                </MDBCol>
                            </MDBRow>
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

                            <MDBRow className={"fv-DisplayPageCalender fv-DisplayPageCalenderForDesktop"}>                  {/*    calender-calendar     */}
                                <CalendarDesktop  />

                                {/* <MDBCol md={6}>
                                    <Calender />
                                </MDBCol>
                                <MDBCol md={6} className={"fv-calenderDisplayNonMobile"}>
                                    <Calender />
                                </MDBCol>  */}
                            </MDBRow>
                            <MDBRow className={'fv-DisplayPageCalenderForMobile'}>                  {/*    calender-calendar     */}
                                <MDBCol>
                                    <CalendarForMobile />
                                </MDBCol>
                            </MDBRow>
                        </div>                                                             {/*         fv-facilities          */}





                        <div    className={this.state.displayButtonName === 'Roles' ? 'fv-displayActive' :  'fv-displayDeActive'}>                                      {/*        fv-Roles     */}


                        <MDBRow>
                            <h4> قوانین </h4>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsّFacilities"}>
                            <MDBCol md={4} sm={12}>
                                <p> <i className="fas fa-clock" /> ساعت ورود </p>
                            </MDBCol>
                            <MDBCol md={8} sm={12}>
                                <p>  <i className="fas fa-clock" /> ساعت خروج </p>
                            </MDBCol>
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


                        <div className={this.state.displayButtonName === 'Address' ? 'fv-displayActive' :  'fv-displayDeActive'}>                                        {/*        fv-Address     */}

                        <MDBRow>
                            <h4> آدرس </h4>
                        </MDBRow>
                        <MDBRow>
                            <h5> {address} </h5>
                        </MDBRow>
                         <MDBRow>
                             <h5> {phoneNumber} </h5>
                         </MDBRow>

                        <MDBRow className={"fv-displayPageMap"}>
                            <img src="https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314"/>
                        </MDBRow>


                        </div>                                                              {/*        fv-Address     */}


                        <div className={this.state.displayButtonName === 'Comments' ? 'fv-displayActive' :  'fv-displayDeActive'}>                                  {/*        fv-Comments     */}

                        <MDBRow className={"fv-DisplayPageDetailsRightingComment"}>
                            <MDBCol md={9}>
                                <h4> نظرات </h4>
                            </MDBCol>
                            <MDBCol md={2}>
                                <h4> نوشتن نظر<i className="fas fa-chevron-left" /> </h4>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md={1} sm={1}>
                                <p className={"fv-DisplayPageDetailsRating"}> 5 </p>
                            </MDBCol>
                            <MDBCol md={2} sm={3}>
                            <p className={"fv-DisplayPageDetailsRate"}>  /4.5 <i className="fa fa-star" /> </p>
                            </MDBCol >
                            <MDBCol md={2} sm={4} className={"fv-DisplayPageDetailsRateNumberPerson"}>
                                <p> (۲۰ نظر) </p>
                            </MDBCol>
                        </MDBRow>
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
                        <MDBRow className={"fv-SearchHomePagePagination fv-displayPageCommentPagination"}>
                            <input type='button' value='1'/>
                            <input type='button' value='2'/>
                        </MDBRow>

                        </div>                                                              {/*        fv-Comments     */}

                    </MDBCol>
                    <MDBCol md={4} className={"fv-DisplayPageDetailsLeftBody"}>
                        <MDBRow>
                            <p>قیمت از شبی ۲۰۰۰۰ تومان</p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftEmptyMobile"}>
                            <p><i className="fa fa-calendar" aria-hidden="true" /> اولین تاریخ خالی این اقامت گاه ۱۸ اردیبهشت میباشد </p>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyDate"}>
                            <MDBRow className={"fv-DisplayPageDetailsLeftSelectedDate"}>
                                <input type='text' value=' تاریخ ورود' className={"fv-DisplayPageDetailsLeftBodyDateOnText"} />
                                <input type='text' value=' تاریخ خروج' className={"fv-DisplayPageDetailsLeftBodyDateOutText"} />
                            </MDBRow>
                            <MDBRow className={"fv-DisplayPageDetailsLeftTextDate"}>
                                <div  className={"fv-DisplayPageDetailsLeftBodyDateOnInput"}>  <CalendarLinear dayToGo={this.selectDayToGo} text={'انتخاب روز'}/> </div>
                                <div  className={"fv-DisplayPageDetailsLeftBodyDateOutInput"} >  <CalendarLinear dayToReturn={this.selectDayToReturn} text={'انتخاب روز'}/> </div>
                            </MDBRow>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityText"}>
                            <input type='text' value=' تعداد نفرات'/>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftBodyCapacityOption"}>
                            <select value={this.state.numberOfPeople} onChange={(event)=>this.setState({numberOfPeople:event.target.value})}>
                                <option value='title' disabled>تعداد نررات</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftFactor"}>
                            <MDBCol md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                               <p>{rangeBetween} شب </p>
                            </MDBCol>
                            <MDBCol  md={6}  sm={6} >
                               <p>۰۰۰٫۰۰۰٫۲ تومان</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftFactor fv-DisplayPageDetailsLeftFactorBorderLine"}>
                            <MDBCol  md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                                <p>نفر اضافه</p>
                            </MDBCol>
                            <MDBCol  md={6}  sm={6} >
                                <p>{this.state.numberOfPeople * normalExtraCostRules ? normalExtraCostRules * this.state.numberOfPeople : '------------'} تومان</p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={"fv-DisplayPageDetailsLeftFactor"}>
                            <MDBCol  md={6}  sm={6} className={"fv-DisplayPageDetailsLeftFactorLeft"}>
                                <p>جمع کل</p>
                            </MDBCol>
                            <MDBCol  md={6}  sm={6} >
                                <p> تومان</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-DisplayPageDetailsLeftButton"}>
                            <MDBCol>
                                <input type="button" value="درخواست رزرو" onClick={()=>this.postData('','')}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>


                </MDBRow>

                <MDBRow className={"fv-topicMainPage fv-displayPageTopicMainPage"}>
                    <TopicsMainPage topic="اقامتگاه های مشابه"/>
                </MDBRow>
                <MDBRow className={"fv-mainProduct fv-mainMobile"} >
                    {this.state.resultSimilarVillas.map(resultSimilarVilla =>{
                        console.log(this.state.resultSimilarVillas)
                        console.log('this.state.resultSimilarVillas')
                        return(
                            <MDBCol md={3} sm={7} >
                                <Product srcImage={`${config.webapi}/images/villas/thum/${resultSimilarVilla.main_img }`}
                                         rate="5.5/5"
                                         topic={resultSimilarVilla.title}
                                         location={resultSimilarVilla.city}
                                         numberOfRoom={resultSimilarVilla.details.bedroom}
                                         capacity={resultSimilarVilla.details.max_capacity}
                                         price="20000"/>
                            </MDBCol>
                        )
                    })}
                </MDBRow>

                <MDBRow>
                    <Footer />
                </MDBRow>

            </MDBContainer>
        )}
}
export default DisplayPage