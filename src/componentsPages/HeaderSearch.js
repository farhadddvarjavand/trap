import React, {Component} from "react";
import {MDBCol, MDBRow} from "mdbreact";
import LogoName from "../images/LogoName.png";
import MobileLogo from "../images/MobileLogo.png";
import config from "../services/config.json";

class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state={
            ...props,
            ...this.state,
            ...this.props,
            searchResult:'',
        }
    }

    render() {
        const info = JSON.parse(localStorage.getItem("infoUser"))
        let nameAndFamily =  ""
        let avatar = ""
        if(info){
            nameAndFamily=info.userInfo.fullname
            avatar=info.userInfo.avatar
        }
        return (
            <div className={"fv-footerMenu fv-footerDisplayPage fv-DisplayPage"}>
            <MDBRow className={' fv-footerDisplayPageBody'}>
                <MDBCol md={2}>
                    <i className="fa fa-user-alt" />
                    <a> حساب کاربری</a>
                </MDBCol>
                <MDBCol md={2} className={"fv-DisplayPageSearchIcon"}>
                    <input type='searchBbox' placeholder=' جستجو شهر مورد نظر' onChange={(e)=>this.setState({searchResult:e.target.value})}/>
                </MDBCol>
                <MDBCol  md={2} className={"fv-DisplayPageSearchIcon"} >
                    <a onClick={()=>{
                        const mainPageSearch = {
                            city:`C ${this.state.searchResult}`,
                            numberOfPeople: '',
                            dateToGo:'',
                            dateToReturn:'',
                        }
                        localStorage.setItem("mainPageSearch"  , JSON.stringify(mainPageSearch));
                        this.props.history.push({pathname:"/searchHomePage/doSearch/1",searchDatas: {city: this.state.city, dayToGo: mainPageSearch.dateToGo , dateToReturn:mainPageSearch.dateToReturn , capacity:mainPageSearch.numberOfPeople}})

                      }}><i className="fa fa-search" /></a>
                  </MDBCol>

                  <MDBCol sm={2}  sm={2} className={"fv-DisplayPageLoginImageMobile"} >
                      <img src={avatar ? `${config.webapi}/images/villas/main/${this.props.avatar}` : MobileLogo} />
                  </MDBCol>
                  <MDBCol sm={1} className={"fv-DisplayPageLoginSignMobile"} >
                      <i className="fas fa-chevron-down" />
                  </MDBCol>
                  <MDBCol md={6} sm={9} className={"menuMobile"}>
                      <img src={LogoName} className={"fv-DisplayPageSearchName"}/>
                      <img src={MobileLogo} className={"fv-DisplayPageSearchLogo"}/>
                  </MDBCol>
              </MDBRow>
              </div>
          )
      }
  }
  export default HeaderSearch