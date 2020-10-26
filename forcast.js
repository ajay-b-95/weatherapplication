const request=require('request')
const geocode=require('./geocode')
const forecast=(latitude, longitude, callback)=>{

const url ='http://api.weatherstack.com/current?access_key=9ca74ef1af4c1a6ac0608f689c02b9d6&query='+ latitude+','+ longitude +'&units=f'

request({url:url,json:true},(err,data)=>{
    if(err){
        callback('Unable to conect to the weather service!',undefined)
    }
    else if(data.body.error){
        callback('Unable to find location',undefined)
    }
    else{
        callback(undefined,'It is currently '+data.body.current.temperature+' and it feels like '+data.body.current.feelslike)
    }

})


}


module.exports=forecast              
