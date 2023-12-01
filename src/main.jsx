import React from 'react'
import ReactDOM from 'react-dom/client'
// import App1 from './App1.jsx'
// import Timer from './Timer.jsx';
import './index.css'
import AppProptypes from './AppProptypes.jsx';
// import RefHookUse from './components/RefHookUse';
import AppLazyLoading from './AppLazyLoading';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* this file for maching coding problem <App />
    after clicking on counter value, as counter increases, fetch will call no of counter value cards to display
    ex: counter = 2, two data cards will print */}
    {/* <App /> */}

    {/* for dropdown problem */}
    {/* we have given api local data of country with few cities of that country array */}
    {/* when you select particular country in dropdown, 
    // another side dropdown should contain selected country's cities in that another dropdown */}
    {/* <App1 /> */}

    {/* Countdown timer, user can enter val and start */}
    {/* <Timer /> */}

    {/* Validation to props example using PropTypes */}
    {/* <AppProptypes /> */}

    {/* Use of ref using useRef() hook example */}
    {/* Stopwatch example */}
    {/* <RefHookUse /> */}

    {/* Lazy loading in react */}
    <AppLazyLoading />
  </React.StrictMode>,
)
