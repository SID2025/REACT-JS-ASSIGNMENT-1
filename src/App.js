import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Nav from './Nav';

function App() {

  const [cartCount, setCartCount] = useState(0);

  const setCount =()=>
  {
    setCartCount(cartCount+1);
  };

  
  const remCount=()=>{
    setCartCount(cartCount-1);
  }
 
  return (<div>
     {/* ..We have taken syntax as props={function}.. */}
    <Nav cartCount={cartCount} remCount={remCount}/>; 
    <Header/>;
    <Section setCount={setCount} remCount={remCount}/>;


</div>
    
      )
};

export default App;
