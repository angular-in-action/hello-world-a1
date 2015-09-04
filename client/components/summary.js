angular.module('app').directive('summary', function () {
	return {
		templateUrl: 'client/components/summary.html',
		controller: SummaryController,
		controllerAs: 'summary',
		scope: {stock: '=data'},
		bindToController: true
	}
});

function SummaryController () {
	
}
SummaryController.prototype.isNegative = function () {
	return !(!this.stock || this.stock.change >= 0);
}
SummaryController.prototype.isPositive = function () {
	return !(!this.stock || this.stock.change <= 0);
}
