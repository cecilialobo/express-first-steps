const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//definição de uma rota (verb and path) usando a função/método get e ela recebe 2 parametros - o path (tudo que vem depois da porta - antes dos query parameters) e o callback.
//api call, mapping the route, end point
app.get('/posts', (req, res) => {
    const posts = [];
    for (let i = 0; i < index; i++) {
        posts[i] = {
            "id": i,
            "title": database[i].title,
            "content": database[i].content,
            "author": database[i].author,
            "likes": database[i].likes
        } 
    }

    const responseBody = {
        "posts": posts
    }
    res.send(responseBody);
});

const database = {};
let index = 0;

app.post('/posts', (req, res) => {
    database[index] = {
        "likes": 0,
        ...req.body
    }
    
    const responseBody = {
        "id": index,
        ...req.body
    }
    index++;
    res.send(responseBody);
});

app.post('/like', (req, res) => {
    database[req.body.id] = {
        "title": database[req.body.id].title,
        "content": database[req.body.id].content,
        "author": database[req.body.id].author,
        "likes": database[req.body.id].likes + 1
    }
    const responseBody = {
        "id": req.body.id,
        ...database[req.body.id]
    }
    res.send(responseBody);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});