// Import Style
import './style.scss';

import * as angular from 'angular';

import * as uibootstrap from 'angular-ui-bootstrap';

// Import internal modules
import * as component from './component';
import * as run from './run';

import * as config from './config';

let modules = [
  uibootstrap
];

export default angular.module("homeDepotApp.currencyConverter" , modules)
    .component('componentCurrency', component)
    .config(config)
    .run(run);
    //.name;
