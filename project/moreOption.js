// var fs = require("fs");
// const express = require('express')

// const app = express()
// app.use(express.json());

// ////////////  Q&A     /////////////////

// const writeFileQA = (file, obj) => {
//     fs.writeFileSync(file, obj);
// }
// const readFileQA = () => {
//     const dataQABuffer = fs.readFileSync("quiz.json");
//     const dataJSON = JSON.parse(dataQABuffer.toString());
//     return dataJSON;
// }


// ////////////  USER     /////////////////

// const writeFileUSER = (file, obj) => {
//     fs.writeFileSync(file, obj);
// }
// const readFileUSER = (file) => {
//     const dataQABuffer = fs.readFileSync(file);
//     const dataJSON = JSON.parse(dataQABuffer.toString());
//     return dataJSON;
// }
// ///////////  RESPONSE ///////////////////////////

// const sendResponse = (response, data, msg, statusCode) => {
//     return response.status(statusCode).json({
//         msg: msg,
//         data,
//     });
// };


// //////////////// Request  -  Quiz    ///////////////////////////////

// app.get('/allQuiz', (req, res) => {
//     const dataJSON = readFileQA();
//     return sendResponse(res, dataJSON, 'view all quiz', 200);
// })

// app.post('/createQA', (req, res) => {
//     const { question, answer1, answer2, answer3, answer4 } = req.body;
//     if (!question || !answer1 || !answer2 || !answer3 || !answer4) {
//         return sendResponse(res, null, 'Please provide question and answers', 400);
//     }
//     const dataJSON = readFileQA();
//     const found = dataJSON.some(el => el.question === question);
//     if (found) {
//         return sendResponse(res, null, 'Question already exists', 400);
//     }
//     const newQuiz = {
//         question,
//         answer1,
//         answer2,
//         answer3,
//         answer4
//         // id: text.length + 1
//     };
//     dataJSON.push(newQuiz);                             //push obj to array
//     console.log('dataJSON', dataJSON)                    //print the array
//     writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'create obj QA', 200);
// })


// app.delete('/allQuiz/deleteById', (req, res) => {
//     const id = parseInt(req.query.id);
//     if (!id) {
//         return sendResponse(res, null, 'please provide id', 400);
//     }
//     const dataJSON = readFileQA();
//     const indexRemove = dataJSON.findIndex(item => item.id === id)
//     dataJSON.splice(indexRemove, 1);

//     writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'The object quiz was successfully deleted', 200);
// });


// app.put('/allQuiz/update', (req, res) => {
//     const id = parseInt(req.query.id);
//     if (!id) {
//         return sendResponse(res, null, 'please provide id', 400);
//     }

//     const dataJSON = readFileQA();
//     const indexRemove = dataJSON.findIndex(item => item.id === id)
//     dataJSON.splice(indexRemove, 1);

//     const newQuiz = {
//         id: id,
//         question: req.body.question,
//         answer1: req.body.answer1,
//         answer2: req.body.answer2,
//         answer3: req.body.answer3,
//         answer4: req.body.answer4,
//         answer5: req.body.answer5
//     };

//     dataJSON.push(newQuiz);                             //push obj to array
//     dataJSON.sort(function (a, b) {
//         return a.id - b.id
//     });
//     writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'The object quiz was successfully update', 200);
// })


// //////////////// Request  -  User    ///////////////////////////////

// app.get('/allUsers', (req, res) => {
//     const dataJSON = readFileUSER("users.json");
//     return sendResponse(res, dataJSON, 'view all users', 200);
// })

// app.get('/allUsers/userById', (req, res) => {
//     const id = parseInt(req.query.id);
//     if (!id) {
//         return sendResponse(res, null, 'please provide id', 400);
//     }

//     const dataJSON = readFileUSER("users.json");
//     const indexObjById = dataJSON.findIndex(item => item.id === id)
//     const data = dataJSON[indexObjById];
//     return sendResponse(res, data, 'view user by id', 200);
// })

// app.post('/allUsers/createUser', (req, res) => {
//     const { name, q1, q2, q3, q4 } = req.body;
//     if (!name || !q1 || !q2 || !q3 || !q4) {
//         return sendResponse(res, null, 'Please provide user data', 400);
//     }
//     const dataJSON = readFileUSER("users.json");
//     const found = dataJSON.some(el => el.name === name);
//     if (found) {
//         return sendResponse(res, null, 'user already exists with this name', 400);
//     }
//     const newUser = {
//         id: dataJSON.length + 1,
//         name,
//         q1,
//         q2,
//         q3,
//         q4
//     };
//     dataJSON.push(newUser);                                  //push obj to array
//     console.log('dataJSON', dataJSON);                       //print the array
//     writeFileUSER("users.json", JSON.stringify(dataJSON));     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'create obj User', 200);
// })


// app.delete('/allUsers/deleteById', (req, res) => {
//     const id = parseInt(req.query.id);
//     if (!id) {
//         return sendResponse(res, null, 'please provide id', 400);
//     }
//     const dataJSON = readFileUSER("users.json");
//     const indexRemove = dataJSON.findIndex(item => item.id === id)
//     dataJSON.splice(indexRemove, 1);

//     writeFileUSER("users.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'The object user was successfully deleted', 200);
// });


// app.put('/allUser/update', (req, res) => {
//     const id = parseInt(req.query.id);
//     if (!id) {
//         return sendResponse(res, null, 'please provide id', 400);
//     }

//     const dataJSON = readFileUSER("users.json");
//     const indexRemove = dataJSON.findIndex(item => item.id === id)
//     dataJSON.splice(indexRemove, 1);

//     const newUser = {
//         id: id,
//         name: req.body.name,
//         q1: req.body.q1,
//         q2: req.body.q2,
//         q3: req.body.q3,
//         q4: req.body.q4
//     };

//     dataJSON.push(newUser);                             //push obj to array
//     dataJSON.sort(function (a, b) {
//         return a.id - b.id
//     });
//    writeFileUSER("users.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
//     return sendResponse(res, dataJSON, 'The object user was successfully update', 200);
// })

// app.get('*', (req, res) => {
//     return sendResponse(res, null, 'Page not found', 400);
// })

// app.listen(3010, () => {
//     console.log('Server is up on port 3010.')
// })












///////////////////////////////////////////////////    

// [
//   {
//     "id": 1,
//     "question": "Your favorite food?",
//     "answer1": "Pizza",
//     "answer2": "hamburger",
//     "answer3": "hot soup",
//     "answer4": "ברביקיו"
//   },

//   {
//     "id": 2,
//     "question": "Do you like wine?",
//     "answer1": "white",
//     "answer2": "red",
//     "answer3": "no",
//     "answer4": "שוקו"
//   },
//   {
//     "id": 3,
//     "question": "זמרים שאתה אוהב לשמוע?",
//     "answer1": "אביתר בנאי",
//     "answer2": "ברי סחרוף",
//     "answer3": "עומר אדם",
//     "answer4": "ישי ריבו",
//     "answer5": "סטטיק"
//   },
//   {
//     "id": 4,
//     "question": "מקום בילוי מועדף עליך?",
//     "answer1": "לטייל בשדות",
//     "answer2": "ים",
//     "answer3": "רכיבה על סוסים",
//     "answer4": "החלקה על הקרח",
//     "answer5": "המיטה שלי"
//   },
//   {
//     "id": 5,
//     "question": "מחיה האובה עליך",
//     "answer1": "סוס",
//     "answer2": "דולפין",
//     "answer3": "כלב",
//     "answer4": "נחש",
//     "answer5": "אוגר"

//   }
// ]