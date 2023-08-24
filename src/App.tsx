import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TourCardsPropsandState } from './component/TourCardsPropsandState';

import "./App.css"
import Eventshandling from './component/Events-Handling/Eventshandling';
import RegisterUser from './component/Forms-Handling/RegisterUser';
import RegisterUserFormik from './component/ReactFormik/RegisterUserFormik';
import ConditionRendering from './component/Condition-Rendering/ConditionRendering';
import ParentCard from './component/Component-Interaction/basics/ParentCard';
import ParentForm from './component/Component-Interaction/intermediate/ParentForm';
import UserManager from './component/Component-Interaction/advanced/components/UserManager';
import UserList from './component/UseEffectHook/pages/UserList';
 const App:React.FC = () => {
  return (
    <>
    <div className="App">
     {/* <BrowserRouter>
     <Routes>
     <Route/>
     </Routes>
     </BrowserRouter> */}

  
     <TourCardsPropsandState/>
     <Eventshandling/>
     <RegisterUser/>
     <RegisterUserFormik/>
     <ConditionRendering/>
     <ParentCard/>
     <ParentForm/>
     <UserManager/>
     <UserList/>
    </div>
    </>
  )
}
export default App;