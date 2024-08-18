"use client";

import Home from "./Home";  
import ReduxWrapper from "./ReduxWrapper"; 
    
export default function PageClient({items}) {
  return (
    <ReduxWrapper>
        <Home items={items} />
    </ReduxWrapper>     
  ) 
}            