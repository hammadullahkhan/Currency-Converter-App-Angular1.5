'use strict';


import * as _ from 'lodash/core';



import * as moment from 'moment';


function MainController($log) {
  'ngInject';

  $log.debug('Hello from main controller!');


	this.lodash_version = _.VERSION;



	this.moment_version = moment.version;


}

export default MainController;
