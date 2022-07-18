import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import uniqid from "uniqid"
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
  const [workExperience, setWorkExperience] = useState(
    [
      {
        position: 'Stormtrooper, 2nd Battalion',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        descriptionOfDuties: '',
        key: uniqid(),
        type: 'workExperience',
      },
    ]
  );

  function handleUpdateExperience(e, targetObject, targetField, type) {
    e.preventDefault();

    switch(type) {
      case 'personalInformation': 
        console.log('here!');
        handlePersonalInformation(e, targetObject, targetField);
        break;
      case 'workExperience': 
        handleWorkExperience(e, targetObject, targetField);
        return;
      default:
        console.log('Reached end of handleUpdateExperience switch statement');
    }

    // if(type === 'workExperience') {
    //   handleWorkExperience(e, targetObject, targetField);
    // }
  }

  function handleDeleteExperience(e, targetObject, type){
    e.preventDefault();
    if(type === 'workExperience') {
      deleteWorkExperience(e, targetObject);
    }
  }

  function handleCreateExperience(e, type) {
    e.preventDefault();
    if(type === 'workExperience'){
      createWorkExperience();
    }
  }

  function handlePersonalInformation(e, targetObject, targetField) {
    setPersonalInformation({...targetObject, [targetField]: e.target.value});
  };

  function handleWorkExperience(e, targetObject, targetField) {
    setWorkExperience(workExperience.map(element => {
      if(element === targetObject) {
        return {...targetObject, [targetField]: e.target.value,}
      } else {
        return element;
      }
    }))
  }

  function deleteWorkExperience(e, targetObject) {
    setWorkExperience(workExperience.filter(element => element !== targetObject));
  }

  function createWorkExperience(){
    setWorkExperience([
      ...workExperience,
      {
        position: 'New Work Experience',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        descriptionOfDuties: '',
        key: uniqid(),
        type: 'workExperience',
      }
    ])
  }
  


  
  return (
    <div className="AppContainer" style={{backgroundColor: 'bisque'}}>
      <Navbar/>
      <div className='content'>
        <FormContainer
          personalInformation={personalInformation}
          handleUpdateExperience={handleUpdateExperience}
          handleDeleteExperience={handleDeleteExperience}
          handleCreateExperience={handleCreateExperience}
          workExperience={workExperience}
        />

        {/* <PreviewContainer className='previewContainer'
        appState={this.state}/> */}

      </div>


    </div>
  );
}

export default App;
