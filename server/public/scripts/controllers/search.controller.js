app.controller('GiphyController', ['$http', function($http) {
  console.log('angular.js');
  var self = this;
  self.src = '';
  self.searchIn = '';


  self.getSearch = function () {
    $http({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: myKey, 
        q: self.searchIn, 
        limit: 1
      },
      
    })
      .then(function(response) {
        console.log(response.data.data[0].images.original);
        self.src = response.data.data[0].images.original.url;
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.saveImage = function() {
    $http({
      method: 'POST',
      url:'/favorite',
      data: {src: self.src}
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }

}])