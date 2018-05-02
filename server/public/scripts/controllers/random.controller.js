app.controller('RandomController', ['$http', 'RandomService', function ($http, RandomService) {
  console.log('RandomController works');

  var self = this;
  self.src = RandomService.src
  


  self.getRandom = function () {
    RandomService.getRandom ()


  }

  self.saveImage = function () {
    RandomService.saveImage()

  }


}])