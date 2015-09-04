angular.module("app").service("StockService", StockService)
	
var symbols = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR', 'CRM', 'NFLX'];
var http;

function StockService ($http) {
	http = $http;
}
StockService.prototype.get = function () {
	return symbols;
};
StockService.prototype.add = function (stock) {
	symbols.push(stock);
	return this.get();
};
StockService.prototype.remove = function (stock) {
	symbols.splice(symbols.indexOf(stock), 1);
	return this.get();
};
StockService.prototype.load = function () {
	var self = this;
	this.loading = true;
	return http.get('/api/snapshot?symbols=' + symbols.join())
	.then(function (stocks) {
		self.loading = false;
		return self.stocks = stocks.data;
	});
}
