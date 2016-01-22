(function () {
    'use strict';

    angular
        .module('MainMenuModule')
        .controller('MainMenuController', controller);

    controller.$inject = ['$location']; 

    function controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'MainMenuModule';

        activate();

        function activate() { }
    }
})();
