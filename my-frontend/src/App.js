

import { Route, Routes } from "react-router-dom";

import Header from './components/Header'; 
import Home from './components/Home';
import Contact from './components/Contact';
import NewTrip from './components/NewTrip';
import Login from "./components/Login";
import Signup from "./components/SignUp";
import PackageDetail from "./components/PackageDetail"
import Footer from './components/Footer';
import AdminMain from '../src/Admin/AdminMain';
import Profile from "./components/Profile";
import PackageDescription from "./components/PackageDescription"
import './App.css';

import './assets/bootstrap/css/bootstrap.min.css'





function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/admin/*" element={<AdminMain />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/new-trip" element={<NewTrip />} />
    
  
    <Route path ="/package-details"element={<PackageDetail/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/packages/:id" element={<PackageDescription/>} />
    
   
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

