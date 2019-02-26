import React from 'react';
import Joke from './Joke';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Brittany's Jokes of the Day!</h1>
      <Joke question="What do you call a dinosaur that is sleeping?" punchLine="A dino-snore!" />
      <Joke question="What has ears but cannot hear?" punchLine="A cornfield!" />  
      <Joke question="Why did the teddy bear say no to dessert?" punchLine="Because she was stuffed!" />  
      <Joke question="What is brown, hairy, and wears sunglasses?" punchLine="A coconut on vacation!" /> 
      <Joke question="How do you make a lemon drop?" punchLine="Just let if fall!" />     
    </div>
  )
}
export default App;
