import React, { useEffect, useState } from 'react'
import './Tempapp.css'

export const Tempapp = () => {
   const[city ,setCity]= useState(null);
   const[search ,setSearch]=useState("rohtak");
   
    useEffect(()=>{
      const fatchApi = async()=>{
        const url=`
        http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=153d55b3c3981c4e2659bca90b189a0e`
        const response = await fetch(url)
        console.log(response);
         const resJson = await response.json()
         console.log(resJson);
         setCity(resJson.main)
      };
      fatchApi();

    } ,[search])
    
  return (
  <>
  <div className='box'>
    <div className='inputData'>
        <input type="search" 
        value={search}
        
         onChange={(event)=>{setSearch(event.target.value)}
         }
        className='inputField'></input>
        </div>

        {!city ? (<p>No DATA FOUND</p>) :(
          <div> 
  <div className='info'>
  <h2 className='location'>
    <i className='fas fa-street-view' ></i>{search}
   </h2>
<h1 className='temp'>{city.temp}°C</h1> 
   <p className='tempmin_max'> MAX:{city.temp_max}°C |MIN:{city.temp_min}°C</p>
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   --
  <div className='wave1'></div>
  <div className='wave2'></div>
  <div className='wave3'></div>
  </div>
  
  
        )}
        </div>
      
  </>
    
  )
}
export default Tempapp;