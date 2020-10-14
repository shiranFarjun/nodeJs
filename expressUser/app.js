const express = require('express')
const app = express()

app.use(express.json());

const users = [{
    firstname: 'shiran',
    lastname: 'farjun',
    id: 1
},
{
    firstname: 'avior',
    lastname: 'farjun',
    id: 2
}];

const products = [{
    name: 'product1',
    price: '3$',
    id: 1
},{ 
    name: 'product2',
    price: '13$',
    id: 2
}];

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/user', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    if (!firstname || !lastname) {
        return res.send('please provide all user fields');
    }
    const found = users.some(el => el.firstname === firstname && lastname === el.lastname);
    if (found) {
        return res.send('User already exists')
    }
    const newUser = {
        firstname:firstname,
        lastname:lastname,
        id: users.length + 1
    };
    console.log(newUser);
    users.push(newUser);
    res.json(newUser);
})


app.delete('/user', (req, res) => {
    const id = req.query.id;
    if (!id) {
        return res.send('please provide id');
    }
    const objRemove = users.filter(function (element) {
        return element.id === id;
    });

    const data = users.splice(objRemove, 1);
    res.status(200).send(data);
});


app.put('/user', (req, res) => {
    if (!req.query.id) {
        return res.send('please provide id');
    }
    
    const objPrev = users.find(function (element) {
        return element.id === parseInt(req.query.id);
    });

    if (!objPrev) {
        return res.send("user not found");
    }

    objPrev.firstname = req.query.firstname;
    objPrev.lastname = req.query.lastname;
    res.send(objPrev);
})

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/product', (req, res) => {
    const {name,price} = req.query;
    if (!name || !price) {
        return res.send('please provide name and price');
    }
    const newProduct = {
        name:name,
        price:price,
        id: products.length + 1
    }
    products.push(newProduct);
    res.send(newProduct);
})

app.get('*', (req, res) => {
    res.status(404).send("Page not found");
})

app.listen(3030, () => {
    console.log('Server is up on port 3030.')
})