import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import './styles/style_main.scss';
// import './styles/style_anim_projectArrow.scss';
// import './styles/style_anim_checkboxes.scss';
// import './styles/style_mobile.scss'

// import { Controller } from './scripts/Controller';


// const app = new Controller();
// //