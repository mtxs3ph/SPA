(function () {
    'use strict';
    var app = angular.module('main-menu-directives',[]);
    
    app.directive("mainMenu", function () {
        return { 
            retrict: 'E',
            tempalteURL: "main-menu.html"
        };
    });
    
})();
