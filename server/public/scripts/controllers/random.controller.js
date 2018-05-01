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


  self.saveImage = function () {
    $http({
      method: 'POST',
      url: '/favorite',
      data: { src: self.src }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
}])