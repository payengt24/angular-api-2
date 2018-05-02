app.controller('SearchController', ['$http', 'SearchService', function($http, SearchService) {
  console.log('SearchController works');
  var self = this;
  console.log(SearchService)
  self.src = SearchService.src;
  self.searchIn = '';

  self.getSearch = function () {
    SearchService.getSearch(self.searchIn);
  }

  self.saveImage = function () {
    SearchService.saveImage();
  }


}])