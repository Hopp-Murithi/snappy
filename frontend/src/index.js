import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <GoogleOAuthProvider clientId="1011035964489-82ldg8ik64ee04c8ruiviug59uppqn30.apps.googleusercontent.com" > 
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
    
  </React.StrictMode>
);

