app.service('RandomService', function ($http) {
    console.log('RandomService is loaded')
    var self = this;
    self.src = {url: ''}

  self.getRandom = function () {
    $http({
      method:'GET', 
      url: 'https://api.giphy.com/v1/gifs/random',
      params: {api_key: myKey, limit: 1}
    })
      .then(function(response) {
        console.log(response.data.data.images.original.url);
        console.log(self.src.url)
        self.src.url = response.data.data.images.original.url;
        console.log(self.src.url)
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

})