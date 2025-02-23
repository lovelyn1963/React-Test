import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [color, setColor]= useState('Black');


  return (
    <main><textarea id="message" name="message" rows="5" cols="30"></textarea>
    <button className="Change-color" >Change color</button>
    </main>
  )
}

export default Content