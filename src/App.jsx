import { useState,useEffect } from 'react'

import './App.css'
import groceryData from './Item.json';
import GroceryList from './GroceryList';
import Navbar from './Navbar';
import SearchBar from './Search'
import achiImage from './assets/achi.png';
import Banner from './Banner';
import 'animate.css'; 



function App() {
    const [data,setdata] = useState(groceryData.groceryStoreItems);
    const [hai,sethai] = useState(false);

    const handleSearch = (searchQuery) => {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length === 0) {
        sethai(true);
         if(searchQuery === ''){
          sethai(false);
         }
      } else {
        sethai(false);
      }
      
      setdata(searchQuery === '' ? groceryData.groceryStoreItems : filtered);
      //setdata(filtered);
       
    };

    

  return (
    <>
       <h1 className='flex bg-black text-gray-600 animate__animated animate__fadeInDown'>Grocery Store</h1>
     <Navbar/>
     <SearchBar onSearch={handleSearch} />
    {

      
      hai?  <div>
      <h1>Hum pr to hai hi nhi</h1>
      <img src={achiImage} alt="Achi" className="achi-image"/>
      {/* Other components and content */}
    </div>:
      <div>
      
      <GroceryList groceryStoreItems={data} />
    </div>
    }
    </>
  )
}

export default App
