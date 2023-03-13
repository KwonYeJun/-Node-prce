
const http = require('http');
//내장 모듈 node.js

const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Contetn-Type', 'text/html');
  const mainPage = require('./moudule/html');
  console.log(mainPage);

  response.write(mainPage);
  response.end();
});
//규칙이 있다.
//1.함수를 사용 해야 하고
//2.request,response를 받아야 한다.
//3.error뜬다면 값을 받는 위치를 위에 처럼 바꾸어 본다.

server.listen(2080, function (error) {
  if (error) {
    console.log('서버 안돌아감');
  }
  else {
    console.log('서버 돌아감');
  }
});