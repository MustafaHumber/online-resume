import React from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Online Resume</h1>
      <Overview />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
