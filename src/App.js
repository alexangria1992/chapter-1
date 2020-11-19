import React from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = 'Alex';
  const message = "I went to sleep today wow."

  //function 
  const sayHelloHandler = (e) => {
    console.log(e)
  }
  return (
    <div>
      {/* <CreateTweet/>
      <TweetList name={name} message={message}/> */}
      <h1>Hello React</h1>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
