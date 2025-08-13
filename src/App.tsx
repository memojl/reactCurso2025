//import React from 'react';
import './App.css';
import { Button } from './components/button/button';
import ListProducts from './components/list-products/ListProducts';

const App = () => {
  const user = {
    username: "Guillermo",
    email: "memojl@email.com",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
    isLoggedIn: true
  };

  const { username, email, imageUrl, imageSize, isLoggedIn } = user;


  if(!isLoggedIn){
    return <p>No ha iniciado sesión</p>
  }

  return (
    <>
      {/*<h1>Hola: {username ? username : 'Anonimo'}</h1>*/}
      {username && <h1>Hola: {username}</h1> }
      <h2>{email}</h2>
      <img
        src={imageUrl}
        alt={`imagen-${username}`}
        width={imageSize}
        style={{
          borderRadius: 50, // border-radius → borderRadius
          backgroundColor: "red", // background-color → backgroundColor
          marginTop: 10, // margin-top → marginTop
        }}
      />
      <Button />
      <br /> <hr /> <br />
      <ListProducts />
    </>
  )
}

export default App