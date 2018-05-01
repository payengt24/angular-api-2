app.controller('FavController', ['$http', function($http) {
  console.log('FavController loaded');

  var self = this;

  self.src = '';

  self.getFavorites = function () {
    $http({
      method: 'GET', 
      url: '/favorite'
    })
      .then(function(response) {
        console.log(response.data);
        self.src = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
    }

    self.getFavorites();
}])