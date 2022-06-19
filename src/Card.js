import React from "react";

const Card = (props)=>{
  //  const {profilepic,name,content} = props;
    return(
      <>
      <div className="card">
      <img src={props.profilepic} alt="profile"/>
      <div className="container">
      <h1>{props.name}</h1>
      <p>{props.content}</p>
      </div>
      </div>
      </>
    );
  }
  export default Card;