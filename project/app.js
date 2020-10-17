var fs = require("fs");
const express = require('express')

const app = express()
app.use(express.json());

////////////  Q&A     /////////////////

const writeFileQA = (file, obj) => {
    fs.writeFileSync(file, obj);
}
const readFile = (file) => {
    const dataQABuffer = fs.readFileSync(file);
    const dataJSON = JSON.parse(dataQABuffer.toString());
    return dataJSON;
}


////////////  USER     /////////////////

// const writeFileUSER = (file, obj) => {
//     fs.writeFileSync(file, obj);
// }
// const readFileUSER = (file) => {
//     const dataQABuffer = fs.readFileSync(file);
//     const dataJSON = JSON.parse(dataQABuffer.toString());
//     return dataJSON;
// }
///////////  RESPONSE ///////////////////////////

const sendResponse = (response, data, msg, statusCode) => {
    return response.status(statusCode).json({
        msg: msg,
        data,
    });
};


//////////////// Request  -  Quiz    ///////////////////////////////

app.get('/Quiz', (req, res) => {
    const dataJSON = readFile();
    return sendResponse(res, dataJSON, 'view all quiz', 200);
})

app.post('/Quiz/createQA', (req, res) => {
    const { question, answer1, answer2, answer3, answer4 } = req.body;
    if (!question || !answer1 || !answer2 || !answer3 || !answer4) {
        return sendResponse(res, null, 'Please provide question and answers', 400);
    }
    const dataJSON = readFile("quiz.json");
    const found = dataJSON.some(el => el.question === question);
    if (found) {
        return sendResponse(res, null, 'Question already exists', 400);
    }
    const newQuiz = {
        question,
        answer1,
        answer2,
        answer3,
        answer4
        // id: text.length + 1
    };
    dataJSON.push(newQuiz);                             //push obj to array
    console.log('dataJSON', dataJSON)                    //print the array
    writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
    return sendResponse(res, dataJSON, 'create obj QA', 200);
})


app.delete('/Quiz/deleteById', (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return sendResponse(res, null, 'please provide id', 400);
    }
    const dataJSON = readFile("quiz.json");
    const indexRemove = dataJSON.findIndex(item => item.id === id)
    dataJSON.splice(indexRemove, 1);

    writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
    return sendResponse(res, dataJSON, 'The object quiz was successfully deleted', 200);
});


app.put('/Quiz/update', (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return sendResponse(res, null, 'please provide id', 400);
    }

    const dataJSON = readFile("quiz.json");
    const indexRemove = dataJSON.findIndex(item => item.id === id)
    dataJSON.splice(indexRemove, 1);

    const newQuiz = {
        id: id,
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer5: req.body.answer5
    };

    dataJSON.push(newQuiz);                             //push obj to array
    dataJSON.sort(function (a, b) {
        return a.id - b.id
    });
    writeFileQA("quiz.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
    return sendResponse(res, dataJSON, 'The object quiz was successfully update', 200);
})


//////////////// Request  -  User    ///////////////////////////////

app.get('/quiz/allUsers', (req, res) => {
    const dataJSON = readFile("users.json");
    return sendResponse(res, dataJSON, 'view all users', 200);
})

app.post('/quiz/createUser', (req, res) => {                   //********* */
    const { userName, q1, q2, q3, q4 } = req.body;
    if (!userName || !q1 || !q2 || !q3 || !q4) {
        return sendResponse(res, null, 'Please provide user data', 400);
    }
    const dataJSON = readFileUSER("users.json");
    const found = dataJSON.some(el => el.userName === userName);
    if (found) {
        return sendResponse(res, null, 'user already exists with this name', 400);
    }
    const newUser = {
        id: dataJSON.length + 1,
        userName: userName,
        ans: [q1, q2, q3, q4],
        friendsResults: []
    };
    dataJSON.push(newUser);                                  //push obj to array
    writeFile("users.json", JSON.stringify(dataJSON));     //write to the file all users
    writeFile(userName.toString() + ".json", JSON.stringify(newUser));  //create new unique file with data for this user
    return sendResponse(res, dataJSON, 'create obj User', 200);
})


