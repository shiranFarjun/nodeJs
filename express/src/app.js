const path = require('path');             //The path module provides utilities for working with file and directory paths.
const express = require('express');


const app = express();

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath= path.join(__dirname, '../templates')
const partialsPath= path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views',viewPath)
hsb.registerP

//setup static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name:'Andrew Mead'
    });
})

app.get('/about', (req, res) => {
    res.render('index',{
        title: 'About me',
        name:'Shiran farjun'
    });
})



app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location:'Philadelphia'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})



// const path = require('path');             //The path module provides utilities for working with file and directory paths.
// const express = require('express');


// const app = express();

// // app.get('',(req,res)=>{
// //     res.send('Hello')
// // });


// console.log(__dirname);
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath));


// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'shiran'
//     },
//     {
//         name: 'avior'
//     }]);
// })

// app.get('/about', (req, res) => {
//     res.send('About');
// })

// app.get('', (req, res) => {
//     res.send('<h1>shiran</h1>');
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })