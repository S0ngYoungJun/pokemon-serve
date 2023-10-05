const http = require('http')
const server = http.createServer(function(request,response){
  console.log(request.url);
  if(request.url === "/"){
    response.writeHead(200, {"Content-Type": "text/html"})
  let main = `<html><head>
  <style>
  #root{
    width:100vw;
    height:100vh;
  }
  a:visited { color:green; }
  </style>
  </head> 
  <body>
  <div id="root">
  <h1> 
  <a href = "http://localhost:1234/sub1">sub1 move</a>
  <a href = "javascript:link()">sub1 move 2second</a>
  <a href = "http://localhost:1234/sub2">sub2 move</a>
  <a href = "http://localhost:1234/sub3">sub3 move</a>
  </h1>
  </div>
  <script>
  let b = document.body.children[0]
  console.dir(b)
  let c = document.body.children[0].children[0].children[1]
  let de = document.body.children[0].children[0].style.fontSize = "100px"

  function link() {
    setTimeout(function() {
        location.href = 'http://localhost:1234/sub1';
    }, 5000);
  }

  c.addEventListener("click", (event) => {
    b.style.filter = "blur(5px)"
    let createDiv = document.createElement('div')
    document.body.appendChild(createDiv)
    let div = document.body.children[1]
    div.textContent = "Loding....."
    div.style.top = "40vh"
    div.style.left = "15vw"
    div.style.height = "30vh";
    div.style.fontSize = "8vw";
    div.style.width = "80vw";
    div.style.position = "absolute";
  
  })

  </script>
  </body></html>`
  response.end(main);
  }
  if(request.url === "/sub1"){
    response.writeHead(200, {"Content-Type": "text/html"})
  let sub = `<html><head></head> <body><h1> <a href = "http://localhost:1234/">main move</a></h1></body></html>`
  response.end(sub);
  }
  if(request.url === "/sub2"){
    response.writeHead(200, {"Content-Type": "text/html"})
  let sub = `<html><head></head> <body><h1> <a href = "http://localhost:1234/">main move</a></h1></body></html>`
  response.end(sub);
  }
  if(request.url === "/sub3"){
    response.writeHead(200, {"Content-Type": "text/html"})
  let sub = `<html><head></head> <body><h1> <a href = "http://localhost:1234/">main move</a></h1></body></html>`
  response.end(sub);
  }

});

server.listen(1234);
