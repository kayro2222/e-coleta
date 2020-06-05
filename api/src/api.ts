import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('lista de users');

    response.json([
        'Kayro',
        'Diego',
        'Cuca'
    ]);
});

app.listen(3333);