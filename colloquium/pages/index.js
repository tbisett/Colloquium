import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();

  const onSubmit= (e) => {
    e.preventDefault();

    username.length === 0 || secret.length === 0 ? <Redirect to="/" /> : 
    axios.put('https://api.chatengine.io/users/',
    {username : username, secret : secret},
    {headers: {"Private-key" : "3c300f45-2f9b-4b31-ae5c-49db95a33b87"}}
    )
    .then(response => router.push('chats'))
  }
  
  return (
    <div className="background">
      <div className='auth-container'>
        <form className='auth-form' onSubmit= {(e) => onSubmit(e)}>
          <div className='auth-title'>
            Colloquium
          </div>
          
          <div className='input-container'>
            <input 
            placeholder="Email" 
            className="text-input"
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className='input-container'>
            <input 
            type= "password"
            placeholder="Password" 
            className="text-input"
            onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        
        </form>
      </div>
    </div>
  )
}