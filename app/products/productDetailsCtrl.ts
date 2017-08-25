module app.productDetails{

    interface IProductDetailsModel{
        title:string;
        product:app.domain.IProduct;
    }
    interface IProductParams extends ng.route.IRouteParamsService{
        productId:number
    }
    class ProductDetailsCtrl implements IProductDetailsModel{
        title: string;
        product: domain.IProduct;

        static $inject=["$routeParams","dataAccessService"]
        constructor(private $routeParams:IProductParams
            ,private dataAccessService: app.common.DataAccessService) {
            
                this.title = "Product Detail";

                var id = $routeParams.productId;
                var productRescoure= dataAccessService.getProductResource();
                
                productRescoure.get({productId: id},
                    (data: app.domain.IProduct)=>{
                this.product = data;
            });
        }
    } 
    
    angular
    .module("productManagement")
    .controller("ProductDetailsCtrl",
        ProductDetailsCtrl);
}