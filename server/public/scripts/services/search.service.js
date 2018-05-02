app.service('SearchService', function ($http) {
    console.log('SearchService is loaded')
    var self = this;
    self.src = {url: ''}


self.getSearch = function (searchIn) {
    $http({
      method: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: myKey, 
        q: searchIn, 
        limit: 1
      },
      
    })
      .then(function(response) {
        console.log(response.data.data[0].images.original);
        console.log(self.src)
        self.src.url= response.data.data[0].images.original.url;
        console.log(self.src)
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

})