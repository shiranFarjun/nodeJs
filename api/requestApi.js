const request= require('request');
 

// Dog API
//Access and integrate over 20,000 dog images based on the Stanford Dogs Dataset.
const url= 'https://dog.ceo/api/breeds/list/all';

request({url:url},(err,response)=>{
    const data=JSON.parse(response.body);
    console.log(data);
})