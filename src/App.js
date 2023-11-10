import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './components/home';
import Result from './components/result';
import Addnew from './components/addnew';
import CustomWebcam from './components/webcam';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
      <Route path='/addnew' element={<Addnew/>}></Route>
      <Route path='/webcam' element={<CustomWebcam/>}></Route>
    </Routes>
  );
}

export default App;
