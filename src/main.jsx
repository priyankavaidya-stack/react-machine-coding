import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
// import ParentContext from './components/ContextAPI/ParentContext';
// import DarkModeContext from './components/ContextAPI/DarkModeContext';
// import App1 from './App1.jsx'
// import Timer from './Timer.jsx';
// import AppProptypes from './AppProptypes.jsx';
// import RefHookUse from './components/RefHookUse';
// import AppLazyLoading from './AppLazyLoading';
// import TernaryOperator from './components/TernaryOperator';
// import AppHighOrder from './AppHighOrder';
// import AppHOC from './AppHOC';
// import UseCallBack from './components/UseCallBack';
// import ReactMemo from './components/ReactMemo';
// import Memo from './components/UseMemo';
// import Memo from './components/Memo';
// import UpdateComponentUsingState from './components/memo/UpdateComponentUsingState';
// import UpdateMemoizedCompUsingContext from './components/memo/UpdateMemoizedCompUsingContext';
// import MyComponent from './components/reducer/MyComponent';
// import ReducerSwitchCase from './components/reducer/ReducerSwitchCase';
// import ReducerToDo from './components/reducer/ReducerToDo';
// import UpdateObjectContext from './components/ContextAPI/UpdateObjectContext';
// import MultipleContext2 from './components/ContextAPI/MultipleContext2';
// import TaskApp from './components/ContextReducerCombine/App';
// import LoginUseState from './components/UseStateForm/LoginUseState';
// import LoginUseReducer from './components/UseStateForm/LoginUseReducer';
// import Counter from './components/useEffect/Counter';
// import Calculate from './components/useEffect/Calculate';
// import Chat from './components/useEffect/ChatRoom';
// import CursorPointer from './components/useEffect/CursorPointer';
// import Animation from './components/useEffect/Animation';
// import Modal from './components/useEffect/Modal';
// import ConvertJSX from './components/JSX/ConvertJSX';

// custom hooks
// import ApiData from './components/customHook/ApiData';
// import Network from './components/customHook/CheckNetwork';
import FormInput from './components/customHook/FormInput';
// import DebounceComponent from './components/customHook/Debounce';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
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
      {/* <AppLazyLoading /> */}

      {/* Conditional rendering --> Ternary operator */}
      {/* <TernaryOperator /> */}

      {/* Higher Order Components */}
      {/* <AppHighOrder /> */}

      {/* Another Proxy props HOC Example */}
      {/* <AppHOC /> */}

      {/* useCallback basic example --- parent child */}
      {/* <UseCallBack /> */}

      {/* use React.Memo, refined version of useCallback() */}
      {/* <ReactMemo /> */}

      {/* useMemo example to render list */}
      {/* <Memo /> */}

      {/* React.memo() example to skip ren-rendering child comp */}
      {/* <Memo /> */}

      {/* Update Component Using State with React.memo */}
      {/* <UpdateComponentUsingState /> */}

      {/* Update Memoized Component Using Context */}
      {/* <UpdateMemoizedCompUsingContext /> */}

      {/* useReducer use example */}
      {/* <MyComponent /> */}

      {/* useReducer with initialState and Switch case */}
      {/* <ReducerSwitchCase /> */}

      {/* TodoList Reducer */}
      {/* <ReducerToDo /> */}

      {/* createContext, useContext, react contextAPI */}
      {/* <ParentContext /> */}

      {/* Context API example of switching dark and light mode */}
      {/* <DarkModeContext /> */}

      {/* To update object through context */}
      {/* <UpdateObjectContext /> */}

      {/* Multiple COntext in App */}
      {/* <MultipleContext2 /> */}

      {/* Combine API context with useReducer */}
      {/* <TaskApp /> */}

      {/* handling form with useState example */}
      {/* <LoginUseState /> */}
      {/* <LoginUseReducer /> */}

      {/* UseEffect hook example */}
        {/* <Counter /> */}
        {/* <Calculate /> */}
        {/* <Chat /> */}
        {/* <CursorPointer /> */}
        {/* <Animation /> */}
        {/* <Modal /> */}
        
      {/* Convert JSX into javascript code */}
      {/* <ConvertJSX /> */}

      {/* Custom hook in react */}
      {/* <ApiData /> */}
      {/* <Network /> */}
      <FormInput />
      {/* <DebounceComponent /> */}

    </React.StrictMode>
  </Router>,
)
