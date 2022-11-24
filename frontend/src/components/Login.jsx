import {React, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script';
import {fcGoogle} from 'react-icons/fc'
import snappyVid from '../assets/snappy.mp4'
import logo from '../assets/logo-white.png'

const Login = () => {

  const clientId = process.env.CLIENTID;

useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
});
const onSuccess = (res) => {
  console.log('success:', res);
};
const onFailure = (err) => {
  console.log('failed:', err);
}
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

          clientId={clientId}
          className='bg-mainColor flex  justify-center items-center rounded-lg p-3 cursor-pointer '
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
/>

</div>

</div>
    </div>
    </div>
  )
}

export default Login