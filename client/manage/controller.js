angular.module('app').controller('Manage', Manage);

function Manage (StockService) {
	
	this.service = StockService;
	this.symbols = this.service.get();
	
}

Manage.prototype.add = function () {
	this.symbols.push(this.stock.toUpperCase())
	this.stock = '';
}

Manage.prototype.remove = function (symbol) {
	this.symbols = this.service.remove(symbol);
}
