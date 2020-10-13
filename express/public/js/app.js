const path = require('path');             //The path module provides utilities for working with file and directory paths.
const express = require('express');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name:'Andrew Mead'
    });
})

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name:'Andrew Mead'
    });
})

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location:'Philadelphia'
//     });
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})