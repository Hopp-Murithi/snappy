import {React} from 'react'
//import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import snappyVid from '../assets/snappy3.mp4'
import logo from '../assets/logo-white.png'

const Login = () => {

  return (
    <div className='flex justify-start items-center flex-col h-screen '>
    <div className='relative w-full h-full'>
<video
  src={snappyVid}
  type= 'video/mp4'
  loop
  controls={false}
  muted
  autoPlay
  className='w-full h-full object-cover'
/>
<div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay '>
<div className='p-5'>
  <img src={logo} width='130px' alt='logo'/>
</div>
<div className='shadow-2x1'>
<GoogleLogin
shape='pill'
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</div>
</div>
    </div>
    </div>
  )
}

export default Login