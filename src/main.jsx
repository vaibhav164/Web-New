import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Body = React.createElement('h1', {id:'title'}, 'Hello Vaibhav');
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Body)