﻿namespace prodapp {
    var main = angular
        .module('prodapp', [
            'ngRoute', 'common.service', 'productResourceMock'
        ]);

    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/productList", {
                templateUrl: "/app/products/products-list.html",
                controller: "ProductsListController as vm"
            })
            .when("/productDetail/:productId", {
                templateUrl: "/app/products/productDetailView.html",
                controller: "ProductDetailController as vm"
            })
            .otherwise("/productList");
    }
}