import{ BrowserRouter , Routes , Route } from 'react-router-dom' ;
import React from 'react' ;
import Home from './pages/home' ;
import About from './pages/about' ;
import Signin from './pages/Signin' ;
import Signup from './pages/signup' ;
import Profile from './pages/profile' ;
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  ;
}
