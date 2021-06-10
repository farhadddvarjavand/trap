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
import NotFoundPage from "./emptyAndHandlePage/NotFoundPage"
import AddComments from "./pages/addComments"
import ProfileFavoritesPage from "./pages/profileFavoritesPage"
import ReservationProduct from "./componentsPages/ReservatioonProduct";
import TopicMainPage from "./componentsPages/topicsMainPage"
import Api from "./components/Api";
import {withCookies, Cookies, CookiesProvider} from 'react-cookie';
import {Link, Route, Switch,NavLink,BrowserRouter} from "react-router-dom"
import ProfilePageCommentsHandle from "./emptyAndHandlePage/ProfilePageCommentsHandle"
import ProfilePageCalendarEmpty from "./emptyAndHandlePage/ProfilePageCalendarEmpty";
import ProfilePageCalendarHandle from "./emptyAndHandlePage/ProfilePageCalendarHandle";
import ScrollToTop from "./componentsPages/ScrollToTop"
import ProfilePageTransactionHandle from "./emptyAndHandlePage/ProfilePageTransactionHandle"
import ProfilePageCommentsEmpty from "./emptyAndHandlePage/ProfilePageCommentsEmpty";
import ProfilePageTransactionEmpty  from "./emptyAndHandlePage/ProfilePageTransactionEmpty"
import ProfilePageReservationHandle from "./emptyAndHandlePage/ProfilePageReservationHandle";
import ProfilePageReservationEmpty from "./emptyAndHandlePage/ProfilePageReservationEmpty"
import ProfilePageReservationRequestedHandle from "./emptyAndHandlePage/ProfilePageReservationRequestedHandle";
import MyAccomodationProfilePageHandle from "./emptyAndHandlePage/MyAccomodationProfilePageHandle";
import AnotherPagesEmpty from "./emptyAndHandlePage/anotherPagesEmpty";
import ProfileWalletPageHandle from "./emptyAndHandlePage/ProfileWalletPageHandle";
import ProfileFavoritePageHandle from "./emptyAndHandlePage/ProfileFavoritePageHandle";
import PersianNumber from "./componentsPages/PersianNumber";
import './font/fonts/css.css';


ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <CookiesProvider>

                    <ScrollToTop />
                    <PersianNumber number={12365}/>
                    <div className="App">
                        <div className={'pagecontent'}>
                            <Route exact path={'/login'} component={LoginPage}/>
                            <Route exact path={'/login2'} component={LoginPage2}/>
                            <Route exact path={'/login3'} component={LoginPage3}/>
                            <Route exact path={'/factor/:id'} component={FactorPage}/>
                            <Route exact path={'/profileReservations'} component={ProfilePageReservationsRequested}/>
                            <Route exact path={'/profileCalender/:id'} component={ProfilePageCalender}/>
                            <Route exact path={'/profileGustComments2/:id'} component={ProfilePageGustComments2}/>
                            <Route exact path={'/profileGustComments'} component={PrfilePageGustComments}/>
                            <Route exact path={'/displayPage/:id'} component={DisplayPage}/>
                            <Route exact path={'/profileWallet3'} component={ProfilePageWallet3}/>
                            <Route exact path={'/ProfileWallet2'} component={ProfilePageWallet2}/>
                            <Route exact path={'/ProfileWallet'} component={ProfilePageWallet}/>
                            <Route exact path={'/myAccommodation'} component={MyAccommodationPage}/>
                            <Route exact path={'/profileTransaction3'} component={ProfilePageTransaction3}/>
                            <Route exact path={'/ProfileTransaction2'} component={ProfilePageTransaction2}/>
                            <Route exact path={'/ProfileTransaction'} component={ProfilePageTransaction}/>
                            <Route exact path={'/ProfileReservation2'} component={ProfilePageReservation2}/>
                            <Route exact path={'/profileReservation'} component={ProfilePageReservation}/>
                            <Route exact path={'/hostStep5-3/:id'} component={HostStep5Page3}/>
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
                            <Route exact path={'/notFound'} component={NotFoundPage}/>
                            <Route exact path={'/addComments/:id'} component={AddComments}/>
                            <Route exact path={'/profileFavoritesPage'} component={ProfileFavoritesPage}/>
                            <Route exact path={'/ProfilePageCommentsHandle'} component={ProfilePageCommentsHandle}/>
                            <Route exact path={'/ProfilePageCommentsEmpty'} component={ProfilePageCommentsEmpty}/>
                            <Route exact path={'/ProfilePageCalendarEmpty'} component={ProfilePageCalendarEmpty}/>
                            <Route exact path={'/ProfilePageCalendarHandle'} component={ProfilePageCalendarHandle}/>
                            <Route exact path={'/ProfilePageTransactionHandle'} component={ProfilePageTransactionHandle}/>
                            <Route exact path={'/ProfilePageTransactionEmpty'} component={ProfilePageTransactionEmpty}/>
                            <Route exact path={'/ProfilePageReservationHandle'} component={ProfilePageReservationHandle}/>
                            <Route exact path={'/ProfilePageReservationEmpty'} component={ProfilePageReservationEmpty}/>
                            <Route exact path={'/ProfilePageReservationRequestedHandle'} component={ProfilePageReservationRequestedHandle}/>
                            <Route exact path={'/MyAccomodationProfilePageHandle'} component={MyAccomodationProfilePageHandle}/>
                            <Route exact path={'/AnotherPagesEmpty'} component={AnotherPagesEmpty}/>
                            <Route exact path={'/ProfileWalletPageHandle'} component={ProfileWalletPageHandle}/>
                            <Route exact path={'/ProfileFavoritePageHandle'} component={ProfileFavoritePageHandle}/>





                        </div>
                    </div>

                </CookiesProvider>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
  ,
  document.getElementById('root')
);
