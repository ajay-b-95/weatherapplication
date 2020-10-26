const request=require('request')
const forecast=require('./forcast')

function geocode(adress,callback){

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiYWpheWIiLCJhIjoiY2tnOW93Y2EzMDR4azJ6bzVsaTJ5cDMxYiJ9.uytf0Mz_XThMP_-KvnXdRA&limit=1'

    request({url:url,json:true},(err,res)=>{
        if(err){
        callback('Unable to connect to location services!')
        } else if(res.body.features.length==0){
            callback('Unable to find location . Try another search',undefined)

        }     
        else{
            callback(undefined,{
                latitude:res.body.features[0].center[0],
                longitude:res.body.features[0].center[1],
                location:res.body.features.place_name
            })
        }
    
    })
}

// param is for forecast
function callback(err,data){
    if(err){
      return console.log('Unalble to Connect to the server of geocode')
    }
    console.log('Error',err)
    console.log('Data',data)

    forecast(data.longitude,data.latitude,(param1,param2)=>{
        if(param1){
            return console.log('Unalbe to connect to the server of forecasT')
        }
             console.log('Error',param1)
             console.log('Data',param2)
    })

}

module.exports={geocode:geocode,
                callback:callback,
                }