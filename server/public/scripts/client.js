console.log('client.js');

const app = angular.module('GiphyApp', []);
const myKey = 'nr7lnegD2M71DZLZ5KcLHipXbA3bpMu6';


app.controller('GiphyController', ['$http', function($http) {
  console.log('angular.js');
  var self = this;
  self.src = '';
  self.searchIn = '';
  

  self.getSearch = function () {
    $http({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {api_key: myKey, q: self.searchIn, limit: 1},
      
    })
      .then(function(response) {
        console.log(response.data.data);
        self.src = response.data.data[0].images.original.url;
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}])

app.controller('RandomController', ['$http', function($http) {
  console.log('random');

  var self = this;

  self.src = '';
  
  self.getRandom = function () {
    $http({
      method:'GET', 
      url: 'https://api.giphy.com/v1/gifs/random',
      params: {api_key: myKey, limit: 1}
    })
      .then(function(response) {
        console.log(response.data.data.images.original.url);
        self.src = response.data.data.images.original.url;
      })
  }
}])