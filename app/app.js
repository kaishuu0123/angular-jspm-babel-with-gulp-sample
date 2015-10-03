import 'angular';
import 'angular-ui-router';
import { ListController } from './components/list/list';

angular.module('myApp', ['ui.router'])
  .config( function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/',
        templateUrl: 'components/list/list.html',
        controller: 'ListController as list'
      });

      $urlRouterProvider.otherwise('/');
  })
  .controller('ListController', ListController);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});
