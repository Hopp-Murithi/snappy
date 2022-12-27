import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Navbar, CreatePin,Feed,Search,PinDetails} from '../components/index';


const Pins = ({user}) => {
 
  const [searchTerm, setsearchTerm] = useState(' ');

  return (
    <div className='px-2 md:px-5'>
     <div className='bg-gray-50'>
       <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} user={user}/>
     </div>
     <div className='h-full'>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/category/:categoryId' element={<Feed/>}/>
        <Route path='/pin-detail/:pinId' element={<PinDetails user={user}/>}/>
        <Route path='/create-pin' element={<CreatePin user={user}/>}/>
        <Route path='/search' element={<Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>}/>
      </Routes>
     </div>
   
    </div>
  )
}

export default Pins