app.post('/quiz/createUser/createFriend', (req, res) => {                   //********* */
    const { userName, q1, q2, q3, q4 } = req.body;
    if (!userName || !q1 || !q2 || !q3 || !q4) {
        return sendResponse(res, null, 'Please provide user data', 400);
    }

    const id = parseInt(req.query.id);       //get the id parent from the link as parms
    const dataJSON = readFileUSER("users.json");

    const indexObjById = dataJSON.findIndex(item => item.id === id)
    const name = dataJSON[indexObjById].userName;                     //i need get the name prop to know which file to put the information

    const dataJSON = readFile("users.json");
    const found = dataJSON.some(el => el.name === name);
    if (found) {
        return sendResponse(res, null, 'user already exists with this name', 400);
    }
    const newUser = {
        id: dataJSON.length + 1,
        userName: userName,
        ans: [q1, q2, q3, q4],
        friendsResults: []
    };
    dataJSON.push(newUser);                                  //push obj to array
    writeFile("users.json", JSON.stringify(dataJSON));     //write to the file all users
    writeFile(userName.toString() + ".json", JSON.stringify(newUser));  //create new unique file with data for this user
    return sendResponse(res, dataJSON, 'create obj User', 200);
})

app.get('/quiz/results/userById', (req, res) => {             ///////************** */
    const id = parseInt(req.query.id);
    if (!id) {
        return sendResponse(res, null, 'please provide id', 400);
    }
    const dataJSON = readFileUSER("users.json");
    if (id > dataJSON.length) {
        return sendResponse(res, null, 'the id is out of thr range', 400);
    }
    const indexObjById = dataJSON.findIndex(item => item.id === id)
    const nameUser = dataJSON[indexObjById].name;

    const data = readFileUSER(nameUser.toString() + ".json");
    console.log('info user by id', data)
    return sendResponse(res, data, 'view user by id', 200);
})


app.get('/quiz/results/userName', (req, res) => {             ///////************** */
    const userName = req.query.userName;
    if (!userName) {
        return sendResponse(res, null, 'please provide userName', 400);
    }
    const dataJSON = readFileUSER("users.json");

    const indexObj = dataJSON.findIndex(item => item.userName === userName)
    const nameUser = dataJSON[indexObj].name;

    const data = readFileUSER(nameUser.toString() + ".json");
    return sendResponse(res, data, 'view user by user name', 200);
})



app.delete('/allUsers/deleteById', (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return sendResponse(res, null, 'please provide id', 400);
    }
    const dataJSON = readFileUSER("users.json");
    const indexRemove = dataJSON.findIndex(item => item.id === id)
    dataJSON.splice(indexRemove, 1);

    writeFileUSER("users.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
    return sendResponse(res, dataJSON, 'The object user was successfully deleted', 200);
});


app.put('/allUser/update', (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return sendResponse(res, null, 'please provide id', 400);
    }

    const dataJSON = readFileUSER("users.json");
    const indexRemove = dataJSON.findIndex(item => item.id === id)
    dataJSON.splice(indexRemove, 1);

    const newUser = {
        id: id,
        userName: req.body.userName,
        name: req.body.name,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4
    };

    dataJSON.push(newUser);                             //push obj to array
    dataJSON.sort(function (a, b) {
        return a.id - b.id
    });
    writeFileUSER("users.json", JSON.stringify(dataJSON))     //write to the file the new array with the new obj
    return sendResponse(res, dataJSON, 'The object user was successfully update', 200);
})

app.get('*', (req, res) => {
    return sendResponse(res, null, 'Page not found', 400);
})

app.listen(3010, () => {
    console.log('Server is up on port 3010.')
})












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