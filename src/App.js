import Nav from "./components/Nav"
import Help from "./components/Help"
import Homepage from "./components/Homepage"
import Programs from "./components/Programs"
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import {Routes, Route, Navigate} from "react-router-dom"
import "./App.css"

function App(){
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="/help"/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/Programs" element={<Programs/>}/>
        <Route path="/FAQs" element={<FAQs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>

  );
}

export default App;
