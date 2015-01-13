angular.module('missLimburg.services', ['ngResource'])

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

    .factory('Nominee', ['$resource', function ($resource) {
        return {
            search: $resource("http://80.240.138.74:4567/nominees/search/limburg/:search", {search: '@search'}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findAll: $resource("http://80.240.138.74:4567/nominees/limburg", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource("http://80.240.138.74:4567/nominee/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])

    .factory('Pictures', ['$resource', function ($resource) {
        return {
            findAll: $resource("http://80.240.138.74:4567/picture/region/limburg", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource("http://80.240.138.74:4567/picture/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])
    .factory('Sponsors', ['$resource', function ($resource) {
        return {
            findAll: $resource("http://80.240.138.74:4567/sponsor", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource("http://80.240.138.74:4567/sponsor/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }])
    .factory('Videos', ['$resource', function ($resource) {
        return {
            findAll: $resource("http://80.240.138.74:4567/video/region/limburg", {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }),
            findOne: $resource("http://80.240.138.74:4567/video/:id", {id: '@id'}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            })
        }
    }]);