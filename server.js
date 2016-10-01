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
    var htmlTemplate = `<html>
        <head>
            <title> ${data.title} </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name='viewpoint' content='width-device-width initial scale=1'/>
        </head>
        <body>
            <div>
                <a href="/"> Home </a>
            </div>
            <hr>
            <h3>
                ${data.heading}
            </h3>
            <div>
                ${data.date}
            </div>
            <div>
                ${data.content}
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
 }
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get(':articleNames', function (req, res) {
var articleNames= req.params.articleNames;
res.send(createTemplate(articles[articleNames]));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
