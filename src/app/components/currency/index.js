// Import Style
import './style.scss';

import * as angular from 'angular';

// Import internal modules
import * as component from './component';
import * as run from './run';

import * as config from './config';

let modules = [

];

export default angular.module("homeDepotApp.currencyConverter" , modules)
    .component('componentCurrency', component)
    .config(config)
    .run(run);
    //.name;
