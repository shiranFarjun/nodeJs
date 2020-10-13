
// Express
// Express is a code-centric web application framework that aims to provide developers with a simple, 
// performant, and unopinionated toolset for creating web application servers.
// The API is kept lightweight and maintains a high degree of consistency with the NodeJS core API


// Hapi
// Hapi is a feature-rich framework that favours configuration over code and attempts to cover a wider range of use cases out of the box.
// It was originally created by a member of WalmartLabs, and it is intended for large teams and large projects. 
// Because of this, it can be a bit boilerplate-heavy for small projects.


//Koa
// Koa is a new web framework designed by the team behind Express,
// which aims to be a smaller, 
// more expressive, and more robust foundation for web applications and APIs.


/////////    Express-
// The basic setup in Express is pretty straightforward:

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const server = app.listen(PORT, () => {
// console.log(`Express is listening to http://localhost:${PORT}`);
// });


////////       Hapi
// The basic setup for Hapi looks very similar to that of Express, 
// although Hapi’s focus on configuration over code is already beginning to make an appearance
// const Hapi = require('hapi');
// const PORT = process.env.PORT || 3000;
// const server = new Hapi.Server(PORT);
// server.start(() => {
// console.log(`Hapi is listening to http://localhost:${PORT}`);
// });


////////       Koa
// Right away you can see the similarities.
// but essentially you just required Koa instead of Express.
// We even have the same app.listen() wrapper function.

// const koa = require('koa');
// const app = koa();
// const PORT = process.env.PORT || 3000;
// const server = app.listen(PORT, () => {
// console.log(`Koa is listening to http://localhost:${PORT}`);
// });


// Advantages of Koa:
// Contains numerous helpful methods and functions while
// still being lightweight as it does not bundle any middleware 
// which allows you to customise it as you please and only include needed features

// Uses the latests JS6 features including generators and async/await 
// which makes it better at handling asynchronous flow and prevents call back hell.

// Overall provides cleaner, more readable async code

// Koa improves robustness, makes writing middleware much more enjoyable and better
// the overall user experience

// Has better error handling through try and catch


// Disadvantages of Koa:
// Small open-source community contributing to the framework,
// meaning more possible bugs and fewer updates as it is harder for 
// the developers team to listen to the community’s feedback.

// Not compatible with express-style middleware which means you need to refactor
// all your previous code if you need to switch to Koa

// Koa uses generators which are not compatible with any other type of Node.
// js framework middle-wares, which in a rich and versatile environment that is node,
//  is a huge drawback;

// Advantages of express:
// Express is overall becoming the standard web framework to use in Node.js
// It is simple, allows you to scale quickly and is flexible in
// its approach meaning it does not put constraints on the developer compared to frameworks like Hapi

// It allows easy integration of third party librairies and middle-wares

// It is well maintained and has a large community contributing to it,
// meaning less bugs and frequent updates

// Focused mainly on the browser, making templating and rendering nearly a
//  core feature of the framework


// Disadvantages of express:
// Code organisation must be carefully done
// otherwise management can get tricky when scaling an application

// As you codebase becomes bigger, 
// refactoring can become a challenge and you can end up easily with a lot of repetitive, less modular code