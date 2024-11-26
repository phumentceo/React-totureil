// Demo.js  
import React, { Children, useState } from "react";   
import Sidebar from "./Sidebar";  
import Context from "./Context";

const Demo = () => {  
  
  const [user] = useState("Phument");  
  const [password] = useState("secretPassword");  // Set your password here  

  const contextValue = {  
    name    : 'Phument',
    address : 'Kompong Thom'
  };  
  
  return (  
    <Context.Provider value={contextValue}>  
      <Sidebar />  
    </Context.Provider>  
  );  
}  

export default Demo;