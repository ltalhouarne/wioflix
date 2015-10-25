'use strict';

/**
 * @ngdoc function
 * @name wioflixApp.controller:MainCtrl
 * @description Contains all the data relevant to the logic of the partial views.
 * Most of the data is from the movies and tv shows.
 * The controllers also contain the filters and the booleans corresponding to
 * the context selected by the user.
 *
 * # MainCtrl
 */
angular.module('wioflixApp')
    //IMDB
    .controller('ImdbController', function imdbController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/imdbMovies.json'
        }).success(function (data) {
            $scope.movies = data;
        });

        $http({
            method: 'GET',
            url: 'js/imdbCategories.json'
        }).success(function (data) {
            $scope.genres = data;
        });
        $http({
            method: 'GET',
            url: 'js/imdbTV.json'
        }).success(function (data) {
            $scope.shows = data;
        });

        $scope.type = true;
        $scope.categoryMovies = "Any";
        $scope.categoryShows = "Any";

        $scope.customFilterMovies = function (data) {
            return $scope.categoryMovies === "Any" || data.genres.toString().indexOf($scope.categoryMovies) > -1;
        };

        $scope.customFilterShows = function (data) {
            return $scope.categoryShows === "Any" || data.genres.toString().indexOf($scope.categoryShows) > -1;
        };
    })
    //Rotten Tomatoes
    .controller('RtController', function rtController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/rtMoviesUser.json'
        }).success(function (data) {
            $scope.userRatings = data;
        });

        $http({
            method: 'GET',
            url: 'js/rtCategories.json'
        }).success(function (data) {
            $scope.genres = data;
        });

        $http({
            method: 'GET',
            url: 'js/rtMoviesCritic.json'
        }).success(function (data) {
            $scope.criticRatings = data;
        });
        $scope.type = true;
        $scope.categoryTomatometer = "Any";
        $scope.categoryAudience = "Any";
        $scope.rating = true;

        $scope.customFilterTomatometer = function (data) {
            return $scope.categoryTomatometer === "Any" || data.genres.toString().indexOf($scope.categoryTomatometer) > -1;
        };

        $scope.customFilterAudience = function (data) {
            return $scope.categoryAudience === "Any" || data.genres.toString().indexOf($scope.categoryAudience) > -1;
        };
    })
    //Metacritic
    .controller('McController', function mcController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/mcCritic.json'
        }).success(function (data) {
            $scope.critic = data;
        });

        $http({
            method: 'GET',
            url: 'js/mcUser.json'
        }).success(function (data) {
            $scope.userVotes = data;
        });

        $http({
            method: 'GET',
            url: 'js/mcGenres.json'
        }).success(function (data) {
            $scope.genres = data;
        });

        $scope.type = true;
        $scope.categoryCritic = "Any";
        $scope.categoryUser = "Any";
        $scope.rating = true;

        //If Any return all
        //Otherwise return movies with matching category
        $scope.customFilterCritic = function (data) {
            return $scope.categoryCritic === "Any" || data.genres.toString().indexOf($scope.categoryCritic) > -1;
        };

        //If Any return all
        //Otherwise return movies with matching category
        $scope.customFilterUser = function (data) {
            return $scope.categoryUser === "Any" || data.genres.toString().indexOf($scope.categoryUser) > -1;
        };
    })
    //New Releases - Recently Added
    .controller('NewReleasesAndAddedController', function newReleasesAndAddedController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/newReleases.json?'
        }).success(function (data) {
            $scope.newReleases = data;
        });
        $http({
            method: 'GET',
            url: 'js/recentlyAdded.json?'
        }).success(function (data) {
            $scope.recentlyAdded = data;
        });
        $scope.type = "none";
    })
    //Main
    .controller('MainController', function mainController($scope) {
        //All booleans tracking the context chosen by a user.
        $scope.rtClicked = false;
        $scope.imdbClicked = false;
        $scope.mcClicked = false;
        $scope.newMoviesClicked = false;
        $scope.randomSelectionClicked = false;
        $scope.imdb = false;
        $scope.rt = false;
        $scope.meta = false;
        $scope.all = false;
        $scope.view = true;
    })
    //Shuffle service used by below shuffle controllers
    .service('shuffleService', function(){
        var shuffleService = {};

        shuffleService.shuffleArray = function (array) {
            var m = array.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        };

        return shuffleService;
    })
    //Shuffle All
    .controller('ShuffleAllController', function shuffleAllController($scope, $http, shuffleService) {
        $scope.shuffle = function () {
            shuffleService.shuffleArray($scope.allMovies);
        };

        $http({
            method: 'GET',
            url: 'js/allCats.json'
        }).success(function (data) {
            $scope.allGenres = data;
        });

        $http({
            method: 'GET',
            url: 'js/allM.json'
        }).success(function (data) {
            $scope.allMovies = data;
            shuffleService.shuffleArray($scope.allMovies);
        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.showAll = false;

        $scope.customFilter = function (data) {
            return $scope.category === "Any" || data.genres.toString().indexOf($scope.category) > -1;
        };
    })
    //Shuffle IMDB
    .controller('ShuffleImdbController', function shuffleImdbController($scope, $http, shuffleService) {
        $scope.shuffle = function () {
            shuffleService.shuffleArray($scope.imdbMovies);
        };
        $http({
            method: 'GET',
            url: 'js/imdbMovies.json'
        }).success(function (data) {
            $scope.imdbMovies = data;
            shuffleService.shuffleArray($scope.imdbMovies);
        });

        $http({
            method: 'GET',
            url: 'js/imdbCategories.json'
        }).success(function (data) {
            $scope.imdbGenres = data;
        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.showImdb = false;

        $scope.customFilter = function (data) {
            return $scope.category === "Any" || data.genres.toString().indexOf($scope.category) > -1;
        };
    })
    //Shuffle RT
    .controller('ShuffleRtController', function shuffleRtController($scope, $http, shuffleService) {
        $scope.shuffleUserRatings = function () {
            shuffleService.shuffleArray($scope.rtUserRatings);
        };

        $scope.shuffleCriticRatings = function () {
            shuffleService.shuffleArray($scope.rtCriticRatings);
        };

        $http({
            method: 'GET',
            url: 'js/rtMoviesUser.json'
        }).success(function (data) {
            $scope.rtUserRatings = data;
            shuffleService.shuffleArray($scope.rtUserRatings);
        });

        $http({
            method: 'GET',
            url: 'js/rtCategories.json'
        }).success(function (data) {
            $scope.rtGenres = data;
        });

        $http({
            method: 'GET',
            url: 'js/rtMoviesCritic.json'
        }).success(function (data) {
            $scope.rtCriticRatings = data;
            shuffleService.shuffleArray($scope.rtCriticRatings);
        });
        $scope.type = true;
        $scope.category = "Any";
        $scope.rating = "null";
        $scope.rat = false;
        $scope.showRT = false;

        $scope.customFilter = function (data) {
            return $scope.category === "Any" || data.genres.toString().indexOf($scope.category) > -1;
        };
    })
    //Shuffle MC
    .controller('ShuffleMcController', function shuffleMcController($scope, $http, shuffleService) {
        $scope.shuffleCritic = function () {
            shuffleService.shuffleArray($scope.mcCriticRatings);
        };

        $scope.shuffleUserRatings = function () {
            shuffleService.shuffleArray($scope.mcUserRatings);
        };

        $http({
            method: 'GET',
            url: 'js/mcCritic.json'
        }).success(function (data) {
            $scope.mcCriticRatings = data;
            shuffleService.shuffleArray($scope.mcCriticRatings);
        });

        $http({
            method: 'GET',
            url: 'js/mcUser.json'
        }).success(function (data) {
            $scope.mcUserRatings = data;
            shuffleService.shuffleArray($scope.mcUserRatings);
        });

        $http({
            method: 'GET',
            url: 'js/mcGenres.json'
        }).success(function (data) {
            $scope.mcGenres = data;
        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.rating = "null";
        $scope.rat = false;
        $scope.showMeta = false;


        $scope.customFilter = function (data) {
            return $scope.category === "Any" || data.genres.toString().indexOf($scope.category) > -1;
        };
    });