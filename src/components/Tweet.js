import React from 'react';
import styled from "styled-components";
const Tweet = ({name, tweet, tweets, setTweets}) => {
    const deleteTweet = () => {
        console.log(tweet.id)
       setTweets(tweets.filter((state) => state.id !== tweet.id ))
    }
    return(
        <TweetStyle>
            <h2>{name}</h2>
            <h3 >{tweet.message}</h3>
            <button onClick= {deleteTweet}>Delete</button>
            <button>Like</button>
      </TweetStyle>

   
    )
};

const TweetStyle = styled.div`
background-color: "red";
border-radius: 3px;
border: 2px solid palevioletred;
`;

export default Tweet;