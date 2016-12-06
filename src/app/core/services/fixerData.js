'use strict';

export default function (app) {
    app
        .service('fixerData', fixerData);

        /** @ngInject */
        function fixerData($log, $http) {
            var apiHost = 'http://api.fixer.io/latest';

            var service = {
              exchangeRates: exchangeRates
            };

            return service;

            function exchangeRates(base) {
              return $http.get(apiHost + '?base=' + base);
            }
        }
}
