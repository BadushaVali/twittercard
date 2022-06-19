
import React from "react";  
import "./App.css";
import Card from "./Card";
import Object from "./Data";




 const App = ()=>{
  
  return(
    <>
      {Object.map((i)=>{
        return(
          <Card
            profilepic = {i.profilepic}
            name = {i.name}
            content = {i.content}
          />
        );
      })}
    </>
  );
}
export default App;