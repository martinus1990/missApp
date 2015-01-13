var config_module = angular.module('missApp.config', []);


/* -------------------------MISS Limburg Config Data---------------------*/
var config_data = {
    'SERVICES_CONFIG': {
        'MISS_CONTEST': 'limburg',
        'SERVER_URL': 'http://miss-ntombeur.rhcloud.com'
    },
    'CONTROLLERS_CONFIG': {
        'TVL_URL': 'http://www.tvl.be/misslimburg',
        'FACEBOOK_URL': 'http://www.facebook.com/misslimburg'
    }
};


/* -------------------------MISS Vlaams Brabant Config Data---------------------*/

/*var config_data = {
    'SERVICES_CONFIG': {
        'MISS_CONTEST': 'limburg',
        'SERVER_URL': 'http://miss-ntombeur.rhcloud.com'
    },
    'CONTROLLERS_CONFIG': {
        'TVL_URL': 'http://www.tvl.be/misslimburg',
        'FACEBOOK_URL': 'http://www.facebook.com/misslimburg'
    }
};*/

angular.forEach(config_data,function(key,value) {
    config_module.constant(value,key);
});
