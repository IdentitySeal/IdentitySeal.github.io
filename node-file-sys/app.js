const fs = require('fs');
const fetch = require('node-fetch');


fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {

        fs.writeFile('./result/post.json', JSON.stringify(posts), 'utf8', (err) => {
            if (err) throw err;
            console.log('Post JSON file created.')
        });
    });