import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './Product.css'
import MainPage from './MainPage';
import DisplayPage from "./DisplayPage"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import SearchHomePage from './SearchHomePage';
import HostStep1Page from "./HostStep1Page";

ReactDOM.render(
    <HostStep1Page />,
  document.getElementById('root')
);
