import React,{useEffect,useRef,useState} from 'react'
import {HiMenu} from 'react-icons/hi'
//import { nanoid } from 'nanoid'
import {AiFillCloseCircle} from 'react-icons/ai'
import {route,link,routes, Link, json, Routes, Route} from 'react-router-dom'
import {Sidebar, UserProfile} from '../components/index'
import { userQuery } from '../utils/data'
import { client } from '../client'
import jwt_decode from 'jwt-decode'
import logo from '../assets/logo-low.png'
import Pins from './pins'

const Home = () => {

const [ToggleSidebar,setToggleSidebar]= useState(false);
const [user,setUser]= useState(" ");
const scrollRef= useRef(null)

const userInfo= jwt_decode(localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear());

useEffect(()=>{
const query = userQuery(userInfo?.sub)

client.fetch(query)
.then((data)=>{ 
  //console.log(data)  
  setUser(data[0]);

})

},[])
useEffect(() => {
scrollRef.current.scrollTo(0,0)  

}, [])


  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
    <div className='hidden md:flex h-screen flex-initial'>
    <Sidebar user={user && user}/>
    </div>
  
    <div className='flex md:hidden flex-row'>
    <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
    <HiMenu fontSize={40} className='cursor-pointer' onClick={()=>{setToggleSidebar(true)}}/>
    <Link to='/'>
<img src={logo} alt='logo' className='w-10'/>
    </Link>
    <Link to={`user-profile/${user?._id}`}>
<img src={user?.image} alt='user' className=' block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover rounded-full h-[50px] w-[50px]'/>
    </Link>
    </div>
    
    {ToggleSidebar && (
      <div className='fixed w-4/5 h-screen bg-white overflow-y-auto shadow-md z-10 animate-slide-in'>
<div className='absolute w-full flex justify-end items-center p-2'>
  <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={()=>{setToggleSidebar(false)}}/>
</div>
<Sidebar user={user && user} closeToggle={setToggleSidebar}/>
      </div>
    )}  
    </div>
   
    <div className='pb-2 h-screen flex-1 overflow-y-scroll' ref={scrollRef}>
      <Routes>
        <Route path='user-profile/:userId' element={<UserProfile/>}/>
        <Route path='/*' element={<Pins user={user && user}/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Home