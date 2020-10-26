const request=require('request')
const geocode=require('./geocode')
const forecast=require('./forcast')

const address=process.argv[2]

if(!address){
    console.log('Please provide an address ')
}else{
    geocode.geocode(address,geocode.callback);
}


