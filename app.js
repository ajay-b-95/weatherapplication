const request=require('request')

const url='http://api.weatherstack.com/current?access_key=9ca74ef1af4c1a6ac0608f689c02b9d6&query=37.8267,-122.4233'

request({url:url,json:true},(err,res)=>{
    //console.log(res)
    if(err){
        console.log("unable to connect to he server")
    }
    //if in api the location is not provided
    else if(res.body.error){
        console.log('Unable to find location')
    }
    else{
        console.log(res.body)
        console.log('It is currently '+res.body.current.temperature+' and it feels like '+res.body.current.feelslike)
    }
    
})


//lat lon co-ordinate code

const getcodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWpheWIiLCJhIjoiY2tnOW93Y2EzMDR4azJ6bzVsaTJ5cDMxYiJ9.uytf0Mz_XThMP_-KvnXdRA&limit=1"

request({url:getcodeURL,json:true},(err,res)=>{
    //low level error such as connectivity check
    if(err){

        console.log('unable to connect to the server')
    }
    //features will have 0 elements if the api is wrong place e.g. https://api.mapbox.com/geocoding/v5/mapbox.places/1232.sdf.json?access_token=pk.eyJ1IjoiYWpheWIiLCJhIjoiY2tnOW93Y2EzMDR4azJ6bzVsaTJ5cDMxYiJ9.uytf0Mz_XThMP_-KvnXdRA&limit=1"
    else if(res.body.features.length==0){
        console.log('Unable to find location') 
    }
    else{
        const longitude = res.body.features[0].center[0]
        const latitide = res.body.features[0].center[1]

console.log(latitide,longitude)
    }
})


