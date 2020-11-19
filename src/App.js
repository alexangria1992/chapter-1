import React from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = 'Alex';
  const message = "I went to sleep today wow."
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet/>
      <TweetList name={name} message={message}/>

    </div>
  );
}

export default App;
