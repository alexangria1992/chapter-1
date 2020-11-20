import React, {useState, useEffect} from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';


function App() {

  const [name, setName] = useState("alex") 
  const[textInput, setTextInput] = useState("")
  const [tweets, setTweets] = useState([])
  const message  = "Hello"
  useEffect(()=>{
    console.log('We run a function')
  },[textInput])
  return (
    <div>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList  name={name} tweets={tweets} setTweets={setTweets}/>

    </div>
  );
}

export default App;
