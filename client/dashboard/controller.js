angular.module('app').controller('Dashboard', Dashboard);

function Dashboard (StockService) {
	
	var self = this;
	
	this.symbols = StockService.get();

	StockService.load(this.symbols)
	.then(function (stocks) {
		self.stocks = stocks;
	});
}
