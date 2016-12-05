'use strict';

import * as route from './main.route';

const mainPageModule = angular.module('pages.main', [
  'ui.router'
]);

mainPageModule.config(route);

export default mainPageModule;
