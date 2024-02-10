import { useState } from 'react';
import './App.css'
import { Button,TextField } from '@mui/material'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  const handleClick = (color) => {
   
    if (color === 'white'||color == 'yellow' ||color =='gray') {
      setBackgroundColor(color);
      setTextColor('black');
    }else if(color === 'black'||color === 'yellow'){
      setBackgroundColor(color);
      setTextColor('white');
    }else {
      setBackgroundColor(color);
      setTextColor('white');
    }
  };

  const handleChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor }} className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className={`text-${textColor}`}>Background Color Changer</h1>
      <div className="p-3 mt-5 rounded bg-white d-flex">
        <TextField className='w-100' id="outlined-basic" label="Enter a Color" variant="outlined" onChange={handleChange} />
      </div>
      <div className='mt-5'>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "black" }} onClick={() => handleClick('black')}>Black</Button>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "red" }} onClick={() => handleClick('red')}>RED</Button>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "blue" }} onClick={() => handleClick('blue')}>BLUE</Button>
      </div>
      <div>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "white", color: "black" }} onClick={() => handleClick('white')}>white</Button>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "yellow", color: "black" }} onClick={() => handleClick('yellow')}>yellow</Button>
        <Button className='m-4 py-2' variant="contained" style={{ backgroundColor: "gray", color: "black" }} onClick={() => handleClick('gray')}>gray</Button>
      </div>
    </div>
  );
}

export default App
