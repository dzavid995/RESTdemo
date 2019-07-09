(function () {
    'use strict';

    angular
        .module('app')
        .controller('rentaController', rentaController);

    rentaController.$inject = ['$http'];

    function rentaController($http) {
        var vm = this;

        vm.renta = [];
        vm.getAll = getAll;
        vm.getAffordable = getAffordable;
        vm.deleteBooking = deleteBooking;

        init();

        function init(){
            getAll();
        }

        function getAll(){
            var url = "/renta/all";
            var rentaPromise = $http.get(url);
            rentaPromise.then(function(response){
                vm.renta = response.data;
            });
        }

        function getAffordable(){
            var url = "/renta/affordable/" + 100;
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response){
                vm.renta = response.data;
            });
        }

        function deleteRenta(id){
            var url = "/renta/delete/" + id;
            $http.post(url).then(function(response){
                vm.renta = response.data;
            });
        }
    }
})();