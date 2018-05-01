console.log('client.js');

const app = angular.module('GiphyApp', ['ngRoute']);
const myKey = 'nr7lnegD2M71DZLZ5KcLHipXbA3bpMu6';

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/search.html',
    controller: 'GiphyController as vm'
  }).when('/random', {
    templateUrl: 'views/random.html',
    controller: 'RandomController as vm'
  }).when('/favorites', {
    templateUrl: 'views/favorites.html',
    controller: 'FavController as vm'
  }).otherwise({
    template: '<h2>404</h2>'
  })
})

