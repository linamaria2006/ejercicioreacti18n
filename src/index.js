import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import espanol from "./locales/es";
import ingles from "./locales/en";
import JobsList from "./components/jobslist";

let language = window.navigator.language || navigator.browserLanguage;
const selectMessages = language.startsWith('es') ? espanol : ingles;
ReactDOM.render(
    <IntlProvider locale={language} messages = {selectMessages}>
        <div>
<JobsList />
</div>
</IntlProvider>
, document.getElementById("root"));
