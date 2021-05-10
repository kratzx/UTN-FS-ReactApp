import React from 'react';

const Row = ({ label, input, index }) => ( 
  <div key={index} className="Row">
    <label> {label} </label>
    <input type={input} />
  </div>
)    

export default Row;