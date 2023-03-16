export const GetWeather=(State)=>{
    console.log(State)
    return async (dispatch)=>{
        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${State.Coords.lat}&lon=${State.Coords.lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`)
        let data=await res.json()
        console.log(data)
        dispatch({type:'ADD_WEATHER',payload:data})
}
}