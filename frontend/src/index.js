import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  
<Router>
<GoogleOAuthProvider clientId="118320632153-8evj6t6uhifq0itaccek70vj6ul7tdoi.apps.googleusercontent.com" > 
   <App />
  </GoogleOAuthProvider>;
  </Router>
  
 
  </React.StrictMode>
);

