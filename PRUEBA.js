<!--PRUEBA  GET -->

var settings = {
  "url": "https://jsonplaceholder.typicode.com/posts/1/comments",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


<!--PRUEBA  POST -->

var settings = {
  "url": "https://jsonplaceholder.typicode.com/posts/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/javascript"
  },
  "data": "[\r\n    {\r\n        \"userId\": 10,\r\n        \"id\": 101,\r\n        \"title\": \"timoteo lopez santiz\",\r\n        \"body\": \"prueba de insersion de post\\nipsa voluptas error itaque dicta in\\nautem qui minus magnam et distinctio eum\\naccusamus ratione error aut\"\r\n    }\r\n]",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

<!--PRUEBA  PUT -->
var settings = {
  "url": "https://jsonplaceholder.typicode.com/posts/",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/javascript"
  },
  "data": "[\r\n    {\r\n        \"userId\": 10,\r\n        \"id\": 100,\r\n        \"title\": \"timoteo lopez santiz\",\r\n        \"body\": \"EDITAR O REEMPLAZAR CONTENIDO EXISTENTE DEL \\nipsa voluptas error itaque dicta in\\nautem qui minus magnam et distinctio eum\\nat\"\r\n    }\r\n]",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

<!--PRUEBA  DELETE -->

var settings = {
  "url": "https://jsonplaceholder.typicode.com/posts/",
  "method": "DELETE",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/javascript"
  },
  "data": "[\r\n    {\r\n        \"id\": 1,\r\n    },\r\n]",
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

