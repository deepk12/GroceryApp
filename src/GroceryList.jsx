import React from 'react';
//import SearchBar from './Search';
import './Grocerylist.css';
import { useState, useEffect } from 'react';


const GroceryList = ({ groceryStoreItems }) => {
    
    console.log("grocery list");

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      // Trigger the animation after a delay (adjust as needed)
      const delay = setTimeout(() => {
        setAnimate(true);
      }, 500);
  
      return () => clearTimeout(delay);
    }, []);
  
  return (
    
    <div>
      
     
      <ul  >
        {groceryStoreItems.map((item, index) => (
          <li key={index} className={animate ? 'animate' : ''}>
            <h3>{item.name}</h3>
            <img src={item.pic} alt={item.name} style={{ maxWidth: '200px' }} />
            <button>Add to Cart: ${item.price.toFixed(2)}</button>
            
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
