import React, {Component} from "react";
import {MDBAlert, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "../style/SearchHomePage.css"
import "../style/DisplayPage.css"
import "../style/ProfilePage.scss"
import "../style/ProfilePageWallet2.scss"
import Footer from "../componentsPages/footer"
import HeaderSearch from "../componentsPages/HeaderSearch";
import ProfilePageUserInfo from "../componentsPages/ProfilePageUserInfo";
import "../style/addComments.scss"
import StarRatings from 'react-star-ratings';
import {addComment, getUserInformation} from "../services/userService";

class ProfilePageWallet2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            name :'',
            textComment:'',
            cleaningRate : '',
            compatibilityWithAdvertisement:'',
            hospitality:'',
            hostingQuality:'',

        }
    }
    componentDidMount() {
        getUserInformation()
            .then(res=>this.setState({
                name:res.data.fullname
            }))
    }

    cleaningRate = ( newRating, name ) => {
        this.setState({
            rating: newRating , cleaningRate: newRating
        });
    }
    compatibilityWithAdvertisement = ( newRating, name ) => {
        this.setState({
            rating2: newRating  , compatibilityWithAdvertisement: newRating
        });
    }
    hospitality = ( newRating, name ) => {
        this.setState({
            rating3: newRating  , hospitality: newRating
        });
    }
    hostingQuality = ( newRating, name ) => {
        this.setState({
            rating4: newRating  , hostingQuality: newRating
        });
    }

    render() {
        const ratingChanged = (newRating) => {
           this.setState({cleaningRate:newRating})
        }

        return(
            <MDBContainer className={"fv-SearchHomePage fv-DisplayPage fv-ProfilePage fv-ProfilePageReservation fv-ProfilePageTransaction fv-ProfilePageTransaction2 fv-ProfilePageWallet fv-ProfilePageWallet2 fv-addComments"}>
                <MDBContainer className={'fv-footerMenu fv-footerDisplayPage'}>
                    <HeaderSearch />
                    <MDBRow className={"fv-DisplayPageRotePathMobile"}>
                        <MDBCol>
                            <p>صفحه اصلی</p>
                            <i className="fas fa-chevron-left" />
                            <p>پنل کاربری</p>
                            <i className="fas fa-chevron-left" />
                            <p className={"fv-DisplayPagePathNow"}>ایجاد تراکنش</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className={"fv-ProfilePageLeftBody"}>

                    <ProfilePageUserInfo />

                    <MDBCol md={8} sm={12} className={"fv-ProfilePageUserSetInfo"}>
                        <p>کاربر عزیز لطفا نظر خود را در خصوص اقامتی که داشتید درج کنید</p>
                        <p>نام شما</p>
                        <input type="text" className={"fv-nameAddComments"}  value={this.state.name} />
                        <p>توضیحات شما</p>
                        <MDBRow className={"fv-ProfilePageWallet2TextArea"}>
                            <MDBCol>
                                <textarea value={this.state.textComment}
                                          onChange={(event)=>{this.setState({textComment:event.target.value})}}>
                                </textarea>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow  className={"fv-addCommentsRateTopic"}>
                            <MDBCol md={12}>
                                <p >به هر کدام از موارد زیر امتیاز دهید</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className={"fv-addCommentsRate"}>




                            <MDBCol md={6} className={"fv-cleaningRateAddComments"} >
                                <p>نظافت</p>
                                <div className={"fv-cleaningRateStars"}>
                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="#E88F0A"
                                        changeRating={this.cleaningRate}
                                        numberOfStars={5}
                                        name='rating'
                                        size={15}
                                    />
                                </div>
                            </MDBCol>

                            <MDBCol  md={6} className={"fv-compatibilityWithAdvertisementAddComment"}>
                                <p>تطابق با آکهی</p>   {/* <a className={"fv-compatibilityWithAdvertisement"}><i className="fas fa-star  " /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> */}
                               <div className={"fv-compatibilityWithAdvertisementStars"}>
                                   <StarRatings
                                       rating={this.state.rating2}
                                       starRatedColor="#E88F0A"
                                       changeRating={this.compatibilityWithAdvertisement}
                                       numberOfStars={5}
                                       name='rating'
                                       size={15}
                                   />
                               </div>

                            </MDBCol>
                            <MDBCol  md={6} className={"fv-hospitalityAddComment"}>
                                <p>مهمان نوازی</p>  {/* <a className={"fv-hospitality"}><i className="fas fa-star fv-hospitality" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> */}
                              <div className={"fv-hospitalityStars"}>
                                  <StarRatings
                                      rating={this.state.rating3}
                                      starRatedColor="#E88F0A"
                                      changeRating={this.hospitality}
                                      numberOfStars={5}
                                      name='rating'
                                      size={15}
                                  />
                              </div>
                            </MDBCol>
                            <MDBCol  md={6} className={"fv-hostingQualityAddComment"}>
                                <p>کیفیت میزبانی</p>  {/* <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> <a><i className="fas fa-star" /></a> */}
                                <StarRatings
                                    rating={this.state.rating4}
                                    starRatedColor="#E88F0A"
                                    changeRating={this.hostingQuality}
                                    numberOfStars={5}
                                    name='rating'
                                    size={15}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md={12} sm={12} className={"fv-ProfilePageUserSetInfoButton"}>
                                <input type="button" value="ذخیره تراکنش" onClick={()=>{
                                    const totalScore = (this.state.cleaningRate +  this.state.compatibilityWithAdvertisement + this.state.hospitality + this.state.hostingQuality) /4
                                    const data ={
                                       text : this.state.textComment ,
                                       total_score : totalScore,
                                       cleaning : this.state.cleaningRate,
                                       ad_compliance : this.state.compatibilityWithAdvertisement ,
                                       hospitality : this.state.hospitality,
                                       hosting_quality :this.state.hostingQuality,
                                   }
                                    addComment(data , this.props.match.params.id)
                                        .then(res => res.status === 200 ? alert('پیام شما با موفقیت ثبت گردید') :'')
                                        .catch(err => err.response ?  alert('لطفا مقادیر را به درستی پر کنید') : '' )
                                }}/>
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
export default ProfilePageWallet2