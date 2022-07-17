import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Navbar from './Components/Navbar';
import FormContainer from './Components/FormContainer';

function App() {
  
  const [personalInformation, setPersonalInformation] = useState({
    name : '',
    title: '',
    photoURL: '',
    address: '',
    phone: '',
    email: '',
    linkedIn: '',
    gitHub: '',
    type: 'personalInformation'
  });

  function handlePersonalInformation(e, targetObject, targetField) {
    setPersonalInformation({...targetObject, [targetField]: e.target.value});
  };

  

  
  return (
    <div className="AppContainer" style={{backgroundColor: 'bisque'}}>
      <Navbar/>
      <div className='content'>
        <FormContainer
          personalInformation={personalInformation}
          handlePersonalInformation={handlePersonalInformation}
        />

        {/* <PreviewContainer className='previewContainer'
        appState={this.state}/> */}

      </div>


    </div>
  );
}

export default App;
