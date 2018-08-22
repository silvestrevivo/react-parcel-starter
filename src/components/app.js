import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => (
  <div className="container">
    <img
      src="https://cdn-images-1.medium.com/max/1600/1*ypTuZbQNEV1oGkAfn85AUA.png"
      alt="logo-react"
    />
    <h1>React Starter</h1>
  </div>
);

export default hot(module)(App);
