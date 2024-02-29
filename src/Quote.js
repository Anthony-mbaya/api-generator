import React from 'react';
import { useState } from 'react';
import './Quote.css';

function Quote(){
    const [quote, setQuote] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('red');
    const fetchApiFun =()=>{
      setTimeout(() =>
        fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
        .then(response => response.json())  
        .then((data) => setQuote(data.joke)) ,1000); 
        const colors = ['#000080','#228B22','#800000','#333333','#00008B','#4B0082','#008080','#696969','#4B0082','#032923','#D2691E','#800000','#614051','#C04000','#808000'];
        let randomColor = Math.floor(Math.random() * colors.length);
        const selectedColor = colors[randomColor];
        setTimeout(() => setBackgroundColor(selectedColor),1000);
    }
    return( 
        <>
        <button onClick={fetchApiFun} className='btn' >Generate Quote</button>
        <div style={{color:'#c2bfbf', backgroundColor:backgroundColor}}  className="quote-box">
          <h1>Generate joke quotes from joke API</h1>
          <p>{quote}</p> 
        </div>
        </>
    )  
    
}
export default Quote;