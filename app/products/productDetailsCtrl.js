var app;
(function (app) {
    var productDetails;
    (function (productDetails) {
        var ProductDetailsCtrl = (function () {
            function ProductDetailsCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var id = $routeParams.productId;
                var productRescoure = dataAccessService.getProductResource();
                productRescoure.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailsCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailsCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductDetailsCtrl", ProductDetailsCtrl);
    })(productDetails = app.productDetails || (app.productDetails = {}));
})(app || (app = {}));
