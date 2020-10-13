const https = require('https');
const url='https://pokeapi.co/api/v2/pokemon/ditto';



//Pokémon
//All the Pokémon data you’ll ever need in one place.
const request=https.request(url,(response)=>{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk.toString();
    })
    response.on('end',()=>{
        const body=JSON.parse(data);
        console.log(body);
    })
})
request.on('error',(err)=>{
    console.log('An arr',err);
})

request.end();