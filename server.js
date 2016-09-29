var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title: 'Article one',
    heading: 'Welcome to sem 1',
    content: 'This is going to talk about your first semester. All the best with it.'
};
function createTemplate(data)
{
    

    var htmlTemplate = `
    <html>
        <head>
            <title> ${data.title} </title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <div>Welcome to sem 1</div>
            <h>
                ${data.heading}
            </h>
            <p> 
            ${data.content}
            </p>
        </body>
    </html> 
    ` ; 
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

app.get('/articleone', function (req, res) {
  res.send(createTemplate(articleone));
});
app.get('/articletwo', function (req, res) {
  res.send(createTemplate(articletwo));
});
app.get('/articlethree', function (req, res) {
   res.send(createTemplate(articlethree));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
