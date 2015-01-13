angular.module('missApp.controllers', ['missApp.config'])

    .controller('SearchController', function() {
    })

    .controller("MenuController",['CONTROLLERS_CONFIG'],function($scope, ListService,SponsorsService,PicturesService,VideosService,$window,$ionicPopup,Nominee,Sponsors,Pictures,Videos,CONTROLLERS_CONFIG){

        $scope.showHome = function() {
            $window.location.href = "#/app/search";
        };

        $scope.showAll = function() {
            if(checkConnection()){

                $scope.nominees = Nominee.findAll.query({}, function () {
                    ListService.setList($scope.nominees);
                    $window.location.href = "#/app/list";
                });
            }
        };
        $scope.openFacebook = function(){
            if(checkConnection()){
                window.open(encodeURI(CONTROLLERS_CONFIG.FACEBOOK_URL), '_system', 'location=yes');
            }
        };
        $scope.openTvlShow = function(){
            if(checkConnection()){
                window.open(encodeURI(CONTROLLERS_CONFIG.TVL_URL), '_system', 'location=yes');
            }
        };
        $scope.openTickets = function(){
            if(checkConnection()){
                $window.location.href = "#/app/tickets";
            }
        };

        $scope.showVideos = function(){
            if(checkConnection()){
                $scope.videos = Videos.findAll.query({},function(){
                    VideosService.setList($scope.videos);
                    $window.location.href = "#/app/videos";
                });
            }
        };
        $scope.showSponsors = function(){
            if(checkConnection()){
                $scope.sponsors = Sponsors.findAll.query({},function(){
                    SponsorsService.setList($scope.sponsors);
                    $window.location.href = "#/app/sponsors";
                });
            }
        };
        $scope.showPictures = function(){
            if(checkConnection()){
                $scope.pictures = Pictures.findAll.query({},function(){
                    PicturesService.setList($scope.pictures);
                    $window.location.href = "#/app/generalpictures";
                });
            }
        };

        function checkConnection(){
            if(!window.Connection){
                return true;
            }
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
                return false;
            }else{
                return true;
            }
        }
    })


    .controller('ListController', function($scope, ListService,$window) {
        $scope.nominees = ListService.getList();
        $scope.getDetail = function(id){
            $window.location.href = "#/app/detail/" + id;
        }
    })
    .controller('DetailController', function($scope, $stateParams,$ionicTabsDelegate, Nominee) {
        $scope.nominee = Nominee.findOne.query({id: $stateParams.id});
        $scope.selectTabWithIndex = function(index) {
            $ionicTabsDelegate.select(index);
        }
    })
    .controller('VideosController', function($scope, VideosService, $stateParams,$window) {
        $scope.videos = VideosService.getList();

        $scope.video = VideosService.getList()[$stateParams.id];
        $scope.getVideo = function(index){
            $window.location.href = "#/app/video/"+index;
        };
    })
    .controller('GeneralPicturesController', function($scope, PicturesService, $stateParams,$window) {
        $scope.pictures = PicturesService.getList();
        $scope.picture = PicturesService.getList()[$stateParams.id];
        $scope.getPicture = function(index){
            $window.location.href = "#/app/generalpicture/"+index;
        };
    })
    .controller('NomineePicturesController', function($scope, $stateParams,$ionicSlideBoxDelegate, Nominee) {
        $scope.nominee = Nominee.findOne.query({id: $stateParams.id});
        $ionicSlideBoxDelegate.update();
    })
    .controller('TicketsController', function($scope, PicturesService) {

    })
    .controller('SponsorsController', function($scope,SponsorsService, Sponsors, $stateParams,$window) {
        $scope.sponsors = SponsorsService.getList();

        $scope.sponsor = Sponsors.findOne.query({id: $stateParams.id});

        $scope.getSponsor = function(id){
            $window.location.href = "#/app/sponsor/"+id;
        };
        $scope.openSponsorWebsite = function(link){
            window.open(link, '_system', 'location=yes');
        };
        $scope.showVideo = function(sponsor){
            return !(typeof sponsor.video == 'undefined' || sponsor.video == "");
        };
    });
