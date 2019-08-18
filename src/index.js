import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page/main';

const wrapper = document.getElementById("mainPage");
wrapper ? ReactDOM.render(<Page />, wrapper) : false;