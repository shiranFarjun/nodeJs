const url = require('url');

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
}, {
    name: 'product2',
    price: '13$',
    id: 2
}];


module.exports = (req, res) => {
    const Url = url.parse(req.url, true);              //var url = new Url('https://github.com/foo/bar');

    if (Url.pathname === '/users' && req.method === 'GET') {

        return sendResponse(res, JSON.stringify(users), 200, { 'Content-Type': 'text/plain' });

    } else if (Url.pathname === '/user' && req.method === 'POST') {

        const firstname = Url.query.firstname;
        const lastname = Url.query.lastname;
        if (!firstname || !lastname) {
            return sendResponse(res, 'please provide all user fields', 400, { 'Content-Type': 'text/plain' });
        }
        const found = users.some(el => el.firstname === firstname && lastname === el.lastname);
        if (found) {
            return sendResponse(res, 'User already exists', 400, { 'Content-Type': 'text/plain' });
        }
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            id: users.length + 1
        };
        users.push(newUser);
        return sendResponse(res, JSON.stringify(newUser), 400, { 'Content-Type': 'text/plain' });

    } else if (Url.pathname === '/user' && req.method === 'DELETE') {

        const id = Url.query.id;
        if (!id) {
            return sendResponse(res, 'please provide id', 400, { 'Content-Type': 'text/plain' });
        }

        const objRemove = users.filter(function (element) {
            return element.id === id;
        });
        const indexRemove = users.indexOf(objRemove);
        const data = users.splice(indexRemove, 1);
        return sendResponse(res, JSON.stringify(data), 200, { 'Content-Type': 'text/plain' });

    } else if (Url.pathname === '/user' && req.method === 'PUT') {

        if (!Url.query.id) {
            return sendResponse(res, 'please provide id', 400, { 'Content-Type': 'text/plain' });
        }
        const objPrev = users.find(function (element) {
            return element.id === parseInt(Url.query.id);
        });
        if (!objPrev) {
            return sendResponse(res, 'user not found', 400, { 'Content-Type': 'text/plain' });
        }
        objPrev.firstname = Url.query.firstname;
        objPrev.lastname = Url.query.lastname;
        return sendResponse(res, JSON.stringify(objPrev), 200, { 'Content-Type': 'text/plain' });

    } else if (Url.pathname === '/products' && req.method === 'GET') {

        return sendResponse(res, JSON.stringify(products), 200, { 'Content-Type': 'text/plain' });
    }
    else if (Url.pathname === '/product' && req.method === 'POST') {

        const name = Url.query.name;
        const price = Url.query.price;
        if (!name || !price) {
            return sendResponse(res, 'please provide name and price', 400, { 'Content-Type': 'text/plain' });
        }
        const newProduct = {
            name: name,
            price: price,
            id: products.length + 1
        }
        return sendResponse(res, JSON.stringify(newProduct), 200, { 'Content-Type': 'text/plain' });
    }
}

const sendResponse = (response, data, statusCode) => {
    response.writeHead(statusCode, {
        'Content-type': 'text/plain'
    });
    response.write(data);
    response.end();
};