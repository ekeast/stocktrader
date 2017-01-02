(function(){
    function StockCtrl($scope, $http) {
       	$scope.symbol = "";
	    $scope.result={};
        
        $scope.newStock = {
            symbol: null, 
            price: null, 
            shares: null
        };


        $scope.getData = function() {

            var url = "http://query.yahooapis.com/v1/public/yql";
            var symbol = $scope.symbol;
            var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" +$scope.symbol+ "')");

            /*
            Build the string to use with with $http get to retrieve JSON data from Yahoo Finance API
            Required format is:
            http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('aapl')&format=json&diagnostics=true&env=http://datatables.org/alltables.env
            */
            var str1 = url.concat("?q=",data);
            str1=str1.concat("&format=json&diagnostics=true&env=http://datatables.org/alltables.env");


            $http.get(str1)

            .success(function(data, status, headers, config) {
                console.log("success data, status="+ JSON.stringify(data) + status);
                if(data.query.results == null) {
                    console.log("No Valid Results could be Returned!!")
                }
                else {
                    
                    $scope.newStock.price = data.query.results.quote.LastTradePriceOnly;
                    $scope.result.Name = data.query.results.quote.Name;
                    $scope.result.Exchange = data.query.results.quote.StockExchange;
                    $scope.result.MarketCap = data.query.results.quote.MarketCapitalization;
                    $scope.result.LastPrice = data.query.results.quote.LastTradePriceOnly;
                    $scope.result.PercentChange = data.query.results.quote.PercentChange;
                    $scope.result.YearRange = data.query.results.quote.YearRange;
                }
            })

            .error(function(data, status, headers, config) {
                var err = status + ", " + data;
                    $scope.result = "Request failed: " + err;
            });
        }
    

    
        var portfolio = firebase.database();

        $scope.buyStock = function(symbol, shares, price) {
          portfolio.ref('stocks/').set({
            symbol: newStock.symbol,
            shares: newStock.shares, 
            price: newStock.price
          });
        }
    
    }
        
    angular 
        .module('stocktrader')
        .controller('StockCtrl', ['$scope', '$http', StockCtrl]);
})();