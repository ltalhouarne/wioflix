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
.controller('PostsCtrl', function PostsCtrl($scope, $http) {
    $http({
        method : 'GET',
        url : 'js/imdbMovies.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/imdbCategories.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
    });
    $http({
        method : 'GET',
        url : 'js/imdbTV.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
    });

    $scope.type= true;
    $scope.category="Any";

    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };

})
.controller('PostsCtrl2', function PostsCtrl2($scope, $http) {
    $http({
        method : 'GET',
        url : 'js/rtMoviesUser.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/rtCategories.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/rtMoviesCritic.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
    });
    $scope.type= true;
    $scope.category="Any";
    $scope.rating=true;

    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };
})
.controller('PostsCtrl3', function PostsCtrl3($scope, $http) {
    $http({
        method : 'GET',
        url : 'js/mcCritic.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/mcUser.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/mcGenres.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
    });

    $scope.type= true;
    $scope.category="Any";
    $scope.rating=true;

    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };
})
.controller('PostsCtrl4', function PostsCtrl3($scope, $http) {
    $http({
        method : 'GET',
        url : 'js/newReleases.json?version=22'
    }).success(function(data) {
        $scope.posts2 = data; // response data
    });
    $http({
        method : 'GET',
        url : 'js/recentlyAdded.json?version=22'
    }).success(function(data) {
        $scope.posts = data; // response data
    });
    $scope.type= "none";
})
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

.controller('PostsCtrlShuffleAll', function PostsCtrl3($scope, $http) {
    var shuffleArray = function(array) {
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

    $scope.shuffle = function() {
        shuffleArray($scope.posts2);
    }

    $http({
        method : 'GET',
        url : 'js/allCats.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/allM.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
        shuffleArray($scope.posts2);
    });

    $scope.type= true;
    $scope.category="Any";
    $scope.showAll=false;

    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };
})
.controller('PostsCtrlShuffleImdb', function PostsCtrl($scope, $http) {
    var shuffleArray = function(array) {
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

    $scope.shuffle = function() {
        shuffleArray($scope.posts);
    }
    $http({
        method : 'GET',
        url : 'js/imdbMovies.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
        shuffleArray($scope.posts);
    });

    $http({
        method : 'GET',
        url : 'js/imdbCategories.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
    });
    $http({
        method : 'GET',
        url : 'js/imdbTV.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
        shuffleArray($scope.posts);
    });

    $scope.type= true;
    $scope.category="Any";
    $scope.showImdb=false;

    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };

})
.controller('PostsCtrlShuffleRt', function PostsCtrl2($scope, $http) {
    var shuffleArray = function(array) {
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

    $scope.shuffle = function() {
        shuffleArray($scope.posts2);
        shuffleArray($scope.posts);
    }
    $http({
        method : 'GET',
        url : 'js/rtMoviesUser.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
        shuffleArray($scope.posts2);
    });

    $http({
        method : 'GET',
        url : 'js/rtCategories.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
    });

    $http({
        method : 'GET',
        url : 'js/rtMoviesCritic.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data
        shuffleArray($scope.posts);
    });
    $scope.type= true;
    $scope.category="Any";
    $scope.rating="null";
    $scope.rat=false;
    $scope.showRT = false;


    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };
})
.controller('PostsCtrl3ShuffleMc', function PostsCtrl3($scope, $http) {
    var shuffleArray = function(array) {
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

    $scope.shuffle = function() {
        shuffleArray($scope.posts2);
        shuffleArray($scope.posts3);
    }
    $http({
        method : 'GET',
        url : 'js/mcCritic.json?version=20'
    }).success(function(data) {
        $scope.posts2 = data; // response data
        shuffleArray($scope.posts2);
    });

    $http({
        method : 'GET',
        url : 'js/mcUser.json?version=20'
    }).success(function(data) {
        $scope.posts3 = data; // response data
        shuffleArray($scope.posts3);
    });

    $http({
        method : 'GET',
        url : 'js/mcGenres.json?version=20'
    }).success(function(data) {
        $scope.posts = data; // response data

    });

    $scope.type= true;
    $scope.category="Any";
    $scope.rating="null";
    $scope.rat=false;
    $scope.showMeta = false;


    $scope.customFilter = function (data) {
        if($scope.category==="Any") return true;
        if (data.genres.toString().indexOf($scope.category)>-1) return true;
        return false;
    };
})