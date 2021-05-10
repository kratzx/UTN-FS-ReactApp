import React from 'react';
import { Link } from "react-router-dom";

const Detail = ({ id }) => {
  return (
    <div key={'detail' + id}>
      <button> <Link to={"/product/" + id}> View Details </Link> </button>
    </div>
  );
}
export default Detail;