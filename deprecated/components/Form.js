import React from 'react';
import Row from './Row';
import Submit from './Submit';

const Form = ({ rows, text }) => (
  <div key={text + 'form'} className="Form">
    {rows.map( (row, index) => ( 
      <Row label={row.label} input={row.input} index={index} />
    ))}
    <Submit text={text} /> 
  </div>
)

export default Form;