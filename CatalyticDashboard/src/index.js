import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { initContract } from './utils'

// import css


window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
      document.getElementById("root")
    )
  })
  .catch(console.error)
