import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from '../router/route';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
