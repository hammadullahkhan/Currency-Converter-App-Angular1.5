'use strict';

function routeConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/'); 

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
