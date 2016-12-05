'use strict';

import * as components from './index.components';
import * as config from './index.config';
import * as run from './index.run';


const App = angular.module(
  "homeDepotCurrencyApp", [
    // plugins
    require('angular-ui-router'),
    "ngResource",

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
    require("./pages/main/main.module").name

  ]
);

App
  .config(config)
  .run(run);



export default App;
