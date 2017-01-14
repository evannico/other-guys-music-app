var config_module = angular.module('app.config', []);

var config_data = {
    'GENERAL_CONFIG': {
        'APP_NAME': 'The Other Guys',
        'APP_VERSION': '1.0',
        'HTML_5_MODE': false,
        'WHITE_LABEL_CLIENT_ID': 'ZotQS36iBH3c9BfdxzTRTcZCVq4576FagLiO6vhZ',
        'SOUNDCLOUD_CLIENT_ID': '9e044388ce9ad288dea8649167e7c2d6',
        'DEFAULT_COLLECTION': 'the-jammies'
    }
};

angular.forEach(config_data, function(key, value) {
    config_module.constant(value, key);
});
