import React from 'react';

const MenuItem = (props) => {
  return(
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.desc}</p>
      <p>{props.data.price}</p>
      <p>{props.data.status}</p>
      <p>Ingredients:<br/>
        {props.data.ingredients.map(key => (
          <span key={key}>{key}</span>
        ))}
      </p>
    </div>
  );
}

export default MenuItem;
