<!--PRUEBA  GET -->

var settings = {
  "url": "https://jsonplaceholder.typicode.com/posts/1/comments",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
