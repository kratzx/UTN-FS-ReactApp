import React from 'react';

const Submit = ({ text }) => (
  <div key='submit' className="Submit">
    <input type="submit" value={text}/>
  </div>
)
export default Submit;