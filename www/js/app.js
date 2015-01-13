angular.module('missLimburg', ['ionic', 'missLimburg.controllers', 'missLimburg.services','angular-carousel'])

    .run(function ($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.hide();
            }
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Geen internet verbinding",
                        content: "Deze applicatie heeft een internet of 3G verbinding nodig!"
                    })
                        .then(function(result) {
                            if(!result) {
                                ionic.Platform.exitApp();
                            }
                        });
                }
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $sceProvider) {
        $sceProvider.enabled(false);

        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: "MenuController as MenuCtrl"
            })

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent': {
                        templateUrl: "templates/search.html",
                        controller: "SearchController as SearchCtrl"
                    }
                }
            })
            /*---------------------------Nominees views----------------------------*/
            .state('app.list', {
                url: "/list",
                views: {
                    'menuContent': {
                        templateUrl: "templates/list.html",
                        controller: "ListController as ListCtrl"
                    }
                }
            })
            .state('app.detail', {
                url: "/detail/:id",
                views: {
                    'menuContent': {
                        templateUrl: "templates/detail.html",
                        controller: "DetailController as DetailCtrl"
                    }
                }
            })
            .state("app.pictures",{
                url:"/detail/pictures/:id",
                views:{
                    'menuContent':{
                        templateUrl:"templates/pictures.html",
                        controller: "NomineePicturesController as NomineePicturesCtrl"
                    }
                }
            })

            /*---------------------------General views----------------------------*/
            .state("app.tickets",{
                url:"/tickets",
                views:{
                    'menuContent':{
                        templateUrl:"templates/tickets-gala.html",
                        controller: "TicketsController as TicketsCtrl"
                    }
                }
            })
            .state("app.videos",{
                url:"/videos",
                views:{
                    'menuContent':{
                        templateUrl:"templates/videos.html",
                        controller: "VideosController as VideosCtrl"
                    }
                }
            })
            .state("app.video",{
                url:"/video/:id",
                views:{
                    'menuContent':{
                        templateUrl:"templates/videos-detail.html",
                        controller: "VideosController as VideosCtrl"
                    }
                }
            })
            .state("app.generalpictures",{
                url:"/generalpictures",
                views:{
                    'menuContent':{
                        templateUrl:"templates/general-pictures.html",
                        controller: "GeneralPicturesController as GeneralPicturesCtrl"
                    }
                }
            }).state("app.generalpicture",{
                url:"/generalpicture/:id",
                views:{
                    'menuContent':{
                        templateUrl:"templates/general-pictures-detail.html",
                        controller: "GeneralPicturesController as GeneralPicturesCtrl"
                    }
                }
            })
            .state("app.sponsors",{
                url:"/sponsors",
                views:{
                    'menuContent':{
                        templateUrl:"templates/sponsors.html",
                        controller: "SponsorsController as SponsorsCtrl"
                    }
                }
            })
            .state("app.sponsor",{
                url:"/sponsor/:id",
                views:{
                    'menuContent':{
                        templateUrl:"templates/sponsors-detail.html",
                        controller: "SponsorsController as SponsorsCtrl"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/search');
    });
