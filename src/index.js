import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './style/Product.css'
import MainPage from './pages/MainPage';
import DisplayPage from "./pages/DisplayPage"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import SearchHomePage from './pages/SearchHomePage';
import HostStep1Page from "./pages/HostStep1Page";
import HostStep2Page from "./pages/HostStep2Page";
import HostStep2Page2 from "./pages/HostStep2Page2";
import HostStep3Page from "./pages/HostStep3Page";
import HostStep4Page from "./pages/HostStep4Page";
import HostStep5Page from "./pages/HostStep5Page";
import HostStep5Page2 from "./pages/HostStep5Page2";
import HostStep5Page3 from "./pages/HostStep5Page3";
import ProfilePage from "./pages/ProfilePage";
import ProfilePageReservation from "./pages/ProfilePageReservation";
import ProfilePageReservation2 from "./pages/ProfilePageReservation2";
import ProfilePageTransaction from "./pages/ProfilePageTransaction";
import ProfilePageTransaction2 from "./pages/ProfilePageTransaction2";
import ProfilePageTransaction3 from "./pages/ProfilePageTransaction3";
import MyAccommodationPage from "./pages/MyAccommodationPage"
import ProfilePageWallet from "./pages/ProfilePageWallet";
import ProfilePageWallet2 from "./pages/ProfilePageWallet2";
import ProfilePageWallet3 from "./pages/ProfilePageWallet3";
import PrfilePageGustComments from "./pages/PrfilePageGustComments";
import ProfilePageGustComments2 from "./pages/PrfilePageGustComments2";
import ProfilePageCalender from "./pages/ProfilePageCalender"
import ProfilePageReservationsRequested from "./pages/ProfilePageReservationsRequested";
import FactorPage from "./pages/FactorPage";
import LoginPage from "./pages/LoginPage";
import LoginPage2 from "./pages/LoginPage2";
import LoginPage3 from "./pages/LoginPage3";
import TopicMainPage from "./componentsPages/topicsMainPage"
import Api from "./components/Api";
import {withCookies, Cookies, CookiesProvider} from 'react-cookie';
import {Link, Route, Switch,NavLink,BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <CookiesProvider>
                    <div className={"LinksTest"}>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/login2'}>LoginPage2</Link>
                        <Link to={'/login3'}>LoginPage3</Link>
                        <Link to={'/factor'}>FactorPage</Link>
                        <Link to={'/profileReservations'}>ProfilePageReservationsRequested</Link>
                        <Link to={'/profileCalender'}>ProfilePageCalender</Link>
                        <Link to={'/profileGustComments2'}>ProfilePageGustComments2</Link>
                        <Link to={'/profileGustComments'}>PrfilePageGustComments</Link>
                        <Link to={'/displayPage'}>DisplayPage</Link>
                        <Link to={'/ProfileWallet3'}>ProfilePageWallet3</Link>
                        <Link to={'/ProfileWallet2'}>ProfilePageWallet2</Link>
                        <Link to={'/ProfileWallet'}>ProfilePageWallet</Link>
                        <Link to={'/myAccommodation'}>MyAccommodationPage</Link>
                        <Link to={'/ProfileTransaction3'}>ProfilePageTransaction3</Link>
                        <Link to={'/ProfileTransaction2'}>ProfilePageTransaction2</Link>
                        <Link to={'/ProfileTransaction'}>ProfilePageTransaction</Link>
                        <Link to={'/hostStep5-3'}>HostStep5Page3</Link>
                        <Link to={'/Profile'}>ProfilePage</Link>
                        <Link to={'/hostStep5-2'}>HostStep5Page2</Link>
                        <Link to={'/hostStep5'}>HostStep5Page</Link>
                        <Link to={'/hostStep4'}>HostStep4Page</Link>
                        <Link to={'/hostStep3'}>HostStep3Page</Link>
                        <Link to={'/hostStep2'}>HostStep2Page</Link>
                        <Link to={'/hostStep2-2'}>HostStep2Page2</Link>
                        <Link to={'/hostStep1'}>HostStep1Page</Link>
                        <Link to={'/searchHomePage'}>SearchHomePage</Link>
                        <Link to={'/mainPage'}>MainPage</Link>

                    </div>

                    <div className="App">
                        <div className={'pagecontent'}>
                            <Route exact path={'/login'} component={LoginPage}/>
                            <Route exact path={'/login2'} component={LoginPage2}/>
                            <Route exact path={'/login3'} component={LoginPage3}/>
                            <Route exact path={'/factor'} component={FactorPage}/>
                            <Route exact path={'/profileReservations'} component={ProfilePageReservationsRequested}/>
                            <Route exact path={'/profileCalender'} component={ProfilePageCalender}/>
                            <Route exact path={'/profileGustComments2'} component={ProfilePageGustComments2}/>
                            <Route exact path={'/profileGustComments'} component={PrfilePageGustComments}/>
                            <Route exact path={'/displayPage'} component={DisplayPage}/>
                            <Route exact path={'/profileWallet3'} component={ProfilePageWallet3}/>
                            <Route exact path={'/ProfileWallet2'} component={ProfilePageWallet2}/>
                            <Route exact path={'/ProfileWallet'} component={ProfilePageWallet}/>
                            <Route exact path={'/myAccommodation'} component={MyAccommodationPage}/>
                            <Route exact path={'/profileTransaction3'} component={ProfilePageTransaction3}/>
                            <Route exact path={'/ProfileTransaction2'} component={ProfilePageTransaction2}/>
                            <Route exact path={'/ProfileTransaction'} component={ProfilePageTransaction}/>
                            <Route exact path={'/ProfileReservation2'} component={ProfilePageReservation2}/>
                            <Route exact path={'/profileReservation'} component={ProfilePageReservation}/>
                            <Route exact path={'/hostStep5-3'} component={HostStep5Page3}/>
                            <Route exact path={'/profile'} component={ProfilePage}/>
                            <Route exact path={'/hostStep5-2'} component={HostStep5Page2}/>
                            <Route exact path={'/hostStep5'} component={HostStep5Page}/>
                            <Route exact path={'/hostStep4'} component={HostStep4Page}/>
                            <Route exact path={'/hostStep3'} component={HostStep3Page}/>
                            <Route exact path={'/hostStep2-2'} component={HostStep2Page2}/>
                            <Route exact path={'/hostStep2'} component={HostStep2Page}/>
                            <Route exact path={'/hostStep1'} component={HostStep1Page}/>
                            <Route exact path={'/searchHomePage/:sort/:id'} component={SearchHomePage}/>
                            <Route exact path={'/mainPage'} component={MainPage}/>


                        </div>
                    </div>

                </CookiesProvider>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
  ,
  document.getElementById('root')
);
