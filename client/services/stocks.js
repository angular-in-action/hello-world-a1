angular.module("app").service("StockService", function () {
	
	var stocks = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
	
	function StockService () {}
	
	StockService.prototype.get = function () {
		return stocks;
	}
	
	StockService.prototype.add = function (stock) {
		stocks.push(stock);
		return this.get();
	}
	
	StockService.prototype.remove = function (stock) {
		stocks.splice(stocks.indexOf(stock), 1);
		return this.get();
	}
})