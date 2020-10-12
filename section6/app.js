const request= require('request');

const urlMap= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Jerusalem.json?access_token=pk.eyJ1Ijoic2hpcmFuZmFyanVuIiwiYSI6ImNrZnk5YzgwaDA1c3IydG9ieWQ3YjZsMzUifQ.RHuZGNdnpqlNaqayAk9OaA'


request({url:urlMap,json:true},(err,response)=>{
    const lat=response.body.features[0].center[0];
    console.log(lat);
})