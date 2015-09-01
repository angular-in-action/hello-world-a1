angular.module('app').directive('app', function () {
	return {
		template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Stock Tracker</span>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" ng-href="/dashboard">Dashboard</a>
          <a class="mdl-navigation__link" ng-href="/manage">Manage</a>
          </nav>
        </div>
      </header>
      <main class="mdl-layout__content" style="padding: 20px;">
        <ng-view></ng-view>
      </main>
    </div>
		`,
		controller: AppController,
		controllerAs: 'app',
		bindToController: true
	}
});

function AppController () {
	
}

