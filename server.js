var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one':{
      title: "Article-One",
      heading: "Article-One",
      date: "5 Sep 2016",
      content: `
            
                <p>
                    Hi! This is all about article-one.
                </p>
                <p>
                   Hope you liked it. 
                </p>`
        },
     'article-two':{
          title: "Article-Two",
          heading: "Article-Two",
          date: "6 Sep 2016",
          content: `
                
                    <p>
                        Hi! This is all about article-two.
                    </p>
                    <p>
                       Hope you liked it. 
                    </p>`
                
            },
     'article-three':{
          title: "Article-Three",
          heading: "Article-Three",
          date: "7 Sep 2016",
          content: `
                
                    <p>
                        Hi! This is all about article-three.
                    </p>
                    <p>
                       Hope you liked it. 
                    </p>`}
    };
 function createTemplate(data)
 {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    
    var htmlTemplate = `<html>
        <head>
            <title> ${title} </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name='viewpoint' content='width-device-width initial scale=1'/>
        </head>
        <body>
            <div>
                <a href="/"> Home </a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
 }

var counter =0; 
app.get('/counter', function (req, res) {
  counter=counter + 1;
  res.send( counter.toString() );
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
var articleName= req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
