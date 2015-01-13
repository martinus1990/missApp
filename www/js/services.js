angular.module('missApp.services', ['ngResource','missApp.config'])

    .factory('ListService', function () {
        var service = {};

        service.setList = function (list) {
            this.list = list;
        };

        service.getList = function () {
            return this.list;
        };

        return service;
    })

    .factory('VideosService', function () {
        var service = {};

        service.setList = function (list) {
            this.list = list;
        };

        service.getList = function () {
            return this.list;
        };

        return service;
    })

    .factory('PicturesService', function(){
        var service = {};

        service.setList = function (list) {
            this.list = list;
        };

        service.getList = function () {
            return this.list;
        };

        return service;
    })

    .factory('SponsorsService', function(){
        var service = {};

        service.setList = function (list) {
            this.list = list;
        };

        service.getList = function () {
            return this.list;
        };

        return service;
    })

    .factory('Nominee', ['$resource','SERVICES_CONFIG', function ($resource,SERVICES_CONFIG) {
        return {
            search: $resource( SERVICES_CONFIG.SERVER_URL + ":4567/nominees/search/" + SERVICES_CONFIG.MISS_CONTEST + "/:search", {search: '@search'}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findAll: $resource(SERVICES_CONFIG.SERVER_URL +":4567/nominees/" + SERVICES_CONFIG.MISS_CONTEST, {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource(SERVICES_CONFIG.SERVER_URL + ":4567/nominee/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])

    .factory('Pictures', ['$resource','SERVICES_CONFIG', function ($resource,SERVICES_CONFIG) {
        return {
            findAll: $resource(SERVICES_CONFIG.SERVER_URL + ":4567/picture/region/" + SERVICES_CONFIG.MISS_CONTEST, {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource(SERVICES_CONFIG.SERVER_URL + ":4567/picture/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])
    .factory('Sponsors', ['$resource','SERVICES_CONFIG', function ($resource,SERVICES_CONFIG) {
        return {
            findAll: $resource(SERVICES_CONFIG.SERVER_URL + ":4567/sponsor", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource(SERVICES_CONFIG.SERVER_URL + ":4567/sponsor/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])
    .factory('Videos', ['$resource','SERVICES_CONFIG', function ($resource,SERVICES_CONFIG) {
        return {
            findAll: $resource(SERVICES_CONFIG.SERVER_URL +":4567/video/region/" + SERVICES_CONFIG.MISS_CONTEST, {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource(SERVICES_CONFIG.SERVER_URL +":4567/video/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }]);