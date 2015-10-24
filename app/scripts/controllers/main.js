'use strict';

/**
 * @ngdoc function
 * @name wioflixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wioflixApp
 * Assigns global variables
 */
angular.module('wioflixApp')
    //IMDB
    .controller('ImdbController', function imdbController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/imdbMovies.json'
        }).success(function (data) {
            $scope.posts = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/imdbCategories.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });
        $http({
            method: 'GET',
            url: 'js/imdbTV.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
        });

        $scope.type = true;
        $scope.categoryMovies = "Any";
        $scope.categoryShows = "Any";

        $scope.customFilterMovies = function (data) {
            if ($scope.categoryMovies === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryMovies) > -1) return true;
            return false;
        };

        $scope.customFilterShows = function (data) {
            if ($scope.categoryShows === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryShows) > -1) return true;
            return false;
        };
    })
    //Rotten Tomatoes
    .controller('RtController', function rtController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/rtMoviesUser.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/rtCategories.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/rtMoviesCritic.json'
        }).success(function (data) {
            $scope.posts = data; // response data
        });
        $scope.type = true;
        $scope.categoryTomatometer = "Any";
        $scope.categoryAudience = "Any";
        $scope.rating = true;

        $scope.customFilterTomatometer = function (data) {
            if ($scope.categoryTomatometer === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryTomatometer) > -1) return true;
            return false;
        };

        $scope.customFilterAudience = function (data) {
            if ($scope.categoryAudience === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryAudience) > -1) return true;
            return false;
        };
    })
    //Metacritic
    .controller('McController', function mcController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/mcCritic.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/mcUser.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/mcGenres.json'
        }).success(function (data) {
            $scope.posts = data; // response data
        });

        $scope.type = true;
        $scope.categoryCritic = "Any";
        $scope.categoryUser = "Any";
        $scope.rating = true;

        $scope.customFilterCritic = function (data) {
            if ($scope.categoryCritic === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryCritic) > -1) return true;
            return false;
        };

        $scope.customFilterUser = function (data) {
            if ($scope.categoryUser === "Any") return true;
            if (data.genres.toString().indexOf($scope.categoryUser) > -1) return true;
            return false;
        };
    })
    //New Releases - Recently Added
    .controller('NewReleasesAndAddedController', function newReleasesAndAddedController($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/newReleases.json?'
        }).success(function (data) {
            $scope.posts2 = data; // response data
        });
        $http({
            method: 'GET',
            url: 'js/recentlyAdded.json?'
        }).success(function (data) {
            $scope.posts = data; // response data
        });
        $scope.type = "none";
    })
    //Main
    .controller('mainController', function mainController($scope) {
        $scope.link1 = false;
        $scope.link2 = false;
        $scope.link3 = false;
        $scope.link4 = false;
        $scope.link5 = false;
        $scope.imdb = false;
        $scope.rt = false;
        $scope.meta = false;
        $scope.all = false;
        $scope.view = true;
    })
    //Shuffle All
    .controller('ShuffleAllController', function shuffleAllController($scope, $http) {
        var shuffleArray = function (array) {
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
        }

        $scope.shuffle = function () {
            shuffleArray($scope.posts2);
        }

        $http({
            method: 'GET',
            url: 'js/allCats.json'
        }).success(function (data) {
            $scope.posts = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/allM.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.showAll = false;

        $scope.customFilter = function (data) {
            if ($scope.category === "Any") return true;
            if (data.genres.toString().indexOf($scope.category) > -1) return true;
            return false;
        };
    })
    //Shuffle IMDB
    .controller('ShuffleImdbController', function shuffleImdbController($scope, $http) {
        var shuffleArray = function (array) {
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
        }

        $scope.shuffle = function () {
            shuffleArray($scope.posts);
        }
        $http({
            method: 'GET',
            url: 'js/imdbMovies.json'
        }).success(function (data) {
            $scope.posts = data; // response data
            shuffleArray($scope.posts);
        });

        $http({
            method: 'GET',
            url: 'js/imdbCategories.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });
        $http({
            method: 'GET',
            url: 'js/imdbTV.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts);
        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.showImdb = false;

        $scope.customFilter = function (data) {
            if ($scope.category === "Any") return true;
            if (data.genres.toString().indexOf($scope.category) > -1) return true;
            return false;
        };

    })
    //Shuffle RT
    .controller('ShuffleRtController', function shuffleRtController($scope, $http) {
        var shuffleArray = function (array) {
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
        }

        $scope.shuffle = function () {
            shuffleArray($scope.posts2);
            shuffleArray($scope.posts);
        }
        $http({
            method: 'GET',
            url: 'js/rtMoviesUser.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $http({
            method: 'GET',
            url: 'js/rtCategories.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
        });

        $http({
            method: 'GET',
            url: 'js/rtMoviesCritic.json'
        }).success(function (data) {
            $scope.posts = data; // response data
            shuffleArray($scope.posts);
        });
        $scope.type = true;
        $scope.category = "Any";
        $scope.rating = "null";
        $scope.rat = false;
        $scope.showRT = false;


        $scope.customFilter = function (data) {
            if ($scope.category === "Any") return true;
            if (data.genres.toString().indexOf($scope.category) > -1) return true;
            return false;
        };
    })
    //Shuffle MC
    .controller('ShuffleMcController', function shuffleMcController($scope, $http) {
        var shuffleArray = function (array) {
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
        }

        $scope.shuffle = function () {
            shuffleArray($scope.posts2);
            shuffleArray($scope.posts3);
        }
        $http({
            method: 'GET',
            url: 'js/mcCritic.json'
        }).success(function (data) {
            $scope.posts2 = data; // response data
            shuffleArray($scope.posts2);
        });

        $http({
            method: 'GET',
            url: 'js/mcUser.json'
        }).success(function (data) {
            $scope.posts3 = data; // response data
            shuffleArray($scope.posts3);
        });

        $http({
            method: 'GET',
            url: 'js/mcGenres.json'
        }).success(function (data) {
            $scope.posts = data; // response data

        });

        $scope.type = true;
        $scope.category = "Any";
        $scope.rating = "null";
        $scope.rat = false;
        $scope.showMeta = false;


        $scope.customFilter = function (data) {
            if ($scope.category === "Any") return true;
            if (data.genres.toString().indexOf($scope.category) > -1) return true;
            return false;
        };
    })