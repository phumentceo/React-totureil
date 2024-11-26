import React, { useContext } from 'react';  
import Context from './Context';

const Sidebar = () => {  
  const user = useContext(Context);  
  
  return (  
    <div>  
      <h2>Sidebar</h2>  
      <p>Welcome, {user.name}</p>  
      <p>Address, {user.address}</p>
    </div>  
  );  
}  

export default Sidebar;